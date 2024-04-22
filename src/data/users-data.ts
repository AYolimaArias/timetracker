import { query } from "../db";
import { User } from "../models/user";

//GET
export async function indexUsers(): Promise<User[]> {
  const result = await query("SELECT * FROM users");
  return result.rows;
}

//GET ID

export async function getDataById(id: string): Promise<User[]> {
  const result = await query("SELECT * FROM users WHERE id=$1", [id]);
  return result.rows;
}

//POST
export async function postUsers(user: User): Promise<User[]> {
  if (!user) {
    throw new Error("Request body is null");
  }
  const { name, email, role, rate } = user;
  const result = await query(
    "INSERT INTO users(name, email, role, rate) VALUES ($1,$2,$3,$4)",
    [name, email, role, String(rate)]
  );
  return result.rows[0];
}

//DELETE
export async function deleteUsers(id: string): Promise<User[]> {
  const result = await query("DELETE FROM users WHERE id=$1", [id]);
  return result.rows;
}

//PUT

export async function putUsers(user: User): Promise<User[]> {
  const { name, email, role, rate, id } = user;
  const result = await query(
    "UPDATE users SET name=$1, email=$2, role=$3, rate=$4 WHERE id=$5 RETURNING *",
    [name, email, role, String(rate), String(id)]
  );
  return result.rows[0];
}
