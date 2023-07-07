const nextQoute = document.getElementById('new qoutes');
const text = document.getElementById('quote');
const author = document.getElementById('creator')
const twitter = document.getElementById('twitter');
const loader = document.getElementsByClassName('loader')[0];
const quoteContainer = document.getElementsByClassName('container')[0];

let apiQuotes = []
// get qoutes from API
async function getQuotes(){
    const url = "https://raw.githubusercontent.com/caw083/Quotes-Generator/main/quotes.json";
    try{
        const response = await fetch(url);
        apiQuotes = await response.json();
        loading()
        newQuote()
    }catch(error){
        alert(error);
    }
}

function loading(){
    loader.hidden = true;
    quoteContainer.style.display = "block"
}

function getRandomQuotes(){
    return apiQuotes[Math.floor(Math.random() * apiQuotes.length)] 
}

function newQuote(){
    randomQuotes = getRandomQuotes()
    text.innerHTML = randomQuotes['text']
    if (!randomQuotes.author){
        author.textContent = "Unknown"
    } else {
       author.innerHTML = randomQuotes.author
    }
    if (randomQuotes.text.length > 100){
        text.classList.add('long-qoute')
    }
    else {
        text.classList.remove('long-qoute')
    }
}

function tweetQuotes(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text.innerText} - ${author.innerText}`;
    window.open(twitterUrl, '_blank')
}

nextQoute.addEventListener('click', newQuote)
twitter.addEventListener('click', tweetQuotes)

getQuotes();