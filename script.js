let phrases = [
    { text: 'Отправить другу смешную гифку', image: 'gif/1.gif' },
    { text: 'Посмотреть скидки на авиабилеты', image: 'gif/2.png' },
    { text: 'Разобраться, о чём поют рэперы', image: 'gif/3.png' },
    { text: 'Посмотреть новый ролик Юрия Дудя', image: 'gif/4.png' },
    { text: 'Расставить книги на полке по цвету', image: 'gif/5.png' },
    { text: 'Читать про зарплаты в Сан-Франциско', image: 'gif/6.png' },
    { text: 'Прочитать новости и ужаснуться в комментариях', image: 'gif/7.png' },
    { text: 'Попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'gif/8.png' },
    { text: 'Посмотреть трейлер сериала и заодно первый сезон', image: 'gif/9.png' },
    { text: 'Проверить непрочитанное в Telegram-каналах', image: 'gif/10.png' }
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text)
    smoothly(image, 'src', randomElement.image)
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
  
  for (let i = 0; i <= 2; i = i + 1) {
    smoothly(phrase, 'textContent', phrases[i].text);
    smoothly(image, 'src', phrases[i].image)
  }
