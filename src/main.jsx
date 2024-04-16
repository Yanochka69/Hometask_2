import React from 'react';
import ReactDOM from 'react-dom/client';

import Profile from '../src/components/Profile.jsx';
import Card from './components/Card.jsx';
import Card2 from './components/Card2.jsx';

import photo from './images/киса.jpg';
import cat1 from './images/cat1.jpg'
import cat2 from './images/cat2.jpeg'
import cat3 from './images/cat3.jpg'
import cat4 from './images/cat4.jpg'
import duck1 from './images/duckling1.jpg'
import duck2 from './images/duckling2.jpg'
import duck3 from './images/duckling3.jpg'
import duck4 from './images/duckling4.jpg'
import duck5 from './images/duckling5.jpg'
import duck6 from './images/duckling6.jpg'
import duck7 from './images/duckling7.jpg'
import duck8 from './images/duckling8.jpg'
import duck9 from './images/duckling9.jpg'
import duck10 from './images/duckling10.jpg'

ReactDOM.createRoot(document.getElementById('profile')).render(
  <React.StrictMode>
    <Profile 
      img={photo}
      fullname='Фатеева Яна'/>
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('can_do')).render(
  <React.StrictMode>
    <h3 className='h3_style'>Могу, умею:</h3>
    <Card 
      text='Python'
      firstElem='работа с разными модулями'
      secondElem='ООП'
      img={cat1}/>
    <Card 
      text='HTML'
      firstElem='блочная вёрстка'
      secondElem='формочки'
      img={cat2}/>
    <Card 
      text='CSS'
      firstElem='адаптивная вёрстка'
      secondElem='использование псевдоклассов'
      img={cat3}/>
    <Card 
      text='Анализ данных'
      firstElem='выявление зависимости'
      secondElem='определение корреляции'
      img={cat4}/>
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('cannot_do_yet')).render(
  <React.StrictMode>
    <h3 className='h3_style'>Хотелось бы попробовать:</h3>
    <Card2
      text='Алгоритмы'
      img={duck1}/>
    <Card2
      text='Структуры данных'
      img={duck2}/>
    <Card2
      text='Многопоточность'
      img={duck3}/>
    <Card2
      text='Базы данных'
      img={duck4}/>
    <Card2
      text='Тестирование'
      img={duck5}/>
    <Card2
      text='Дизайн'
      img={duck6}/>
    <Card2
      text='Архитектура приложений'
      img={duck7}/>
    <Card2
      text='Django'
      img={duck8}/>
    <Card2
      text='Java'
      img={duck9}/>
    <Card2
      text='Микросерверность'
      img={duck10}/>
  </React.StrictMode>,
)