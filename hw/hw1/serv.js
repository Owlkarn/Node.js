const http = require('http');
let countMain = 0;
let countAbout = 0;
const server = http.createServer((req, res) => {
    console.log('Request get');
    if (req.url === '/') {
        countMain++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(`<h1>Корневая страница</h1> <p>Просмотров: ${countMain}</p> <a href="http://localhost:3000/about">Ссылка на страницу /about</a>`);
    } else if (req.url === '/about') {
        countAbout++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(`<h1>Страница about</h1> <p>Просмотров: ${countAbout}</p> <a href="http://localhost:3000/">Ссылка на страницу /</a>`);
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html; charset=UTF-8',
        });
        res.end('<h1>Page not found</h1>')
    }

});
const port = 3000;
server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});