let TitleElt = document.querySelector(".comment h3");
let commentBoxElt = document.querySelector(".comment_box");
let showComment_box = false;
if(showComment_box){
    commentBoxElt.classList.remove("close");
    commentBoxElt.classList.add("open");


}else{
    commentBoxElt.classList.add("close");
    commentBoxElt.classList.remove("open");

}




TitleElt.addEventListener('click' ,(e)=>{
    console.log("you clicked me");
    showComment_box =!showComment_box;
    if(showComment_box){
    commentBoxElt.classList.remove("close");
    commentBoxElt.classList.add("open");


}else{
    commentBoxElt.classList.add("close");
    commentBoxElt.classList.remove("open");

}
})