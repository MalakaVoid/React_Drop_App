import { useRef, useState } from 'react';
import FiltersIcon from '../../assets/icons/FiltersIcon';
import BgExitBlock from '../header/menuPanel/BgExitBlock';
import './CatalogueFiltersMenu.scss';
import { CSSTransition } from 'react-transition-group';
import CloseIcon from '../../assets/icons/CloseIcon';
import { colors } from '../../assets/TEST_DATA/Colors';
import { sizes } from '../../assets/TEST_DATA/Sizes';
import MultiRangeSlider from './MultiRangeSwiper';
import { filters_button_style } from '../ui/ButtonStyle';
import use100vh from '../../hooks/use100vh';

export default function CatalogueFiltersMenu(){
    const [isFiltersShown, setFiltersShown] = useState(false);

    const showFilters = ()=> {
        setFiltersShown(true);
        document.body.classList.add('no_scroll');
    };
    const hideFilters = ()=> {
        setFiltersShown(false);
        document.body.classList.remove('no_scroll');
    };

    const transitionRef = useRef(null);
    const ref100vhFixer = use100vh();

    const [formData, setFormData] = useState({sizes: [], colors: [], minPrice: 0, maxPrice: 25000});

    const onSizeChange = (event)=>{
        if (event.target.checked){
            formData.sizes.push(event.target.name);
            setFormData(formData);
            return;
        }
        let indexEl = formData.sizes.indexOf(event.target.name);
        formData.sizes.splice(indexEl, 1);
        setFormData(formData);
    }
    const onColorChange = (event)=>{
        if (event.target.checked){
            formData.colors.push(event.target.name);
            setFormData(formData);
            return;
        }
        let indexEl = formData.colors.indexOf(event.target.name);
        formData.colors.splice(indexEl, 1);
        setFormData(formData);
    }
    const onPriceChange = (min_max)=>{
        formData.minPrice = min_max.min;
        formData.maxPrice = min_max.max;
        setFormData(formData);
    }

    const submitFilters = (event)=>{
        event.preventDefault();
        hideFilters();
        console.log(formData);
    }

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
                <div ref={ref100vhFixer} className='catalogue_products_filters_menu'>
                    <div className='catalogue_products_filters_menu_title_bar'>
                        <div className='catalogue_products_filters_menu_title'>
                            ФИЛЬТРЫ
                        </div>
                        <div onClick={()=>hideFilters()} className='catalogue_products_filters_menu_close'>
                            <CloseIcon />
                        </div>
                    </div>
                    <form className='catalogue_products_filters_menu_main' onSubmit={submitFilters}>
                        <div className='catalogue_products_filters_menu_main_title'>
                            Цвет
                        </div>
                        <div className='catalogue_products_filters_menu_main_color'>
                            {colors.map((color, index)=>{
                                return(
                                    <label key={index} className='catalogue_products_filters_menu_main_color_item'>
                                        <input type='checkbox' onChange={onColorChange} name={color.name}/>
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
                                        <input name={size} onChange={onSizeChange} type='checkbox'/>
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
                            <MultiRangeSlider name='Cost' min={500} max={25000} onChange={onPriceChange}/>
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