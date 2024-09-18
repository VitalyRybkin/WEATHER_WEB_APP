WEB-ПРИЛОЖЕНИЕ: ПРОГНОЗ ПОГОДЫ (клиент)
=
***
**ОПИСАНИЕ:**

_клиентская часть web-приложения прогноза погоды с использованием интерактивных элементов и адаптивной верстки_

***
**СТЭК:**
+	HTML3
+	CSS5
+	JavaScript
+	React + Redux
+	Material UI

***

**АРХИТЕКТУРА:**
+ src - директория проекта
  + assets - изображения, используемые на страницах проекта
  + components - компоненты React
  + elements - элементы, используемые в компонентах React
  + handlers - запросы к сторонним ресурсам - API, БД и пр.
  + reducers - редьюсеры Redux
  + store.jsx - хранилище дерева состояний Redux
  + normalize.css, index.css - стили css
  + App.jsx - корневой компонент приложения
  + main.jsx - стартовый файл проекта
+ index.html - главная страница проекта
+ 
***
**TODO:**
+ пересмотр дизайна приложения для мобильных устройств с целью более компактного и удобного расположения контента
+ вывод информации пользователю в случае сбоя подключения к API сервису
+ регистрация ползователя
+ для зарегистрированных пользователей:
  + переключние темы - темная/белая
  + настройки отображения/скрытия компонентов страницы
  + создание и редактирование списка избранных мест отображения прогноза погоды
  + настройка периодов отображения прогноза погоды
***
***
WEB-APPLICATION: WEATHER FORECAST (CLIENT)
=
***
**DESCRIPTION:**

_client side of weather forecast web-application with interactive elements and adaptive layout_

***
**TECHNOLOGIES:**
+	HTML3
+	CSS5
+	JavaScript
+	React + Redux
+	Material UI

***

**ARCHITECTURE:**
+ src - project directory
    + assets - project images and videos
    + components - React components
    + elements - elements for React components
    + handlers - third parity requests - API, database, etc.
    + reducers - Redux reducers
    + store.jsx - Redux state tree storage
    + normalize.css, index.css - style sheets
    + App.jsx - application root component
    + main.jsx - project starting point
+ index.html - project main page
***
**TODO**
+ UI re-design for mobile devices for more compact and convenient content arrangement
+ user registration
+ for registered users:
    + black/white theme switch
    + display/hide app components
    + create and edit location wish list
    + set the period of the weather forecast to be displayed
+ bad API-connection user notification
***