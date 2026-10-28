import type { Sandbox, SandboxState } from "./types.js";

const sandboxes = new Map<string,Sandbox>()

export function createSandbox(seed : SandboxState): Sandbox{
    const id = crypto.randomUUID()
    const sandbox: Sandbox={
        id:id,
        seed:structuredClone(seed),
        state:structuredClone(seed)
    }
    sandboxes.set(id,sandbox)
    return sandbox
}

export function getSandbox(id:string):Sandbox| undefined{
    return sandboxes.get(id)
}

export function resetSandbox(id:string): boolean {
    const sandbox=getSandbox(id)
    if(sandbox){
        sandbox.state=sandbox.seed
        return true
    }
    // console.log(sandbox?.state)
    // console.log(sandbox?.seed)
    return false
}