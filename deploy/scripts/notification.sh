if [ $BUILD_FAIL == false ]; then
   echo "🟢 success" 
   curl -X POST -H 'Content-type: application/json' --data '{"text":"🟢 Deploy success"}' https://hooks.slack.com/services/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    
else
   echo "🔴 fail"  
   curl -X POST -H 'Content-type: application/json' --data '{"text":"🔴 Deploy fail"}' https://hooks.slack.com/services/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  
fi