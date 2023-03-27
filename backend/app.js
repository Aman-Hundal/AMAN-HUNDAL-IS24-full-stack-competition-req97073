const express = require("express");
const webappsRoute = require("./routes/webapps-route");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const PORT = 3000;

//Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//Routes
app.use("/api/webapps", webappsRoute);
app.get("/api", (req, res) => {
  res.status(200).send("Healthy API and Component");
});

//Start up server
app.listen(PORT, () => {
  console.log(`IMB WebApps API started.`);
});
