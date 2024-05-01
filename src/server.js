const Hapi = require('@hapi/hapi');
const routes = require('./routes');
 
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);
 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init(); 



//LINK APLIKASI NOTES APP

// http://notesapp-v1.dicodingacademy.com/

// RUN SERVER UZA nodemon ./src/server.js