'use server'

import prisma from "@/lib/prisma";
import { createTodo, updateTodo } from "@/lib/todos"
import { revalidatePath } from "next/cache";

export async function createTodoAction(title: string){
    try{
        const todo = await prisma.todo.create({data: {title}})
        revalidatePath('/')
        return {todo}
    } catch (error) {
        return console.log(error)
    }
}

export async function updateTodoAction(id: string, isCompleted: boolean){
    await updateTodo(id, isCompleted)
    revalidatePath("/")
}