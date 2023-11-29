import { useEffect, useState } from "react";
import Delayed from "./Delayed";
import { Suspense } from "react";
import React from "react";
import { isLast } from "../utils";

export default function Susbinsable({children}) {
    console.log("in Suspense");
    const actionID = dtrum.enterAction('xhr',null,null, window.location.pathname);
    const [resolvedAll, setResolvedAll] = useState(children.map((child)=>false)); 
    const newChildren = children.map((child)=>
    React.cloneElement(child, {
        resloveList:resolvedAll,
         onResolve:setResolvedAll,
         resolveCheck: isLast, 
         actionID: actionID
        })
    ); 
    console.log(resolvedAll);
    return (<Suspense fallback={<p>...loading</p>}>
          {newChildren}
    </Suspense>)
  
}

function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }