import Button from "../../common/Button";
import Input from "../../common/Input";
import './RegisterForm.css';
import {auth_button_style} from "../../ui/ButtonStyle";

export default function RegisterForm() {
    return(
        <form className="register_form">
            <div><Input type='text' placeholder='Имя'/></div>
            <div><Input type='email' placeholder='E-Mail'/></div>
            <div><Input type='phone' placeholder='Номер телефона'/></div>
            <div><Input type='password' placeholder='Пароль'/></div>
            <div><Input type='password' placeholder='Подтверждение пароля'/></div>
            <div className="register_form_button_wrapper">
            <button className={auth_button_style}>РЕГИСТРАЦИЯ</button>
            </div>
        </form>
    )
}