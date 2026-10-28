import { Hono } from "hono";

const userRouter=new Hono()

userRouter.get("/",(c)=>{
    return c.json({message: "This is working"})
})

userRouter.get("/user/me")


userRouter.post("/user/:id",(c)=>{
    return c.body.
})

userRouter.put("/user/:id",(c)=>{

})
userRouter.delete("/user/:id",(c)=>{

})

export default userRouter