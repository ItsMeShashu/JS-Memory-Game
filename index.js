
const picturesArray = [
    {
        'name' : 'Pizza',
        'img' : './Images/pizza.jpg'
    },
    {
        'name' : 'Burger',
        'img' : './Images/burger.jpg'
    },
    {
        'name' : 'Chole-Bhature',
        'img' : './Images/bhature.jpeg'
    },
    {
        'name' : 'Pasta',
        'img' : './Images/pasta.jpeg'
    },
    {
        'name' : 'Ice-Cream',
        'img' : './Images/icecream.jpeg'
    },
    {
        'name' : 'Samosa',
        'img' : './Images/samosa.jpeg'
    },
    {
        'name' : 'Momos',
        'img' : './Images/momos.jpg'
    },
    {
        'name' : 'Dosa',
        'img' : './Images/dosa.jpeg'
    }
]

const gameCards =  picturesArray.concat(picturesArray);  //To make duplicates

const parent = document.querySelector('#mainSection');

let shuffledCards = Array.from(gameCards).sort(() => 0.5 - Math.random());

let cardCounts = 0;
let firstCardName = "";
let secondCardName = "";

const matchedCards = () => {             //To style the 2 matched cards by adding css class to them. 
    let selected_cards = document.querySelectorAll('.cardSelected');

    selected_cards.forEach((currentCard) => {
        currentCard.classList.add('matched_cards');
    })
}

const resetCount = () => {
    cardCounts = 0 ;
    firstCardName = "";
    secondCardName = "";

    let selected_cards = document.querySelectorAll('.cardSelected');

    selected_cards.forEach((currentCard) => {
        currentCard.classList.remove('cardSelected');
    }) 
}


for(let i=0 ; i<shuffledCards.length ; i++) 
{
    const child = document.createElement('div');
    child.classList.add('cards');
    child.dataset.name = shuffledCards[i].name;
    parent.appendChild(child);

    const front_show = document.createElement('div');
    front_show.classList.add('front_card');

    const back_show = document.createElement('div');
    back_show.classList.add('back_card');

    back_show.style.backgroundImage = `url(${shuffledCards[i].img})`;

    child.appendChild(front_show);
    child.appendChild(back_show);

}


parent.addEventListener('click', (event) => {
    let selectedCard = event.target;           // got the reference of the selected card.

    if(selectedCard.id === "mainSection"){     // To remove the border from the main section or the parent div. 
        return false;
    }
    cardCounts++;
    if(cardCounts < 3){

        if(cardCounts === 1){
            firstCardName = selectedCard.parentNode.dataset.name ;    //storing the name of the first selected card in this variable. 
            selectedCard.parentNode.classList.add('cardSelected');    //giving class to the selected card which styles the slected card .
        }
        else{
            secondCardName = selectedCard.parentNode.dataset.name ;   //storing the name of the second selected card in this variable
            selectedCard.parentNode.classList.add('cardSelected');    //giving class to the selected card which styles the slected card .
        }

        if(firstCardName != "" && secondCardName != ""){
            if(firstCardName === secondCardName){
                setTimeout(()=>{
                    matchedCards();
                    resetCount();
                }, 800)
            }
            else{
                setTimeout(()=>{
                    resetCount();
                }, 1000);
            }
        }
    }
});

