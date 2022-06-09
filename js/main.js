//Функция, возвращающая случайное целое число из переданного диапазона включительно (Источник https://learn.javascript.ru/number)
const getRandomNumber = (min, max, decimal) => {
  if (min>= 0 && max >=0 && decimal<20) {
    return (min + Math.random() * (max - min)).toFixed(decimal);
  }
  if ((min>= 0 && max >=0) && !decimal || decimal===0){
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  throw new RangeError('Входные данные вне диапазона');
};
//Входные данные для создания массива объектов
const COUNT_OBJECTS = 10;
const OFFER_TITLES = [
  'Дворец королей на возвышенности',
  'Апараменты в центре города',
  'Домик у моря',
  'Бунгало в джунглях',
  '6ти звездочный отель',
];
const OFFER_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const OFFER_CHECKIN_TIME = [
  '12:00',
  '13:00',
  '14:00',
];
const OFFER_CHECKOUT_TIME = [
  '12:00',
  '13:00',
  '14:00',
];
const OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const OFFER_DESCRIPTIONS = [
  'Дворец королей с прекрасным видом на окресности',
  'Апараменты в центре города вблизи с основными достопримечательностями',
  'Уютный домик у моря с чистейшим пляжем и тавернами',
  'Бунгало в непроходимых джунглях для уединения',
  '6ти звездочный отель ультра все включено',
];
const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
//Функция получения случайного элемента из массива
const getRandomArrayElement = (elements) => {{return elements[getRandomNumber(0, elements.length - 1)];}};
//Функция создания объекта автор с генерацией сылки аватара
const createObjectAvatarAuthorLink  = (countObject) => {{return {avatar: `img/avatars/user${countObject.toString().padStart(2,'0')}.png`,};}};
//Функция получения случайного массива из исходного массива
const getRandomElementsFromArray = (features) => {
  const maxLength = features.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];
  for(let i = array.length;i < lengthOfArray;i++) {
    const indexOfElement = getRandomNumber(0, maxLength - 1);
    const element = features[indexOfElement];
    if (!array.includes(element)) {
      array.push(element);
    }
  }
  return array;
};
//Функция создания оъекта с данными
const createOfferObject = (count) => {
  const LATITUDE = getRandomNumber(35.65,35.7,5);
  const LONGITUDE = getRandomNumber(139.7,139.8,5);
  return {
    author: createObjectAvatarAuthorLink(count),
    offer: {
      title: getRandomArrayElement(OFFER_TITLES),
      address: `${LATITUDE},${LONGITUDE}`,
      price: getRandomNumber(3000, 10000),
      type: getRandomArrayElement(OFFER_TYPES),
      rooms: getRandomNumber(1, 5),
      guests: getRandomNumber(1, 10),
      checkin: getRandomArrayElement(OFFER_CHECKIN_TIME),
      checkout: getRandomArrayElement(OFFER_CHECKOUT_TIME),
      features: getRandomElementsFromArray(OFFER_FEATURES),
      description: getRandomArrayElement(OFFER_DESCRIPTIONS),
      photos: getRandomElementsFromArray(OFFER_PHOTOS),
    },
    location: {
      iat: LATITUDE,
      ing: LONGITUDE,
    },
  };
};
//Функция создания массива объектов
const createObjectArray = (count) => {
  const arrayObject = [];
  for (let i = 1; i<= count; i++){
    arrayObject.push(createOfferObject(i));
  }
  return arrayObject;
};

createObjectArray(COUNT_OBJECTS);
