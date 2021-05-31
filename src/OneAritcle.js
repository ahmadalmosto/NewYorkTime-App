import React from 'react'
import { useState } from 'react'
import Modal from './Modal'
import './Style/OneAritcle.css'

export default function OneAritcle({ article }) {
    const [lastArticle, setLastArticle] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    const filterArticle = (id) => {
        const filtered = article.filter((one) => { return one.id === id })
        setLastArticle(filtered)
        setIsOpen(true)
    };
    return (
        <>
            <h4 className="most">Most Readed...</h4>
            {article.map((one) => {
                return (
                    <div key={one.id} className="wrap">

                        <div className="column" >
                            <div className="cardAr" onClick={() => filterArticle(one.id)} >
                                {one.title}

                            </div>
                        </div>
                    </div>
                )
            })}

            <Modal open={isOpen} article={article} >
                {lastArticle.length !== 0 ? (
                    <div className="center">
                        <div className="property-card">
                            <a href={lastArticle[0].url}>
                                <div className="property-image" style={{ backgroundImage: `url(${lastArticle[0].media[0]["media-metadata"][2].url})` }}>
                                    <div className="property-image-title">
                                        {lastArticle[0].title}...>>
                                    </div>
                                </div></a>
                            <div className="property-description">
                                <p>{lastArticle[0].abstract}.</p>
                                <h5>{lastArticle[0].byline}</h5>
                                <p>{lastArticle[0].published_date}</p>
                            </div>
                            <div className=" deletelink">
                                <button onClick={() => setIsOpen(false)}>X</button>

                            </div>

                        </div>
                    </div>

                ) : null}

            </Modal>
        </>
    )
}
