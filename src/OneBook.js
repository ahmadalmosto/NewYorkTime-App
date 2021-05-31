import React from "react";
import { Link } from "react-router-dom";
import "./OneBook.css"
export default function OneBook({ books }) {
  console.log(books);
  return (
    <>
     <h4 className="bookSection">Best Books...</h4>
      {books.length !== 0 ?
        books.map((book) => {
          return (
            <>
           
            <div className="onecard" key={book.primary_isbn10}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img height="300px" width="100%" src={book.book_image} alt="Avatar" />
                  </div>
                  <div className="flip-card-back">
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <p>{book.description}</p>

                    {book.buy_links.map((buy) => { 
                      return (
                        <a href={buy.url} key={buy.url} className="r-link linkbuy text-underlined">
                          {buy.name}
                        </a>
                      ); 
                    })}
                
                    <Link to={`/${book.primary_isbn10}`}>
                      <a className="link">
                        <span className="mask">
                          <div className="link-container">
                            <span className="link-title1 titlelink">READ REVIEW</span>
                            <span className="link-title2 titlelink">READ REVIEW</span>
                            {/* <Redirect to={`/${book.primary_isbn10}`} /> */}
                          </div>
                        </span>
                        <div className="link-icon">
                          <svg className="icon" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                          </svg>
                          <svg className="icon" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                          </svg>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            </>
          ) 
        })
        : null}
    </>
  )
}








         // <div style={{ border: "grey 1px solid" }} key={book.primary_isbn10}>
            // <h1>{book.title}</h1>
            //         <h3>{book.author}</h3>
            //         <h5>{book.publisher}</h5>
            //         <Link to={`/book/review/${book.primary_isbn10}`}>
            //           <h4>Review</h4>
            //      </Link>
            //       {book.buy_links.map((buy) => { 
            //            return (
            //           <a href={buy.url} key={buy.url}>
            //               <p>{buy.name}</p>
            //             </a>
            //          );
            //        })}
            //        <img
            //         alt="book" 
            //         src={book.book_image}
            //           style={{ height: 200, width: 100 }}
            //        />
            // </div> 