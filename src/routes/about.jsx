import { Link } from "react-router-dom";
import Susbinsable from "../components/susbinsable";
import { lazy } from "react";
export default function About(){
    const Delayed = lazy(()=> delayForDemo(import("../components/Delayed"))); 
    const Bigtext = lazy(()=> delayForDemo(import("../components/Bigtext"))); 
    

    return (
        
        <Susbinsable>
                <Delayed/>
                <Bigtext/>
        </Susbinsable>

    );
}
function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }