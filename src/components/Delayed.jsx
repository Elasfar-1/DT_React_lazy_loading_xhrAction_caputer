import { useState, useEffect } from "react";
export default function Delayed (){
  
    const [txt, setTxt] = useState(null);

    useEffect(()=>{
       
        
        if (txt === null){
            
                let delayedRequest = fetch("https://hub.dummyapis.com/delay?seconds=3")
                .then((response)=>response.text())
                .then((data)=>{console.log("Delayes: finished api calls");setTxt(data);})
            
        }
    },[])
                    

    return (<p>
        {txt}
    </p>)
}