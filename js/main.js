// case1 begin
function calling_search_prompt(){
	var search_prompt = prompt('Введи поисковой запрос: ','');
	if (search_prompt==="") {
		alert('Вы ничего не ввели');
	}
}
//case1 end

//case2 begin
var pols = ['М','Ж']
var student = {
	human: ['Кулишкин','Виктор','Валентинович', 17],
	pol: pols[0],
	kurs: 3,
	group: '3П3'
}
document.getElementById("for-my-name").innerHTML = "Страницу разработал: " + student.human[0] + ' ' + student.human[1] + ' ' + student.human[2] + ' из группы ' + student.group;

function time(){
	var date = new Date();
	var formattedDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	document.getElementById('timer').innerHTML = 'Текущее время: ' + formattedDate;
}

var imgState = 0;

function ImageChange(){
	if (imgState == 0){
		var images = ['js/img/i1.ico', 'js/img/i2.ico', 'js/img/i3.ico'];
		var i = 1;
		var length = images.length
		setInterval(function() {
		if(i== length) i= 0
		document.getElementById('img').src = images[i++];
		}, 2000);
	}
}

function Start(){
	setInterval('time()', 100)
	ImageChange();
}

document.getElementById('for-my-name').style.backgroundColor = 'red';
document.getElementById('for-my-name').style.color = 'green';
//case2 end
//case3 begin

var date = new Date();
alert('Вы зашли на мою страницу ' +
	date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() +
	' в ' +
	date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
)

document.getElementById('yandex-href').onclick = function(){
	if (confirm('Перейти по ссылке?')){
		document.location.href='https://yandex.ru';
	}
}


document.getElementById('for-my-name').style.textAlign = 'right';
document.getElementById('for-my-name').style.fontFamily = 'Arial';

document.getElementById('img').onmouseover = () =>{
	imgState=1
	document.getElementById('img').src = 'js/img/i1.ico';
}
document.getElementById('img').onmouseout = () =>{
	imgState=0
}
