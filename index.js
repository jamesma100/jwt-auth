const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
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
	const user = req.body.username;
	res.status(200).send(`User's name is ${user}`);
});


