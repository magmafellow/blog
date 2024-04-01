import { Pool } from "pg";
import { posts } from "@/app/lib/placeholder";

async function createDB() {
  const pool = new Pool({
    database: "postgres",
    port: 5432,
    user: "postgres",
    password: "win7&",
    host: "localhost",
  });
  console.log("---> Starting creating the blog DB...");
  try {
    await pool.query("CREATE DATABASE IF NOT EXIST blog;");
  } catch (error) {
    console.log("Error occured in createDB()", error);
    throw error;
  }

  console.log("<--- Finished creating the blog DB.");
}

async function createTables() {
  const pool = new Pool({
    database: "blog",
    port: 5432,
    user: "postgres",
    password: "win7&",
    host: "localhost",
  });

  console.log("---> Starting creating tables...");
  try {
    await pool.query(
      "CREATE TABLE IF NOT EXISTS post (id SERIAL PRIMARY KEY NOT NULL, title VARCHAR(30), text_content TEXT NOT NULL);"
    );
  } catch (error) {
    console.log("Error occured in createTables()", error);
    throw error;
  }

  console.log("<--- Finished creating tables.");
}

async function fillPosts() {
  const pool = new Pool({
    database: "blog",
    port: 5432,
    user: "postgres",
    password: "win7&",
    host: "localhost",
  });

  console.log("---> Starting seeding data...");
  try {
    for (let step = 0; step < 3; step++) {
      pool.query("INSERT INTO post (title, text_content) VALUES ($1, $2)", [
        posts[step].title,
        posts[step].text_content,
      ]);
    }
  } catch (error) {
    console.log("Error occured in fillPosts()", error);
    throw error;
  }
  console.log("<--- Finished seeding data.");
}

async function main() {
  console.log("=== Start seeding ===");
  // await createDB();
  await createTables();
  await fillPosts();
  console.log("=== Seeding has been processed successfuly! ===");
}

main();

export default 'seed file';
