import './CategoriesBlocks.css';
import blueDress from '../../assets/categories/blue_dress.jfif';
import redDress from '../../assets/categories/red_dress.jfif';
import costume from '../../assets/categories/costume.jfif';
import sport from '../../assets/categories/sport.jfif';
import palto from '../../assets/categories/palto.jfif';


export default function CategoriesBlocks() {
    return(
        <div className="categories_wrapper">
            <div className="categories_row categories_row_first">
                <a style={{backgroundImage: `url(${blueDress})`}}>
                    <span>ПОВСЕДНЕВНЫЕ ПЛАТЬЯ</span>
                </a>
                <a style={{backgroundImage: `url(${redDress})`}}>
                    <span>ВЕЧЕРНИЕ ПЛАТЬЯ</span>
                </a>
            </div>
            <div className="categories_row categories_row_equal">
                <a style={{backgroundImage: `url(${costume})`}}>
                    <span>КОСТЮМЫ/КОМПЛЕКТЫ</span>
                </a>
                <a style={{backgroundImage: `url(${sport})`}}>
                    <span>СПОРТ КОСТЮМЫ</span>
                </a>
                <a style={{backgroundImage: `url(${palto})`}}>
                    <span>ПАЛЬТО/КУРТКИ</span>
                </a>
            </div>
        </div>
    )
}