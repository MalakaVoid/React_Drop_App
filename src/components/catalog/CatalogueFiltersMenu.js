import { useRef, useState } from 'react';
import FiltersIcon from '../../assets/icons/FiltersIcon';
import BgExitBlock from '../header/menuPanel/BgExitBlock';
import './CatalogueFiltersMenu.css';
import { CSSTransition } from 'react-transition-group';
import CloseIcon from '../../assets/icons/CloseIcon';
import { colors } from '../../assets/TEST_DATA/Colors';
import { sizes } from '../../assets/TEST_DATA/Sizes';
import MultiRangeSlider from './MultiRangeSwiper';
import { filters_button_style } from '../ui/ButtonStyle';

export default function CatalogueFiltersMenu(){
    const [isFiltersShown, setFiltersShown] = useState(false);

    const showFilters = ()=> setFiltersShown(true);
    const hideFilters = ()=> setFiltersShown(false);

    const transitionRef = useRef(null);
    return(
        <>
            <div className='catalogue_products_filters' onClick={()=>showFilters()}>
                <FiltersIcon />
            </div>
            <CSSTransition
                ref={transitionRef}
                in={isFiltersShown}
                timeout={500}
                classNames={'catalogue_products_filters_menu'}
                mountOnEnter
                unmountOnExit
            >
                <div className='catalogue_products_filters_menu'>
                    <div className='catalogue_products_filters_menu_title_bar'>
                        <div className='catalogue_products_filters_menu_title'>
                            ФИЛЬТРЫ
                        </div>
                        <div onClick={()=>hideFilters()} className='catalogue_products_filters_menu_close'>
                            <CloseIcon />
                        </div>
                    </div>
                    <form className='catalogue_products_filters_menu_main'>
                        <div className='catalogue_products_filters_menu_main_title'>
                            Цвет
                        </div>
                        <div className='catalogue_products_filters_menu_main_color'>
                            {colors.map((color, index)=>{
                                return(
                                    <label key={index} className='catalogue_products_filters_menu_main_color_item'>
                                        <input type='checkbox' name={color.name}/>
                                        <div>
                                            <div style={{backgroundColor: color.css}}>
                                            </div>
                                        </div>
                                    </label>
                                )
                            })}
                            
                        </div>
                        <div className='catalogue_products_filters_menu_main_title'>
                            Размер
                        </div>
                        <div className='catalogue_products_filters_menu_main_size'>
                            {sizes.map((size, index)=>{
                                return(
                                    <label key={index} className='catalogue_products_filters_menu_main_size_item'>
                                        <input name={size} type='checkbox'/>
                                        <div>
                                            {size}
                                        </div>
                                    </label>
                                )
                            })}
                        </div>
                        <div className='catalogue_products_filters_menu_main_title'>
                            Стоимость
                        </div>
                        <div className='catalogue_products_filters_menu_main_cost'>
                            <MultiRangeSlider name='Cost' min={1000} max={25000} onChange={({ min, max }) => {}}/>
                        </div>
                        <div className='catalogue_products_filters_menu_button_wrapper'>
                            <button type='submit' className={filters_button_style}>ПРИМЕНИТЬ</button>
                        </div>
                    </form>
                </div>
            </CSSTransition>
            <BgExitBlock active={isFiltersShown} hideMenu={hideFilters} />
        </>
    )
}