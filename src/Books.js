import React,{useState,useEffect, Fragment} from 'react'
import OneBook from './OneBook'
import Spinner from './Spinner'
import "./Book.css"

export default function Books() {
const url ="https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=hQDkXe5sQVHgTHMgHrVG9xJyxWcRoJkZ"
const [booksData,setBooksData] = useState([])
const [loading, setLoading] = useState(false)
const [isError, setIsError] = useState({ status: false, text: "Error 404" })
function fetchBooks(){
    setLoading(true)
fetch(url)
.then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data)
    setLoading(false)
    if(!data) setIsError({status:true})
    setBooksData([data.results.books])
}).catch((err)=>{
   setIsError({status:true , text:err})
})
};

useEffect(()=>{
fetchBooks()
},[]) 
    return ( 
        <Fragment>
{isError.status ? <h1>{isError.text}</h1> : null}
{loading ? <Spinner loading={loading}/> : null}
        <div className="boxArray">
          {booksData.length !==0 ?
          booksData.map((books,i)=>{ 
           return <OneBook books={books} key={i}/>
          })
          : null}  
        </div>
        </Fragment>
    )
}

 




