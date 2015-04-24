"use strict";

/*
* 스핀박스 만들어보기
* //1. 인풋+버튼2 다 있다고 가정
* //2. 200 으로 초기화
* //3. 마우스 클릭으로 증가 / 감소
* //4. 100~ 300 사이
* //5. 포커스 아웃시 숫자 외에는 다 날리기
* //6. 누르고 0.5초 이후론 0.1초마다 1씩 증감되도록 */

function Spinbox(val){

    this.inputEl = document.getElementById(val);
    this.upEl = document.getElementById('btn_up');
    this.dnEl = document.getElementById('btn_dn');

    this.setValue(this.nFirstData);
    this.event();
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
        return (that.inputEl.value > this.nMinData);
    },
    event:function(){
        var that = this;
        var increase = function (){
            var nNumber = parseInt(that.inputEl.value);
            if (that.maxChecker()){that.inputEl.value = nNumber+1}
        };
        var decrease = function (){
            var nNumber = parseInt(that.inputEl.value);
            if (that.minChecker()){that.inputEl.value = nNumber-1}
        };
        var repeater = function(fnc,val){
            if (!val) { val = 200;}
            that.acel = setInterval(fnc,val);
        };
        this.upEl.addEventListener('mousedown',function(){
            that.acel = setTimeout(function(){
                repeater(increase,100);
            },500);
            increase();
        });
        this.upEl.addEventListener('mouseup', function(){
            clearInterval(that.acel);
        });
        this.upEl.addEventListener('mouseout', function(){
            clearInterval(that.acel);
        });
        this.dnEl.addEventListener('mousedown',function(){
            that.acel = setTimeout(function(){
                repeater(decrease,100);
            },500);
            decrease();
        });
        this.dnEl.addEventListener('mouseup', function(){
            clearInterval(that.acel);
        });
        this.dnEl.addEventListener('mouseout', function(){
            clearInterval(that.acel);
        });
    },
    inputBlur:function(){
        var that = this;
        that.inputEl.addEventListener('blur',function(){
            var numcheck = /[^0-9-]/g;
            that.inputEl.value = that.inputEl.value.replace(numcheck,"");
        });
    }
};
