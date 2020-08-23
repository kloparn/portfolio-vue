import Home from "../pages/HomePage.vue";
import About from "../pages/AboutPage.vue"
import Projects from "../pages/ProjectsPage.vue"
import Contact from "../pages/ContactPage.vue";

const Routes = [{
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/projects",
        component: Projects,
    },
    {
        path: "/contact",
        component: Contact,
    },
]

export default Routes;