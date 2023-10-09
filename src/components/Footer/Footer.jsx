import React from "react";
import "./Footer.css"

export default function Footer(){

    return(
        <div className="footer">
                <div className="site_information">
                    <span className="tit">DATA4KNOW</span>
                    <span>
                    <a href="#">Rue Babelogne </a><br />
                    <a href="#">80800 Corbie</a>
                    </span>
                    <span>mail : <a href="#">location@francegel.com</a></span>
                    <span>Tél : <a href="#">03.22.43.87.94</a></span>
                </div>
                <div className="liens_utiles">
                    <span className="tit">LIENS UTILES</span>
                    <span>
                    <a href="#">Louer un produit </a><br />
                    <a href="#"> Acheter un produit </a> <br />
                    <a href="#">Nous contacter</a>
                    </span>
                </div>
                <div className="ment_leg">
                   <span> Mentions légales</span>
                   <span>Création de site : <a href="#">Ewoki Ebouele</a></span>
                </div>
        </div>    
    )
}