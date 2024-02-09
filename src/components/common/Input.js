import './Input.css';

export default function Input({placeholder, type}){
    return(
        <div className='custom-input-container'>
            <input placeholder={placeholder} type={type} />
        </div>
    )
}