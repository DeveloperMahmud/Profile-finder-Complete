//97 CREATE OBJECT WITH DOM
//98 GET MONSTARS USIN ES6 MODULE
import {monsters} from "./monsters.js"

for(let monster of monsters){
    showMonster(monster);
}

function showMonster(monster){

    const monsterDiv = document.createElement('div');
    monsterDiv.className = 'monster';
    
    const img = document.createElement('img');
    img.src = `https://robohash.org/${monster.id}?set=set2`;
    img.alt = monster.name;
    
    const name = document.createElement('p');
    name.className = 'name';
    name.innerText = monster.name;
    
    const email = document.createElement('p');
    email.className = 'email';
    email.innerText = monster.email;
    monsterDiv.append(img,name,email);

    document.querySelector('.monsters').append(monsterDiv);
    
}
notFound();
function notFound(){
    
    const notFound = document.createElement('div');
    notFound.className = 'p-5 not-found';
    notFound.style = 'display: none';

    const span = document.createElement('span');

    span.innerText = '404';

    const h1 = document.createElement('h1');
    
    h1.innerText = ('🧟‍♂️ No Monster Found 🧟‍♂️');

    notFound.append(span,h1);

    document.querySelector('.monsters').append(notFound);
}


document.querySelector('#search-monster').addEventListener('keyup', function (e) {
    const keyword = e.target.value.toLowerCase();
    
    
    const monsters = document.querySelectorAll('.monster');

    let notfound = true;

    for (let monst of monsters){

        const name = monst.children[1].innerText.toLowerCase()
        const email = monst.children[2].innerText.toLowerCase()
        
        if(name.includes(keyword) || email.includes(keyword)){
            monst.style.display = 'block';
            notfound = false;
        }else{
            monst.style.display = 'none';
        }
    }
    if(notfound){
        document.querySelector('.not-found').style.display = 'block';
    }else{
        document.querySelector('.not-found').style.display = 'none';
    };
    
    document.querySelector('#search-monster-form').addEventListener('submit', e => {
        e.preventDefault();
    })
});









