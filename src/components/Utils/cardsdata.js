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
      iconCss: true,
      iconGithub: true,
      iconDeploy: true,
      githubURL: 'https://github.com/MarcoRettoreDev/RickandMortyProject',
      deployURL: "https://marcorettoredev.github.io/RickandMortyProject/"
    }, {
      title: "Todo App",
      description: "A basic todo app, made using: uselocalstorage, react portals, useeffect & state, react context",
      imgurl: 'https://i.ibb.co/T88XxFH/Todo-Light-Img-no-bg.png',
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
      imgurl: "https://i.ibb.co/tZ4n56V/bitcoinbaby-1-2x.png",
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
      description: "My first mini web-app with tools to do some maths calculations ",
      imgurl: 'https://i.ibb.co/2jsjdZ2/Math-calcs-wallpaper.jpg',
      iconReact: false,
      iconJs: true,
      iconJs: true,
      iconHtml: true,
      iconCss: true,
      iconGithub: true,
      iconDeploy: true,
      githubURL: 'https://github.com/MarcoRettoreDev/MathProyect',
      deployURL: "https://marcorettoredev.github.io/MathProyect/"
    }
  ];
    return data;
  }

  export { cardData };