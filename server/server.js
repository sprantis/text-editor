// GIVEN a text editor web application


// WHEN I use next-gen JavaScript in my application
// THEN I find that the text editor still functions in the browser without errors

// WHEN I enter content and subsequently click off of the DOM window
// THEN I find that the content in the text editor has been saved with IndexedDB

// WHEN I load my web application
// THEN I should have a registered service worker using workbox

// WHEN I register a service worker
// THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets

// WHEN I deploy to Heroku
// THEN I should have proper build scripts for a webpack application

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
