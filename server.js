// require express
let express = require('express');
// require path module
let path = require('path');
// create the express app
let app = express();

let session = require('express-session');
// require body-parser to receive post data from clients
let bodyParser = require('body-parser');
// to use body parser
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());

// define and set Angular's dist folder directory as static folder
app.use(express.static(path.join(__dirname, '/public/dist')));

app.use(session({secret: "thisissupersecret"}))
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.all("*", (req,res,next) => {
	res.sendfile(path.resolve("./public/dist/index.html"))
});

// setting server to listen on port 6789
app.listen(6789, () => {
    console.log("listening on port 6789");
})