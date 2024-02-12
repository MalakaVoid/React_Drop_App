import './Button.css'

const button_config = {
    WMAX: 'w-full',
    WSELF: 'inline-block',
    HBIG: 'py-3',
    HSMALL: 'py-1',
    TSMALL: 'text-desctop-sup',
    TMEDIUM: 'text-desctop-main',
    TBIG: 'text-desctop-title',

}

export default function Button({children, type, config}) {
    const wSize = button_config[config.wSize];
    const textSize = button_config[config.text_size];
    const hSize = button_config[config.hSize];


    return (
        <button className={`${wSize} ${textSize} ${hSize} px-5 font-normal border border-solid  border-main-black bg-none transition duration-200 ease-in-out hover:bg-main-black hover:text-white-main`} type={type}>
            {children}
        </button>
    )
}