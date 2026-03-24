import express from 'express';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get('/userlanguages', async (req, res) => {
    try{
        const users = await prisma.userLanguage.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({error: "Error fetching users"});
    }

});

app.get('/userlanguages/:language', async (req, res) => {
    try {
        const { language } = req.params;
        const users = await prisma.userLanguage.findMany({
            where: {
                languages: {
                    has: language,
                },
            },
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Error fetching users by language" });
    }
})

app.post('/userlanguages', async (req, res) => {
    try {
        const { name, email, languages, age} = req.body;
        const user = await prisma.userLanguage.create({
            data: { 
                name,
                email,
                languages,
                age, 
            },
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: "Error creating user"});
    }
});

app.put('/userlanguages/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const { languages } = req.body;
        const user = await prisma.userLanguage.update({
            where: { email },
            data: { languages },
        });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: "Error updating user"});
    }
});

app.delete('/userlanguages', async (req, res) => {
  try {
    const deleted = await prisma.userLanguage.deleteMany({
      where: {
        age: {
          lt: 18,
        },
      },
    });
    res.json({ message: `${deleted.count} users under 18 have been deleted` });
  } catch (error) {
    res.status(500).json({ error: "Error deleting users" });
  }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});