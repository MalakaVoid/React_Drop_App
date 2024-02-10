// CSS
import './MenuPanel.css';
// ICONS
import CloseIcon from '../../../assets/icons/CloseIcon';
import YoutubeLogo from '../../../assets/socialMediaLogos/YoutubeLogo';
import VkLogo from '../../../assets/socialMediaLogos/VkLogo';
import TelegramLogo from '../../../assets/socialMediaLogos/TelegramLogo';
import TikTokLogo from '../../../assets/socialMediaLogos/TikTokLogo';
import UserIcon from '../../../assets/icons/UserIcon';
import HeartIcon from '../../../assets/icons/HeartIcon';
import SearchIcon from '../../../assets/icons/SearchIcon';
import MenuIcon from '../../../assets/icons/MenuIcon';
// REACT
import {CSSTransition } from 'react-transition-group';
import { useRef } from 'react';


export default function MenuPanel({active, hideMenu}){
    const transitionRef = useRef(null);
    return (
        <CSSTransition 
            ref={transitionRef}
            in={active}
            timeout={500}
            classNames={'menu-root'}
            mountOnEnter
            unmountOnExit
        >
        <div className='menu-root' >
            <div className='close-container'>
                <div className='close-btn' onClick={hideMenu}><CloseIcon /></div>
            </div>
            <div className='menu-content'>
                <div className='clothes-block'>
                    <div><a href='/' >Смотреть все</a></div>
                    <div><a href='/' >ПЛАТЬЯ</a></div>
                    <div><a href='/' >КОСТЮМЫ</a></div>
                    <div><a href='/' >ЮБКИ</a></div>
                    <div><a href='/' >БРЮКИ</a></div>
                    <div><a href='/' >БЛУЗКИ И РУБАШКИ</a></div>
                    <div><a href='/' >СВИТЕРА И КАРДИГАНЫ</a></div>
                    <div><a href='/' >ТОЛСТОВКИ И СВИТШОТЫ</a></div>
                    <div><a href='/' >СВИТЕРА И ДЖЕМПЕРЫ</a></div>
                    <div><a href='/' >ЖИЛЕТЫ</a></div>
                    <div><a href='/' >ВЕРХНЯЯ ОДЕЖДА</a></div>
                </div>
                <div className='delivery-block'>
                    <div><a href='/' >ДОСТАВКА И ОПЛАТА</a></div>
                    <div><a href='/' >УСЛОВИЯ ВОЗВРАТА</a></div>
                </div>
                <div className='about-block'>
                    <div><a href='/' >КОНТАКТЫ</a></div>
                    <div><a href='/' >О НАС</a></div>
                    <div><a href='/' >СОТРУДНИЧЕСТВО</a></div>
                </div>
                <div className='cm-logos'>
                    <a href='/' className='yt-logo'>
                        <YoutubeLogo />
                    </a>
                    <a href='/' className='vk-logo'>
                        <VkLogo />
                    </a>
                    <a href='/' className='tg-logo'>
                        <TelegramLogo />
                    </a>
                    <a href='/' className='tk-logo'>
                        <TikTokLogo />
                    </a>
                </div>
                <div className='menu_nav_bar_blank'></div>
            </div>
            <div className='menu_nav_bar_wrapper'>
                <div className='menu_search_button'>
                    <SearchIcon color='white' />
                </div>
                <div className='menu_favourite_button'>
                    <HeartIcon color='white' />
                </div>
                <a href='/account'>
                    <div className='menu_user_button'>
                        <UserIcon color='white' />
                    </div>
                </a>
            </div>
        </div>
        </CSSTransition>
    )
}