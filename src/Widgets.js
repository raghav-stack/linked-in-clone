import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (headings, subtitle) => (
        <div className="widgets__article">

            <div className="widgets__articleleft">
            <FiberManualRecordIcon />
            </div>
               
            <div className="widgets__articleright">
                <h4>{headings}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">

               <h2>LinkedIn News</h2> 
               <InfoIcon />

            </div>
            {newsArticle("Amazon is hiring frontenddeveloper","Top news - linkedin readers")}
            {newsArticle("Coronavirus: India updates","Top news - 889 readers")}
            {newsArticle("Tesla hits new highs","Cars and auto - 300 readers")}
            {newsArticle("Bitcoin breaks at $22k","Crypto - 700 readers")}
            {newsArticle("Is Javascript too good","Code - 241 readers")}
            {newsArticle("Udemy launches react course","Top news - 678 readers")}
        </div>
    )
}

export default Widgets
