// CSS
import './Header.scss';
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
import { useEffect, useRef, useState } from 'react';
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

    const [headerBG, setHeaderBG] = useState({backgroundColor: 'rgba(0,0,0,0)'})

    const headerBGOpacity = ()=>{
        if (window.scrollY < 10){
            setHeaderBG({backgroundColor: 'rgba(0,0,0,0)'});
            console.log(1);
        } else{
            setHeaderBG({backgroundColor: 'var(--white-main)'});
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll', headerBGOpacity)
        return () =>
            window.removeEventListener('scroll', headerBGOpacity);
        }, 
        []);

    return (
        <header className='header' style={headerBG}>
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
                    <a className='header_search_button'>
                        <SearchIcon />
                    </a>
                    <a className='header_favourite_button'>
                        <HeartIcon />
                    </a>
                    <a className='header_user_button' href='/login'>
                        <UserIcon />
                    </a>
                    <a className='header_cart_button'>
                        <CartIcon />
                    </a>
                </div>
            </div>
            <BgExitBlock active={isMenuOpen} hideMenu={hideShowMenu}/>
            <MenuPanel active={isMenuOpen} hideMenu={hideShowMenu} />
        </header>
    )
}