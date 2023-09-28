type ShowMoreProps = {
  onShowMore:(evt: React.MouseEvent<HTMLButtonElement>)=>void;
}

const ShowMore = ({onShowMore}:ShowMoreProps): JSX.Element => (
  <div className="catalog__more">
    <button className="catalog__button" type="button" onClick ={onShowMore}>Show more</button>
  </div>
);

export default ShowMore;
