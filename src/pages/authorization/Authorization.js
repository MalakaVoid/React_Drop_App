import './Authorization.css';
import imageBackground from '../../assets/categories/costume.jfif';
import LogInForm from '../../components/authorization/Forms/LogInForm';
import { useState } from 'react';
import RegisterForm from '../../components/authorization/Forms/RegisterForm';


export default function Authorization() {
    const [isAuthForm, setisAuthForm] = useState(true)

    return(
        <main className='authorization'>
            <section className='login_bg_image_wrapper'>
                <img src={imageBackground} className='login_bg_image'/>
            </section>
            <section className='log_content_wrapper'>
                <div className='log_content'>
                    <a className='login_logo'>

                    </a>
                    <div className='login_sign_in'>
                        <div className={`login_link ${(isAuthForm)?'active':''}`} onClick={()=>setisAuthForm(true)}>
                            Авторизация
                        </div>
                        <div className={`sign_in_link ${(isAuthForm)?'':'active'}`} onClick={()=>setisAuthForm(false)}>
                            Регистрация
                        </div>
                    </div>
                    {(isAuthForm)?<LogInForm />:<RegisterForm />}
                </div>
            </section>
        </main>
    )
}