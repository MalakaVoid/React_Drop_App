import './Authorization.scss';
import imageBackground from '../../assets/categories/costume.jfif';
import LogInForm from '../../components/authorization/Forms/LogInForm';
import { useState } from 'react';
import RegisterForm from '../../components/authorization/Forms/RegisterForm';


export default function Authorization() {
    const [isAuthForm, setisAuthForm] = useState(true);

    return(
        <main className='authorization'>
            <section className='authorization_bg_image_wrapper'>
                <img src={imageBackground} className='authorization_bg_image'/>
            </section>
            <section className='authorization_content_wrapper'>
                <div className='authorization_content'>
                    <a className='authorization_content_logo'>

                    </a>
                    <div className='authorization_content_links'>
                        <div className={`authorization_content_links_login ${(isAuthForm)?'active':''}`} onClick={()=>setisAuthForm(true)}>
                            Авторизация
                        </div>
                        <div className={`authorization_content_links_sign_in ${(isAuthForm)?'':'active'}`} onClick={()=>setisAuthForm(false)}>
                            Регистрация
                        </div>
                    </div>
                    {(isAuthForm)?<LogInForm />:<RegisterForm />}
                </div>
            </section>
        </main>
    )
}