import CatalogueProducts from '../../components/catalog/CatalogueProducts';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Recomended from '../../components/home/Recomended';
import './Catalogue.scss';
import { catalogue_products } from '../../assets/TEST_DATA/CatalofueProducts';
import { recomended_items } from '../../assets/TEST_DATA/RecomendedProducts';
export default function Catalog(){
    return(
        <>
            <Header />
            <main className='catalogue'>
                <CatalogueProducts products={catalogue_products} />
                <Recomended title='ХИТ СЕЗОНА' recomended_products={recomended_items}/>
            </main>
            <Footer />
        </>
    )
}