//Note: Starter code for getting the server set up using express.js
const express = require("express");
const cors = require('cors');
const app = express();

const htmlRoutes = require("./routes/htmlRoutes/index");
const apiRoutes = require("./routes/apiRoutes/index");

const PORT = process.env.PORT || 3001;

//Note: parse the url encoded bodies (sent by html forms)
app.use(express.urlencoded({
    extended: true
}));
//Note: parse JSON bodies (sent by API clients)
app.use(express.json());

//Note: Middleware (static files from 'public directory)
app.use(express.static("public"));

//Note: Defining html and api routes
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.use(cors());
//Note: Starting the express server (listen for incoming http requests through this port)
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});