import { Router } from "express";
const router=Router()
import { Todo } from "../models/todomodel";
let todos:Todo[]=[]
 router.get("/todo",(req,res,next)=>{
    res.status(200).json({
        todos:todos
    })

})


router.post("/todo",(req,res,next)=>{

    const newtodo: Todo={
        id:new Date().toISOString(),
        text:req.body.text,
    }
    return res.status(201).json({message:"sucsess"})
})
router.put("/todo/:todoid",(req,res,next)=>{
    const toid=req.params.todoid
    const todoindex=todos.findIndex((todoitem)=>todoitem.id===toid)
    if(todoindex>=0){
        todos[todoindex]={ id:todos[todoindex].id,text:req.body.text}
        return res.status(200).json({message:"updated tosdo", todo:todos})
    }
    return res.status(402).json({message:"does not find"})

})
router.delete("/todo/:todoid",(req,res,next)=>{
    todos=todos.filter((todoitem)=>todoitem.id!==req.params.todoid)
    return res.status(200).json({mesage:"Deleted",todo:todos})

})
export default router