import React from "react";
import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import imga from '../assets/main.jpg'
export const Login = () => {
return(
    <>
    <div className="grid grid-cols-1 gap-44 md:grid-cols-2">
        <div className="w-80 h-20">
        <img src={imga} /></div>
      <div className="flex flex-col gap-4">
   <h1 className="mt-3">Login</h1>
    <div>
    <Input type="email" label="Email" />
  </div>
  <div>
    <Input type="password" label="Password" />
    </div>
    <Button className="bg-black col text-white">
      Continue
    </Button>
  </div>
  </div>
 
  </>
   
)
}