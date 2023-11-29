import { Link } from "react-router-dom"; 
export default function Root() {
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
                           <Link to={'/DT_Abdo'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/DT_Abdo_About'}>About </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail"></div>
        </>
    ) 
}