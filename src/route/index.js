// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

var header= {
  name: {
    firstname: 'Petro',
    lastname: 'Ivanov',
  },
  position: "Junior Fullstack JS Developer",
  salary: "800$ в месяц",
  address: "Украина",
  }

  var footer= {
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
     },
   }

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

    page: {
      title: "Resume|Summary",
    },

    header,

     main: {
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
     },

     footer,
  })
})


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills',{
    // ↙ сюди вводимо JSON дані

    page: {
      title: "Resume|Skills",
    },

    header,

     main: {
      skills: [
        {
          name:"HTML",
          point: 10,
          isTop: true,
        },
        {
          name:"Handelbars",
          point: 10,
          isTop: true,
        },
        {
          name:"VS Code & Git",
          point: 9,
          isTop: false,
        },
        {
          name:"Termial & NPM",
          point:8,
        },
        {
          name:"React.js",
          point:0,
        },
        {
          name:"PHP",
          point: null,
        },
       ],

      hobbies: [
        {
          name: "Чтение книг",
          isMain: true,
        },
        {
          name: "Рукоделие",
          isMain: false,
        },
        {
          name: "Походы в горы",
          isMain: true,
        },
      ],
    },
      footer, 
  })
})


router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: "Resume|Education",
    },

    header,

     main: {
      educations: [
        {
          name:"Школа 22",
          isEnd: true,
        },
        {
          name:"Педагогический университет",
          isEnd: true,
        },
        {
          name:"IT BRAINS",
          isEnd: false,
        },
      ],

      certificates: [
        {
          name:"Про окончание школы",
          id: 12345,
        },
        {
          name:"Про окончание университета",
          id: 54321,
        },
        {
          name:"Про повышение квалификации",
          id: 67890,
        },
      ],
    },
      
    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: "Resume|Work",
    },

    header,

     main: {
      works: [
        {
          position:"Junior Fullstack Developer",
          company: {
            name:'IT Brains',
            url: null,
          },
           duration:{ 
            from:'10.10.2022',
            to: null,
           },
           projectAmount: 3,

           projects: [
            {
             name: 'Resume', 
             url: 'https://resume.com.ua/',
             about: 
              'Airbnb competitor High load application for searching apartmens',
              stackAmount: 3,
              stack: [
              {
                name:'React.js',
              },
              {
                name:'HTML/CCS',
              },
              {
                name:'Node.js',
              },
            ],
            awardAmount: 2,
            awards: [
              {
                name:'2nd place'
              },
              {
                name:' 1st place'
              },
            ],
            },
           ],
          },
        ],
    },
      
    footer,
  })
})






// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
