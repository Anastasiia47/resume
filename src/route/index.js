// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    title: "Resume",

    name: {
      firstname: 'Ivan',
      lastname: 'Ivanov',
    },

    position: "Junior Fullstack JS Developer",

    salary: "600$ в месяц",

    summary:{
      title: "Summary",
      text: {
        value: 'Open-minded for new technologies with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good teamplayer, every colleague is a friend to me.',
      },
    },

    expierence:{
      title: "Other experience",
      text: {
        value: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics tournament position, goals etc), analyzing by simple mathematics models and preparing probabilit for such events like: money line - first win / draw / second win, totals etc.'
      },
    },

    social:{
      email: {
        text: "ivanov@mail.com",
        href: "mailto:dmytro@mail.com",
      },
       phone:{
        text: "+380670000123",
        href: "tel:+380670000123",
      },
      linkedin:{
        text:"LinkedIn",
        href:"//www.linkedin.com/in/dmytro-test",
      },
     }
 })
})


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    title: "Resume",

    name: {
      firstname: 'Ivan',
      lastname: 'Ivanov',
    },

    position: "Junior Fullstack JS Developer",

    salary: "600$ в месяц",

    social:{
      email: {
        text: "ivanov@mail.com",
        href: "mailto:dmytro@mail.com",
      },
       phone:{
        text: "+380670000123",
        href: "tel:+380670000123",
      },
      linkedin:{
        text:"LinkedIn",
        href:"//www.linkedin.com/in/dmytro-test",
      },
     }
 })
})


// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
