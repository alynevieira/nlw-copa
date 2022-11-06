import { PrismaClient } from "@prisma/client";

// Vai mostrar os logs no terminal de todas as query que são executadas no bd
export const prisma = new PrismaClient({
    log: ['query'],
})
