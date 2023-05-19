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
//step 4

parentDiv.addEventListener('click',(event)=>{
    let currCard= event.target;
    currCard.id ==="card-section"? "":currCard.classList.add("card_selected");
   
})

//step 1 to add card
for(let i=0;i<shuffleChild.length;i++){
    console.log(i)
    const childDiv=document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name=shuffleChild[i].name;
    childDiv.style.backgroundImage=`url(${shuffleChild[i].img})`
    parentDiv.appendChild(childDiv)
}