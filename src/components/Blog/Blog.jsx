import React, { useState } from "react";
import "./Blog.css"
import Img1 from "../../Assets/bigdata.png"
import {AiFillFastBackward, AiFillFastForward} from 'react-icons/ai'

function Blog() {

    const pagination = [
        {
            "date": "7 Oct.",
            "img" : Img1,
            "link" : "Evolution de l'immigration au Canada",
            "desc" : "Le Canada est un pays d'immigration. Après sa colonisation par les peuples Anglais et Français, plusieurs natifs de plusieurs pays dans le monde ont achevé leur mouvement de migratoire sur les terre de ce pays-continent."
        },
        {
            "date": "7 Oct.",
            "img" : Img1,
            "link" : "Québec, une nation Française en Amérique du Nord",
            "desc" : "Cette portion non négligeable du territoire Canadien est le berceau d'acceuil de plusieurs peuple dans le monde qui s'exprime principalement en langue française."         
        },
        {
            "date": "7 Oct.",
            "img" : Img1,
            "link" : "Les emplois ouverts dans la province de Henri Bourrassa",
            "desc" : "Le marché du travail au Canada et à Québec en particulier reste encore ouvert dans certains domaines."         
        },
        {
            "date": "7 Oct.",
            "img" : Img1,
            "link" : "Des écoles à la hauteur de la puissance mondiale rouge-blanc à la feuille d'érable.",
            "desc" : "La formation dans les écoles et les universités Canadiennes est classée parmis les meilleures au monde."         
        },
        {
            "date": "7 Oct.",
            "img" : Img1,
            "link" : "Le Joual québécois : qu'en sais-tu ?",
            "desc" : "Cette langue locale tire ses racines du français et fait partir du patrimoine culturel de la province aux quatre fleurs de Lys."         
        },
        {
            "date": "7 Oct.",
            "img" : Img1,
            "link" : "La poutine, un plat et du fromage originaire de la région.",
            "desc" : "C'est l'une des référence gastronomique de la province de Samuel de Champlain. Il goutte bon et fait saliver lorsqu'on y regarde de plus prêt."         
        },
        {
            "date": "7 Oct.",
            "img" : Img1,
            "link" : "Le Cameroun d'ici et de chez nous.",
            "desc" : "Nommé à juste titre par le pseudonime de << Le Continent >>, on y retrouve toutes les cultures du continent africain et particulièrement celles importé du Québec."         
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
  
