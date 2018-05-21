var xhr = new XMLHttpRequest();

xhr.onload = function(){
	if (xhr.status === 200){
		document.getElementById('content').innerHTML = xhr.responseText;
	}
};

xhr.open('GET', '../Data/6-1-Data.html', true);
xhr.send(null);