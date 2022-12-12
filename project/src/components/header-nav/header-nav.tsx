import {logoutAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {redirectToRoute} from '../../store/action';
import {AppRoute} from '../../const';
import {getUserData} from '../../store/user-process/selectors';

function HeaderNav(): JSX.Element {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserData);
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <div className="header__nav-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            { userData?.email && <span className="header__user-name user__name">{userData.email}</span> }
          </div>
        </li>
        <li className="header__nav-item">
          <a
            className="header__nav-link"
            href="#"
            onClick={(evt) => {
              evt.preventDefault();
              userData ? dispatch(logoutAction()) : dispatch(redirectToRoute(AppRoute.Login));
            }}
          >
            {userData ? <span className="header__signout">Sign out</span> : <span className="header__login">Sign in</span>}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
