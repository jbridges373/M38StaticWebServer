const express = require("express"); //importing entire express library
const app = express(); //creating our app object, that houses our server instructions
const port = process.env.PORT || 5001;

app.use("/static", express.static("public")); //telling app to use the public folder, when a request is made to /static

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
//listening on local host:5001 for request to our webserver
