import http from 'http';
import Server from './app';

const server = http.Server(Server);
server.listen(3333, () => console.log(`Server ouvindo a porta -> 3333`));
