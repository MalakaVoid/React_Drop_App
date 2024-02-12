export default function UserIcon({color}){
    const iconColor = (color)?color:'var(--main-black)';

    return (
        <svg style={{width: 'inherit', height:'inherit'}} width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.537 17.6429C21.8567 17.6429 25.3585 14.1411 25.3585 9.82146C25.3585 5.50179 21.8567 2 17.537 2C13.2174 2 9.71558 5.50179 9.71558 9.82146C9.71558 14.1411 13.2174 17.6429 17.537 17.6429Z" style={{stroke: iconColor}} strokeWidth="2.5"/>
            <path d="M33.3696 37C33.3696 32.8009 31.7015 28.7739 28.7324 25.8047C25.7632 22.8355 21.7361 21.1675 17.5371 21.1675C13.338 21.1675 9.31099 22.8355 6.34182 25.8047C3.37265 28.7739 1.70459 32.8009 1.70459 37H33.3696Z" style={{stroke: iconColor}} strokeWidth="2.5"/>
        </svg>
        

    )
}