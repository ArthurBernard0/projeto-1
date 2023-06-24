import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const createUsers = (req, res) => {

        const { nome, telefone, email, dataNascimento } = req.body;
      
        const q = "INSERT INTO usuarios (nome, telefone, email, data_nascimento) VALUES (?, ?, ?, ?)";
        const values = [nome, telefone, email, dataNascimento];
      
        db.query(q, values, (err, result) => {
          if (err) {
            return res.status(500).json({ error: err.message });
          }
      
          return res.status(201).json({ message: "Usuário cadastrado" });
        });
      };

export const updateUsers = (req, res) => {

        const { id } = req.params;
        const { nome, telefone, email, dataNascimento } = req.body;
      
        const q = "UPDATE usuarios SET nome = ?, telefone = ?, email = ?, data_nascimento = ? WHERE id = ?";
        const values = [nome, telefone, email, dataNascimento, id];
      
        db.query(q, values, (err, result) => {
          if (err) {
            return res.status(500).json({ error: err.message });
          }
      
          if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Usuário não encontrado" });
          }
      
          return res.status(200).json({ message: "Usuário atualizado" });
        });
      };

export const deleteUsers = (req, res) => {
  
        const { id } = req.params;
      
        const q = "DELETE FROM usuarios WHERE id = ?";
        const values = [id];
      
        db.query(q, values, (err, result) => {
          if (err) {
            return res.status(500).json({ error: err.message });
          }
      
          if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Usuário não encontrado" });
          }
      
          return res.status(200).json({ message: "Usuário excluído" });
        });
      };
      
