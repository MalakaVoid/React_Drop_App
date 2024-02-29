import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProductContent from "../../components/product/ProductContent";
import { productInfo } from "../../assets/TEST_DATA/ProductForProduct";
import './Product.scss';
import { recomended_items } from '../../assets/TEST_DATA/RecomendedProducts';
import Recomended from "../../components/home/Recomended";


export default function Product() {
    return (
      <>
        <Header />
        <div className="product_info_wrapper">
          <ProductContent product_info={productInfo}/>
        </div>
        <Recomended title='ПОХОЖЕЕ' recomended_products={recomended_items}/>
        <Footer />
      </>
    );
  }
  