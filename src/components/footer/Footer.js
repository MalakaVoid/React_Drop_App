// CSS
import './Footer.css';
// COMPONENTS
import LeaveCommentFrom from './leaveCommentForm/LeaveCommentForm';

export default function Footer(){
    return(
        <footer>
            <div className='footer-container'>
                <div className='link-blocks'>
                    <div className='catalogue'>
                        <h3>КАТАЛОГ</h3>
                        <div><a href='/'>Одежда</a></div>
                        <div><a href='/'>Повседневные Платья</a></div>
                        <div><a href='/'>Вечерние Платья</a></div>
                        <div><a href='/'>Костюмы/Комплекты</a></div>
                        <div><a href='/'>Свитера/Джемперы</a></div>
                        <div><a href='/'>Юбки/Брюки</a></div>
                    </div>
                    <div className='about-company'>
                        <h3>О КОМПАНИИ</h3>
                        <div><a href='/'>Контакты</a></div>
                        <div><a href='/'>О нас</a></div>
                        <div><a href='/'>Сотрудничество</a></div>
                    </div>
                    <div className='to-customer'>
                        <h3>ПОКУПАТЕЛЮ</h3>
                        <div><a href='/'>Доставка и оплата</a></div>
                        <div><a href='/'>Условия возврата</a></div>
                        <div><a href='/'>Юридическая информация</a></div>
                        <div><a href='/'>Политика конфиденциальности</a></div>
                    </div>
                </div>
                <div className='form-container'>
                    <LeaveCommentFrom />
                </div>
            </div>
            <div className='bottom-container'>
                <div className='laws'>
                    © 2024
                </div>
                <div className='icons-container'>
                    asd
                </div>
            </div>
        </footer>
    )
}