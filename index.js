import app from './new_app';
// import app from './app';
// import {mongooseApp}from './http-servers/mongooseServer';

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));
// mongooseApp.listen(port, () => console.log(`Listening on ${port}`));
