import React from "react";
import "./Blog.css"
import Img1 from "../../Assets/bigdata.png"

function Blog() {
    return (
      <div className="blog">
            <h1>L'actualité France Gel</h1>
            <div className="card_blog">
                <div className="card">
                    <span className="triangle"></span>
                    <span className="date">7 Oct.</span>
                    <img src={Img1} alt="" />
                    <a href="#">Testez des nouveaux concepts grâce à la location de meubles frigorifiques</a>
                    <p>Le marché des produits frais est en permanente évolution dans le secteur de la distribution alimentaire. Les services marketing des différentes enseignes de la distribution travaillent tout au long de l'année à de nouveaux concepts permettant de développer les ventes.</p>
                </div>
                <div className="card">
                    <span className="triangle"></span>
                    <span className="date">7 Oct.</span>
                    <img src={Img1} alt="" />
                    <a href="#">Testez des nouveaux concepts grâce à la location de meubles frigorifiques</a>
                    <p>Le marché des produits frais est en permanente évolution dans le secteur de la distribution alimentaire. Les services marketing des différentes enseignes de la distribution travaillent tout au long de l'année à de nouveaux concepts permettant de développer les ventes.</p>
                </div>
                <div className="card">
                    <span className="triangle"></span>
                    <span className="date">7 Oct.</span>
                    <img src={Img1} alt="" />
                    <a href="#">Testez des nouveaux concepts grâce à la location de meubles frigorifiques</a>
                    <p>Le marché des produits frais est en permanente évolution dans le secteur de la distribution alimentaire. Les services marketing des différentes enseignes de la distribution travaillent tout au long de l'année à de nouveaux concepts permettant de développer les ventes.</p>
                </div>
            </div>
      </div>
    );
  }
  
  export default Blog;
  