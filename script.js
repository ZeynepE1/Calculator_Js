const number=document.querySelectorAll(".num");
const operator =document.querySelectorAll(".operat");
const del=document.querySelector(".del");
const clear=document.querySelector(".clear");
const equal=document.querySelector(".equal");
const sonuc=document.querySelector(".first");
const sonuc2=document.querySelector(".second");
const virgul =document.querySelectorAll(".ondalik");



number.forEach(
    function(element){
        element.onclick =function() {
        if(sonuc.textContent=="0"){
            sonuc.textContent="";
        }

    sonuc.textContent+=element.textContent;
    }
});

operator.forEach(
    function(element){
        element.onclick =function(){
            sonuc.textContent=sonuc.textContent+element.textContent;
        }
    }
);

virgul.forEach(
    function(element){
        element.onclick =function(){
            sonuc.textContent=sonuc.textContent+element.textContent;
        }
    }
);




del.addEventListener("click", function(){sonuc.textContent=sonuc.textContent.slice(0,-1);
    sonuc2.textContent="";
});

clear.addEventListener("click", function(){
    sonuc.textContent=0;
    sonuc2.textContent="";
});



equal.addEventListener("click", function(){

   
    if(sonuc.textContent.includes("+")){
        sayi1=Number(sonuc.textContent.slice(0,(sonuc.textContent.indexOf("+"))));

        sayi2=Number(sonuc.textContent.slice((sonuc.textContent.indexOf("+")+1), sonuc.textContent.length));

        console.log(sayi1);
        console.log(sayi2);

        sonuc2.textContent=sayi1+sayi2;
        console.log(sonuc2.textContent);
    }
    else if(sonuc.textContent.includes("-")){
        sayi1=Number(sonuc.textContent.slice(0,(sonuc.textContent.indexOf("-"))));
        

        sayi2=Number(sonuc.textContent.slice((sonuc.textContent.indexOf("-")+1), sonuc.textContent.length));
        console.log(sayi1);
        console.log(sayi2);

        sonuc2.textContent = sayi1-sayi2;
        console.log(sonuc2.textContent);
    }

    else if(sonuc.textContent.includes("/")){
        sayi1=Number(sonuc.textContent.slice(0,(sonuc.textContent.indexOf("/"))));
       

        sayi2=Number(sonuc.textContent.slice((sonuc.textContent.indexOf("/")+1), sonuc.textContent.length));
        console.log(sayi1);
        console.log(sayi2);
        sonuc2.textContent = (sayi1 / sayi2);
        console.log(sonuc2.textContent);
    }

    else if(sonuc.textContent.includes("*")){
        sayi1=Number(sonuc.textContent.slice(0,(sonuc.textContent.indexOf("*"))));

        sayi2=Number(sonuc.textContent.slice((sonuc.textContent.indexOf("*")+1), sonuc.textContent.length));
        console.log(sayi1);
        console.log(sayi2);
        sonuc2.textContent = sayi1 * sayi2;
        console.log(sonuc2.textContent);
    }
    else{sonuc2.textContent ="ERROR"}

    
} );



