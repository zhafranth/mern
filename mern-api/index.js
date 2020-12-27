const express = require("express");

const app = express();
app.use(() => {
  console.log("hello server...");
  console.log("Telaso");
  console.log("anjim");
});
app.listen(4000);
