$(document).ready(function() {

	$.ajax({ //chiamata ajax
 
		url : "https://flynn.boolean.careers/exercises/api/array/music",

		method : "GET",

		success: function(data){
 
			console.log(data.response); //log che stampa tutti i response degli object dell'array

			for(var i = 0; i < data.response.length; i++){ //ciclo che cicla tutte le response dell'array

				var source = $(".listaCD").text(); //variabile che mi restituisce il div del DOM

				var template = Handlebars.compile(source); //variabile che dice a Handlebars di compilare il template

				var itemResponse = data.response[i]; //creo variabile che richiama le proprietà dell'oggetto di ogni elemento

				//creo la variabile canzone per creare un nuovo oggetto a richiamare tutte le proprietà di ogni oggetto richiamato dall'API
				var canzone = {

					img : itemResponse.poster,
					title : itemResponse.title,
					author : itemResponse.author,
					genre : itemResponse.genre,
					year : itemResponse.year
				}

				var copertinaCD = template(canzone); //creo una variabile che assegna al template di HB l'oggetto appena creato con i dati degli oggetti API

				//uso append per stampare in pagina l'oggetto creato tramite variabile
				$(".cds-container.container").append(copertinaCD)
			}
			
		}, 
		
		error : function(){
			alert("Error");
		}

	})

	
});


