const API = 'http://api.escuelajs.co/api/v1/products';  
//const API = 'https://securetransfer.redsis.com/rest/forms/v1/teamGoAny/payload'

const usua = document.getElementById('usuario');
const cont = document.getElementById('contraseña');
const env = document.getElementById('enviar'); 
const pub_post = document.getElementById('publicar_post');
const pub_get = document.getElementById('publicar_get');

//env.addEventListener('click',get);
env.addEventListener('click',post);

//GET //
function get(){
    
    function fetchData(urlApi){ 
        return fetch(urlApi);
    };
    
    fetchData('http://api.escuelajs.co/api/v1/products' ) 
    .then(response => response.json())
    .then(json => console.log(json))
    .then(info =>pub_get.innerHTML= "<p />  se conecto a la api correctamente"+"<p/>")
    .catch(err => console.log (err))    
};
get();

//POST //
function post(){
    function postData(urlApi, data){
        const response = fetch(urlApi,{
            method: 'POST',
            node: 'corse', 
            credentials: 'same-origin',
            headers:{
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data)
        });
        return response;
    }
    
    const data = {
        //"title": "Nintendo 3DS",
        "title": usua,
        "price": 300,
        //"description": "consola de juegos fabricada por la compañia de nintendo",
        "description": cont,
        "categoryId": 5,
        "images": ["https://images.pexels.com/photos/3702458/pexels-photo-3702458.jpeg?cs=srgb&dl=pexels-mike-esparza-3702458.jpg&fm=jpg"]
    }
    postData('http://api.escuelajs.co/api/v1/products',data)
    .then(response => response.json())
    .then(data => pub_post.innerHTML = "<p />Se envio la informacion exitosamente")
}

/* const data = {
    "user": "ingresoRedsis",
    "password": "Qwerty0909$"
} */