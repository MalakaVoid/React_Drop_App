import Button from "../../common/Button";
import Input from "../../common/Input";
import './RegisterForm.css';

export default function RegisterForm() {
    return(
        <form className="register_form">
            <div><Input type='text' placeholder='Имя'/></div>
            <div><Input type='email' placeholder='E-Mail'/></div>
            <div><Input type='phone' placeholder='Номер телефона'/></div>
            <div><Input type='password' placeholder='Пароль'/></div>
            <div><Input type='password' placeholder='Подтверждение пароля'/></div>
            <div className="register_form_button_wrapper">
                <Button type='submit' config={{wSize: 'WSELF',text_size: 'TMEDIUM',hSize: 'HSMALL'}}>
                    РЕГИСТРАЦИЯ
                </Button>
            </div>
        </form>
    )
}