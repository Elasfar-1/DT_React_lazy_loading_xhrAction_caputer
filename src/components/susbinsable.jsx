import { useEffect, useState } from "react";
import { Suspense } from "react";
import DTActionController from "./DTActionController.jsx";
export default function Susbinsable({children}) {
    console.log("in Suspense");
    const actionID = dtrum.enterAction('xhr',null,null, window.location.pathname);
    console.log("susbinable children",children)
    return (<Suspense fallback={<p>...loading</p>}>
          <DTActionController actionID={actionID}>
            <>
              {children}
            </>
          </DTActionController>
    </Suspense>)
  
}

function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }