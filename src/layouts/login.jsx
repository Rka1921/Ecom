import React from "react";
import {Input} from "@nextui-org/react";
// import Lof from '../assets/bgLog.jpg'
export const Login = () => {
return(
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-44">
        <div className="w-80 h-20">
        {/* <img src={Lof} /></div> */}
      <div>
   <h1 className="mt-3">Login Page</h1>
    <div className="flex w-full flex-wrap gap-4 mt-4">
    <Input type="email" label="Email" />
  </div>
  <div className="flex w-full flex-wrap  gap-4 mt-4">
    <Input type="password" label="Password" />
    </div>
  </div>
  </div>
  </div>
  </>
   
)
}