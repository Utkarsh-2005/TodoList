'use client'

import { useRef } from "react"
import { createTodoAction } from "../_actions"

 
 const NewTodoForm = () => {
    const formRef = useRef<HTMLFormElement>(null);

    async function action (data: FormData){
        const title = data.get('title')
        if (!title || typeof title!== 'string') return
        console.log(title)
        await createTodoAction(title);
        formRef.current?.reset();
    }

   return (
     <form ref={formRef} action={action}>
        <h2 className="mb-2 font-medium">Create a new Todo</h2>
        <input type="text" name='title' id='' 
        className="rounded border border-slate-400 px-2 py-0.5"/>
        <button type='submit'
        className="ml-2 rounded bg-slate-700 px-2 py-1 text-sm ">Add Todo</button>
     </form>
   )
 }
 
 export default NewTodoForm