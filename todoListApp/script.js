const inputText = document.querySelector('.input-text');
// const addText = document.getElementById('add-text');    
const listContainer = document.getElementById('list')
function addText(){
    if(inputText.value === ''){
        alert("Input must be filled")
    }
    else{
        const li = document.createElement('li')
        li.innerHTML = inputText.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '&#x2715'
        li.appendChild(span)
    }
    inputText.value = ''
    saveData()
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showData()



