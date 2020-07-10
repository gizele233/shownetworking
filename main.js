function countdown(){
	var now = new Date();
	var eventDate = new Date(now.getFullYear(), 6, 08, 20, 00, 0);//instanciando um objeto do tipo date, pega a data do evento
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


	 

	if(d+h+m+s>0){
		var exec = setTimeout(countdown, 1000);//setTimout(função, em qnt tempo quer que ele execute novamente)
	}else{
		//document.getElementById('chegou').innerHTML = 'CHEGOU O DIA!!!!';
		clearTimeout(exec);
		h = "0"; 
		m = "0";
		s = "0";
		d = '0';

		document.getElementById("days").textContext = d;
		document.getElementById("days").innerText = d;

		document.getElementById("hours").textContext = h;
		document.getElementById("hours").innerText = h;

		document.getElementById("minutes").textContext = m;
		document.getElementById("minutes").innerText = m;

		document.getElementById("seconds").textContext = s;
		document.getElementById("seconds").innerText = s;

	}
}

countdown();

let div = document.querySelector('.popup');
let stop = 1;
div.addEventListener('mouseleave', function(){
	
	if (stop) {
		alert('Não assistiu a live? Copie esse link e cole no seu navegador: https://bit.ly/VerLifeLive e assista agora! ')
		stop = false;	
	}
})