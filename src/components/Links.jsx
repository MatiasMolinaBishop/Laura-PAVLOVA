import { Link } from "react-router-dom";
import './Links.css'

import Contact from "./Contact";

const Links = () => {
    return (
         <div class='links-flex'>
            <Link className="link-card" to='/about'>About</Link>
            <a className="link-card" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1AYY00TZ7hIPzFTP_2l0jg-0gP4fQ79cs/view?usp=sharing">Menu</a>
            {/* <Carousel/> */}
            <Contact/>
        </div>
    )
}

export default Links