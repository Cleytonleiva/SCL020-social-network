export const newPost = () => {
    const divNewPost = document.createElement('div')
    divNewPost.setAttribute('id', 'containerNewPost')
    const viewNewPost = `
    <div class="menu__side" id="menu_side">
    <div id="containImg">
    <img src="img/logo2.png" id="logo2">
    </div>
    <div class="options__menu">	
        <a href="#/userProfile" class="selected">
            <div class="option">
                <i class="fa-solid fa-circle-user fa-xl" title="Perfil" ></i>
                <h4> nombre usuario titulo</h4>
            </div>
        </a>
        <a href="#/home">
            <div class="option">
                <i class="fa-solid fa-house fa-xl" title="Inicio"></i>
                <h4>Inicio</h4>
            </div>
        </a>
        <a href="#/search">
            <div class="option">
                <i class="fa-solid fa-magnifying-glass fa-xl" title="Buscar"></i>
                <h4>Buscar</h4>
            </div>
        </a>
        <a href="#/logIn">
            <div class="option">
                <i class="fa-solid fa-arrow-right-from-bracket fa-xl" title="Cerrar sesión"></i>
                <h4>Cerrar cesion</h4>
            </div>
        </a>
        </div>
    </div>
    <div class="createPost">
    <div>
        <textarea id="w3review" name="w3review" rows="4" cols="50">aqui va el post.</textarea>
    </div>
    <div>
        <button>Publicar</button>
        <input type="submit" value="Submit">	
    </div>
`
divNewPost.innerHTML = viewNewPost;
return divNewPost;
};