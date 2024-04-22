import {
  deleteUsers,
  getDataById,
  indexUsers,
  postUsers,
  putUsers,
} from "../data/users-data";
import { User } from "../models/user";

//GET
export async function getUsers() {
  //lógica del negocio: es como el WHERE, lo que quiero que me devuelva
  //validaciones
  //oredenamiento
  const users = await indexUsers();
  //   users.sort((a, b) => b.id - a.id); // asi ordeno de forma descendente por id
  return users;
}
//GET ID
export async function getUsersById(id: string) {
  const users = await getDataById(id);
  return users;
}
//POST
export async function postUser(user: User) {
  const users = await postUsers(user);
  return users;
}

//DELETE
export async function deleteUser(id: string) {
  const users = await deleteUsers(id);
  return users;
}

//PUT
export async function putUser(user: User) {
  const users = await putUsers(user);
  return users;
}
