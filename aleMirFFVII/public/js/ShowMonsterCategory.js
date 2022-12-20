/* This program adds a listener on some buttons that specify the li elements (/html/body/ul/li) that will be displayed. 
            At the beggining all elements will be shown
*/

function elementsInAnArray(elementsDomCollection){
    elementsArray = [];

    for(element of elementsDomCollection){
        elementsArray.push(element);
    }
    
    return elementsArray;
}


function isSameCategory(selector, elementsCategoryList) {
    result = false;
    elementsCategoryList.split(', ').forEach(function(elementsCategory){
        if (selector == elementsCategory){ 
            result = true;
        }
    });
    return result;
}

function displayElement(element, willItBeDisplayed){
    element.style.display = (willItBeDisplayed) ? "inline" : "none";
}

function displaySelectedElements(event){
    elements = document.getElementById("monstruosIndexados").getElementsByTagName("li");
    elements = elementsInAnArray(elements);

    selector = event.target.className;

    elements.forEach(function(element){
        elementsCategory = element.className;
        displayElement(element, isSameCategory(selector, elementsCategory) ||  "all" == selector);
    });
}

window.onload = function(){
    buttonsToClick = document.getElementsByTagName("input");
    buttonsToClick = elementsInAnArray(buttonsToClick);

    if (addEventListener){
        buttonsToClick.forEach(function(button){
            button.addEventListener("click", displaySelectedElements, true);
        });
    } else{ //attachEvent, para internet explorer
        buttonsToClick.forEach(function(button){
            button.attachEvent("onclick", displaySelectedElements, true);
        });
    }
}

