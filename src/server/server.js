const express = require("express")

const app = express();

app.use(express.static("./"))

app.listen("2003", () => {
  console.log("启动服务器2003");
})