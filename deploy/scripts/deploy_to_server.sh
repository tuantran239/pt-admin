CI_DEPLOY_USER="${CI_DEPLOY_USER:-root}"
CI_DEPLOY_SSH_PORT="${CI_DEPLOY_SSH_PORT:-22}"
CI_DEPLOY_HOST="$CI_DEPLOY_USER@$CI_DEPLOY_SERVER"

scp -o StrictHostKeyChecking=no -r -P $CI_DEPLOY_SSH_PORT \
  ./.env \
  ./docker-compose.staging.yml \
  $CI_DEPLOY_HOST:/usr/app/admin

ssh -o StrictHostKeyChecking=no -p $CI_DEPLOY_SSH_PORT $CI_DEPLOY_HOST << 'EOF'
 set -e

 cd /usr/app/admin

 export $(grep -v '^#' .env | xargs)

 echo "$CI_REGISTRY_PASSWORD" | sudo docker login -u $CI_REGISTRY_USER --password-stdin $CI_REGISTRY

 docker compose -f docker-compose.staging.yml down

 if docker image inspect "$CI_DEPLOY_IMAGE" > /dev/null; then
    docker rmi $CI_DEPLOY_IMAGE
 else
    echo "Image '$CI_DEPLOY_IMAGE' does not exist."
 fi

 docker compose -f docker-compose.staging.yml up -d --build 
EOF