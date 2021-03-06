//Функция, возвращающая случайное целое число из переданного диапазона включительно (Источник https://learn.javascript.ru/number)
function getRandomNumber(min, max, decimal) {
  if (min >= 0 && max >= 0 && decimal < 20) {
    return (min + Math.random() * (max - min)).toFixed(decimal);
  }
  if ((min >= 0 && max >= 0) && !decimal || decimal === 0) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  throw new RangeError('Входные данные вне диапазона');
}
//Функция получения случайного массива из исходного массива
function getRandomElementsFromArray(features) {
  const maxLength = features.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const elements = [];
  for (let i = elements.length; i < lengthOfArray; i++) {
    const indexOfElement = getRandomNumber(0, maxLength - 1);
    const element = features[indexOfElement];
    if (!elements.includes(element)) {
      elements.push(element);
    }
  }
  return elements;
}
//Функция получения массива из ключей объекта
function getArrayOfObjectKeys(types) {
  const keys = [];
  for (const type in types) {
    keys.push(type);
  }
  return keys;
}
//Функция блокировки или разблокировки всех элементов в форме
function disOrEnableFormElements(form, directive) {
  const allElements = form.elements;
  for (let i = 0, l = allElements.length; i < l; i++) {
    allElements[i].disabled = directive;
  }
}
//Функция создания блока для показа собщения об ошибке
const ALERT_SHOW_TIME = 5000;
function showLoadAlert(message) {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

//Функция показа алерта об успешной отправки данных
function showSuccsessAlert() {
  const alertTemplate = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
  document.body.append(alertTemplate);
  document.addEventListener('click', (evt) => {
    if (evt.target === alertTemplate) {
      alertTemplate.remove();
    }
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      alertTemplate.remove();
    }
  });
}
//Функция показа алерта об ошибке отправки данных
function showErrorAlert() {
  const alertMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
  document.body.append(alertMessage);
  document.addEventListener('click', (evt) => {
    if (evt.target === alertMessage) {
      alertMessage.remove();
    }
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      alertMessage.remove();
    }
  });
  const errorMessageButton = alertMessage.querySelector('.error__button');
  errorMessageButton.addEventListener('click', () => {
    alertMessage.remove();
  });
}

// Источник - https://up.htmlacademy.ru/profession/react/10/javascript/26/tasks/21
// Функция debounce для устранения дребезга
function debounce(callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

export {
  getRandomNumber,
  getRandomElementsFromArray,
  getArrayOfObjectKeys,
  disOrEnableFormElements,
  showLoadAlert,
  showSuccsessAlert,
  showErrorAlert,
  debounce,
};
