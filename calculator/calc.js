let count="";


document.getElementById("1").onclick=function(){
    count='1';
    document.getElementById("display").textContent+=count;
}
document.getElementById("C").onclick=function(){

    document.getElementById("display").textContent='';
}

document.getElementById("2").onclick=function(){
    count='2'
    document.getElementById("display").textContent+=count;
}
document.getElementById("3").onclick=function(){
    count='3'
    document.getElementById("display").textContent+=count;
}
document.getElementById("4").onclick=function(){
    count='4'
    document.getElementById("display").textContent+=count;
}
document.getElementById("5").onclick=function(){
    count='5'
    document.getElementById("display").textContent+=count;
}
document.getElementById("7").onclick=function(){
    count='7'
    document.getElementById("display").textContent+=count;
}
document.getElementById("6").onclick=function(){
    count='6'
    document.getElementById("display").textContent+=count;
}
document.getElementById("8").onclick=function(){
    count='8'
    document.getElementById("display").textContent+=count;
}
document.getElementById("9").onclick=function(){
    count='9'
    document.getElementById("display").textContent+=count;
}
document.getElementById("0").onclick=function(){
    count='0'   
    document.getElementById("display").textContent+=count;
}
document.getElementById("+").onclick=function(){
    document.getElementById("display").textContent+="+";
}
document.getElementById("-").onclick=function(){
    document.getElementById("display").textContent+="-";
}
document.getElementById("*").onclick=function(){
    document.getElementById("display").textContent+="*";
}
let dis=document.getElementById("display");

console.log(dis.value);
document.getElementById("CE").onclick=function(){
    count=''    
    document.getElementById("display").textContent=count;
}
document.getElementById("=").onclick=function(){
    if  (document.getElementById("display").textContent=='420'){
        document.getElementById("display").textContent="You are a 420";
    } 
    else{
        dis=eval(dis);
    }

}

