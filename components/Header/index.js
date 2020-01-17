// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    let cE = (x) => document.createElement(x);
    let header = cE('div');
    header.classList.toggle('header');
    let date = cE('span');
    date.classList.toggle('date');
    date.textContent = 'SMARCH 28, 2019';
    header.append(date);
    let title = cE('h1');
    title.textContent = "Lambda Times";
    header.append(title);
    let temp = cE('span');
    temp.classList.toggle('temp');
    temp.textContent = "98°";
    header.append(temp);
    return header;
}

let headerCon = document.querySelector('.header-container');
headerCon.append(Header());