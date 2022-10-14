async function  checkAddblock(){
    try{
   await fetch(
       "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
       { method: "HEAD", mode: "no-cors" }
       );
       return 0;
           }
           catch(e){
               return 1;
           }
          
       
      
   
       }
       export default checkAddblock;