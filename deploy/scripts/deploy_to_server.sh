CI_DEPLOY_USER="${CI_DEPLOY_USER:-root}"
CI_DEPLOY_SSH_PORT="${CI_DEPLOY_SSH_PORT:-22}"
CI_DEPLOY_HOST="$CI_DEPLOY_USER@$CI_DEPLOY_SERVER"

scp -o StrictHostKeyChecking=no -r -P $CI_DEPLOY_SSH_PORT \
  ./docker-compose.production.yml \
  $CI_DEPLOY_HOST:/usr/app/admin

ssh -o StrictHostKeyChecking=no -p $CI_DEPLOY_SSH_PORT $CI_DEPLOY_HOST << 'EOF'
 cd /usr/app/admin

 echo "$CI_REGISTRY_PASSWORD" | sudo docker login -u $CI_REGISTRY_USER --password-stdin $CI_REGISTRY

 CI_DEPLOY_IMAGE="$CI_DEPLOY_IMAGE"

 docker compose -f docker-compose.staging.yml down

 docker compose -f docker-compose.staging.yml up -d --build 
EOF