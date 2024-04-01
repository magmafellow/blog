import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { Pool } from 'pg';

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'blog',
    password: 'win7&',
    port: 5432,
})

async function getUser(email: string) {
  try {
    const user = await pool.query('SELECT * FROM users WHERE email=$1', [email])
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z.object({ email_field: z.string().email(), password_field: z.string().min(5) })
          .safeParse(credentials);
        console.log({ credentials} )
        console.log(parsedCredentials)
        if (parsedCredentials.success) {
          const { email_field, password_field } = parsedCredentials.data;
          const user = await getUser(email_field);
          if (!user) return null;

          const passwordsMatch = user.password === password_field;
          if(passwordsMatch) {
            return user;
          }
        }
        console.log('Invalid credentials. _(from auth.ts)')
        return null;
      },
    }),
  ],
});