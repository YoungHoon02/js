const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {

    try {
    const data = await fs.readFile('./server2.html');

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(data);

    } catch (err) {
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
});

const server2 = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello, Node!</h1>');
    res.write('<p>Hello, World!</p>');
    res.end('<p>Hello, Server!</p>');
});


server.listen(8080);
server2.listen(8081);

server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중입니다!');
});

server.on('error', (error) => {
    console.error(error);
});

server2.on('listening', () => {
    console.log('8081번 포트에서 서버 대기 중입니다!');
});

server2.on('error', (error) => {
    console.error(error);
});
