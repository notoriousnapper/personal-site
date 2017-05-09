var express = require("express");
var app     = express();
var path    = require("path");

app.use("/public", express.static(path.join(__dirname, 'public'))); // Serve static files
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/resume', function(req, res){
  console.log("Resume downloaded");
  var filename = "Resume-May-2017.pdf";
  // var filename = req.originalUrl.replace(pattern , ""); // Rid of %20
  // Need regex, or only replaces first
  console.log("parse url" + filename);
  console.log(filename);
  var file = __dirname + '/uploads/' + filename;
  res.download(file); // Set disposition and send it.
});

app.listen(process.env.PORT || 3000);
//     console.log('Server running on some port...');
// });3000);
console.log("Running at Port 3000");
