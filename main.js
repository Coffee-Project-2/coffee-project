"use strict"

function renderCoffee(coffee) {
    //table refactored to div,h2 and p and coffee.id was removed as TODO indicated.
    //js DOM where each coffee object will be placed into the HTML.
    var html ='<div>';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {  //modified for loop from descending to ascending per TODO.
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


//original from existing code up to if condition...this is the drop down menu.
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    //e.preventDefault(); means to prevent the event of submitting form via button from going to another page.
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) { //forEach goes through all coffees.
        if (coffee.roast === selectedRoast || selectedRoast === "all") {
            //added "all" per HTML add on.
            filteredCoffees.push(coffee);
            //if either condition is met, it will push no new coffee arrays called filteredCoffees.
        }
    });
        var searchInput = searchBox.value.toLowerCase().trim();
        //created new var for searchbox.value, added toLowerCase and trim to remove added white space.
        var searchCoffees = [];
        //created new array for new results.
        filteredCoffees.forEach(function(coffee) {
            if (coffee.name.toLowerCase().includes(searchInput) ) {
                //.includes means all or part of the search input like "c" or "city"
                searchCoffees.push(coffee);
            }
        });

        coffeeBox.innerHTML = (renderCoffees(searchCoffees)), (renderCoffees(filteredCoffees));
        //this allows for both coffees to be searched and for the drop down menu to be used in ascending order.
}

//search updates without submit button
var searchAutoFill = document.getElementById('search-box');
searchAutoFill.addEventListener('change', updateCoffees);



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

//roast drop-down updates without submit button
var selectElement = document.getElementById('roast-selection');
selectElement.addEventListener('change', updateCoffees);

var searchBox = document.querySelector('#search-box');
var coffeeBox = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

var coffeeAdd = document.querySelector('#add-coffee');
var roastSelection2 = document.querySelector('#roast-selection2');

//Add Coffee functionality
// function myFunction(){
//     var addCoffee = document.getElementById("add-coffee").value;
//     // document.getElementById('demo').innerHTML = addCoffee;
//     coffees.push(addCoffee);
//     document.getElementById("coffees").innerHTML = renderCoffee(coffees);
//     //i can't figure how to get new element into coffees array
// }
function myFunction() {
var newCoffee = {};
newCoffee.id = coffees.length+1;
newCoffee.name = coffeeAdd.value;
newCoffee.roast = roastSelection2.value;
coffees.push(newCoffee);
coffeeBox.innerHTML = renderCoffees(coffees)
}

coffeeBox.innerHTML = renderCoffees(coffees);//original HTML - runs the function of ascending order loop into the HTML.
searchBox.addEventListener('keyup', updateCoffees);//this automatically updates displayed coffee as user types in search box.
submitButton.addEventListener('click', updateCoffees);//original html that updates coffees when submit button is clicked.





//TODOs completed so far:
// Tables are a little old school, you need to refactor the code so that each coffee is displayed in a div that contains a heading displaying the coffee name, and the type of roast in a paragraph. Don't display the ids, these are only for our application's internal use
// When the page loads, the coffees should be sorted by their ids in ascending order
// Add functionality to search through the coffees by name, and display only the coffees that match the provided search term (You will need to add an input field to the existing form for this)
// Add functionality to update the displayed coffee as the user types into the search box, or as soon as they select an option from the select.

//BONUS
// Add an option to select all roasts for roast type
// Make your name search case insensitive
// Allow the user to add new coffees to the page
// Create another form on the page that has an input for the coffee name, and a select to choose the coffee roast. When the form is submitted, the new coffee should appear on the page. (Note that any new coffees you add will be lost when you refresh the page, for an extra challenge, research how localStorage works and see if you can find a way to persist the data)
