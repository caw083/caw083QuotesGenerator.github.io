
nextqoute = document.getElementById('new qoutes');
text = document.getElementById('quote');
author = document.getElementById('creator')
twitter = document.getElementById('twitter');

let apiQuotes = []
// get qoutes from API
async function getQuotes(){
    const url = "https://type.fit/api/quotes";
    try{
        const response = await fetch(url);
        apiQuotes = await response.json();
    }catch(error){
        alert(error);
    }
}

function getRandomQuotes(){
    return apiQuotes[Math.floor(Math.random() * apiQuotes.length)] 
}

function newQuote(){
    randomQuotes = getRandomQuotes()
    text.innerHTML = randomQuotes['text']
    author.innerHTML = randomQuotes['author']
}
getQuotes();

nextqoute.addEventListener('click', newQuote)


