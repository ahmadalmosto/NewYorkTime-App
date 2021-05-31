import React from 'react'
import "./Style/SearchResults.css"
function SearchResults({ item }) {
    console.log(item)
    return (
        <>
            <div >
                {item ?
                    (<div className="bodyy">
                        <div className="cardSearch transition">
                            <h2 className=" resultTitle transition">{item.headline.main}</h2>
                            <p className="resultPara">{item.abstract}</p>
                            <a className="resultLink" href={item.web_url}>Read Article</a>
                            <div className="cta-container transition">
                            <div className="cta"></div>
                            </div>
                            <div className="card_circle transition"></div>
                        </div>
                    </div>
                    ) : <a href="/" > back</a>}
            </div>

        </>
    )
}

export default SearchResults