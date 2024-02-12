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

const categories = [
    {
        name: 'смотреть все',
        link: '/'
    },
    {
        name: 'платья',
        link: '/'
    },
    {
        name: 'Повседневные платья',
        link: '/'
    },
    {
        name: 'Вечерние платья',
        link: '/'
    },
    {
        name: 'Вязаные теплые платья',
        link: '/'
    },
    {
        name: 'юбки',
        link: '/',
    },
    {
        name: 'брюки',
        link: '/',
    },
    {
        name: 'блузки и рубашки',
        link: '/',
    },
    {
        name: 'свитера и кардиганы',
        link: '/',
    },
    {
        name: 'толстовки и свитшоты',
        link: '/',
    },
    {
        name: 'свитера и джемперы',
        link: '/',
    },
    {
        name: 'жилеты',
        link: '/',
    },
    {
        name: 'верхняя одежда',
        link: '/',
    },
    {
        name: 'костюмы',
        link: '/',
    },
    {
        name: 'Спорт костюмы',
        link: '/'
    },
]

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
            <div className='menu_header_container'>
                <div className='close-btn' onClick={hideMenu}><CloseIcon /></div>
                <div className='menu_nav_bar_wrapper'>
                    <a className='menu_search_button'>
                        <SearchIcon color='white' />
                    </a>
                    <a className='menu_favourite_button'>
                        <HeartIcon color='white' />
                    </a>
                    <a href='/login' className='menu_user_button'>
                        <UserIcon color='white' />
                    </a>
                </div>
            </div>
            <div className='menu-content'>
                <div className='clothes-block'>
                    {categories.map((item, index)=>{
                        return <div key={index}><a href={item.link}>{item.name}</a></div>
                    })}
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
            </div>
        </div>
        </CSSTransition>
    )
}