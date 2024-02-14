import Button from "../../common/Button";
import Input from "../../common/Input";
import './LogInForm.css';
import {auth_button_style} from "../../ui/ButtonStyle";

export default function LogInForm() {
    return(
        <form className="login_form">
            <div><Input type='text' placeholder='E-Mail или номер телефона'/></div>
            <div><Input type='password' placeholder='Пароль'/></div>
            <div className="login_form_button_wrapper">
            <button className={auth_button_style}>ВОЙТИ</button>
            </div>
        </form>
    )
}