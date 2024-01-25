const http = require('express');
const express = require("express");
const fs = require("fs");
const app = express();
let countMain = 0;
let countAbout = 0;

app.get("/", (req, res) => {
    readDataFromFile("main.txt", (readErr, data) => {
        if (readErr) {
            if (readErr.code === 'ENOENT') {
                writeDataInFile("main.txt", countMain);
            } else {
                console.error('Ошибка чтения файла:', readErr.message);
            }
        } else {
            countMain = parseInt(data.trim(), 10);

            if (isNaN(countMain)) {
                console.log('Данные в файле не представляют собой число');
            }
        }
        countMain++;
        res.send(`<h1>Корневая страница</h1> <p>Просмотров: ${countMain}</p> <a href="http://localhost:3000/about">Ссылка на страницу /about</a>`);
        writeDataInFile("main.txt", countMain);
    });

});

app.get("/about", (req, res) => {
    readDataFromFile("about.txt", (readErr, data) => {
        if (readErr) {
            if (readErr.code === 'ENOENT') {
                writeDataInFile("about.txt", countAbout);
            } else {
                console.error('Ошибка чтения файла:', readErr.message);
            }
        } else {
            countAbout = parseInt(data.trim(), 10);

            if (isNaN(countAbout)) {
                console.log('Данные в файле не представляют собой число');
            }
        }
        countAbout++;
        res.send(`<h1>Страница about</h1> <p>Просмотров: ${countAbout}</p> <a href="http://localhost:3000/">Ссылка на страницу /</a>`);
        writeDataInFile("about.txt", countAbout);
    });

});

const port = 3000;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});

function readDataFromFile(name, callback) {
    fs.readFile(name, "utf-8", (err, data) => {
        callback(err, data);
    });
}
function writeDataInFile(name, data) {
    fs.writeFile(name, data.toString(), "utf-8", (writeErr) => {
        if (writeErr) {
            console.log('Ошибка при записи в файл:', writeErr.message);
        } else {
            console.log('Данные успешно записаны в файл');
        }
    })
}