import './CategoriesBlocks.css';
import blueDress from '../../assets/categories/blue_dress.jfif';
import redDress from '../../assets/categories/red_dress.jfif';
import costume from '../../assets/categories/costume.jfif';
import sport from '../../assets/categories/sport.jfif';
import palto from '../../assets/categories/palto.jfif';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useWindowWidth from '../../hooks/useWindowWidth';


const categories_data = [
    {
        img: blueDress,
        href: '',
        text: 'ПОВСЕДНЕВНЫЕ ПЛАТЬЯ'
    },
    {
        img: redDress,
        href: '',
        text: 'ВЕЧЕРНИЕ ПЛАТЬЯ'
    },
    {
        img: costume,
        href: '',
        text: 'КОСТЮМЫ/КОМПЛЕКТЫ'
    },
    {
        img: sport,
        href: '',
        text: 'СПОРТ КОСТЮМЫ'
    },
    {
        img: palto,
        href: '',
        text: 'ПАЛЬТО/КУРТКИ'
    },
]

export default function CategoriesBlocks() {
    const windowWidth = useWindowWidth();

    if (windowWidth < 1024){ 
        return(
            <Swiper
            slidesPerView={'auto'}
            spaceBetween={0}
            className="categories_wrapper"
            >
                {categories_data.map((category)=>{
                    return (
                        <SwiperSlide><a className='categories_wrapper_link' style={{backgroundImage: `url(${category.img})`}}>
                            <span>{category.text}</span>
                        </a></SwiperSlide>
                    )
                })}
            </Swiper>
        )
    }
    else{
        return (
            <div className="categories_wrapper" >
                {categories_data.map((category)=>{
                    return (
                        <a className='categories_wrapper_link' style={{backgroundImage: `url(${category.img})`}}>
                            <span>{category.text}</span>
                        </a>
                    )
                })}
            </div>
        )
    }
}