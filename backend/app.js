const express = require("express");
const webappsRoute = require("./routes/webapps-route");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

//Swagger API Implementation/Configuration
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "IMB WebApps API",
      version: "1.0.0",
      description:
        "Web Application API that tracks and manages Web Applications developed by the BC Government Ministry of Citizens' Services Information Management Branch (IMB)",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const swaggerSpecs = swaggerJSDoc(options);

// Create server via express
const app = express();

//Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

//Routes
app.use("/api/webapps", webappsRoute);
app.use("/api/webapps", webappsRoute);
app.get("/api", (req, res) => {
  res.status(200).send("Welcome to IMB Web Apps API");
});

//Start up server
app.listen(PORT, () => {
  console.log(`IMB WebApps API started.`);
});
