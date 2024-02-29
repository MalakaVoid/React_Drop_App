import DarkDress3 from '../../assets/Dreses/DarkDress/1.jfif';
import DarkDress2 from '../../assets/Dreses/DarkDress/2.jfif';
import DarkDress1 from '../../assets/Dreses/DarkDress/3.jfif';
import DarkDress4 from '../../assets/Dreses/DarkDress/4.jfif';
import DarkDress5 from '../../assets/Dreses/DarkDress/5.jfif';
import DarkDress6 from '../../assets/Dreses/DarkDress/6.jfif';
import DarkDress7 from '../../assets/Dreses/DarkDress/7.jfif';

export const productInfo =     {
    id: 2,
    title: 'Коктельное платье',
    article: '12312AF2',
    price: new Intl.NumberFormat('ru-RU').format(7999),
    colors: ['black','green', 'blue', 'white'],
    current_color: 0,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    img: [DarkDress1, DarkDress2, DarkDress3, DarkDress4, DarkDress5, DarkDress6, DarkDress7],
    link: "/product",
    description: "Артикул: 231312312\nСостав: 100% кал, 50% хз что\nСтрана-производитель: РФ\nУход: Ручная стирка в холодной воде, не отбеливать, машинная сушка запрещена, глажение при 110, профессиональная сухая чистка\nПараметры: вырез горловины: V образный; отложной воротничок\nСилуэт: приталенный; тип карманов: без карманов; стиль: вечерний, повседневный\nДлина платья/юбки: ниже колена"
}