import ricknMortyLogo from '../../images/Rick and morty-png-circle.png'

const cardData = () =>
  {
    const data = 
    [{
      title: "Rick and Morty App",
      description: "Mini-app that show you the characters info of the rick and morty series",
      imgurl: 'https://i.ibb.co/N14h1cw/Rick-and-morty-png-circle.png',
      iconReact: true,
      iconJs: true,
      iconGithub: true,
      iconDeploy: true,
      githubURL: 'https://github.com/MarcoRettoreDev/RickandMortyProject',
      deployURL: "https://marcorettoredev.github.io/RickandMortyProject/"
    }, {
      title: "Todo App",
      description: "A basic todo app, made using: uselocalstorage, react portals, useeffect & state, react context",
      imgurl: '#',
      iconReact: true,
      iconJs: true,
      iconCss:true,
      iconGithub: true,
      iconDeploy: true,
      githubURL: 'https://github.com/MarcoRettoreDev/todo-app',
      deployURL: "https://marcorettoredev.github.io/todo-app/"
    }, {
      title: "Coportative page",
      description: "A static web project, rwd practicing and styling mobile first",
      imgurl: "#",
      iconReact: false,
      iconJs: false,
      iconHtml: true,
      iconCss:true,
      iconGithub: true,
      iconDeploy: true,
      githubURL: "https://github.com/MarcoRettoreDev/webpage-rwd",
      deployURL: "https://marcorettoredev.github.io/webpage-rwd/"
    }, {
      title: "Math Project",
      description: "My first mini web-app with tools to maths calc such as: mean median and mode, discounts, etc.",
      imgurl: '#',
      iconReact: false,
      iconJs: true,
      iconJs: true,
      iconHtml: true,
      iconGithub: true,
      iconDeploy: true,
      githubURL: 'https://github.com/MarcoRettoreDev/MathProyect',
      deployURL: "https://marcorettoredev.github.io/MathProyect/"
    }
  ];
    return data;
  }

  export { cardData };