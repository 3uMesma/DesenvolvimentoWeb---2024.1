require("dotenv").config();
const client = require("./data/data_base");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const materialRoutes = require("./routes/materialRoutes");
const loginRoutes = require("./routes/loginRoutes");

const app = express();

// Middleware setup
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/", userRoutes);
app.use("/", eventRoutes);
app.use("/", materialRoutes);
app.use("/", loginRoutes);

// iniciar servidor e conectar banco de dados
const PORT = process.env.BACK_PORT || 3333;

client
  .connect()
  .then(() => {
    console.log("Conexão bem-sucedida com o banco de dados");
    // Inicia o servidor após a conexão com o banco de dados
    app.listen(PORT, () => {
      console.log("Servidor rodando na porta 3000");
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados", err);
  });
