import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials, _req) => {
                try {
                    if (credentials?.email === "test@t.com", credentials?.password === "12345") {
                        return {
                            id: "1",
                            email: "test@t.com",
                            name: "test name",
                            token: "dshkfjahgluhfbsknbfsjkdhfiusgi"
                        };
                    }

                    return null;
                } catch (e: any) {
                    return null;
                }
            }
        }),
    ],
});