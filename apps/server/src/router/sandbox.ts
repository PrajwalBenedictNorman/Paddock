import { Hono } from "hono";
import type { Sandbox, SandboxState } from "../types.js";
import { createSandbox } from "../store.js";

const sandboxRouter = new Hono()

function mulberry32(seed: number): () => number {
  let a = seed;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(123);


const seed : SandboxState ={
    issues:[
        ""
    ]
}
sandboxRouter.post("/sandboxes", async(c)=>{
    const seed = rand
    const sandbox : Sandbox = createSandbox(seed)
    await c.json({sandbox})

})

sandboxRouter.post("/sandboxes/:id/reset",async(c)=>{
    await
})

sandboxRouter.post("/sandboxes/:id/snapshot",async(c)=>{
    return
})

sandboxRouter.delete("/sandboxes/:id",(c)=>{
    return
})

sandboxRouter.get("/sandboxes/:id/state",(c)=>{
    return
})

export default sandboxRouter