var checkAndSubmitForm = () => {
	if(document.getElementsByTagName("input")[1].value == '') { 
		alert("Имя не заполнено")
		return
	}else if (document.getElementsByTagName("input")[2].value == '') {
		alert("Пороль не заполнен")
		return
	}else if(document.getElementsByTagName("input")[1].value == 'admin') {
		alert('привет, админ')
		document.getElementById("logup").submit()
	}else {
		alert('привет, ' + document.getElementsByTagName("input")[1].value)
		document.getElementById("logup").submit()
	}
}
