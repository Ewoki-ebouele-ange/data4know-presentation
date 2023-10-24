import React from "react";
import "./Footer.css"

export default function Footer(){

    return(
        <div className="footer">
                <div className="site_information">
                    <span className="tit">DATA4KNOW</span>
                    <span>
                    <a href="#">Canada, Québec</a><br />
                    <a href="#">Capitale Nationale, Beauport</a>
                    </span>
                    <span>mail : <a href="#">info@dataforknow.com</a></span>
                    <span>Tél : <a href="#">581 0000 0000</a></span>
                </div>
                <div className="liens_utiles">
                    <span className="tit">LIENS UTILES</span>
                    <span>
                    <a href="#"> Facebook </a><br />
                    <a href="https://www.youtube.com/channel/UCyGGK5ScFKt4IS7yHQ0Tmzw"> Notre chaine YouTube </a> <br />
                    <a href="#">LinkedIn</a>
                    </span>
                </div>
                <div className="ment_leg">
                   <span> Mentions légales</span>
                   <span>Création de site : <a href="#">dataforknow(Avalange)</a></span>
                </div>
        </div>    
    )
}
