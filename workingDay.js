var today = new Date();

var today=new Date(today.getFullYear(),today.getMonth(), today.getDate(),-today.getTimezoneOffset()/60);

/* Функция для циклического сдвига массива на к шагов. Используется метод splice для отсечки массива с конца,
 а затем метод concat для объединения с оставшейся частью массива.
 Чтобы исходный массив не изменялся используем метод slice()*/
function arrShift(baseArr,k){
	var arr=baseArr.slice();
	arr=arr.splice(-k).concat(arr);
		return arr;
}
//задаем базовый массив смен для второй бригады arr2 и назначаем массивы для других бригад
var arr2=["с утра", "в ночь", "отсыпной", "выходной" ], arr=[arrShift(arr2,2), arr2, arrShift(arr2,1), arrShift(arr2,3)];
var shiftClassArr2=["morning", "night", "sleepoff","dayoff"], shiftClassArr=[arrShift(shiftClassArr2,2), shiftClassArr2, arrShift(shiftClassArr2,1), arrShift(shiftClassArr2,3)];
var shiftPeriod=4;
var shiftNum = (~~(+today/(1000*3600*24)))%shiftPeriod;
var shiftType;
function workDays(myDate,teamNum,arr){
/*Вычисляем остаток от деления количества дней с 1.01.1970 на 4.
Поскольку цикл смен повторяется через 4 дня это значение определит тип смены для каждой из бригад.*/
var shiftNum = (~~(+myDate/(1000*3600*24)))%shiftPeriod;

return shiftType=arr[teamNum-1][shiftNum];
}
//Получаем данные из selecta
var select= document.getElementById("teams"), value;
//объявляем номер бригады по умолчанию и заполняем типы смен за сегодня
teamNum=1;
var selector='.today_container';
var todayElement=document.querySelectorAll(selector);
var teamCounts=4, timeShift=12;

addResultShift(today.getDate(),today.getMonth(),today.getFullYear(),teamNum,todayElement[1],false,false,teamCounts,timeShift);





function animateIcon(menuItem,menuContent) {
    menuItem.classList.toggle('change');
    document.getElementsByClassName('menu_content')[0].classList.toggle('show');
    // Close the dropdown if the user clicks outside of it
selectMenu();

}  
function hideMenu(event){
  if( (event.target.classList.contains('menu_item'))||(event.target.classList.contains('bar1')) ||(event.target.classList.contains('bar2'))||(event.target.classList.contains('bar3')) ){

    return;} 
  else if (document.getElementsByClassName('menu_content')[0].classList.contains('show')){
animateIcon(document.getElementsByClassName('menu_item')[0]);
    document.getElementsByClassName('menu_content')[0].classList.remove('show');
  }

}
function selectReset(idSelect){
  var options = document.querySelectorAll(idSelect)[0].options;
  
for (var i = 0, l = options.length; i < l; i++) {
    options[i].selected = options[i].defaultSelected;
}
}
function selectMenu(selectElement){
  var menu_content=document.querySelectorAll('.menu_content ul li');
   var selectedItem;
//Выбор пункта меню_____________________________________________________________________________________   
for (var i = 0; i < menu_content.length; i++) {


  menu_content[i].onclick=function menuClick(event){
    for (var n = 0; n < menu_content.length; n++) {
    if(menu_content[n].classList.contains("selected")){
      menu_content[n].classList.remove("selected");
      }  
    }

  if((event.target.tagName==='LI')&&(!event.target.classList.contains('selected'))){
  
 event.target.classList.add('selected');
 switch(elemIndex(event.target.parentNode,event.target)) {
  case 1:  
    teamCounts=4; timeShift=12;teamNum=1;
    if (select.length<4){
      for (var i = 3; i < 5; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", i);
         option.text = "Бригада "+i;
         select.add(option);

      }
    }
selectReset('#teams');
    updateResults();
    break;

  case 3:  
   teamCounts=2; timeShift=12; teamNum=1; 
   if (select.length>2){ 
    select.remove(select.length-1);
   select.remove(select.length-1);}
 
selectReset('#teams');
 updateResults();
   
    
    break;

  case 5:
   teamCounts=4; timeShift=8;teamNum=1;
    if (select.length<4){
      for (var i = 3; i < 5; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", i);
         option.text = "Бригада "+i;
         select.add(option);
      }
    };
  selectReset('#teams');
   updateResults();
    break;
}


  }

   else if((event.target.tagName==='P')&&(!event.target.parentNode.classList.contains('selected'))){
  
 event.target.parentNode.classList.add('selected');
 switch(elemIndex(event.target.parentNode.parentNode,event.target.parentNode)) {
  case 1:  
    teamCounts=4; timeShift=12;teamNum=1;
    if (select.length<4){
      for (var i = 3; i < 5; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", i);
         option.text = "Бригада "+i;
         select.add(option);
      }
    }
    selectReset('#teams');
    updateResults();
    break;

  case 3:  
   teamCounts=2; timeShift=12;teamNum=1;
   if (select.length>2){ 
    select.remove(select.length-1);
   select.remove(select.length-1);}
   selectReset('#teams');
   updateResults();
    break;

  case 5:
   teamCounts=4; timeShift=8;teamNum=1;
    if (select.length<4){
      for (var i = 3; i < 5; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", i);
         option.text = "Бригада "+i;
         select.add(option);
      }
    };
  selectReset('#teams');
   updateResults();
    break;
}

  }

}
}



 }  



