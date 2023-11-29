import { useState, useEffect } from "react";
export default function Delayed ({resloveList, onResolve, resolveCheck, actionID}){
    let last; 
  
    const [txt, setTxt] = useState(null);

    useEffect(()=>{
        last = resolveCheck(resloveList, onResolve);
       
        
        if (txt === null){
            
                let delayedRequest = fetch("https://hub.dummyapis.com/delay?seconds=3")
                .then((response)=>response.text())
                .then((data)=>{
                    if (last){
                        console.log(actionID);
                        setTxt(data);
                        last? console.log('leaving...',dtrum.leaveXhrAction(actionID)): null 
                        console.log("last"); 
                    }
                    

                })
            
        }
    })
                    

    return (<p>
        {txt}
    </p>)
}