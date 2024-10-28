let btn= document.getElementById("btn1")
let currmode= 1
btn.onmouseover= ()=>{
    if(currmode==1){
        currmode=0;
        document.body.style.backgroundColor="black";
    }
    else{
        currmode= 1;
        document.body.style.backgroundColor="white";
    }
}

