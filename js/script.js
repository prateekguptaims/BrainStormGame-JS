let cardsArray = [
    {
        'name': 'CSS',
        'img': 'images/css.png',
    },
    {
        'name': 'bootstrap',
        'img': 'images/bootstrap.png',
    },
    {
        'name': 'jQuery',
        'img': 'images/jquery.png',
    },
    {
        'name': 'JS',
        'img': 'images/js.png',
    },
    {
        'name': 'twitter',
        'img': 'images/twitter.png',
    },
    {
        'name': 'html',
        'img': 'images/html.png',
    }
];

const gameCard= cardsArray.concat(cardsArray)
const parentDiv=document.querySelector('#card-section');
//shuffle cards
const myNumbers=(array)=>{
    for(let i=array.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1))
        let temp=array[i]
        array[i]=array[j]
        array[j]=temp

    }
    return array
}
const shuffleChild=myNumbers(gameCard)
let clickCount=0;
let firstCard=""
let secondCard=""

//style the match card
const card_matches=()=>{
    let card_selected = document.querySelectorAll('.card_selected');
    card_selected.forEach((currEl)=>{
        //alert()
        currEl.classList.add('card_match')
    })
}
//click count reset
const resetgame=()=>{
    firstCard=""
    secondCard=""
    clickCount=0;
    let card_selected = document.querySelectorAll('.card_selected');
    card_selected.forEach((currEl)=>{
        //alert()
        currEl.classList.remove('card_selected')
    })
}
// const card_matches = () => {
//        let card_selected = document.querySelectorAll('.card_selected');

//        card_selected.forEach((curElemx) => {
//         curElemx.classList.add('card_match')
//     })
// }
//step 4

parentDiv.addEventListener('click',(event)=>{
    let currCard= event.target;
    if(currCard.id === "card-section"){return false }
    clickCount++
    if(clickCount<3){
        if(clickCount===1){
            firstCard=currCard.parentNode.dataset.name;
            currCard.parentNode.classList.add("card_selected");
        }
        else{
            secondCard=currCard.parentNode.dataset.name;
            currCard.parentNode.classList.add("card_selected");
        }
        if(firstCard!== "" && secondCard !==""){
            if(firstCard===secondCard){
                //currCard.classList.add('card_match')
                setTimeout(() => {
                    card_matches();
                resetgame();
                }, 1000);
                
            }
            else{
                setTimeout(() => {
                    //card_matches();
                resetgame();
                }, 1000);
            }
        }
        currCard.classList.add("card_selected");
        currCard.id ==="card-section"? "":currCard.classList.add("card_selected");
    }
    currCard.id ==="card-section"? "":currCard.classList.add("card_selected");
   
})

//step 1 to add card
for(let i=0;i<shuffleChild.length;i++){
    console.log(i)
    const childDiv=document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name=shuffleChild[i].name;
   //    childDiv.style.backgroundImage=`url(${shuffleChild[i].img})`
    const front_div=document.createElement('div')
    front_div.classList.add('front-card')
    const back_div=document.createElement('div')
    back_div.classList.add('back-card')
    back_div.style.backgroundImage=`url(${shuffleChild[i].img})`
    parentDiv.appendChild(childDiv)
    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)
}
