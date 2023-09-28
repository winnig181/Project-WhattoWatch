/* eslint-disable jsx-a11y/anchor-is-valid */
import {TAB_TITLES as tabTitles} from '../../const' ;
//

type TabsNavProps = {
  activeTabTitle: string;
  onShowTab:(evt: React.MouseEvent<HTMLAnchorElement> & EventTarget)=>void;
}

const TabsNav = ({onShowTab,activeTabTitle}:TabsNavProps): JSX.Element => (
  <nav className="film-nav film-card__nav">
    <ul className="film-nav__list">
      {tabTitles.map((tabTitle) => (
        (activeTabTitle === tabTitle) ? (
          <li className="film-nav__item film-nav__item--active" key = {tabTitles.indexOf(tabTitle)}>
            <a href="#" className="film-nav__link" onClick={onShowTab} >{tabTitle}</a>
          </li>) : (
          <li className= "film-nav__item" key = {tabTitles.indexOf(tabTitle)}>
            <a href="#" className="film-nav__link" onClick={onShowTab} >{tabTitle}</a>
          </li>)
      ))}
    </ul>
  </nav>
);

export default TabsNav;
