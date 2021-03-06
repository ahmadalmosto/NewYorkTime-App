import React, { useState, useEffect } from 'react'
import OneAritcle from './OneAritcle'
import Spinner from './Spinner'
export default function ArticlesData() {
    const api_key = process.env.REACT_APP_API_KEY
    const [datafetch, setDataFetch] = useState([])
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState({ status: false, text: "Error 404" })
    const url = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${api_key}`
    console.log(url)
    function fetchData() {
        fetch(url).then((res) => {
            setLoading(true)
            return res.json()
        })
            .then((data) => {
                if (data) {
                    setLoading(false)
                    setDataFetch([data.results])
                } else {
                    setIsError({ status: true })
                }

            }).catch((err) => {
                setIsError({ status: true, text: err.message })
                console.log(err)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            {isError.status ? <h1>{isError.text}</h1> : null}
            {loading ? <Spinner loading={loading} /> : null}
            {datafetch.length !== 0 ?
                datafetch.map((article, i) => {
                    return <OneAritcle article={article} key={i} />
                })

                : null}

        </>
    )
}
