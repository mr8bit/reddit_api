import 'babel-polyfill' // Для правильной компиляции jsx кода

import React from 'react' // иморт реакта
import { render } from 'react-dom' // для взаимодействия с dom елментами html страницы
import Root from './containers/Root'

render(
  <Root />,
  document.getElementById('root') // вставляем вместо div #root компонент Root
)