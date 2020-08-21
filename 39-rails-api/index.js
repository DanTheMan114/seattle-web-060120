//add new cat js to html
const form = document.querySelector('form')
console.log(form)
// form.addEventListener('submit',(e)=> createCat(e))
form.addEventListener('submit',function(e) {
    return createCat(e)
})

const fetchAll = () => {
fetch('http://localhost:3000/cats')
.then(res => res.json())
.then(data => {
    console.log(data)
    buildSelectedCat(data[0])
    return data.map(item => buildGuestItem(item))
})
}
fetchAll()

const fetchOne = (id) => {
fetch(`http://localhost:3000/cats/${id}`)
.then(res => res.json())
.then(data => {
    buildSelectedCat(data)
})
}

const createCat = (e) => {
    e.preventDefault()
    let data = {
        name: e.target.name.value,
        catchphrase: e.target.catchphrase.value,
        imgUrl: e.target.imgUrl.value,
        role: e.target.role.value

    }
   
    fetch('http://localhost:3000/cats',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(cat => buildGuestItem(cat))



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
    let h3 = catContainer.querySelector('h3')
    h3.textContent = cat.role_name
    h1.textContent = cat.name
    p.textContent = cat.catchphrase
    img.src = cat.imgUrl
}

