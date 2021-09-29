const express = require("express");
const bodyParser = require("body-parser");
const expressjwt = require("express-jwt");

const app = express();
//const PORT = process.env.API_PORT || 8888;
const PORT = 5555;
const jwtCheck = expressjwt({
	secret: "mykey",
	algorithms: ['HS256']
});

app.use(bodyParser.json());


app.get("/asset/secret", jwtCheck, (req, res) => {
        res.status(200).send("For authorized users");
});

app.get("/asset", (req, res) => {
        res.status(200).send("Everybody can see this");
});

app.get("*", (req, res) => {
	res.status(404).send("Route not defined");
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

