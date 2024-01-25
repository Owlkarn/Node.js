const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const data = req.body;

    // Пример обработки данных и записи в файл Word (дополните собственной логикой)
    const wordFilePath = path.join(__dirname, 'output.docx');
    fs.writeFileSync(wordFilePath, `Вид нарушения: ${data.kind}\nФИО: ${data.fio}\n...`);

    // Пример обработки данных и записи в файл Excel (дополните собственной логикой)
    const excelFilePath = path.join(__dirname, 'output.xlsx');
    fs.writeFileSync(excelFilePath, 'Данные в Excel');

    res.send('Данные успешно отправлены и обработаны');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});