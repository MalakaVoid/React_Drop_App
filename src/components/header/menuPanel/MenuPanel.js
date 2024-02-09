// CSS
import './MenuPanel.css';
// ICONS
import CloseIcon from '../../../assets/icons/CloseIcon';
import YoutubeLogo from '../../../assets/socialMediaLogos/YoutubeLogo';
import VkLogo from '../../../assets/socialMediaLogos/VkLogo';
import TelegramLogo from '../../../assets/socialMediaLogos/TelegramLogo';
import TikTokLogo from '../../../assets/socialMediaLogos/TikTokLogo';
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
                    <div><a href='/' >ВЕЧЕРНИЕ ПЛАТЬЯ</a></div>
                    <div><a href='/' >ПОВСЕДНЕВНЫЕ ПЛАТЬЯ</a></div>
                    <div><a href='/' >ТЁПЛЫЕ ПЛАТЬЯ</a></div>
                    <div><a href='/' >БЛУЗКИ/БОДИ/ТУНИКИ</a></div>
                    <div><a href='/' >ЮБКИ</a></div>
                    <div><a href='/' >КАРДИГАНЫ И ПИДЖАКИ</a></div>
                    <div><a href='/' >БРЮКИ</a></div>
                    <div><a href='/' >СВИТЕРА И ДЖЕМПЕРЫ</a></div>
                    <div><a href='/' >КУРТКИ</a></div>
                    <div><a href='/' >ПАЛЬТО</a></div>
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