export default function HeartIcon({color}){
    const iconColor = (color)?color:'var(--main-black)';

    return (
        <svg style={{width: 'inherit', height:'inherit'}} width="43" height="39" viewBox="0 0 43 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.5167 2C36.385 2 41 8.51875 41 14.6C41 26.9156 21.8467 37 21.5 37C21.1533 37 2 26.9156 2 14.6C2 8.51875 6.615 2 13.4833 2C17.4267 2 20.005 3.99063 21.5 5.74063C22.995 3.99063 25.5733 2 29.5167 2Z" style={{stroke: iconColor}} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        

    )
}