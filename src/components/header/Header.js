// CSS
import './Header.css';
// Images
import CartIcon from '../../assets/icons/CartIcon';
import UserIcon from '../../assets/icons/UserIcon';
import HeartIcon from '../../assets/icons/HeartIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import MenuIcon from '../../assets/icons/MenuIcon';

// COMPONENTS
import MenuPanel from './menuPanel/MenuPanel';
import BgExitBlock from './menuPanel/BgExitBlock';
// REACT
import { useRef, useState } from 'react';
// Transitions
import { CSSTransition } from 'react-transition-group';

export default function Header(){
    const [isMenuOpen, setMenuOpen] = useState(false);
    const hideShowMenu = function(){
        setMenuOpen(!isMenuOpen);
        if (!isMenuOpen){
            document.body.classList.add('no_scroll');
        }
        else{
            document.body.classList.remove('no_scroll');
        }
    };
    const transitionRef = useRef(null);

    return (
        <header>
            <div className='header_wrapper'>
                <div className='menu'>
                    <CSSTransition
                    ref={transitionRef}
                    in={!isMenuOpen}
                    timeout={100}
                    classNames={'header_menu_button_ts'}
                    mountOnEnter
                    unmountOnExit
                    >
                        <div className='header_menu_button' onClick={hideShowMenu}>
                            <MenuIcon />        
                        </div>
                    </CSSTransition>
                </div>
                <div className='header_logo'>
                    Shop ?
                </div>
                <div className='header_nav_items'>
                    <div className='header_search_button'>
                        <SearchIcon />
                    </div>
                    <div className='header_favourite_button'>
                        <HeartIcon />
                    </div>
                    <a href='/account'>
                        <div className='header_user_button'>
                            <UserIcon />
                        </div>
                    </a>
                    <div className='header_cart_button'>
                        <CartIcon />
                    </div>
                </div>
            </div>
            <BgExitBlock active={isMenuOpen} hideMenu={hideShowMenu}/>
            <MenuPanel active={isMenuOpen} hideMenu={hideShowMenu} />
        </header>
    )
}