//функция построения массива месяца
function monthData(month,year){
  var monthData={},firstDateDay=new Date(year,month).getDay(),lastDateDay=new Date(year,(month+1),0).getDay(),countDays=new Date(year,(month+1),0).getDate();

 
    if (firstDateDay===0){
      firstDateDay=6;
    }
    else{
      firstDateDay-=1;
    }
    if (lastDateDay===0){
      lastDateDay=6;
    }
    else{
      lastDateDay-=1;
    }
    monthData.firstDateDay=firstDateDay, monthData.lastDateDay=lastDateDay; monthData.countDays=countDays;

    return monthData;
   
}
monthData(2,2018);
function monthArr(monthData){
  var arr=[];
    for (var i = 0; i < monthData.countDays; i++) {
        arr[i]=i+1;
    }

    return arr;
}
monthArr(monthData(2,2018));
function rowTableCalc(month,year){
monthData(month,year);
let cellsNum=monthData(month,year).firstDateDay+1+monthData(month,year).countDays+(6-monthData(month,year).lastDateDay);
let rowNum=Math.floor(cellsNum/7);
return rowNum;
}
rowTableCalc(2,2018);
//Функция построения таблицы с числом строк и столбцов
function createTable(rowNum,colNum,parentNode){
var table=document.createElement('table');
parentNode.appendChild(table);


for (var i = 0; i <=(rowNum-1); i++) {
var tr=table.insertRow(0);
}

for (var j = 0; j <=(colNum-1); j++) {
  for (var i = 0; i <=(rowNum-1); i++) {
         var td=table.rows[i].insertCell(0);}

}
}

function fillTable(month,year,table,update){
  if (update===true){
    table.removeChild(table.childNodes[0]);
  }
   createTable(rowTableCalc(month,year),7,document.getElementById('table'));//создаем таблицу для месяца календаря, рассчитываем строки
  table=document.getElementById('table');//получаем элемент для доступа к таблице
  console.log(table.childNodes[0].rows[0].cells[0]);
let k=0;//объявляем переменную для перебора массива дней месяца
let previousIndex;
//начинаем цикл заполнения таблицы дней месяца, перебираем строки таблицы
for (var j = 0; j < rowTableCalc(month,year); j++) {
  //Описываем случаи заполнения первой строки днями от предыдущего месяца учитываем крайние значения для января
  if (j===0){ 
    if (month===0){console.log('jan!');console.log(monthArr(monthData(11,(year-1))).length);
    previousIndex=monthArr(monthData(11,(year-1))).length-monthData(month,year).firstDateDay;//январь
    }
    else{
    previousIndex=monthArr(monthData((month-1),year)).length-monthData(month,year).firstDateDay; //стандартный случай
    }
    
    for (var i = 0; (i < monthData(month,year).firstDateDay); i++) {
        
      table.childNodes[0].rows[j].cells[i].innerHTML=monthArr(monthData((month-1),year))[previousIndex];
      previousIndex++;

    }
           for (var i = monthData(month,year).firstDateDay; (i < 7); i++) {
      table.childNodes[0].rows[j].cells[i].innerHTML=monthArr(monthData(month,year))[k];
      k++;

    }
  }
  else{

           for (var i = 0; (i < 7)&&(k<monthArr(monthData(month,year)).length); i++) {
      table.childNodes[0].rows[j].cells[i].innerHTML=monthArr(monthData(month,year))[k];
      k++;


    }
    if(k===monthArr(monthData(month,year)).length){
        let nextIndex=0;
      for (var i = monthData(month,year).lastDateDay+1; (i < 7); i++) {
        if (month===11){
          table.childNodes[0].rows[j].cells[i].innerHTML=monthArr(monthData(0,(year+1)))[nextIndex];
        }
        else{
         table.childNodes[0].rows[j].cells[i].innerHTML=monthArr(monthData((month+1),year))[nextIndex]; 
        }
      
     nextIndex++;


    }
    }
  
  }

}
  
  

  
  
    
  }

function calendarControl(monthElement, yearElement, prevElement, nextElement){
  let today=new Date();
  today=new Date(today.getFullYear(),today.getMonth(), today.getDate(),-today.getTimezoneOffset()/60);
  
  let options = {
  month: 'long'
};
fillTable(today.getMonth(),today.getFullYear(),document.getElementById('table'));
prevElement.onclick=function(){

  today=new Date(today.getFullYear(),(today.getMonth()-1), today.getDate(),-today.getTimezoneOffset()/60);
  fillTable(today.getMonth(),today.getFullYear(),document.getElementById('table'),true);
    monthElement.innerHTML=today.toLocaleString("ru", options);
  yearElement.innerHTML=today.getFullYear();
  
}
nextElement.onclick=function(){

  today=new Date(today.getFullYear(),(today.getMonth()+1), today.getDate(),-today.getTimezoneOffset()/60);
  fillTable(today.getMonth(),today.getFullYear(),document.getElementById('table'),true);
    monthElement.innerHTML=today.toLocaleString("ru", options);
  yearElement.innerHTML=today.getFullYear();
}

  monthElement.innerHTML=today.toLocaleString("ru", options);
  yearElement.innerHTML=today.getFullYear();
  
}
calendarControl(document.querySelectorAll('#calendar_control span')[0], document.querySelectorAll('#calendar_control span')[1],document.querySelectorAll('#calendar_control i')[0],document.querySelectorAll('#calendar_control i')[1]);