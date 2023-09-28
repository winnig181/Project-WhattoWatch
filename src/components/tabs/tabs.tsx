import { Fragment} from 'react';
import {Movie, Comment} from '../../types/types';
import NotFound from '../../pages/not-found/not-found';

type TabsProps = {
  activeTabTitle:string | null | undefined;
  reviews:Comment[];
  film: Movie;
};

const Tabs = ({activeTabTitle, reviews, film}: TabsProps): JSX.Element => {

  if (film) {
    if (activeTabTitle === 'Overview'){
      return (
        <Fragment>
          <div className="film-rating">
            <div className="film-rating__score">{film.rating}</div>
            <p className="film-rating__meta">
              <span className="film-rating__level">*Very good*</span>
              <span className="film-rating__count">{film.scoresCount} ratings</span>
            </p>
          </div>
          <div className="film-card__text">
            <p>{film.description}</p>
            <p className="film-card__director"><strong>Director: {film.director}</strong></p>
            <p className="film-card__starring"><strong>Starring: {film.starring.join(',')} and others </strong></p>
          </div>
        </Fragment>
      );}
    if (activeTabTitle === 'Details'){
      return (
        <div className="film-card__text film-card__row">
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Director</strong>
              <span className="film-card__details-value">{film.director}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Starring</strong>
              <span className="film-card__details-value">
                {film.starring.join(',')}
              </span>
            </p>
          </div>
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Run Time</strong>
              <span className="film-card__details-value">{film.runTime} minutes</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Genre</strong>
              <span className="film-card__details-value">{film.genre} </span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Released</strong>
              <span className="film-card__details-value">{film.released} </span>
            </p>
          </div>
        </div>
      );}
    if (activeTabTitle === 'Reviews'){
      return (
        <div className="film-card__reviews film-card__row">
          <div className="film-card__reviews-col">
            {reviews?.map((review)=> (
              <div className="review" key = {review.id}>
                <blockquote className="review__quote">
                  <p className="review__text">{review.comment}</p>
                  <footer className="review__details">
                    <cite className="review__author">{review.user.name}</cite>
                    <time className="review__date" dateTime="2016-12-24">{review.date}</time>
                  </footer>
                </blockquote>
                <div className="review__rating">{review.rating}</div>
              </div>
            ))}
          </div>
        </div>
      );}
  }
  return <NotFound/>;
};


export default Tabs;
