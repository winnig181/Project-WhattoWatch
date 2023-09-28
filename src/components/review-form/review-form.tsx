import type { ChangeEvent,FormEvent } from 'react';
import { Fragment, useState } from 'react';
import type { CommentAuth } from '../../types/types';
import { STARS_COUNT } from '../../const';

type FormProps = {
  onSubmit: (formData: Omit<CommentAuth, 'id'>) => void;
}

const Form = ({ onSubmit }: FormProps) => {
  const [text, setText] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      comment: text,
      rating
    });
  };

  return (
    <form action="#" className="add-review__form" method="post" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {Array.from({ length: STARS_COUNT}, (_, i) => (
            <Fragment key = {`Star  ${STARS_COUNT - i}` }>
              <input className="rating__input" id={`star-${STARS_COUNT - i}`}
                type="radio" name="rating"
                value={STARS_COUNT - i}
                checked={STARS_COUNT - i === rating}
                onChange={handleInputChange}
              />
              <label
                className="rating__label"
                htmlFor={`star-${STARS_COUNT - i}`}
              >
                  Rating {STARS_COUNT - i}
              </label>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
          value={text}
          onChange={handleTextareaChange}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">
              Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
