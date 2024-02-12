export default function CartIcon({color}){
    const iconColor = (color)?color:'var(--main-black)';

    return (
        <svg style={{width: 'inherit', height:'inherit'}} width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.41622 5.88889H37L33.1111 19.5H10.5103M35.0556 27.2778H11.7222L7.83333 2H2M13.6667 35.0556C13.6667 36.1295 12.7961 37 11.7222 37C10.6483 37 9.77778 36.1295 9.77778 35.0556C9.77778 33.9816 10.6483 33.1111 11.7222 33.1111C12.7961 33.1111 13.6667 33.9816 13.6667 35.0556ZM35.0556 35.0556C35.0556 36.1295 34.185 37 33.1111 37C32.0372 37 31.1667 36.1295 31.1667 35.0556C31.1667 33.9816 32.0372 33.1111 33.1111 33.1111C34.185 33.1111 35.0556 33.9816 35.0556 35.0556Z" style={{stroke: iconColor}} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        
    )
}