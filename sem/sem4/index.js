const fs = require('fs');
const path = require('path');
const express = require('express');
const Joi = require('joi');
const app = express();
const pathDb = path.join(__dirname, 'users.json');
let uniqueId = 1;
const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    age: Joi.number().integer().required(),
    city: Joi.string()
});
app.use(express.json());


app.get('/users', (req, res) => {
    res.send(fs.readFileSync(pathDb));
});

app.get('/users/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(pathDb));
    const user = users.find((user) => user.id === Number(req.params.id));

    if (user) {
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.post('/users', (req, res) => {
    uniqueId +=1;
    const users = JSON.parse(fs.readFileSync(pathDb));

    users.push({
        id: uniqueId,
        ...req.body
    });

    fs.writeFileSync(pathDb, JSON.stringify(users, null, 2));

    res.send({
        id: uniqueId,
    });
});

app.put('/users/:id', (req, res) => {
    const result = schema.validate(req.body);

    if (result.error) {
        return res.status(404).send({error: result.error.details});
    }
    const users = JSON.parse(fs.readFileSync(pathDb));
    const user = users.find((user) => user.id === Number(req.params.id));

    if (user) {
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.age = req.body.age;
        user.city = req.body.city;

        fs.writeFileSync(pathDb, JSON.stringify(users, null, 2));

        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.delete('/users/:id',(req, res) => {
    const users = JSON.parse(fs.readFileSync(pathDb));
    const user = users.find((user) => user.id === Number(req.params.id));

    if (user) {
        const userIndex = users.indexOf(user);
        users.splice(userIndex, 1);

        fs.writeFileSync(pathDb, JSON.stringify(users, null, 2));

        res.send({ user });
    }else {
        res.status(404);
        res.send({ article: null });
    }
});

app.listen(3000);