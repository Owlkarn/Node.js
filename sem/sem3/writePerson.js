const fs = require("fs");
const path = require("path");
const person = {
    name: "Ivan",
    surname : "Ivanov",
    age : 30,
    city : "Moscow"
}
const pathToFile = path.join(__dirname, "person.json");

const personJson = JSON.stringify(person, null, 1);
console.log(personJson);

fs.writeFileSync(pathToFile, personJson);