'use client'
import { Button } from "@repo/ui/button";
import { use } from "react";
export default function Home() {
  function redirect(){

  }
  return (
    <div>
      {/* Navbar */}
      <div className="grid grid-cols-3 fixed top-4 left-16 right-16">
        <div className="flex items-center gap-1">
          <img src="Logo.png" alt="" className="h-8 w-12"/>
          <h1 className="mx-4 font-bold text-2xl">paddock</h1>
        </div>
        <div className="items-center flex gap-8">
          <p className="">How it works </p>
          <p className="">System</p>
          <p className="">Docs</p>
          <p className="">Console</p>
        </div>
        <div className="flex items-centere justify-end gap-3">
          <Button className="border border-white/20 p-2! rounded-xl" onClick={redirect} >Sign in</Button>
          <Button className="border bg-[#ffb347] text-black p-2! rounded-xl font-medium" onClick={redirect} >Github ↗</Button>
        </div>
      </div>

      {/* Hero */}
      <div>
        <div>

        </div>
      </div>
    </div>
  );
}