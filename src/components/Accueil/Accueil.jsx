import React from "react";
import './Accueil.css'
import Contact from "../Contact/Contact"
import data4 from "../../Assets/low logo blue.png"
import data from "../../Assets/low logo orange.png"
import Img from "../../Assets/low logo blue.png"
import Img1 from "../../Assets/bigdata.png"
import Img2 from "../../Assets/webdev.png"
import Img3 from "../../Assets/microsoft365.png"
import Img4 from "../../Assets/programming.png"
import Sergio from '../../Assets/sergio.png'

export default function Accueil(){


    return(
        <>
        <div className="accueil">
            <div className="location_meuble">
                <div className="location_desc">
                    <h1 className="frigorifiques">
                        Données À Savoir (Data For Know)
                    </h1>
                    <p className="large">
                        met à votre disposition des connaissances avancées sur les métiers liés aux données <br /> <br />
                        <a href="#">Stockage</a>, <a href="#">Extraction</a>, <a href="#">Traitement</a>, et <a href="#">Diffusion</a> de l'information sont nos domaines d'expertise. Vous nous fournissez votre <a href="#">pétrole brut (les données )</a> du XXIème siècle <br /> <br />
                        et nous vous partageons <a href="#">l'essence</a> de différents grade qu'il faut pour rouler votre compagnie (personnelle, pme société etc.)
                    </p>
                    <span className="dem_devis" id="dem_devis">CONTACTEZ NOUS</span>
                </div>
                <div className="image_acc">
                    <img src={data4} alt="image_face" />
                </div>
            </div>
            <div className="decouverte" id="decouverte">
                <h2>nos services</h2>
                <div className="vitrines">
                    <div className="card_vit">
                            <img src={Img1} alt="" />
                        <div className="desc_img">
                            <h2>Traitement de données massives</h2>
                            <p>Les données de grande taille pour de grande décisions.</p>
                        </div>
                    </div>
                    <div className="card_vit">
                            <img src={Img2} alt="" />
                        <div className="desc_img">
                            <h2>Diffusion de l'information</h2>
                            <p>la démocratisation des connaissances sur des plateformes de partage interactives et simple d'implémentation.</p>
                        </div>
                    </div>
                    <div className="card_vit">
                            <img src={Img3} alt="" />
                        <div className="desc_img">
                            <h2>Developpement d'etreprise</h2>
                            <p>Sla mise en place des solutions professionnelles pour des performances optimales de collaboration et de travail.</p>
                        </div>
                    </div>
                    <div className="card_vit">
                            <img src={Img4} alt="" />
                        <div className="desc_img">
                            <h2>Language</h2>
                            <p> utilisation des languages populaires pour se faire comprendre par une grande communauté de developpeurs ET D
                                onner des instructions à une machine pour l'automatisation des tâches répétitives.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="my_present">
                <img src={Sergio} alt="profil_image" />
                <div className="my_desc">
                    <h1>LE MOT DE LA DIRECTION</h1>
                    <h2>donner à la décision un poids numérique</h2>
                    <span className="hr1"></span>
                    <p>l'histoire nous enseigne le future à travers les historiens, la
						donnée nous procure la connaissance à travers la <a href="#">donnée à savoir !</a> </p>
                </div>
            </div>
            <div className="partenaires">
                <h1>Ils nous font confiance</h1>
                <div className="img_part" id="img_part">
                    <a href="" target="blank"><img src={data} alt="partenaire" /></a>
                    <a href="" target="blank"><img src={data} alt="partenaire" /></a>
                    <a href="" target="blank"><img src={data} alt="partenaire" /></a>
                    <a href="" target="blank"><img src={data} alt="partenaire" /></a>
                    <a href="" target="blank"><img src={data} alt="partenaire" /></a>
                    <a href="" target="blank"><img src={data} alt="partenaire" /></a>
                </div>
            </div>
            <div className="metier_desc" id="metier_desc">
                <img src={data} alt="Boulot" id="boulot"/>
                <div className="notre_metier">
                    <h1>NOTRE METIER :</h1>
                    <h2>VOS DONNÉES POUR VOTRE CONNAISSANCE</h2>
                    <span className="hr1"></span>
                    <p>Depuis 2017, nous utilisons les données pour mettre en evidences les
						connaissances sur de nombreux sujets de recherche.</p>
                    <div className="links">
                        <span  className="link"><span><a href="#">Pourquoi d4k ?</a></span></span>
                        <span  className="link"><span><a href="#">une palette d'expertise</a></span></span>
                    </div>
                </div>
            </div>
            
        </div>
        <Contact />
        </>
    )
}
