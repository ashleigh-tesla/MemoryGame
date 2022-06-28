document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [{
            name: 'aaron',
            img: 'images/aaron.gif'
        },
        {
            name: 'aaron',
            img: 'images/aaron.gif'
        },
        {
            name: 'baked donuts',
            img: 'images/bakedDonuts.jpg'
        },
        {
            name: 'baked donuts',
            img: 'images/bakedDonuts.jpg'
        },
        {
            name: 'blackforest',
            img: 'images/blackforest.jpg'
        },
        {
            name: 'blackforest',
            img: 'images/blackforest.jpg'
        },
        {
            name: 'bread',
            img: 'images/bread.jpg'
        },
        {
            name: 'bread',
            img: 'images/bread.jpg'
        },
        {
            name: 'Funfetti Cake',
            img: 'images/funfettiCake.jpg'
        },
        {
            name: 'Funfetti Cake',
            img: 'images/funfettiCake.jpg'
        },
        {
            name: 'Ring Doughnuts',
            img: 'images/ringDoughnuts.png'
        },
        {
            name: 'Ring Doughnuts',
            img: 'images/ringDoughnuts.png'
        },
        {
            name: 'Flowery Vanilla Cake',
            img: 'images/floweryVanillaCake.jpeg'
        },
        {
            name: 'Flowery Vanilla Cake',
            img: 'images/floweryVanillaCake.jpeg'
        },
        {
            name: 'Glazed Doughnut',
            img: 'images/glazedDoughnut.png'
        },
        {
            name: 'Glazed Doughnut',
            img: 'images/glazedDoughnut.png'
        },
        {
            name: 'Party Cake',
            img: 'images/party-birthday-cake-for-aaron.jpg'
        },
        {
            name: 'Party Cake',
            img: 'images/party-birthday-cake-for-aaron.jpg'
        },
        {
            name: 'Kitka',
            img: 'images/kitka.jpg'
        },
        {
            name: 'Kitka',
            img: 'images/kitka.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')

    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    // create thy board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/drop..jpg')
            card.setAttribute('data-id', i)
            card.style.width = "100px"
            card.style.height = "100px"
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    createBoard()

    // check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You Found A Match')
            cards[optionOneId].setAttribute('src', "images/blue.jpg")
            cards[optionTwoId].setAttribute('src', "images/blue.jpg")
            cardsWon.push(cardsChosen)
        } else {
            alert("Sorry, Try Again")
            cards[optionOneId].setAttribute('src', "images/drop..jpg")
            cards[optionTwoId].setAttribute('src', "images/drop..jpg")
        }
        cardsChosen = []
        cardsChosenId = []

        resultDisplay.textContent = cardsWon.length

        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "Congratulations! You Found Them All"
        }
    }

    // flip thy card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

})