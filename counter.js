let count=0;
const counterlabel=document.getElementById("counterlabel");
counterlabel.textContent=count;
document.getElementById("dec").onclick = function(){
    count--;
    counterlabel.textContent=count;

}
document.getElementById("inc").onclick = function(){
    count++;
    counterlabel.textContent=count;

}
document.getElementById("res").onclick = function(){
    count=0;
    counterlabel.textContent=count;
}



