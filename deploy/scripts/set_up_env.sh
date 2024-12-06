set -e

rm -f .env

touch .env

echo CI_REGISTRY_USER=$CI_REGISTRY_USER >> .env
echo CI_REGISTRY_PASSWOR=$CI_REGISTRY_PASSWOR >> .env
echo CI_REGISTRY=$CI_REGISTRY >> .env
echo CI_DEPLOY_IMAGE=$CI_DEPLOY_IMAGE >> .env

echo $CI_ENV_VARS | base64 -d >> .env