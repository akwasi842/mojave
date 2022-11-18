import React from "react";

const DashBoard = React.lazy(() =>import("../views/DashBoard"));
const Services = React.lazy(() => import("../views/Services"));

const About = React.lazy(() => import("../views/About"));
const Contact = React.lazy(() => import("../views/Contact"));


const routes = [
    {path:"/dashboard", name:"DashBoard Page", component: DashBoard},
    {path:"/services", name:"Services Page", component:Services},

    {path:"/about", name:"About Page", component:About},
    {path:"/contact", name:"Contact Page", component: Contact},
];

export default routes;