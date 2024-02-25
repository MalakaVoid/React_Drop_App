import './LeaveCommentForm.scss';
import Button from '../../common/Button';
import Input from '../../common/Input';
import { footer_button_style } from '../../ui/ButtonStyle';

export default function LeaveCommentFrom(){
    return(
        <form className='leave_comment_form'>
            <h3>ОСТАВЬТЕ ОТЗЫВ</h3>
            <div className='leave_comment_form_input'><Input placeholder='E-Mail' type='email' /></div>
            <div className='leave_comment_form_input'><Input placeholder='Отзыв' type='text' /></div>
            <div className='leave_comment_form_button'><button className={footer_button_style}>ОТПРАВИТЬ</button></div>
        </form>
    )
}