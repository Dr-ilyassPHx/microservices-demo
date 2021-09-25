const app = require('express')();


app.get("/", (req, res) => res.send("test"));
app.listen(8080, () => console.log("listening on 8080 ..."));