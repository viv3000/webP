var checkAndSubmitForm = () => {
	if(document.getElementsByTagName("input")[1].value == '') { 
		alert("Имя не заполнено")
	}else if(document.getElementsByTagName("input")[2].value == '') { 
		alert("email не заполнен")
	}else if (document.getElementsByTagName("input")[3].value == '') {
		alert("Пороль не заполнен")
	}else if (document.getElementsByTagName("input")[3].value != document.getElementsByTagName("input")[4].value){
		alert("Пароли не совпадают")
	}else if (document.getElementsByTagName("input")[4].value.length<8){
		alert("Пароль должен содержать не менее 8 знаков")
	}else{
		alert("Готово")
		document.getElementById("logup").submit()
	}
}
