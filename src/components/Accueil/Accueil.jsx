import React from "react";
import './Accueil.css'
import data4 from "../../Assets/low logo blue.png"
import Img from "../../Assets/low logo blue.png"
import Sergio from '../../Assets/sergio.png'

export default function Accueil(){


    return(
        <div className="accueil">
            <div className="location_meuble">
                <div className="location_desc">
                    <h1 className="frigorifiques">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </h1>
                    <p className="large">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sequi voluptate inventore exercitationem sint voluptatibus labore officiis molestiae tempora expedita rem quas eveniet, eos alias quia assumenda. Culpa, rem quo? <br /> <br />
                        <a href="#">sit amet consectetur </a>, <a href="#">Beatae sequi voluptate inventore</a>, vitrines service arrière accompagnées de <a href="#">exercitationem</a> et trancheurs spécialement conçus pour recevoir votre PLV afin de valoriser vos produits. <br /> <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ullam inventore voluptates temporibus recusandae dolore dignissimos tempore quis autem ad quod sed ab iusto, maiores deleniti magni. Quis, aliquam numquam?
                    </p>
                    <span className="dem_devis">SKDYFIEFE LIZOFKZE LZIEHFZE</span>
                </div>
                <div className="image_acc">
                    <img src={data4} alt="image_face" />
                </div>
            </div>
            <div className="decouverte">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing eli</h2>
                <div className="vitrines">
                    <div className="card_vit">
                            <img src={Img} alt="" />
                        <div className="desc_img">
                            <h2>consectetur adipisicing elit</h2>
                            <p>Officia ullam inventore voluptates temporibus recusandae dolore dignissimos tempore quis autem</p>
                        </div>
                    </div>
                    <div className="card_vit">
                            <img src={Img} alt="" />
                        <div className="desc_img">
                            <h2>consectetur adipisicing elit</h2>
                            <p>Officia ullam inventore voluptates temporibus recusandae dolore dignissimos tempore quis autem</p>
                        </div>
                    </div>
                    <div className="card_vit">
                            <img src={Img} alt="" />
                        <div className="desc_img">
                            <h2>consectetur adipisicing elit</h2>
                            <p>Officia ullam inventore voluptates temporibus recusandae dolore dignissimos tempore quis autem</p>
                        </div>
                    </div>
                    <div className="card_vit">
                            <img src={Img} alt="" />
                        <div className="desc_img">
                            <h2>consectetur adipisicing elit</h2>
                            <p>Officia ullam inventore voluptates temporibus recusandae dolore dignissimos tempore quis autem</p>
                        </div>
                    </div>
                    <div className="card_vit">
                            <img src={Img} alt="" />
                        <div className="desc_img">
                            <h2>consectetur adipisicing elit</h2>
                            <p>Officia ullam inventore voluptates temporibus recusandae dolore dignissimos tempore quis autem</p>
                        </div>
                    </div>
                    <div className="card_vit">
                            <img src={Img} alt="" />
                        <div className="desc_img">
                            <h2>consectetur adipisicing elit</h2>
                            <p>Officia ullam inventore voluptates temporibus recusandae dolore dignissimos tempore quis autem</p>
                        </div>
                    </div>
                    <div className="card_vit">
                            <img src={Img} alt="" />
                        <div className="desc_img">
                            <h2>consectetur adipisicing elit</h2>
                            <p>Officia ullam inventore voluptates temporibus recusandae dolore dignissimos tempore quis autem</p>
                        </div>
                    </div>
                    <div className="card_vit">
                            <img src={Img} alt="" />
                        <div className="desc_img">
                            <h2>consectetur adipisicing elit</h2>
                            <p>Officia ullam inventore voluptates temporibus recusandae dolore dignissimos tempore quis autem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my_present">
                <img src={Sergio} alt="profil_image" />
                <div className="my_desc">
                    <h1>KSDJ KUECFZEF LOCDUIUFSD KIUHDF</h1>
                    <h2>SDKSD OMOLMFV LVKLIPOQ EZCYSDYC HYGSDYFCSD YTFCTDQ QYTFSQ</h2>
                    <span className="hr1"></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium recusandae voluptate modi impedit similique dolor? A neque</p>
                </div>
            </div>
            <div className="metier_desc">
                <img src={Img} alt="Boulot"/>
                <div className="notre_metier">
                    <h1>NOTRE METIER :</h1>
                    <h2>POURVOIR À VOS BESOINS PONCTUELS EN FROID</h2>
                    <span className="hr1"></span>
                    <p>Depuis 2005, France Gel est spécialisée dans la location de matériel réfrigéré. Notre société a d'abord privilégié le nord de la France et la région parisienne pour ensuite couvrir l'ensemble de l'hexagone.</p>
                    <div className="links">
                        <span  className="link"><span><a href="#">Pourquoi data4know ?</a></span></span>
                        <span  className="link"><span><a href="#">30 ans de savoir faire</a></span></span>
                    </div>
                </div>
            </div>
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
        </div>
    )
}