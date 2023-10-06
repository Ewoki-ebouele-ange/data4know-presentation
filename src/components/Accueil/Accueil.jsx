import React from "react";
import './Accueil.css'
import data4 from "../../Assets/low logo blue.png"
import Img from "../../Assets/low logo blue.png"

export default function Accueil(){


    return(
        <div className="accueil">
            <div className="location_meuble">
                <div className="location_desc">
                    <h1 className="frigorifiques">
                        Location de meubles frigorifiques
                    </h1>
                    <p className="large">
                        Un large choix de location de matériels réfrigérés récents disponibles en froid positif, en froid négatif ou en bi-température. <br /> <br />
                        <a href="#">Bacs réfrigérés</a>, <a href="#">vitrines murales frigorifiques</a>, vitrines service arrière accompagnées de <a href="#">balances</a> et trancheurs spécialement conçus pour recevoir votre PLV afin de valoriser vos produits. <br /> <br />
                        Notre métier : pourvoir à vos besoins ponctuels en froid. Notre force : la réactivité. France Gel est à votre écoute !
                    </p>
                    <span className="dem_devis">DEMANDE DE DEVIS EXPRESS</span>
                </div>
                <div className="image_acc">
                    <img src={data4} alt="image_face" />
                </div>
            </div>
            <div className="decouverte">
                <h2>Découvrez notre gamme de meubles réfrigérés à louer</h2>
                <div className="vitrines">
                    <div className="card_vit">
                            <img src={Img} alt="" />
                        <div className="desc_img">
                            <h2>Vitrines verticales réfrigérées</h2>
                            <p>Un large choix de vitrines verticales réfrigérées de toutes les dimensions</p>
                        </div>
                    </div>
                    <div className="card_vit">
                            <img src={Img} alt="" />
                        <div className="desc_img">
                            <h2>Vitrines verticales réfrigérées</h2>
                            <p>Un large choix de vitrines verticales réfrigérées de toutes les dimensions</p>
                        </div>
                    </div>
                    <div className="card_vit">
                            <img src={Img} alt="" />
                        <div className="desc_img">
                            <h2>Vitrines verticales réfrigérées</h2>
                            <p>Un large choix de vitrines verticales réfrigérées de toutes les dimensions</p>
                        </div>
                    </div>
                    <div className="card_vit">
                            <img src={Img} alt="" />
                        <div className="desc_img">
                            <h2>Vitrines verticales réfrigérées</h2>
                            <p>Un large choix de vitrines verticales réfrigérées de toutes les dimensions</p>
                        </div>
                    </div>
                    <div className="card_vit">
                            <img src={Img} alt="" />
                        <div className="desc_img">
                            <h2>Vitrines verticales réfrigérées</h2>
                            <p>Un large choix de vitrines verticales réfrigérées de toutes les dimensions</p>
                        </div>
                    </div>
                    <div className="card_vit">
                            <img src={Img} alt="" />
                        <div className="desc_img">
                            <h2>Vitrines verticales réfrigérées</h2>
                            <p>Un large choix de vitrines verticales réfrigérées de toutes les dimensions</p>
                        </div>
                    </div>
                    <div className="card_vit">
                            <img src={Img} alt="" />
                        <div className="desc_img">
                            <h2>Vitrines verticales réfrigérées</h2>
                            <p>Un large choix de vitrines verticales réfrigérées de toutes les dimensions</p>
                        </div>
                    </div>
                    <div className="card_vit">
                            <img src={Img} alt="" />
                        <div className="desc_img">
                            <h2>Vitrines verticales réfrigérées</h2>
                            <p>Un large choix de vitrines verticales réfrigérées de toutes les dimensions</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}