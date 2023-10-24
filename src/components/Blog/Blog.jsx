import React, { useState } from "react";
import "./Blog.css"
import Img1 from "../../Assets/bigdata.png"
import {AiFillFastBackward, AiFillFastForward} from 'react-icons/ai'

function Blog() {

    const pagination = [
        {
            "date": "7 Oct.",
            "img" : Img1,
            "link" : "Testez des nouveaux concepts grâce à la location de meubles frigorifiques",
            "desc" : "Le marché des produits frais est en permanente évolution dans le secteur de la distribution alimentaire. Les services marketing des différentes enseignes de la distribution travaillent tout au long de l'année à de nouveaux concepts permettant de développer les ventes."
        },
        {
            "date": "7 Oct.",
            "img" : Img1,
            "link" : "Testez des nouveaux concepts grâce à la location de meubles frigorifiques",
            "desc" : "Le marché des produits frais est en permanente évolution dans le secteur de la distribution alimentaire. Les services marketing des différentes enseignes de la distribution travaillent tout au long de l'année à de nouveaux concepts permettant de développer les ventes."         
        },
        {
            "date": "7 Oct.",
            "img" : Img1,
            "link" : "Testez des nouveaux concepts grâce à la location de meubles frigorifiques",
            "desc" : "Le marché des produits frais est en permanente évolution dans le secteur de la distribution alimentaire. Les services marketing des différentes enseignes de la distribution travaillent tout au long de l'année à de nouveaux concepts permettant de développer les ventes."         
        },
        {
            "date": "7 Oct.",
            "img" : Img1,
            "link" : "Testez des nouveaux concepts grâce à la location de meubles frigorifiques",
            "desc" : "Le marché des produits frais est en permanente évolution dans le secteur de la distribution alimentaire. Les services marketing des différentes enseignes de la distribution travaillent tout au long de l'année à de nouveaux concepts permettant de développer les ventes."         
        },
        {
            "date": "7 Oct.",
            "img" : Img1,
            "link" : "Testez des nouveaux concepts grâce à la location de meubles frigorifiques",
            "desc" : "Le marché des produits frais est en permanente évolution dans le secteur de la distribution alimentaire. Les services marketing des différentes enseignes de la distribution travaillent tout au long de l'année à de nouveaux concepts permettant de développer les ventes."         
        },
        {
            "date": "7 Oct.",
            "img" : Img1,
            "link" : "Testez des nouveaux concepts grâce à la location de meubles frigorifiques",
            "desc" : "Le marché des produits frais est en permanente évolution dans le secteur de la distribution alimentaire. Les services marketing des différentes enseignes de la distribution travaillent tout au long de l'année à de nouveaux concepts permettant de développer les ventes."         
        },
        {
            "date": "7 Oct.",
            "img" : Img1,
            "link" : "Testez des nouveaux concepts grâce à la location de meubles frigorifiques",
            "desc" : "Le marché des produits frais est en permanente évolution dans le secteur de la distribution alimentaire. Les services marketing des différentes enseignes de la distribution travaillent tout au long de l'année à de nouveaux concepts permettant de développer les ventes."         
        }]

        const [currentPage, setCurrentPage] = useState(1)
        const recordsPerPage = 4
        const lastIndex = currentPage * recordsPerPage
        const firstIndex = lastIndex - recordsPerPage
        const records = pagination.slice(firstIndex, lastIndex)
        const npage = Math.ceil(pagination.length / recordsPerPage)
        const numbers = [...Array(npage + 1).keys()].slice(1)

        

    return (
        <div className="blog_loc">
            <div className="blog">
                <h1>L'actualité France Gel</h1>
                <div className="card_blog">
                    {records.map((data,i) => (
                    <div className="card" key={i}>
                        <span className="triangle"></span>
                        <span className="date">{data.date}</span>
                        <img src={data.img} alt="" />
                        <a href="#">{data.link}</a>
                        <p>{data.desc}</p>
                    </div>
                    ))}
                </div>
                <div className="pagination">
                    <div className="links_page">
                            <span  className={`link_page ${currentPage === 1 ? 'curs_pt': ''}`} onClick={firstPage}><span><a><AiFillFastBackward className="ico"/></a></span></span>
                            <span  className={`link_page ${currentPage === 1 ? 'curs_pt': ''}`}  onClick={prePage}>
                                <span>
                                    <a>PREC.</a>
                                </span>
                            </span>
                            {
                                numbers.map((n,i) =>(
                                    <span  className={`link_page ${currentPage === n ? 'active_page': ''}`} key={i}  onClick={() => changePage(n)}><span><a>{n}</a></span></span>
                                ))
                            }
                            <span  className={`link_page ${currentPage === npage ? 'curs_pt': ''}`} onClick={nextPage}><span><a>SUIV.</a></span></span>
                            <span  className={`link_page ${currentPage === npage ? 'curs_pt': ''}`} onClick={lastPage}><span><a><AiFillFastForward className="ico"/></a></span></span>
                    </div>
                </div>
            </div>
            <div className="local_blog">
                <div className="publi">
                Retrouvez toutes nos actualités sur le blog France Gel. Nous abordons divers thèmes : <br /> <br />
                présentation de nouveaux produits, mise en avant de l'actualité de la grande distribution, conseils sur la location et l'entretien de meubles froids, et bien d'autres. <br /> <br />
                Restez connectés.
                </div>
                <div className="localise">
                    <h2>Nous contacter</h2>
                    <span><h3>FRANCE GEL - Corbie (80)</h3></span>
                    <span><h3>Tél.</h3> : 03 22 43 87 94</span>
                    <span><h3>FAX</h3> : 03 22 43 87 94</span>
                    <span><h3>Email</h3> : location@francegel.com</span>
                    <span><h3>Adresse</h3> : Rue Babelogne - 80800 CORBIE</span>
                </div>
            </div>
        </div>
    );

    function firstPage(){
        setCurrentPage(1)
        console.log("current",currentPage)
    }

    function lastPage(){
        setCurrentPage(npage)
        console.log("current",currentPage)
    }

    function prePage(){
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
            console.log("current",currentPage)
        }
    }

    function changePage(id){
        setCurrentPage(id)
        console.log("current",currentPage)
    }

    function nextPage(){
        if(currentPage !== npage){
            setCurrentPage(currentPage + 1)
            console.log("current",currentPage)
        }
    }

  }
  
  export default Blog;
  