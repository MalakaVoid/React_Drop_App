import './CategoriesBlocks.scss';
import blueDress from '../../assets/categories/blue_dress.jfif';
import redDress from '../../assets/categories/red_dress.jfif';
import costume from '../../assets/categories/costume.jfif';
import sport from '../../assets/categories/sport.jfif';
import palto from '../../assets/categories/palto.jfif';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
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
            loop={true}
            slidesPerView={'auto'}
            spaceBetween={0}
            className="home_categories"
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
                {categories_data.map((category, index)=>{
                    return (
                        <SwiperSlide key={index}><a className='home_categories_link' style={{backgroundImage: `url(${category.img})`}}>
                            <span>{category.text}</span>
                        </a></SwiperSlide>
                    )
                })}
            </Swiper>
        )
    }
    else{
        return (
            <div className="home_categories" >
                {categories_data.map((category, index)=>{
                    return (
                        <a key={index} className='home_categories_link' style={{backgroundImage: `url(${category.img})`}}>
                            <span>{category.text}</span>
                        </a>
                    )
                })}
            </div>
        )
    }
}