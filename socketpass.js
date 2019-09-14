const net = require('net');
const LISTEN_PORT = 8006;
const REMOTE_PORT = 8080;
const REMOTE_ADDRESS = '192.168.0.14';

const server = net.createServer(socket=>{
	const client = net.createConnection(REMOTE_PORT,REMOTE_ADDRESS);
	client.on('data',data=>socket.write(data));
	socket.on('data',data=>client.write(data));
});

server.listen(LISTEN_PORT,()=>{
	console.log(`Listening on port ${LISTEN_PORT}.`);
});
