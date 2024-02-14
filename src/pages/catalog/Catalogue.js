import CatalogueProducts from '../../components/catalog/CatalogueProducts';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Catalogue.css';

export default function Catalog(){
    return(
        <>
            <Header />
            <main>
                <CatalogueProducts />
            </main>
            <Footer />
        </>
    )
}