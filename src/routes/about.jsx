import { Link } from "react-router-dom";
import Susbinsable from "../components/susbinsable";
import { lazy } from "react";
export default function About(){
    const Delayed = lazy(()=> delayForDemo(import("../components/Delayed"))); 
    const Bigtext = lazy(()=> delayForDemo(import("../components/Bigtext"))); 
    

    return (
      <>
      <div id="sidebar">
          <h1>React Router contatcts</h1>
          <div>
              <form id="search-form" role="search">
                  <input type="search" id="q" placeholder="search" name="q" aria-label = "Search contacts" />
                  <div id="search-spinner" aria-hidden hidden={true}/>
                  <div className="sr-only" aria-live="polite"></div>
              </form>
              <form method="post">
                  <button type='submit'>New</button>
              </form>
          </div>
          <nav>
              <ul>
                  <li>
                     <Link to={'/'}>Home</Link>
                  </li>
                  <li>
                      <Link to={'/lazy'}>About </Link>
                  </li>
              </ul>
          </nav>
      </div>
      <div id="detail"></div>
        <Susbinsable>
                <Delayed/>
                <Bigtext/>
        </Susbinsable>
  </>
        

    );
}
function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }