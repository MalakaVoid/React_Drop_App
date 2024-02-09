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
        setMenuOpen(!isMenuOpen)
    };
    const transitionRef = useRef(null);

    return (
        <header>
            <div className='header-content'>
                <div className='menu'>
                    <CSSTransition
                    ref={transitionRef}
                    in={!isMenuOpen}
                    timeout={100}
                    classNames={'menu-btn-ts'}
                    mountOnEnter
                    unmountOnExit
                    >
                        <div className='menu-btn' onClick={hideShowMenu}>
                            <MenuIcon />        
                        </div>
                    </CSSTransition>
                </div>
                <div className='logo'>
                    Shop ?
                </div>
                <div className='user-nav'>
                    <div className='search'>
                        <SearchIcon />
                    </div>
                    <div className='favourite'>
                        <HeartIcon />
                    </div>
                    <div className='user'>
                        <UserIcon />
                    </div>
                    <div className='cart'>
                        <CartIcon />
                    </div>
                </div>
            </div>
            <BgExitBlock active={isMenuOpen} hideMenu={hideShowMenu}/>
            <MenuPanel active={isMenuOpen} hideMenu={hideShowMenu} />
        </header>
    )
}