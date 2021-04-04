import { Link } from "gatsby";
import React from "react";
// import footerStyles from "../styles/global.css"
 
const Footer = (props) => (
    <div  className="footer clearfix">
		<div className="footer-copy">
			<div className="menu-footer-wrapper">
				<div>
                    <ul className="menu-footer">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">About</Link></li>
                    </ul>
                </div>					
            </div>					
			<div className="clear"></div>
			<p className="copyright">© {(new Date().getFullYear())} <Link to="/">{props.title}</Link> | {props.tagline}</p>
		</div>				
		<div className="social-icons"></div>
	</div>
)
 
export default Footer