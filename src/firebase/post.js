//import { searchPost } from '../lib/view/templateSearch.js';
import {
    onSnapshot, db, addDoc, collection, getDocs, query, where, auth, orderBy, deleteDoc, doc
  } from './init.js';

  export const deletePost = id => deleteDoc(collection(db, "posts" , idUser));

  //Llama objeto con todo los post
  const getAllPosts = (callback) => onSnapshot(collection(db, 'posts'), callback);

  const getAllUsers = (callback) => onSnapshot(collection(db, 'users'), callback);

  // const getAllUsers = (uid) => onSnapshot(doc(db, 'users'), uid);
  
  // const getUserPostData = async (uid) => {
  //   try {
  //     const getUserDataDoc = doc(db, 'users', uid);
  //     const userDocSnapshot = await getDoc(getUserDataDoc);
  //     return userDocSnapshot.data(); //data from firebase/collection/users/ANYid)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  
  // export { getUserPostData };

  const getCurrentUserPosts = async () => {
    try {
      const postsArray = [];
      const user = auth.currentUser.uid;//propiedad para obtener el usuario que accedio si no accede nadie es null
      const getCurrentUserPostsQuery = query(collection(db, 'posts'), where('idUser', '==', user), orderBy('createdAt', 'desc'));//metodo where recibe 3 parametros uno para filtrar uno para comparar y el valor
      const postsSnapshot = await getDocs(getCurrentUserPostsQuery);
      postsSnapshot.forEach((doc) => {
        postsArray.push(doc.data());//data adjunta el array que trae postsSnapshot
      });
      console.log(postsArray)
      return postsArray;
    } catch (error) {
      console.log(error);
    }
  };
  
  //Crea post en la coleccion de la db
  const createPost = async (dataPost) => {
    const user = auth.currentUser.uid;
    const secondsTimestamp = Math.floor(Date.now() / 1000)
    await addDoc(collection(db, 'caca'), {idUser: user, createdAt: secondsTimestamp, ...dataPost});
  };
  
  export { getAllUsers, createPost, getAllPosts};
  
  
  
  // const getName = async () =>{
  //   try {
  //     const user = auth.currentUser.uid;
  //     const getCurrentUserNameQuery = query(collection(db, 'users'), where('username', '==', user));
  //     const nameSnapshot = await getDocs(getCurrentUserNameQuery);
  //     return nameSnapshot.data()
  //   } catch (error) {
  //     console.log('error getUid')
  //   }
  // };