import React, { useState, useEffect } from "react";
import "./Review.css"
import Spinner from "./Spinner"

export default function Review({ match }) {
  const id = match.params.id;
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState({ status: false, text: "Error 404" })
  const [bookReview, setBookReview] = useState([]);
  const url = `https://api.nytimes.com/svc/books/v3/reviews.json?isbn=${id}&api-key=hQDkXe5sQVHgTHMgHrVG9xJyxWcRoJkZ`;
  function fetchReview() {
    fetch(url)
    setLoading(true)
      .then((res) => {
        if (res.status !== "OK") setIsError({ status: true, text: "Error 404" })
        return res.json();
      })
      .then((data) => {
        setLoading(false)
        setIsError({ status: false })
        setBookReview(data.results[0]);
      })
      .catch((err) => {
        setIsError({ status: true, text: err })
      });
  };

  useEffect(() => {
    fetchReview();
  }, [url]);

  return (
    <div>
      {loading ? <Spinner loading={loading} /> : null}
      {isError.status ? <h1>{isError.text}</h1> : null}
      {bookReview !== undefined ? (<div className="review">
        <div className="reviewP">
          <p>{bookReview.book_title}</p>
          <p>{bookReview.book_author}</p>
          <p>{bookReview.summary}</p>
          <a href={bookReview.url}>{bookReview.byline}</a>
          <a href="/">Back</a>
        </div>
      </div>) : <div className="reviewE">
        <div className="reviewErr">
          <p>sorry There Is No Review </p>
          <a href="/">Back</a>
        </div>
      </div>}
    </div>
  );
}
