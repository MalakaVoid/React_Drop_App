import './Button.css'

export default function Button({children, type}) {
    return(
        <div className="custom-btn-container">
            <button className="custom-btn" type={type}>
                {children}
            </button>
        </div>
    )
}