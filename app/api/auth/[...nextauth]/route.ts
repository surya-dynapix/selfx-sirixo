import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Hardcoded admin for V1 (as approved)
        if (credentials?.email === "admin@selfx.com" && credentials?.password === "admin123") {
          return { id: "1", name: "Admin", email: "admin@selfx.com" };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "default-secret-for-dev",
});

export { handler as GET, handler as POST };
