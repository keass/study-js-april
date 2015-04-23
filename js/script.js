"use strict";

/*
* 스핀박스 만들어보기
* //1. 인풋+버튼2 다 있다고 가정
* //2. 200 으로 초기화
* //3. 마우스 클릭으로 증가 / 감소
* //4. 100~ 300 사이
* 5. 포커스 아웃시 숫자 외에는 다 날리기
* 6. 누르고 0.5초 이후론 0.1초마다 1씩 증감되도록 */

function Spinbox(val){

    this.inputEl = document.getElementById(val);
    this.upEl = document.getElementById('btn_up');
    this.dnEl = document.getElementById('btn_dn');

    this.setValue(this.nFirstData);
    this.eventup();
    this.eventdn();
    this.inputBlur();
}

Spinbox.prototype = {
    nFirstData:200,
    nMaxData:300,
    nMinData:100,
    setValue:function(val){
      this.inputEl.value = val;
    },
    maxChecker:function(){
        var that = this;
        return (that.inputEl.value < this.nMaxData);
    },
    minChecker:function(){
        var that = this;
        if (that.inputEl.value > this.nMinData) {
            return true
        } else {
            return false
        };
    },
    eventup:function(){
        var that = this;
        this.upEl.addEventListener('click',function(){
            var nNumber = parseInt(that.inputEl.value);
            if (that.maxChecker()){that.inputEl.value = nNumber+1};
        });
    },
    eventdn:function(){
        var that = this;
        this.dnEl.addEventListener('click',function(){
            var nNumber = parseInt(that.inputEl.value);
            if (that.minChecker()){that.inputEl.value = nNumber-1};
        });
    },
    inputBlur:function(){
        var that = this;
        that.inputEl.addEventListener('blur',function(){
           var nNumber = parseInt(that.inputEl.value);

        });

    }
};
