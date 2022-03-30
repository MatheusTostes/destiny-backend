const express = require("express");

const server = express();

server.use(express.json());

const cursos = ["backend", "frontend", "dba", "bi"];

server.get("/cursos/:index", (req, res) => {
  const { index } = req.params;

  return res.json(cursos[index]);
});

server.get("/cursos/", (req, res) => {

  return res.json(cursos);
});

server.put("/cursos/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);

  return res.json(cursos);
});

// server.listen(3010);


const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));