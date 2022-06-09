import { onNavigate } from '../router/routes.js';
import { signup } from '../firebase/auth.js';
import { saveUser } from '../firebase/firestore.js';
import { auth, updateProfile } from '../firebase/init.js';

export const addEvents = () => {

    const createUserSend = document.getElementById("createUserBt");
    createUserSend.addEventListener('click', async () => {
    const email = document.getElementById('userMail').value;
    const password = document.getElementById('userPassword_id').value;
    let newUser;
    try {
        newUser = await signup(auth, email, password);
    } catch (error) {
        console.log("ocurrio un error con la integracion en el metodo create user ", error);
    }
    // try {
    //     await saveUser(email, newUser.user.uid);
    //     return onNavigate('/home');
    // } catch (error) {
    //     console.log("ocurrio un error con la integcion en el saveUser ", error);
    // }
    });
};