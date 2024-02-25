// CSS
import './Footer.scss';
// COMPONENTS
import LeaveCommentFrom from './leaveCommentForm/LeaveCommentForm';

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='footer_container'>
                <div className='footer_links'>
                    <div className='footer_links_catalogue'>
                        <h3>КАТАЛОГ</h3>
                        <div><a href='/catalogue'>Одежда</a></div>
                        <div><a href='/'>Повседневные Платья</a></div>
                        <div><a href='/'>Вечерние Платья</a></div>
                        <div><a href='/'>Костюмы/Комплекты</a></div>
                        <div><a href='/'>Свитера/Джемперы</a></div>
                        <div><a href='/'>Юбки/Брюки</a></div>
                    </div>
                    <div className='footer_links_about'>
                        <h3>О КОМПАНИИ</h3>
                        <div><a href='/'>Контакты</a></div>
                        <div><a href='/'>О нас</a></div>
                        <div><a href='/'>Сотрудничество</a></div>
                    </div>
                    <div className='footer_links_customer'>
                        <h3>ПОКУПАТЕЛЮ</h3>
                        <div><a href='/'>Доставка и оплата</a></div>
                        <div><a href='/'>Условия возврата</a></div>
                        <div><a href='/'>Юридическая информация</a></div>
                        <div><a href='/'>Политика конфиденциальности</a></div>
                    </div>
                </div>
                <div className='footer_form_container'>
                    <LeaveCommentFrom />
                </div>
            </div>
            <div className='footer_bottom'>
                <div className='footer_bottom_laws'>
                    © 2024
                </div>
                <div className='footer_bottom_icons'>
                    asd
                </div>
            </div>
        </footer>
    )
}