const axios = require('axios');

require('dotenv').config();
const rapidapiKey1=process.env.JS_APP_RAPIDAPI_KEY1;
const rapidapiKey2=process.env.JS_APP_RAPIDAPI_KEY2;
const rapidapiHost=process.env.JS_APP_RAPIDAPI_HOST;
const streamUrl=process.env.JS_APP_STREAM_URL;



exports.utubeApi=(req,res)=>{
   

  var youtubeId = req.params.id;

  getYoutubeUrlInfo();
  
  

 async function getYoutubeUrlInfo(){

    let options = {
        method: 'GET',
        url: streamUrl,
        params: {id: youtubeId},
        headers: {
          'X-RapidAPI-Key': rapidapiKey1,
          'X-RapidAPI-Host': rapidapiHost
        }
      };
      
      try{
          var response = await axios.request(options);
          res.status(200).json({
            success: true,
            data: response.data,
          });

      } catch (error) {
         
           try{
                options.headers['X-RapidAPI-Key']=rapidapiKey2;
                response = await axios.request(options);
                res.status(200).json({
                    success: true,
                    data: response.data,
                  });


             } catch (error) {
               console.error(error);
             }
      }

   }

}

