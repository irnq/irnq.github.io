import IProjectCard from '../interfaces/ProjectCard.model';

const PROJECTS: IProjectCard[] = [
  {
    title: 'Project Management App',
    description:
      'Functional clone of the Trello, Todoist or other project management application. Working with backend API. Localization, authentication, CRUD requests. Final task from RSSchool Angular course. Team project.',
    technology: 'TypeScript, Angular, Angular Material, NgRX, Transloco, SCSS',
    screenshot: './img/pma.jpg',
    link: 'https://project-management-app-tii.netlify.app/',
  },
  {
    title: 'Ticket to ride',
    description:
      'A clone of the popular board game Ticket to Ride. Multiplayer for players from 2 to 6 implemented with the socket.IO. Final task from RSSchool JavaScript/Front-end course. Team project.',
    technology: 'TypeScript, Vue2, Vuex, SCSS, nodeJS, express, socketIO, mongoDB',
    screenshot: './img/ticket-to-ride.jpg',
    link: 'https://ilua-dz.github.io/rsclone/',
  },
  {
    title: 'Christmas game',
    description:
      'A game in which you can decorate the Christmas tree. You can select the toys you want using filters and sorting. You can choose the background, the tree and the garland. Hang the toys with drag-n-drop.',
    technology: 'TypeScript, SCSS',
    screenshot: './img/christmas.jpg',
    link: 'https://rolling-scopes-school.github.io/irnq-JSFE2021Q3/christmas-task/',
  },
  {
    title: 'Art quiz',
    description:
      'A simple quiz with three game modes. You must either guess the artist who painted the picture or guess the picture belonging to the author.',
    technology: 'JavaScript, SCSS',
    screenshot: './img/quiz.jpg',
    link: 'https://rolling-scopes-school.github.io/irnq-JSFE2021Q3/art-quiz/dist/',
  },
  {
    title: 'Momentum',
    description:
      'A clone of Momentum extension. Several API, custom player, interface settings, two languages.',
    technology: 'JavaScript, SCSS',
    screenshot: './img/momentum.jpg',
    link: 'https://rolling-scopes-school.github.io/irnq-JSFE2021Q3/momentum/',
  },
];

export default PROJECTS;
