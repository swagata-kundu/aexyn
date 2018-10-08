import Server from './common/server';

export default new Server()
    .configureDb()
    .configureRoutes()
    .handleError()
    .listen();