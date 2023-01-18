import { PrismaClient } from ".prisma/client";
import cors from "@fastify/cors";
import Fastify from "fastify"

const app = Fastify();

app.register(cors)

/**
 * Métodos HTTP: Get, Post, Put, Patch, Delete
 */

const prisma = new PrismaClient()

app.get('/', async () => {
    const habitLer = await prisma.habit.findMany({
        where: {
            title:{
                startsWith: "Ler"
            }
        }
    })

    return habitLer
})

app.listen({
    port: 3333,
}).then(()=>{
    console.log("Server is running!!");
})