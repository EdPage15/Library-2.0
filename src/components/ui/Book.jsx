import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const image = new Image();
    image.src = book.url;

    image.onload = () => {
      setTimeout(() => {
        if (isMounted) {
          setIsLoaded(true);
        }
      }, 300);
    };

    return () => {
      isMounted = false; // Prevents state updates if the component unmounts
    };
  }, [book.url]); // Dependency array ensures this only runs when the URL changes

  return (
    <div className="book">
      {isLoaded ? (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img 
                src={book.url} 
                alt={book.title} 
                className="book__img" 
              />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Rating rating={book.rating} />
          <Price 
            salePrice={book.salePrice} 
            originalPrice={book.originalPrice} 
          />
        </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Book;