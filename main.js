
let actionTarget= document.getElementById("activeBtns");
let title = document.getElementById("videoTitle");
let foldBtn = document.getElementById("foldBtn");

actionTarget.addEventListener("click",onclickBtn);

    
foldBtn.addEventListener("click", function(target){
    title.classList.toggle("upfold");
    foldBtn.classList.toggle("upfold");
})

function onclickBtn(clickedTarget){
    console.log(clickedTarget);
    let clickedBtn = clickedTarget.target.closest("button");
    if(!clickedBtn) return ;
    highlightBtn(clickedBtn);
};
function highlightBtn(target){
    console.log(target);
      target.classList.toggle("active")
    }
