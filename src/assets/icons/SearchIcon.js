export default function SearchIcon({color}){
    const iconColor = (color)?color:'var(--main-black)';

    return (
        <svg style={{width: 'inherit', height:'inherit'}} width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.2431 25.2279L37 37M29.2222 15.6111C29.2222 23.1283 23.1283 29.2222 15.6111 29.2222C8.09391 29.2222 2 23.1283 2 15.6111C2 8.09391 8.09391 2 15.6111 2C23.1283 2 29.2222 8.09391 29.2222 15.6111Z" style={{stroke: iconColor}} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}