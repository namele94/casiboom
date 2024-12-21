import {Product, Event} from '../types';

export const products: Product[] = [
  // Категория: Мангал
  {
    id: '1',
    name: 'Шашлык острый',
    image:
      'https://avatars.mds.yandex.net/get-altay/1880524/2a0000016b94500b81c582628c792fb58cce/XXL_height',
    category: 'мангал',
    price: 250,
  },
  {
    id: '2',
    name: 'Куриные крылышки',
    image:
      'https://avatars.mds.yandex.net/i?id=87d122cb4324c9dca35a5a902d4f1a5d_l-12569572-images-thumbs&n=13',
    category: 'мангал',
    price: 200,
  },
  {
    id: '3',
    name: 'Рыбный стейк',
    image:
      'https://studio.jvcompany.ru/system/sessions/0002/1810/21810-mcard.jpg?1656765848',
    category: 'мангал',
    price: 300,
  },
  {
    id: '4',
    name: 'Люля-кебаб',
    image:
      'https://shashlichoks.ru/wp-content/uploads/2023/03/%D0%BA%D0%B5%D0%B1%D0%B0%D0%B1-%D0%B8%D0%B7-%D0%B3%D0%BE%D0%B2%D1%8F%D0%B4%D0%B8%D0%BD%D1%8B-600x600.jpg',
    category: 'мангал',
    price: 220,
  },
  {
    id: '5',
    name: 'Овощи на гриле',
    image: 'https://шашлык-краснодар.рф/images/i--8-.jpg',
    category: 'мангал',
    price: 180,
  },

  // Категория: Салаты, закуски
  {
    id: '6',
    name: 'Цезарь с курицей',
    image:
      'https://i.absurdopedia.net/thumb/3/3c/%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8C.jpg/600px-%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8C.jpg',
    category: 'салаты, закуски',
    price: 180,
  },
  {
    id: '7',
    name: 'Греческий салат',
    image:
      'https://kuhni-mira.ru/wp-content/uploads/2020/04/%D0%93%D1%80%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9.jpg',
    category: 'салаты, закуски',
    price: 170,
  },
  {
    id: '8',
    name: 'Тартар из лосося',
    image: 'https://sushimore.com/wp-content/uploads/2020/04/Tartar-salmon.jpg',
    category: 'салаты, закуски',
    price: 250,
  },
  {
    id: '9',
    name: 'Закуска из баклажанов',
    image:
      'https://timesfood.ru/wp-content/uploads/2020/07/%D1%80%D1%83%D0%BB%D0%B5%D1%82%D0%B8%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%B1%D0%B0%D0%BA%D0%BB%D0%B0%D0%B6%D0%B0%D0%BD%D0%BE%D0%B2-600x600.jpg',
    category: 'салаты, закуски',
    price: 160,
  },
  {
    id: '10',
    name: 'Капрезе с томатами и моцареллой',
    image:
      'https://sun9-61.userapi.com/impg/kHMbcJG_1IN_SGZqdvjCZmI8GBngZGr2ZIGf0Q/g5qwExRZ2q8.jpg?size=600x600&quality=96&sign=ed0b3bf190036e3c3662640dd228154c&c_uniq_tag=ASyBJjFDb1J3OiZrwMp7nwa97b50l17OxLrJarcFf5U&type=album',
    category: 'салаты, закуски',
    price: 190,
  },

  // Категория: первые блюда
  {
    id: '11',
    name: 'Украинский борщ',
    image:
      'https://static-actual-production.chibbis.ru/ccf545fb97b10fccdb94057e99cda855.jpeg',
    category: 'первые блюда',
    price: 150,
  },
  {
    id: '12',
    name: 'Суп-пюре из грибов',
    image:
      'https://avatars.mds.yandex.net/i?id=6e7ad998755ec1c3e75a502e73986462_l-3979623-images-thumbs&n=13',
    category: 'первые блюда',
    price: 140,
  },
  {
    id: '13',
    name: 'Рассольник с говядиной',
    image:
      'https://p2.zoon.ru/preview/tsfFMoECMri0i79BH5z5ZQ/800x800x85/1/7/b/original_5fe1a6ee274d1c753c4d8e4e_5fe1f16e6b4fb.jpg',
    category: 'первые блюда',
    price: 160,
  },
  {
    id: '14',
    name: 'Томатный суп с базиликом',
    image:
      'https://cafechaihana.ru/wp-content/uploads/2020/03/tomatnyj-sup-pyure-v-chajhane-fusion.jpg',
    category: 'первые блюда',
    price: 130,
  },
  {
    id: '15',
    name: 'Куриный бульон с лапшой',
    image: 'https://new.lyubimiigorod.ru/images/catalog/63a88354a3fe5.jpeg',
    category: 'первые блюда',
    price: 120,
  },

  // Дополнительные блюда
  {
    id: '16',
    name: 'Шашлык из индейки',
    image:
      'https://wrongdirectionfarm.com/wp-content/uploads/2022/04/Turkey-Kabobs-1536x1536-1-600x600.jpg',
    category: 'мангал',
    price: 270,
  },
  {
    id: '17',
    name: 'Салат из морепродуктов',
    image:
      'https://avatars.mds.yandex.net/i?id=8d9c12f156f4205a16e9ebbc90296161_l-5333586-images-thumbs&n=13',
    category: 'салаты, закуски',
    price: 260,
  },
  {
    id: '18',
    name: 'Крем-суп из тыквы',
    image:
      'https://avatars.mds.yandex.net/i?id=e26aef1f293def631fc5edc6f9956e10160e95cd-7752980-images-thumbs&n=13',
    category: 'первые блюда',
    price: 140,
  },
  {
    id: '19',
    name: 'Сибас на гриле',
    image:
      'https://sun9-31.userapi.com/impg/ZzLAV5dWUZEU6VS8aMatrPE0oOeOvgVCLt5eyA/mUqunu4j5Lk.jpg?size=600x600&quality=95&sign=caa02dccd59376d9390f88ce0d9386ac&type=album',
    category: 'мангал',
    price: 320,
  },
  {
    id: '20',
    name: 'Закуска из авокадо',
    image:
      'https://i.pinimg.com/736x/5b/99/b2/5b99b2d73fc2f0c4d2c3ab6c7628337f.jpg',
    category: 'салаты, закуски',
    price: 210,
  },
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Крикетный день',
    date: '30 ноября в 18:00',
    description: 'Погрузитесь в мир крикета!',
  },
  {
    id: '2',
    title: 'Регби-вечер',
    date: '29 ноября в 18:00',
    description: 'Захватывающие трансляции матчей!',
  },
];

export const filterData: string[] = [
  'Мангал',
  'Салаты, Закуски',
  'Первые блюда',
];
