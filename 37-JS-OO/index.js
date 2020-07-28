//add new cat js to html


const fetchAll = () => {
fetch('http://localhost:3000/cats')
.then(res => res.json())
.then(data => data.map(item => buildGuestItem(item)))
}
fetchAll()

const fetchOne = (id) => {
fetch(`http://localhost:3000/cats/${id}`)
.then(res => res.json())
.then(data => buildSelectedCat(data))
}

const createCat = (cat) => {

}

const buildGuestItem = (item) => {
    let ul = document.querySelector('ul')
    let li = document.createElement('li')
    li.textContent = item.name
    li.id = item.id
    li.addEventListener('click',(e)=>{
        fetchOne(e.target.id)
    })
    ul.appendChild(li)
}

const buildSelectedCat = (cat) => {
    let catContainer = document.getElementById('selected_cat_info')
    let h1 = catContainer.querySelector('h1')
    let p = catContainer.querySelector('p')
    let img = catContainer.querySelector('img')

    h1.textContent = cat.name
    p.textContent = cat.catchphrase
    img.src = cat.imgUrl
}

