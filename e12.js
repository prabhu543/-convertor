/*// let radiuss=prompt('enter the radius of circle');
// const pi=3.142;
// const circum=2*pi*radiuss;
// radiuss=Number(radiuss);
// document.write(circum);*/
const textbocs=document.querySelector("#textbox");
const farens=document.querySelector("#faren");
const cellus=document.querySelector("#celes");
var result1=document.querySelector('#result');
let temp;

function convertor(){
if (farens.checked){
temp=Number(textbocs.value);
temp=temp * 9/5 + 32 ;
result1.textContent=`${temp.toFixed(1)}°F units`;
}else if(cellus.checked) {
    temp=Number(textbocs.value);
    temp=(temp -32)*(5/9) ;
    result1.textContent=`${temp.toFixed(1)}°C units`;
} else{
    result1.textContent="select atleast  one  unit !!!!!!";
}
}