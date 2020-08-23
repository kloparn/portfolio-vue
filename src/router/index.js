import Home from '../pages/HomePage';
import About from '../pages/AboutPage';
import Projects from '../pages/ProjectsPage';
import Contact from '../pages/ContactPage';

const Routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/contact',
    component: Contact,
  },
];

export default Routes;
