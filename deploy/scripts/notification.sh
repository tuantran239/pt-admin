if [ $BUILD_FAIL == false ]; then
   echo "🟢 success" 
   curl -X POST -H 'Content-type: application/json' --data '{"text":"🟢 Deploy Refind Admin to Digital Ocean success"}' $SLACK_WEBHOOK    
else
   echo "🔴 fail"  
   curl -X POST -H 'Content-type: application/json' --data '{"text":"🔴 Deploy Refind Admin to Digital Ocean failed"}' $SLACK_WEBHOOK  
fi