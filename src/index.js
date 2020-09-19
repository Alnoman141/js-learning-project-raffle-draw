import css from './index.css';

window.onload = function(){
    const inp = document.getElementById('inp');
    const nameList = document.getElementById('name-list');
    const display = document.getElementById('display');
    const giveATry = document.getElementById('give-a-try');
    const firstPosition = document.getElementById('first-position');
    const secondPosition = document.getElementById('second-position');
    const thirdPosition = document.getElementById('third-position');


    const participantName = [];

    inp.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            let newNames = event.target.value.split(',');
            
            if(newNames[0] != ""){
                newNames.forEach(name => {
                    participantName.push(name);
                    let item = createListItem(name);
                    nameList.appendChild(item);
                })
            }
            this.value = '';
        }
    });

    giveATry.addEventListener('click', function(){
        if(participantName.length == 0){
            alert('There Is No Entry')
        }else{
            let shuffledName = shuffle(participantName);
            for(let i = 1; i < shuffledName.length; i++){
                (function(i , count){
                    setTimeout(() => {
                        let rand = Math.floor(Math.random() * (shuffledName.length));
                        display.innerHTML = shuffledName[rand];

                        if(count == shuffledName.length -1 ){
                            if(!firstPosition.innerHTML){
                                firstPosition.innerHTML = shuffledName[rand];
                                let index = participantName.indexOf(shuffledName[rand]);
                                participantName.splice(index ,1);
                            }else if(!secondPosition.innerHTML){
                                secondPosition.innerHTML = shuffledName[rand];
                                let index = participantName.indexOf(shuffledName[rand]);
                                participantName.splice[index,1]
                            }else if(!thirdPosition.innerHTML){
                                thirdPosition.innerHTML = shuffledName[rand];
                                let index = participantName.indexOf(shuffledName[rand]);
                                participantName.splice[index,1]
                            }else{
                                alert('Raffle Draw Already Over')
                            }
                        }
                    },i)
                })(i*100, i)
            }
        }
    })
}

function createListItem(name){
    let li = document.createElement('li');
    li.className = 'list-group-item',
    li.innerHTML = name;

    return li;
}

function shuffle(arr) {
    let shuffledArr = [...arr]

    for (let i = shuffledArr.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1))
        let temp = shuffledArr[rand]
        shuffledArr[rand] = shuffledArr[i]
        shuffledArr[i] = temp
    }

    return shuffledArr
}


