import { unstable_noStore as noStore } from "next/cache";
import { Pool } from "pg";

const pool = new Pool({
  database: "blog",
  port: 5432,
  user: "postgres",
  password: "mac7&",
  host: "localhost",
}); 

export async function getAllPosts() {
  noStore(); // disable caching
  console.log('All posts are got')
  try {
    // 1s test delay
    await new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), 1000)
    })
    const res = await pool.query('SELECT * FROM post;');
    return res.rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getPost(id: string) {
  try {
    // 1s delay
    await new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), 1000)
    })
    const res = await pool.query('SELECT * FROM post WHERE id = $1', [id])
    return res.rows[0]
  } catch (error) {
    console.log(error);
    throw error
  }
}
