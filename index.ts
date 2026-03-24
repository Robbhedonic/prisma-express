import express from 'express';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});

app.get('/userLanguages', async (req, res) => {
    try{
        const users = await prisma.userLanguage.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({error: "Error fetching users"});
    }

});