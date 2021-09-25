const app = require('express')();
const appid = process.env.APPID

app.get("/", (req, res) => res.send(`appid: ${appid} test /`));

app.get("/app1", (req, res) => res.send(`appid: ${appid} test app1`));

app.get("/app2", (req, res) => res.send(`appid: ${appid} test app2`));

app.get("/app3", (req, res) => res.send(`appid: ${appid} test app3`));

app.listen(appid, () => console.log(`listening on ${appid} ...`));