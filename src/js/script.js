 window.onload = function() {

	let hide_content1 = document.getElementById('hide-content1');
	let hide1 = document.getElementById('hide-1');
	let Arrow1 = document.getElementById('Arrow1');
	let Arrow11 =  document.getElementById('Arrow1-1');
	let hide_content2 = document.getElementById('hide-content2');
	let hide2 = document.getElementById('hide-2');
	let Arrow2 = document.getElementById('Arrow2');
	let Arrow21 =  document.getElementById('Arrow2-1');
	

	hide1.onclick = function(){

		if(hide_content1.style.display == "block"){
			hide_content1.style.display = "none";
			hide1.innerHTML = "Показать все";
			Arrow1.style.display = "inline";
			Arrow11.style.display = "none";
		} 
		else{
			 hide_content1.style.display = "block";
			 hide1.innerHTML = "Скрыть";
			 Arrow1.style.display = "none";
			 Arrow11.style.display = "inline";
		}	
	}
	hide2.onclick = function(){

		if(hide_content2.style.display == "block"){
			hide_content2.style.display = "none";
			hide2.innerHTML = "Показать все";
			Arrow2.style.display = "inline";
			Arrow21.style.display = "none";
		} 
		else{
			 hide_content2.style.display = "block";
			 hide2.innerHTML = "Скрыть";
			 Arrow2.style.display = "none";
			 Arrow21.style.display = "inline";
		}	
	}
};