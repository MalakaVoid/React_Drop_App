import './Input.scss';

export default function Input({placeholder, type}){
    return(
        <div className='custom_input_container'>
            <input placeholder={placeholder} type={type} />
        </div>
    )
}