function updateResults(){
  removeResultShift(todayElement[1],'.today_container .result','','',false);

   

   addResultShift(today.getDate(),today.getMonth(),today.getFullYear(),teamNum,todayElement[1],false,false,teamCounts,timeShift);
    dateFormat(today,selector);
   for (var i = 0; i < selectDatesArr.length; i++) {
   removeResultShift(light_box,'table~.result','','',false);
   }
for (var i = 0; i < selectDatesArr.length; i++) {
  addResultShift(selectDatesArr[i].getDate(),selectDatesArr[i].getMonth(),selectDatesArr[i].getFullYear(),teamNum,light_box,true,false,teamCounts,timeShift);
}
}





function change() {
    value = select.options[select.selectedIndex].value; // Значение value для выбранного option

    teamNum=value;
updateResults();
   
    

}
function dateFormat(myDate, selector){

var weekDay = new Intl.DateTimeFormat("ru", {
  weekday: "long"
});
var monthDate = new Intl.DateTimeFormat("ru", {
  month: "long"
});
var todayClassElement=document.querySelectorAll('#today');
todayClassElement[0].className=" ";
	todayClassElement[0].className += shiftClassArr[teamNum-1][shiftNum];


todayElement[0].innerHTML="<p>"+myDate.getDate()+"</p>"+"<div class='small_container'> <p>"+monthDate.format(myDate).slice(0,-1)+"я"+"</p> <p>"+weekDay.format(myDate).toLowerCase()+"</p> </div>";


}


dateFormat(today,selector);

// Календарь на чистом JS
// Указывая год и месяц получаем число дней для указанного месяца

// Получение данных о нужном месяце и годе
//Получаем текушие месяц и год и выводим их в интерфейс пользователя

var userMonth=today.getMonth(), userYear=today.getFullYear(), increase=false, dicrease=false;
//Обработка деуствий пользователя





//Функция построения календаря на JS для полученных данных о месяце и годе




//Отрисовываем сетку для месяца
var table=document.createElement('table');
light_box.appendChild(table);


for (var i = 1; i < 8; i++) {
var tr=table.insertRow(0);

}
for (var i = 1; i < 8; i++) {
var td=tr.insertCell(0);
}




for (var j = 1; j < 6; j++) {
	for (var i = 1; i < 8; i++) {
     var td2=table.rows[j].insertCell(0);}

}
// задаем заголовок с днями недели
weekDays=["пн", "вт","ср", "чт","пт", "сб","вс"]
for (var i = 0; i < 7; i++) {
table.rows[0].children[i].innerHTML=weekDays[i];
}	


//готовим массив для дней месяца
function monthArray(year,month){
	var monthData={};
	monthData.firstDateDay=new Date(year,month).getDay();
    monthData.lastDateDay=new Date(year,(month+1),0).getDay();
    monthData.countDays=new Date(year,(month+1),0).getDate();
    if (monthData.firstDateDay===0){
    	monthData.firstDateDay=6;
    }
    else{
    	monthData.firstDateDay-=1;
    }
    if (monthData.lastDateDay===0){
    	monthData.lastDateDay=6;
    }
    else{
    	monthData.lastDateDay-=1;
    }
var n=[];
//условие добавления дополнительной строки
if (((monthData.countDays===30 && monthData.firstDateDay>5)||(monthData.countDays===31 && monthData.firstDateDay>4))&&(table.rows[6].cells.length<7))  {
	for (var j = 6; j < 7; j++) {
	for (var i = 1; i < 8; i++) {
     var td2=table.rows[j].insertCell(0);

 }
}

}
else if (     (!(  (monthData.countDays===30 && monthData.firstDateDay>5)||(monthData.countDays===31 && monthData.firstDateDay>4) )   )&&(table.rows[6].cells.length>1)        ) {
	 
			for (var j = 6; j < 7; j++) {
	for (var i = 1; i < 8; i++) {
     var td2=table.rows[j].deleteCell(0);

 }
}
	
}
if (monthData.countDays===28 && monthData.firstDateDay===0) {

	for (var i = 1; i < 8; i++) {
     var td2=table.rows[5].children[i].innerHTML=" ";

 }

}


for (var i = 1; i < (monthData.countDays+1); i++) {
	
		n[i]=i;
	}
if (monthData.firstDateDay>0){
for (var i = 1; i < monthData.firstDateDay+1; i++) {
	n.splice(i,0," ");
}
}

if (monthData.lastDateDay<6){
//добавляем пустые элементы в конец массива
	for (var i = monthData.firstDateDay+1+monthData.countDays; i < (monthData.firstDateDay+1+ monthData.countDays+(6-monthData.lastDateDay)); i++) {
		n[i]=(" ");

	}
}

//Считаем число строк для заполняемого месяца
var countRows;
if (table.rows[6].cells.length>1) {
	countRows=6;
}
else {countRows=5;}
for (var j = 1; j < (countRows+1); j++){

for (var i = 0; i < 7; i++) {

if (j===1) {
	table.rows[j].children[i].innerHTML=n[i+1];
}
else if (j>1){
table.rows[j].children[i].innerHTML=n[i+1+(j-1)*7];
}
}
}

}
monthArray(userYear,userMonth);

