import Button from "../../common/Button";
import Input from "../../common/Input";
import './LogInForm.css';

export default function LogInForm() {
    return(
        <form className="login_form">
            <div><Input type='text' placeholder='E-Mail или номер телефона'/></div>
            <div><Input type='password' placeholder='Пароль'/></div>
            <div className="login_form_button_wrapper">
                <Button type='submit' config={{wSize: 'WSELF',text_size: 'TMEDIUM',hSize: 'HSMALL'}}>
                    ВОЙТИ
                </Button>
            </div>
        </form>
    )
}