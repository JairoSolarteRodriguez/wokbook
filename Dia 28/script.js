const contents = document.querySelectorAll('img')
const listItems = document.querySelectorAll('li')

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllItems();
        hideAllContents(idx);
        item.classList.add('active');
    })
})

function hideAllContents(index) {
    contents.forEach((item, idx) => {
        item.classList.remove('show');
        if(index === idx){
            item.classList.add('show');
        }
    });
}


function hideAllItems() {
    listItems.forEach((item) => {
        item.classList.remove('active');
    });
}
