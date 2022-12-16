import Badge from "./views/Badge.js";
import BottomAppBar from "./views/BottomAppBar.js";
import Button from "./views/Button.js";
import Card from "./views/Card.js";
import Checkbox from "./views/Checkbox.js";
import Chip from "./views/Chip.js";
import Color from "./views/Color.js";
import Dialog from "./views/Dialog.js";
import List from "./views/List.js";
import ListSelect from "./views/ListSelect.js";
import Menu from "./views/Menu.js";
import NavBar from "./views/NavBar.js";
import NavDrawer from "./views/NavDrawer.js";
import NavRail from "./views/NavRail.js";
import Progress from "./views/Progress.js";
import Radio from "./views/Radio.js";
import Shape from "./views/Shape.js";
import Slider from "./views/Slider.js";
import Switch from "./views/Switch.js";
import TextField from "./views/TextField.js";
import TextArea from "./views/TextArea.js";
import Tooltip from "./views/Tooltip.js";
import TopAppBar from "./views/TopAppBar.js";
import Typography from "./views/Typography.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]]
    }))
}

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: '/badge', view: Badge },
        { path: '/bottomappbar', view: BottomAppBar },
        { path: '/button', view: Button },
        { path: '/card', view: Card },
        { path: '/checkbox', view: Checkbox },
        { path: '/chip', view: Chip },
        { path: '/color', view: Color },
        { path: '/dialog', view: Dialog },
        { path: '/list', view: List },
        { path: '/listselect', view: ListSelect },
        { path: '/menu', view: Menu },
        { path: '/navbar', view: NavBar },
        { path: '/navdrawer', view: NavDrawer },
        { path: '/navrail', view: NavRail },
        { path: '/progress', view: Progress },
        { path: '/radio', view: Radio },
        { path: '/shape', view: Shape },
        { path: '/slider', view: Slider },
        { path: '/switch', view: Switch },
        { path: '/textfield', view: TextField },
        { path: '/textarea', view: TextArea },
        { path: '/tooltip', view: Tooltip },
        { path: '/topappbar', view: TopAppBar },
        { path: '/typography', view: Typography }
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result:location.pathname.match(pathToRegex(route.path))
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        }
    }

    const view = new match.route.view(getParams(match));

    document.querySelector('#app').innerHTML = await view.getHtml();
}

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
})