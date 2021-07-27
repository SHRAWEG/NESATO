import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { connectToDatabase } from "../../../utils/mongodb";
import { verifyPassword } from "../../../hooks/verifyPassword";

const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Providers.Discord({
            clientId: process.env.DISCORD_ID,
            clientSecret: process.env.DISCORD_SECRET
            
        }),
        Providers.Credentials ({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" },
            },
            async authorize(credentials) {
                //Connecting to database 
                const { db } = await connectToDatabase();

                //collecting user data from database
                const collection = await db.collection('users');
                const users = await collection.findOne({email: { $regex: "^" + credentials.email + "$", $options: "i" }});

                //checking and authtenticating the user
                if (!users) {
                    throw new Error("Wait do I know you? I dont seem to recognize that email. DANG!")
                } else { 
                    const isValid =  await verifyPassword(credentials.password, users.password);

                    if (!isValid) throw new Error("Password doest not match")

                    return users;
                }
            }
        }),
    ],
    pages: {
        signIn: "../../signin"
    },
    session: {
        jwt: true,
    }
}

export default (req,res) => NextAuth(req,res, options)