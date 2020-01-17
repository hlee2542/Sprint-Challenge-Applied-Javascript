// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardsCont = document.querySelector('.cards-container');

function cardMaker(entry) {
    let card = document.createElement('div');
    card.classList.toggle('card');

    let headline = document.createElement('div');
    headline.classList.toggle('headline');
    headline.textContent = entry.headline;
    card.append(headline);

    let author = document.createElement('div');
    author.classList.toggle('author');
    let imgCont = document.createElement('div');
    imgCont.classList.toggle('img-container');
    let img = document.createElement('img');
    img.src = entry.authorPhoto;
    imgCont.append(img);
    let name = document.createElement('span');
    name.textContent = entry.authorName;
    author.append(imgCont);
    author.append(name);
    card.append(author);

    return card;
}

function makeArticles(topics) {
    for (const topic in topics) {
        topics[topic].forEach(entry => cardsCont.append(cardMaker(entry)));
    }
}

fetch('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => response.json())
        .then(json => makeArticles(json.articles));