 const express = require('express');
 const app = express();


 app.use( "/user" , (req , res) => {
    res.send ( "hello babu");
 });

 app.listen(7777 , (
   console.log( "server is running on port 7777")
 ));