
// COMPONENTS
import SwiperBanners from '../../components/home/SwiperBanners.js';
import Header from '../../components/header/Header.js';
import Footer from '../../components/footer/Footer.js';
import CategoriesBlocks from '../../components/home/CategoriesBlocks.js';
import Recomended from '../../components/home/Recomended.js';
// CSS
import './style.css';

export default function Home() {
  return (
    <>
      <Header />
      <section className="banners">
        <SwiperBanners />
      </section>
      <section className='home_categoroes'>
        <CategoriesBlocks />
      </section>
      <section className='recomended_section'>
        <Recomended />
      </section>
      <Footer />
    </>
  );
}