var monthNames=["январь", "февраль", "март","апрель","май","июнь","июль","август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
//После того как массив готов отрисовываем таблицу с числами месяца

function changeMonth(n){removeHighLight()
	if ((userMonth<11&&userMonth>0)||(userMonth===0&&n>0)||(userMonth===11&&n<0)){
		userMonth+=n;
	}
	

	
	else if (userMonth===11&&n>0){ userMonth=0; userYear+=1;}

	else if (userMonth===0&&n<0) { userMonth=11; userYear-=1;}
newYear.innerHTML = userYear;
  newMonth.innerHTML = monthNames[userMonth];
monthArray(userYear,userMonth);


}
function removeHighLight(){
  var hlElement=document.querySelectorAll('.highlight');
	 if(hlElement.length>0){
	  	for (var i = 0; i < hlElement.length; i++) {
	  		hlElement[i].classList.remove('highlight');
	  	}
	  }
}

function changeYear(n){
removeHighLight()
	
	if ((userYear>1970)||(userYear===1970&&n>0)){
		userYear+=n;
	}
	

	
	else{ userYear=1970}


  newYear.innerHTML = userYear;
monthArray(userYear,userMonth);

}


var newMonth = document.createElement('div');
newMonth.innerHTML = monthNames[userMonth];
month.insertBefore(newMonth, month.children[1]);





 var newYear = document.createElement('div');
  newYear.innerHTML = userYear;
year.insertBefore(newYear, year.children[1]);
//функция вывода результатов
var selectDatesArr=[],selDatesIndex=0;

function addResultShift(day, month, year, teamNum,element, withDate,changeArr,teamCounts,timeShift){
	var selectDate=new Date(year,month,day);
selectDate= new Date(selectDate.getFullYear(),selectDate.getMonth(), selectDate.getDate(),-selectDate.getTimezoneOffset()/60);
  //готовим массивы рабочих смен для разных графиков
if ((teamCounts===4)&&(timeShift===12)){shiftPeriod=4;
arr2=["с утра", "в ночь", "отсыпной", "выходной"];
arr=[arrShift(arr2,2), arr2, arrShift(arr2,1), arrShift(arr2,3)];
shiftClassArr2=["morning", "night", "sleepoff","dayoff"]; shiftClassArr=[arrShift(shiftClassArr2,2), shiftClassArr2, arrShift(shiftClassArr2,1), arrShift(shiftClassArr2,3)];
shiftNum = (~~(+selectDate/(1000*3600*24)))%4;

  }
if ((teamCounts===4)&&(timeShift===8)){
  shiftPeriod=16;
  
  var morn="с утра", day="с четырех", night="в ночь",dayOff="выходной";
  var arr8hShifts=[morn,day,night];
var arr4=[];
  for (var j = 0; j < 15; j=(j+5)) {
     for (var i = j; i < (j+5); i++) {
    if (i<4){arr4[i]=arr8hShifts[0];}
    if ((i>4)&&(i<10)){arr4[i]=arr8hShifts[1];}
    if (i>9){arr4[i]=arr8hShifts[2];}
     if((i+1)%5===0){arr4[i]=dayOff;}  
  }

  }
arr4[arr4.length]=dayOff;
arr4=arrShift(arr4,1);
arr=[arrShift(arr4,-4),arrShift(arr4,8),arrShift(arr4,4), arr4]
//Classes
var mornClass="morning", dayClass="sleepoff", nightClass="night",dayOffClass="dayoff";
var arr8hShiftsClass=[mornClass,dayClass,nightClass];
var arr4Class=[];
  for (var j = 0; j < 15; j=(j+5)) {
     for (var i = j; i < (j+5); i++) {
    if (i<4){arr4Class[i]=arr8hShiftsClass[0];}
    if ((i>4)&&(i<10)){arr4Class[i]=arr8hShiftsClass[1];}
    if (i>9){arr4Class[i]=arr8hShiftsClass[2];}
     if((i+1)%5===0){arr4Class[i]=dayOffClass;}  
  }

  }
arr4Class[arr4Class.length]=dayOffClass;
arr4Class=arrShift(arr4Class,1);
shiftClassArr=[arrShift(arr4Class,-4),arrShift(arr4Class,8),arrShift(arr4Class,4), arr4Class];
shiftNum = (~~(+selectDate/(1000*3600*24)))%16;

  }
  if((teamCounts===2)&&(timeShift===12)){ shiftPeriod=4;
arr2=["выходной", "с утра", "с утра", "выходной"];
arr=[arrShift(arr2,2), arr2];
shiftClassArr2=["morning", "morning", "dayoff","dayoff"]; shiftClassArr=[arrShift(shiftClassArr2,2), shiftClassArr2];
shiftNum = (~~(+selectDate/(1000*3600*24)))%4;

  }

  //________________________________________________
	
	var options = {
   year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
 
};
	var resultShiftArr=[];
	var divElement=document.createElement('div');
     element.appendChild(divElement);
     divElement.classList.add('result');
     if(withDate===true){
 if(changeArr===true){ selectDatesArr[selDatesIndex]=selectDate;
 selDatesIndex++;}


     divElement.innerHTML="<p>"+ selectDate.toLocaleString("ru", options) +"<i class='fa fa-times' aria-hidden='true' ></i></p><p>Наша бригада " + workDays(selectDate,teamNum,arr)+"</p>";	

     	
     	
     }
     else{
     	divElement.innerHTML="<p>Наша бригада " + workDays(selectDate,teamNum,arr)+"</p>";
     }
     
       	  for (var i = 1; i < (teamCounts+1); i++) {if (i!=teamNum){
	resultShiftArr[i] = "Бригада № " + i + " " + workDays(selectDate,i,arr);
divElement.innerHTML+="<p>"+resultShiftArr[i]+"</p>";


}



  


}

return selectDatesArr;
}

function removeResultShift(parentElement,selElement,selDate,selValue,withDate){
	//Удаление при отмене выбора даты в календаре
	if(withDate===true){
		var selDay=document.querySelectorAll(selDate);
			//условие для удаления отдельных дат из массива
		        	for (var n = 0; n < selectDatesArr.length; n++) {
        		if((selectDatesArr[n].getDate()===selValue)&&(selectDatesArr[n].getMonth()===userMonth)&&(selectDatesArr[n].getFullYear()===userYear)){
        			selectDatesArr.splice(n, 1);
        		 selDatesIndex=selectDatesArr.length;
        		 
        		 parentElement.removeChild(document.querySelectorAll(selElement)[n]);

        			
        		}
        	}


	}
	else{
parentElement.removeChild(document.querySelectorAll(selElement)[0]);
	}
 

}




// Отслеживаем клик на ячейках календаря
var selectedTd;
//Вешаем обработчик на всю таблицу
table.onclick = function tableClick(event) {
  var target = event.target; // где был клик?
  var day=+target.innerHTML;

  if ((target.tagName != 'TD')||(+target.innerHTML===0)||(isNaN(+target.innerHTML))) return; // не на TD? тогда не интересует

  // подсветить TD
  highlight(target);
  //вызовем функцию для вывода результатов работы
  if (target.classList.contains('highlight')){
  	addResultShift(day,userMonth,userYear,teamNum,light_box,true,true,teamCounts,timeShift);

  }
   else if (!target.classList.contains('highlight')){
  	removeResultShift(light_box,'table~.result','table~.result >p:first-child',day,true);
  }
  

}
function highlight(node) {

  selectedTd = node;
  selectedTd.classList.toggle('highlight');


}
//функция для поиска порядкового номера элемента в документе
function elemIndex(parent,child){
  var elems = parent.childNodes;
elems = Array.prototype.slice.call(elems);
return elems.indexOf(child);
}



light_box.onclick = function resultsClick(event) {
if (!event.target.tagName==="I")return;
else if((event.target.tagName==="I")&&(event.target.classList.contains('fa-times'))){
//Удаляем дату из массива дат результатов
selectDatesArr.splice(elemIndex(light_box,event.target.parentNode.parentNode)-8, 1);
selDatesIndex=selectDatesArr.length;
//Удаляем результат со страницы         
	light_box.removeChild(event.target.parentNode.parentNode);

	removeHighLight();
}
}


