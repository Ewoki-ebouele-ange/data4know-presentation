import React, {useState, useEffect} from "react";
import "./Contact.css"

export default function Contact(){

    return(
        <div className="contact" id="contact">
            <div className="location_local">
                <div className="loca">
                    <h1>DATAFORKNOW</h1>
                    <span>FRANCE GEL - Corbie (80)</span>
                    <span>Tél. : 03 22 43 87 94</span>
                    <span>Email : <a href="">location@francegel.com</a></span>
                    <span>Adresse : <a href="">Rue Babelogne - 80800 CORBIE</a></span>
                </div>
                <div className="localisation">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d910.3768780432746!2d2.2936233250830576!3d48.85834363120057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2scm!4v1698094337576!5m2!1sfr!2scm" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="newsletter_advantage">
                <form action="" className="newsletter">
                    <div className="label_input">
                        <label htmlFor="">Votre nom <span>*</span> </label>
                        <input type="text" />
                    </div>
                    <div className="label_input">
                        <label htmlFor="">Votre e-mail <span>*</span> </label>
                        <input type="text" />
                    </div>
                    <div className="label_input">
                        <label htmlFor="">Sujet de votre message <span>*</span> </label>
                        <input type="text" />
                    </div>
                    <div className="label_input">
                        <label htmlFor="">Message <span>*</span> </label>
                        <textarea name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <input type="button" value="ENVOYER" className="btn_sub" />
                </form>
                <div className="advantage">
                    <h1>Les avantages de la location de frigos vitrines</h1>
                    <p>Pas d'investissement, pas de stockage inutile, pas de frais de maintenance. Pas de matériel vétuste ou inadapté.</p>
                    <h1>La livraison partout en France !</h1>
                    <p>Nous livrons à votre convenance et dès 5h du matin avec ou sans hayon.</p>
                    <h1>Un Service Après-Vente réactif !</h1>
                    <p>Si un dysfonctionnement survient lors de l'opération ? Nous nous engageons à le régler dans les plus brefs délais.</p>
                    <h1>Les actualités France Gel</h1>
                    <p>Retrouvez toutes nos actualités sur le blog France Gel où nous vous présentons de nouveaux produits et vous conseillons sur la location et l'entretien de meubles froids.</p>
                </div>
            </div>
        </div>    
    )
}