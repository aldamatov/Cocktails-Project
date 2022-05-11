import { cocktails } from './data.js';



const main =document.querySelector('.main-content');
const search = document.querySelector('#search');
const buttonsDiv = document.querySelector(".buttons-div");

const buttons = [
    'All',
    'Cocktail',
    'Shot',
    'Ordinary Drink',
    'Coffee / Tea',
    'Other/Unknown'
  ];
  function creatingButtons(buttons) {
    for (let button of buttons) {
      const btn = document.createElement("a");
      btn.className = 'category';
      btn.innerText = button;
      btn.setAttribute("id", button);
  
      btn.addEventListener("click", (event) => {
        const id = event.target.id;
        if (id === "All") {
          renderData(cocktails);
        } else {
          const filteredData = cocktails.filter(category => category.strCategory === id);
          renderData(filteredData);
        }
      });
      buttonsDiv.appendChild(btn) 
    }
  }
  creatingButtons(buttons) 




let cocktailsData = cocktails;

function renderData(cocktails){
    main.innerHTML= '';
    for(let item of cocktails){
        createCocktails(item)
    }
}
renderData(cocktailsData);



function createCocktails(item){
    const el = `
     <div class="cocktail-item" id=${item.idDrink}>
    <div class="img-wrapper">
        <img src="${item.strDrinkThumb}" alt="">
        <p class="cocktail-name">${item.strDrink}</p>
    </div>
</div>
`;
    main.innerHTML+=el;
}

search.addEventListener('keyup',  () =>{
    const name = search.value;
    const filteredData = cocktailsData.filter((item) =>{
        return item.strDrink.toLowerCase().includes(name) + item.strAlcoholic.toLowerCase().includes(name)

    });

    renderData(filteredData);

})