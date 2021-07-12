import { compare } from "bcrypt";

export const verifyPassword = async (password, dbPassword) => {
    try {
        const isValid = await compare(password, dbPassword);
        return isValid;
    } catch (error) {
        throw new Error(error);
    }
}