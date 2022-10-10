import Details from "./components/Details";
import Home from "./components/Home";
import Users from "./components/Users";


export const routes = [
    { path: "/", name: 'Home', component: Home},
    { path: "/users", name: 'Users', component: Users },
    { path: "/details", name: 'Details page', component: Details}

]