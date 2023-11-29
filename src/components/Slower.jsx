import { useState, useEffect } from "react";
export default function Slower (){
  
    const [txt, setTxt] = useState(null);

    useEffect(()=>{
       
        
        if (txt === null){
            
                let delayedRequest = fetch("https://hub.dummyapis.com/delay?seconds=5")
                .then((response)=>response.text())
                .then((data)=>{console.log("finished slower api calls");setTxt(data);})
            
        }
    },[])
                    

    return (<p>
        {txt}
    </p>)
}