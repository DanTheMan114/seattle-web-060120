//Dom elements 
let card = document.querySelector('.image-card')
let button = document.querySelector('.like-button')
let form = document.querySelector('form')
form.addEventListener('submit', (e) => addComment(e))

//get info on the page
//fetch
fetch(`http://localhost:3000/recipe/1`)
.then(res => res.json())
.then(content => addContent(content))
//build or use dom elements to populate 
//the dom with the information from our fetch
const addLike = (item) => {
    console.log(item)
    let likes = item.likes+=1
    console.log(likes)

    fetch(`http://localhost:3000/recipe/1`, {
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({likes:likes})
    })
    .then(res => res.json())
    .then(json => {
      let oldLikes =  card.querySelector('.likes')
      oldLikes.innerText = `${json.likes} likes`
    })
}

const addContent = (curry) =>{
  
    button.addEventListener('click', () => addLike(curry))
    let h2 = card.querySelector('h2')
    let img = card.querySelector('img')
    let likes = card.querySelector('.likes')
    console.log(likes)

    h2.innerText = curry.title
    img.src = curry.image
    likes.innerText = `${curry.likes} likes`

    
    // card.innerHTML = ''
    // card.innerHTML = `
    // <div class="image-container">
    // <div class="image-card">
    //   <h2 class="title">${curry.title}</h2>
    //   <img src=${curry.image} class="image" />
    //   <div class="likes-section">
    //     <span class="likes">${curry.likes} likes</span>
    //     <button class="like-button">♥</button>
    //   </div>
    // `


    // // ul.remove()
    let ul = document.querySelector('ul')
    ul.remove()
    let newUl = document.createElement('ul')
    newUl.className = 'comments'
    curry.comments.forEach(comment=> {
        let li = document.createElement('li')
        li.textContent = comment.content
        newUl.appendChild(li)
    })
    let likeSection = document.querySelector('.likes-section')
    // // console.log(likeSection)
    likeSection.after(newUl)

    // let newForm = document.createElement('form')
    // newForm.className = 'comment-form'
    // newForm.innerHTML = `
    
    // <input
    //   class="comment-input"
    //   type="text"
    //   name="comment"
    //   placeholder="Add a comment..."
    // />
    // <button class="comment-button" type="submit">Post</button>

    // `
    // let ul = card.querySelector('ul')
    // console.log(ul)
    // card.appendChild(newForm)
    // console.log(newForm)

}




//update likes with patch
//add event to our like button
// trigger a callback 
// send a patch that will update our like +1 
//update our dom with the new number of likes

//update comments on the page

const addComment = (e) => {
    e.preventDefault()
    console.log(e.target.comment.value)
    let ul = document.querySelector('.comments')
    console.log(ul)
    let comment = document.createElement('li')
    comment.innerText = e.target.comment.value
    ul.appendChild(comment)
    form.reset()
}
