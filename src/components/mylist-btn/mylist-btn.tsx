import { Movie } from '../../types/types';
import { memo } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { postFavorite } from '../../store/action';
import { getIsAuthorized } from '../../store/user-process/selectors';

type MyListBtnProps = {
    id: Movie['id'];
    isActive: boolean;
}

const MyListBtn = ({ id, isActive }: MyListBtnProps) => {
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(getIsAuthorized);

  const handleButtonClick = () => {
    dispatch(postFavorite({
      id,
      status: isActive ? 0 : 1
    }));
  };

  return (
    <button
      onClick={handleButtonClick}
      className="btn btn--list film-card__button" type="button"
    >
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref={(isActive && isAuthorized) ? '#in-list' : '#add'} />
      </svg>
      <span>My list</span>
    </button>
  );
};

export default memo(MyListBtn, (prevProps, nextProps) => prevProps.isActive === nextProps.isActive);
