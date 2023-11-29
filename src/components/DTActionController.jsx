import { useEffect } from "react"
import { Suspense } from "react";
export default function DTActionController({children, actionID}){
  useEffect(()=>{
    dtrum.leaveAction(actionID); 
    console.log("left action " + actionID + " here")
  });
    
    return (
        <>
          {children}
  
        </>)
}