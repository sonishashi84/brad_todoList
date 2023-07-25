const form = document.getElementById("item-form");
const textbox = document.getElementById("item-input");
const ul = document.getElementById("item-list");
const clear = document.getElementById("clear");
const filter = document.getElementById("filter");

//add item function
const addItem = (e) => {
    e.preventDefault();
    const textboxValue = textbox.value;
    if (textbox.value === '') {
        alert("Plase add item")
        return;
    }

    //create li->list
    const li = document.createElement('li');
    const textnode = document.createTextNode(textboxValue);

    li.append(textnode);
    // console.log(li);

    const button = createButton("remove-item btn-link text-red");
    li.appendChild(button);
    form.reset();
    checkUI();
    //append li to ul
    ul.appendChild(li);
}
//create button
function createButton(classes) {
    const btn = document.createElement('button');
    btn.className = classes;
    const i = createIcon("fa-solid fa-xmark");
    btn.appendChild(i);
    return btn;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}
//remove list item function
function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        console.log("clicked");
        if (confirm('are you sure')) {
            e.target.parentElement.parentElement.remove();
            checkUI();
        }
    }
}


//clear all function
function clearAll() {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    checkUI();
}



function checkUI() {
    const allLI = ul.querySelectorAll('li');
    console.log(allLI);
    if (allLI.length === 0) {
        filter.style.display = 'none';
        clear.style.display = 'none';
    }
    else {
        filter.style.display = 'block';
        clear.style.display = 'block';
    }
}
//filter item function
function filterItem(e) {
    const allLI = ul.querySelectorAll('li');
    // console.log(allLI[1].textContent)
    const filterValue= e.target.value.toLowerCase();
    allLI.forEach((item) => {
        const liValue= item.firstChild.textContent.toLowerCase();
        if(liValue.indexOf(filterValue) !=-1){
            item.style.display='flex';
        }
        else{
           item.style.display='none';
        }

    })
    // console.log(filterValue);
}


//create list tag
form.addEventListener('submit', addItem);
ul.addEventListener('click', removeItem);
clear.addEventListener('click', clearAll);
filter.addEventListener('input', filterItem);
checkUI();
