var nam = "Виктор";

document.getElementById("for-my-name").prepend("Создал: " +"Кулишкин " + nam + " Валентинович");

var Calling_search_prompt = () => {
	var search_prompt = prompt("Введите запрос:", "");
	if (search_prompt==="") {
		alert('Вы не ввели ничего');
	}
}

