function countdown(){
	var now = new Date();
	var eventDate = new Date(now.getFullYear(), 6 ,11, 23, 30, 0);//instanciando um objeto do tipo date, pega a data do evento
	var currentTime = now.getTime();	
	var eventTime = eventDate.getTime();

	var remTime = eventTime - currentTime;

	var s = Math.floor(remTime / 1000); //retorna a menor parte inteira de um número
	var m = Math.floor(s / 60);
	var h = Math.floor(m / 60);
	var d = Math.floor(h / 24);

	h %= 24; 
	m %= 60;         
	s %= 60;

	h = (h < 10) ? "0" +  h : h;
	m = (m < 10) ? "0" +  m : m;
	s = (s < 10) ? "0" +  s : s;

	document.getElementById("days").textContext = d;
	document.getElementById("days").innerText = d;

	document.getElementById("hours").textContext = h;
	document.getElementById("hours").innerText = h;

	document.getElementById("minutes").textContext = m;
	document.getElementById("minutes").innerText = m;

	document.getElementById("seconds").textContext = s;
	document.getElementById("seconds").innerText = s;


	setTimeout(countdown, 1000); //setTimout(função, em qnt tempo quer que ele execute novamente)
}

countdown();


data = new Date();
document.getElementById("data").innerHTML = data;

//window.alert("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
