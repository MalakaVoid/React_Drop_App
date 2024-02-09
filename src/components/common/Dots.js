import './Dots.css';


export default function Dots(props){
    const isActive = props.isActive;

    return (
        <div className='owl-dot' style={isActive?{backgroundColor: 'black'}:{}}></div>
    )
}