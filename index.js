const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const jwt = require("jsonwebtoken");

app.use(bodyParser.json());
app.use(cors());
const PORT = 8888;

app.get("/time", (req, res) => {
	const time = (new Date()).toLocaleTimeString();
	res.status(200).send(`The time is ${time}`);
});

app.get("*", (req, res) => {
	res.sendStatus(404);
});

app.listen(PORT, () => {
	console.log(`Server in running on port ${PORT}.`);
});

app.post("/login", (req, res) => {
	if (!req.body.username || !req.body.password) {
		res.status(400).send("Error. Need username and password");
		return;
	}
	const user = users.find((u) => {
		return u.username === req.body.username && u.password === req.body.password;
	});
	if (!user) {
		res.status(404).send("User not found or password incorrect.");
		return;
	}
	const token = jwt.sign({
		sub: user.id,
		username: user.username
	}, "mykey", {expiresIn: "3 hours"});
	res.status(200).send({access_token: token});
});

// issue JWTs
const users = [
	{id: 1, username: "hughjackman", password: "claws"},
	{id: 2, username: "spiderman", password: "web"}
];


