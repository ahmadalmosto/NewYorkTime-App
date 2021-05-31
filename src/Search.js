import React, { useState, useEffect } from 'react'
import SearchResults from './SearchResults'
import "./Style/Search.css"
import Spinner from './Spinner'
function Search() {
    const api_key = process.env.REACT_APP_API_KEY
    const [inputValue, setInputValue] = useState("")
    const [data, setData] = useState([])
    const [isError, setIsError] = useState({ status: false, text: "Error404" })
    const [loading, setLoading] = useState(false)
    const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${inputValue}&api-key=${api_key}`

    function FetchSearch() {
        setLoading(true)
        fetch(URL).then((res) => {
            return res.json()
        }).then((res) => {
            setLoading(false)
            if (res.response.docs.length === 0)
                setIsError({ status: true, text: "SORRY There is No Results" })
            setData(res.response.docs)
            setInputValue("")
        }).catch((err) => {
            setIsError({ status: true, text: "Error404" })
        })

    };
    const handleChange = (e) => {
        setInputValue(e.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue !== "") {
            FetchSearch()
        }
    }
    return (
        <>
            <div className="searchDiv" >
                <form role="submit" onChange={handleChange} onSubmit={handleSubmit}>
                    <label htmlFor="search">Search for Articles</label>
                    <input id="search" type="search" placeholder="Search Aricle..." />
                    <button className="formButton">Go</button>
                </form>
            </div>
            {isError.status ? (<div className="searchErr">
                <div className="ErrPara">
                    <h3>{isError.text}</h3>
                    <button onClick={() => setIsError(false)}>X</button>
                </div>
            </div>

            ) : null}
            {loading ? <Spinner loading={loading} /> : null}

            <div className="searchCo">
                {data ? data.map((item) => {
                    return (
                        <div key={item._id} className="bigSearch">
                            <SearchResults item={item} />

                        </div>
                    )
                }) : setIsError({ status: true })}

            </div>
        </>
    )
}
export default Search