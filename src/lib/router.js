import { createUser } from './view/templateCreateUser.js';
import { logIn } from './view/templateLogIn.js';
import { home } from './view/templateHome.js';
import { error404 } from './view/template404.js';
import { editPost } from './view/templateEditPost.js';


const routes = {
    '/': home,
    '/createUser': createUser,
    '/signIn': logIn,
    '/createPost': createPost,
    '/editPost': editPost,
    '/error4': error404,
    '/search': search,
};

const onNavigate = (pathname) => {
    // "/papitas"
    window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname);
    routes[pathname]();
    // routes[pathname].func();
};
window.onpopstate = () => {
    console.log(window.location.pathname);
    routes[window.location.pathname]();
};
export { routes, onNavigate }


// export const changeRoute = (hash) => {
//     if (hash === '#/') {
//         return showTemplates(hash)
//     }
//     else if (hash === '#/crearUsuario'){
//         return showTemplates(hash)
//     } else {
//         return showTemplates(hash)
//     }
// }

// const showTemplates = (hash) => {
//     const containerRoot = document.getElementById('root');
//     containerRoot.innerHTML = '';
//     switch(hash) {
//     case '#/createNewUser':
//     containerRoot.appendChild(createUser());
//         break;
//     case '#/home':
//     containerRoot.appendChild(home());
//         break;
//     case '#/userProfile':
//     containerRoot.appendChild(newPost());
//         break;
//     case '#/logIn':
//     containerRoot.appendChild(home());
//         break;
//     default:
//     containerRoot.appendChild(error404());
//     }
// }