import React from 'react';
import './Review.css';
import { useParams, Link } from 'react-router-dom';

function Review (props) {
  let { reviews } = props;
  let { id } = useParams();

  id = id - 1;
  
  return (
    <div className="review">
      {
        reviews &&
          <div className="review__item">
            <h3>{reviews[id].title}</h3>
            <p>{reviews[id].text}</p>
            <p className="review__rating">Рейтинг:{reviews[id].rating}/5</p>
            <Link to="/reviews">
            <p>Назад</p>
            </Link>
          </div>
      }

    </div>
  );
}

export default Review;
