/*!

=========================================================
* Argon Dashboard PRO React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Alternative from "views/pages/dashboards/Alternative.js";
import Buttons from "views/pages/components/Buttons.js";
import Calendar from "views/pages/Calendar.js";
import Cards from "views/pages/components/Cards.js";
import Charts from "views/pages/Charts.js";
import Components from "views/pages/forms/Components.js";
import Dashboard from "views/pages/dashboards/Dashboard.js";
import Elements from "views/pages/forms/Elements.js";
import Google from "views/pages/maps/Google.js";
import Grid from "views/pages/components/Grid.js";
import Icons from "views/pages/components/Icons.js";
import Lock from "views/pages/examples/Lock.js";
import Login from "views/pages/examples/Login.js";
import Notifications from "views/pages/components/Notifications.js";
import Pricing from "views/pages/examples/Pricing.js";
import Profile from "views/pages/examples/Profile.js";
import ReactBSTables from "views/pages/tables/ReactBSTables.js";
import Register from "views/pages/examples/Register.js";
import RTLSupport from "views/pages/examples/RTLSupport.js";
import Sortable from "views/pages/tables/Sortable.js";
import Tables from "views/pages/tables/Tables.js";
import Timeline from "views/pages/examples/Timeline.js";
import Typography from "views/pages/components/Typography.js";
import Validation from "views/pages/forms/Validation.js";
import Vector from "views/pages/maps/Vector.js";
import Widgets from "views/pages/Widgets.js";
import Classroom from "views/pages/Classroom";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboards",
    icon: "fa fa-solid fa-border-all text-ourgray", // Lilia - alteração de icon
    component: Dashboard,
    layout: "/admin",

    /* Lilia - desactivar o dashboard alternativo no submenu
     state: "dashboardsCollapse",
     views: [
       {
         path: "/dashboard",
         name: "Dashboard",
         miniName: "D",
         component: Dashboard,
         layout: "/admin",
       },
       
       {
         path: "/alternative-dashboard",
         name: "Alternative",
         miniName: "A",
         component: Alternative,
         layout: "/admin",
       },
       
     ], */
  },
  {
    path: "#", // Lilia - alteração de nome da path
    name: "My Schedule", // Lilia - alteração de nome do menu
    icon: "fa fa-solid fa-clock text-ourgray", // Lilia - alteração de icon
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "fa fa-regular fa-calendar-week text-ourgray", // Lilia - alteração de icon
    component: Calendar,
    layout: "/admin",
  },
  {
    path: "#", // Lilia - alteração de nome da path
    name: "My Courses", // Lilia - alteração de nome do menu
    icon: "ni ni-single-copy-04 text-ourgray", // Lilia - alteração de icon
  },
  {
    path: "/classroom", // Lilia - alteração de nome da path // rmal adição de classroom versao beta
    name: "ClassRoom", // Lilia - alteração de nome do menu
    icon: "fa fa-solid fa-door-open text-ourgray", // Lilia - alteração de icon
    component: Classroom, // rmal linha adicionada
    layout: "/admin", // rmal linha adicionada
  },
  {
    path: "#", // Lilia - alteração de nome da path
    name: "Recorded Lessons", // Lilia - alteração de nome do menu
    icon: "fa fa-solid fa-file-video text-ourgray", // Lilia - alteração de icon
  },
  {
    path: "/materials", // Lilia - alteração de nome da path
    name: "Materials", // Lilia - alteração de nome do menu
    icon: "fa fa-solid fa-book-open text-ourgray", // Lilia - alteração de icon
    component: Tables,
    layout: "/admin",
    state: "tablesCollapse",
  },
  {
    path: "#", // Lilia - alteração de nome da path
    name: "Group Work", // Lilia - alteração de nome do menu
    icon: "fa fa-solid fa-layer-group text-ourgray", // Lilia - alteração de icon
  },
  {
    path: "#", // Lilia - alteração de nome da path
    name: "Exams", // Lilia - alteração de nome do menu
    icon: "fa fa-solid fa-clipboard-list text-ourgray", // Lilia - alteração de icon
  },
  {
    path: "#", // Lilia - alteração de nome da path
    name: "Assessments", // Lilia - alteração de nome do menu
    icon: "ni ni-books text-ourgray", // Lilia - alteração de icon
  },
  {
    path: "#", // Lilia - alteração de nome da path
    name: "Video Courses", // Lilia - alteração de nome do menu
    icon: "fa fa-solid fa-laptop text-ourgray", // Lilia - alteração de icon
  },
  {
    path: "#", // Lilia - alteração de nome da path
    name: "Progress", // Lilia - alteração de nome do menu
    icon: "fa fa-solid fa-chart-line text-ourgray", // Lilia - alteração de icon
  },
  {
    path: "#", // Lilia - alteração de nome da path
    name: "Certifications", // Lilia - alteração de nome do menu
    icon: "ni ni-paper-diploma text-ourgray", // Lilia - alteração de icon
  },
  {
    path: "#", // Lilia - alteração de nome da path
    name: "Forum", // Lilia - alteração de nome do menu
    icon: "fa fa-solid fa-comment-dots text-ourgray", // Lilia - alteração de icon
  },
  {
    path: "#", // Lilia - alteração de nome da path
    name: "Inbox", // Lilia - alteração de nome do menu
    icon: "fa fa-regular fa-envelope-open text-ourgray", // Lilia - alteração de icon
  },
  {
    path: "#", // Lilia - alteração de nome da path
    name: "Info", // Lilia - alteração de nome do menu
    icon: "fa fa-solid fa-info text-ourgray", // Lilia - alteração de icon
  },
  /* Ignorar os seguintes menus 
  {
    collapse: true,
    name: "Maps",
    icon: "ni ni-map-big text-primary",
    state: "mapsCollapse",
    views: [
      {
        path: "/google",
        name: "Google",
        miniName: "G",
        component: Google,
        layout: "/admin",
      },
      {
        path: "/vector",
        name: "Vector",
        miniName: "V",
        component: Vector,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/widgets",
    name: "Widgets",
    icon: "ni ni-archive-2 text-green",
    component: Widgets,
    layout: "/admin",
  },
  {
    path: "/charts",
    name: "Charts",
    icon: "ni ni-chart-pie-35 text-info",
    component: Charts,
    layout: "/admin",
  },*/ // rmal
  {
    collapse: true,
    name: "", // rmal tirei o texto "Examples"
    icon: "", // Lilia - alteração de icon // rmal tirei o icon
    state: "", // rmal tirei o "examplesCollapse"
    invisible: "true",
    views: [
      {
        path: "/pricing",
        name: "Pricing",
        miniName: "P",
        component: Pricing,
        layout: "/auth",
      },
      {
        path: "/login",
        name: "Login",
        miniName: "L",
        component: Login,
        layout: "/auth",
      },
      {
        path: "/register",
        name: "Register",
        miniName: "R",
        component: Register,
        layout: "/auth",
      },
      {
        path: "/lock",
        name: "Lock",
        miniName: "L",
        component: Lock,
        layout: "/auth",
      } /* // rmal
      {
        path: "/timeline",
        name: "Timeline",
        miniName: "T",
        component: Timeline,
        layout: "/admin",
      },
      {
        path: "/profile",
        name: "Profile",
        miniName: "P",
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/rtl-support",
        name: "RTL Support",
        miniName: "RS",
        component: RTLSupport,
        layout: "/rtl",
      },*/, // rmal
    ],
  } /* // rmal
  {
    collapse: true,
    name: "Menu test 2", // Lilia - alteração de nome do menu
    icon: "ni ni-single-copy-04 text-gray", // Lilia - alteração de icon
    state: "componentsCollapse",
    views: [
      {
        path: "/buttons",
        name: "Buttons",
        miniName: "B",
        component: Buttons,
        layout: "/admin",
      },
      {
        path: "/cards",
        name: "Cards",
        miniName: "C",
        component: Cards,
        layout: "/admin",
      },
      {
        path: "/grid",
        name: "Grid",
        miniName: "G",
        component: Grid,
        layout: "/admin",
      },
      {
        path: "/notifications",
        name: "Notifications",
        miniName: "N",
        component: Notifications,
        layout: "/admin",
      },
      {
        path: "/icons",
        name: "Icons",
        miniName: "I",
        component: Icons,
        layout: "/admin",
      },
      {
        path: "/typography",
        name: "Typography",
        miniName: "T",
        component: Typography,
        layout: "/admin",
      },
      {
        collapse: true,
        name: "Multi Level",
        miniName: "M",
        state: "multiCollapse",
        views: [
          {
            path: "#pablo",
            name: "Third level menu",
            component: () => {},
            layout: "/",
          },
          {
            path: "#pablo",
            name: "Just another link",
            component: () => {},
            layout: "/",
          },
          {
            path: "#pablo",
            name: "One last link",
            component: () => {},
            layout: "/",
          },
        ],
      },
    ],
  },
  {
    collapse: true,
    name: "Menu test 3",
    icon: "fa fa-solid fa-door-open text-gray", // Lilia - alteração de icon
    state: "formsCollapse",
    views: [
      {
        path: "/elements",
        name: "Elements",
        miniName: "E",
        component: Elements,
        layout: "/admin",
      },
      {
        path: "/components",
        name: "Components",
        miniName: "C",
        component: Components,
        layout: "/admin",
      },
      {
        path: "/validation",
        name: "Validation",
        miniName: "V",
        component: Validation,
        layout: "/admin",
      },
    ],
  }, */,
];

export default routes;
