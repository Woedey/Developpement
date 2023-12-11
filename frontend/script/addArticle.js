let articleCategory = document.getElementById("category")
let articleTitle = document.getElementById("title")
let articleContent = document.getElementById("article")
let articleAuthor = document.getElementById("author")
let cancelButton = document.getElementById("cancel")
let formElt = document.querySelector("form")
let data = {}
console.log(data);
data.name = "house"
/*  articleTitle.addEventListener('input',(e)=>{
    console.log(`Vous m'avez sélectionné`); 
    console.log(e.target.value);
})  */

articleTitle.addEventListener('blur',(e)=>{
    /* console.log(`Vous m'avez laissé`); */
    console.log(e.target.value);
    data.title = e.target.value
})
articleCategory.addEventListener('change',(e)=>{
    console.log(e.target.value);
    data.category = e.target.value
})

articleContent.addEventListener('blur',(e)=>{
    console.log(e.target.value);
    data.content= e.target.value
})
articleAuthor.addEventListener('blur',(e)=>{
    console.log(e.target.value);
    data.author = e.target.valuetg
})

formElt.addEventListener('submit',(e)=>{
    e.preventDefault();
})
