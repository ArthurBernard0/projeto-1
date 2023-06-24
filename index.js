import express from 'express';
import { getUsers, createUsers, updateUsers, deleteUsers } from './controllers/user';

const app = express();

app.use(express.json());

app.get("/", getUsers);
app.post("/", createUsers);
app.put("/", updateUsers);
app.delete("/", deleteUsers);

app.listen(8800, () => {
  console.log('Server is running on port 8800');
});
