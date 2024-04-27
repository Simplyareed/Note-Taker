const express = require('express');
const html_routes = require('./Develop/Routes/html-routes');
const api_routes = require('./Develop/Routes/api-routes');
const PORT = process.env.PORT || 3001;
// dynamically set the port
const app = express();

// Express middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("Develop/public"));
app.use(html_routes)
app.use(api_routes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});