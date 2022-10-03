import fetch from "node-fetch";  
const API = 'http://api.escuelajs.co/api/v1/products';  
//const API = 'https://securetransfer.redsis.com/rest/forms/v1/teamGoAny/payload'

 const usua = document.getElementById('usuario');
const cont = document.getElementById('contraseña');
const env = document.getElementById('enviar'); 

env.addEventListener('click',get);
env.addEventListener('click',post);

//GET //
function get(){
    
    function fetchData(urlApi){ 
        return fetch(urlApi);
    };
    
    fetchData('http://api.escuelajs.co/api/v1/products' ) 
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log (err))    
};

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
    .then(data =>console.log(data))
}





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* import fetch from "node-fetch";  
const API = 'http://api.escuelajs.co/api/v1/products';  
//const API = 'https://securetransfer.redsis.com/rest/forms/v1/teamGoAny/payload'

const usua = document.getElementById('usuario');
const cont = document.getElementById('contraseña');
const env = document.getElementById('enviar');

env.addEventListener('click',fetchData);
env.addEventListener('click',postData);

//GET //
function fetchData(urlApi){ 
    return fetch(urlApi);
} 

fetchData(`${API}`) 
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log (err))

//POST //

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

 const data = {
    "user": "ingresoRedsis",
    "password": "Qwerty0909$"
} 

postData(`${API}`,data)
.then(response => response.json())
.then(data =>console.log(data)) */