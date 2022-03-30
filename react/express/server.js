const express = require("express");
const app = express();
const port = 8000;
var faker = require('./node_modules/faker');


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const createUser = () => {
    const newFake = {
        id: faker.random.uuid(),
        firtname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        phonenumber: faker.phone.phoneNumber(),
        password: faker.internet.password(),
    };
    return newFake;
};



app.get("/api/Users/new", (req, res) => {
    const newFakeUser= createUser();
    res.json({ newFakeUser });
});


const createCompany = () => {
    const newFake = {
        id: faker.random.uuid(),
        name: faker.company.companyName(),
        address: faker.address.streetName(),
    };
    return newFake;
};

app.get("/api/Company/new", (req, res) => {
    const newFakeCompany= createCompany();
    res.json({ newFakeCompany });
});

app.get("/api/users/company/", (req, res) => {
    const newFakeCompany= createCompany();
    const newFakeUser= createUser();
    res.json({ newFakeCompany , newFakeUser});
    
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );