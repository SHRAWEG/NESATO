import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { connectToDatabase } from "../../../util/mongodb";
import { verifyPassword } from "../../../lib/auth/verifyPassword";

const options = {
    providers: [
        Providers.Credentials ({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" },
            },
            async authorize(credentials) {
                //Connecting to database 
                const { db } = await connectToDatabase();
                const collection = await db.collection('usersprofile');

                const users = await collection.findOne({email: { $regex: "^" + credentials.email + "$", $options: "i" }});

                const isValid =  await verifyPassword(credentials.password, users.password); 

                if (!users) {
                throw new Error("No user found")
                }

                else { 
                    if (!isValid) throw new Error("Password is not valid");
                    
                    return users;
                }
            }
        }),
    ],
    session: {
        jwt: true,
    }
}

export default (req,res) => NextAuth(req,res, options)