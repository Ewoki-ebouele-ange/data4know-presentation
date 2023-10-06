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
        </div>
    )
}