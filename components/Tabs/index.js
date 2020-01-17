// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//axios.get('https://lambda-times-backend.herokuapp.com/topics')
//    .then(response => console.log(response.data));
//says axios is undefined

let topicsContainer = document.querySelector('.topics');

fetch('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => response.json())
        .then(json => json.topics.forEach(topic => topicsContainer.append(tabMaker(topic))));

function tabMaker(topic) {
    let tab = document.createElement('div');
    tab.classList.toggle('tab');
    tab.textContent = topic;
    return tab;
}