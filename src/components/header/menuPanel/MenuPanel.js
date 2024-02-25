// CSS
import './MenuPanel.scss';
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
import use100vh from '../../../hooks/use100vh';

const categories = [
    {
        name: 'смотреть все',
        link: '/catalogue'
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
    const ref100vhFixer = use100vh();
    return (
        <CSSTransition 
            ref={transitionRef}
            in={active}
            timeout={500}
            classNames={'left_menu'}
            mountOnEnter
            unmountOnExit
        >
        <div className='left_menu' ref={ref100vhFixer}>
            <div className='left_menu_head'>
                <div className='left_menu_head_close_button' onClick={hideMenu}><CloseIcon /></div>
                <div className='left_menu_head_nav_bar'>
                    <a className='left_menu_search_button'>
                        <SearchIcon color='white' />
                    </a>
                    <a className='left_menu_favourite_button'>
                        <HeartIcon color='white' />
                    </a>
                    <a href='/login' className='left_menu_user_button'>
                        <UserIcon color='white' />
                    </a>
                </div>
            </div>
            <div className='left_menu_content'>
                <div className='left_menu_content_clothes'>
                    {categories.map((item, index)=>{
                        return <div key={index}><a href={item.link}>{item.name}</a></div>
                    })}
                </div>
                <div className='left_menu_content_delivery'>
                    <div><a href='/' >ДОСТАВКА И ОПЛАТА</a></div>
                    <div><a href='/' >УСЛОВИЯ ВОЗВРАТА</a></div>
                </div>
                <div className='left_menu_content_about'>
                    <div><a href='/' >КОНТАКТЫ</a></div>
                    <div><a href='/' >О НАС</a></div>
                    <div><a href='/' >СОТРУДНИЧЕСТВО</a></div>
                </div>
                <div className='left_menu_cm_logos'>
                    <a href='/' className='yt_logo mini_icon'>
                        <YoutubeLogo />
                    </a>
                    <a href='/' className='vk_logo mini_icon'>
                        <VkLogo />
                    </a>
                    <a href='/' className='tg_logo mini_icon'>
                        <TelegramLogo />
                    </a>
                    <a href='/' className='tk_logo mini_icon'>
                        <TikTokLogo />
                    </a>
                </div>
            </div>
        </div>
        </CSSTransition>
    )
}