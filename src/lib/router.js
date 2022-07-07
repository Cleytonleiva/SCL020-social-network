import { createUser } from './view/templateCreateUser.js';
import { logInTemplate } from './view/templateLogIn.js';
import { home } from './view/templateHome.js';
import { error404Template } from './view/template404.js';
import { userProfile } from './view/templateUserProfile.js';
import { searchPost } from './view/templateSearch.js';
import { editPost } from './view/templateEditPost.js';
import { newPost } from './view/templateCreatePost.js';
import { auth, onAuthStateChanged, logout } from '../firebase/auth.js';
import { getDataUser } from '../firebase/post.js';

export const showTemplates = (hash) => {
  const containerRoot = document.querySelector('#root');
  containerRoot.innerHTML = '';

  onAuthStateChanged(auth, (user) => {
    if (!user && hash === '#/createNewUser') {
      containerRoot.appendChild(createUser());
      return;
    }

    if (!user) {
      containerRoot.appendChild(logInTemplate());
    } else {
      const dataUser = getDataUser(user.uid)
        console.log(dataUser)
      //  traer el documento que corresponde al user.id porque no existe el campo id en usuario (numero de documento)
      // localStorage.name y le doy el valor que traiga la peticion

      switch (hash) {
        case '#/home':
          containerRoot.appendChild(home());
          break;
        case '#/userProfile':
          containerRoot.appendChild(userProfile());
          break;
        case '#/search':
          containerRoot.appendChild(searchPost());
          break;
        case '#/editPost':
          containerRoot.appendChild(editPost());
          break;
        case '#/createPost':
          containerRoot.appendChild(newPost());
          break;
        default:
          containerRoot.appendChild(error404Template());
      }
    }
  });
};
