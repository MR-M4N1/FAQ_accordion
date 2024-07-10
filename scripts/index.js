import { Data } from './DATA.js';

let MainHtml = '';

let HeaderHtml = `<header><img src="./assets/images/icon-star.svg" alt="Star Icon" class="StarIcon"><span class="Tilte">FAQs</span></header>`;

let Footer = ` <div class="attribution"> Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/MR-M4N1" target="_blank">MR-M4N1</a>.</div>`;

let Html = '';

Data.forEach((element) => {

    MainHtml += `
    <section class="Container" id="${element.id}">
      <section class="QuestionContainer" id="${element.QuestionContainer.id}">
        <span class="Question" id="${element.QuestionContainer.span.id}">${element.QuestionContainer.span.text}</span>
        <img src="${element.QuestionContainer.span.image}" alt="Plus Icon" class="PlusIcon" id="${element.QuestionContainer.imageId}">
      </section>
      <section class="AnswerContainer" id="${element.AnswerContainer.id}">
        <span class="Answer" id="${element.AnswerContainer.span.id}">
        ${element.AnswerContainer.span.text}
        </span>
      </section>
    </section>`;


}
);

document.addEventListener("DOMContentLoaded",function(){
    var img = document.getElementById("first_img");
    var TITLE = document.getElementById("first_question");
    if(img){
        img.addEventListener("click", ShowOff1);
    }
    if(TITLE){
        TITLE.addEventListener("click",ShowOff1);
    }
});

let num1 = 0;

function ShowOff1() {
    num1++;
    if(num1 % 2 == 0){
        var answer1 = document.getElementById("first_answer");
        answer1.style.display = "none";
        var answer1_padding = document.getElementById("first_answer_container");
        answer1_padding.style.paddingBottom = "0";
        var answer1_src = document.getElementById("first_img");
        answer1_src.src = "./assets/images/icon-plus.svg";
    }
    else{
        var answer1 = document.getElementById("first_answer");
        answer1.style.display = "block";
        var answer1_padding = document.getElementById("first_answer_container");
        answer1_padding.style.paddingBottom = "30px";
        var answer1_src = document.getElementById("first_img");
        answer1_src.src = "./assets/images/icon-minus.svg";
        
    }
    
}



document.addEventListener("DOMContentLoaded",function(){
    var img2 = document.getElementById("secend_img");
    var TITLE2 = document.getElementById("secend_question");
    if(img2){
        img2.addEventListener("click", ShowOff2);
    }
    if(TITLE2){
        TITLE2.addEventListener("click", ShowOff2);
    }
})

let num2 = 0;

function ShowOff2() {
    num2++;
    if(num2 % 2 == 0){
        var answer2 = document.getElementById("secend_answer");
        answer2.style.display = "none";
        var answer2_padding = document.getElementById("secnd_answer_container");
        answer2_padding.style.paddingBottom = "0";
        var answer2_src = document.getElementById("secend_img");
        answer2_src.src = "./assets/images/icon-plus.svg";
    }
    else{
        var answer2 = document.getElementById("secend_answer");
        answer2.style.display = "block";
        var answer2_padding = document.getElementById("secnd_answer_container");
        answer2_padding.style.paddingBottom = "30px";
        var answer2_src = document.getElementById("secend_img");
        answer2_src.src = "./assets/images/icon-minus.svg";
        
    }
    
}

document.addEventListener("DOMContentLoaded",function(){
    var img3 = document.getElementById("thirth_img");
    var TITLE3 = document.getElementById("thirth_question");
    if(img3){
        img3.addEventListener("click", ShowOff3);
    }
    if(TITLE3){
        TITLE3.addEventListener("click", ShowOff3);
    }
})

let num3 = 0;

function ShowOff3() {
    num3++;
    if(num3 % 2 == 0){
        var answer3 = document.getElementById("thirth_answer");
        answer3.style.display = "none";
        var answer3_padding = document.getElementById("thirth_answer_container");
        answer3_padding.style.paddingBottom = "0";
        var answer3_src = document.getElementById("thirth_img");
        answer3_src.src = "./assets/images/icon-plus.svg";
    }
    else{
        var answer3 = document.getElementById("thirth_answer");
        answer3.style.display = "block";
        var answer3_padding = document.getElementById("thirth_answer_container");
        answer3_padding.style.paddingBottom = "30px";
        var answer3_src = document.getElementById("thirth_img");
        answer3_src.src = "./assets/images/icon-minus.svg";
        
    }
    
}

document.addEventListener("DOMContentLoaded",function(){
    var img4 = document.getElementById("forth_img");
    var TITLE4 = document.getElementById("forth_question");
    if(img4){
        img4.addEventListener("click", ShowOff4);
    }
    if(TITLE4){
        TITLE4.addEventListener("click", ShowOff4);
    }
})

let num4 = 0;

function ShowOff4() {
    num4++;
    if(num4 % 2 == 0){
        var answer4 = document.getElementById("forth_answer");
        answer4.style.display = "none";
        var answer4_padding = document.getElementById("forth_answer_container");
        answer4_padding.style.paddingBottom = "0";
        var answer4_src = document.getElementById("forth_img");
        answer4_src.src = "./assets/images/icon-plus.svg";
    }
    else{
        var answer4 = document.getElementById("forth_answer");
        answer4.style.display = "block";
        var answer4_padding = document.getElementById("forth_answer_container");
        answer4_padding.style.paddingBottom = "30px";
        var answer4_src = document.getElementById("forth_img");
        answer4_src.src = "./assets/images/icon-minus.svg";
        
    }
    
}


Html = HeaderHtml + MainHtml + Footer;

document.querySelector('main').innerHTML = Html;




