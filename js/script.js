"use strict";

/*
* 스핀박스 만들어보기
* 1. 인풋+버튼2 다 있다고 가정
* 2. 0 으로 초기화
* 3. 마우스 클릭으로 증가 / 감소 */

function Spinbox(val){
    var inputEl = document.getElementById(val);
    var upEl = document.getElementById('btn_up');
    var dnEl = document.getElementById('btn_dn');

    console.log(inputEl);

    this.zeroInit();
    this.eventup();
    this.eventdn();
}

Spinbox.prototype = {
    zeroInit:function(){
        console.log(this);
    },
    eventup:function(){
        upEl.addEventListener('click',function(){
            var nNumber = parseInt(inputEl.value);
            inputEl.value = nNumber +1;
        });
    }s,
    eventdn:function(){
        dnEl.addEventListener('click',function(){
            var nNumber = parseInt(inputEl.value);
            inputEl.value = nNumber -1;
        });
    }
};
