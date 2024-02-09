import './LeaveCommentForm.css';
import Button from '../../common/Button';
import Input from '../../common/Input';

export default function LeaveCommentFrom(){
    return(
        <form className='leave-comment-block'>
            <h3>ОСТАВЬТЕ ОТЗЫВ</h3>
            <div className='input-container'><Input placeholder='E-Mail' type='email' /></div>
            <div className='input-container'><Input placeholder='Отзыв' type='text' /></div>
            <div className='sub_btn-container'><Button type='submit'>Отправить →</Button></div>
        </form>
    )
}