var chek = 0;
async function search() 
	{
	if(document.getElementById("text").value.trim() == chek){
			
	}
	else{
        chek = document.getElementById("text").value.trim()
		var searchName  = document.getElementById("text").value.trim().split(/\s+/).filter(function(word){return word !== ''});
        var searchBaz = searchName.filter(function(item, index){return searchName.indexOf(item) === index;});
        console.log(searchBaz);
        var getPhotosZon = document.getElementById("zon_1");
        var getPhotos = document.getElementById("lists_1");
        getPhotosZon.removeChild(getPhotos);
        var getHistoryZon = document.getElementById("bacak");
        var getHistoryZon_3 = document.getElementById("zon_3");
        getHistoryZon.removeChild(getHistoryZon_3);
		var listZone_2 = document.getElementById("zon_2");
		var  lastList = document.getElementById("lists");
		listZone_2.removeChild(lastList);
        var zone = document.createElement("div"); 
        var zone_1 = document.createElement("div"); 
        var zone_3 = document.createElement("div"); 
        zone.setAttribute("id","lists");
        zone_1.setAttribute("id","lists_1");
        zone_3.setAttribute("id","zon_3");
        getPhotosZon.appendChild(zone_1);
        listZone_2.appendChild(zone);
        getHistoryZon.appendChild(zone_3);
        	for (var i = 0; i < searchBaz.length; i++) 
            {
		      var tag = searchBaz[i];
		      var respons = await fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=196d70afea615f4037dfcc3b42064a77&tags="+searchBaz[i]+"&format=json&nojsoncallback=1");
		      var allContent = await respons.json();
		      
		        var rand = Math.floor(Math.random()*95);
		        console.log(allContent);
		        var content = allContent.photos.photo.splice(rand,5);
		        console.log(content);
		      if(content.length ==5) { 
		        let key;
		        var quantityChek = 0;
		        let pictures = document.querySelector("#lists_1");

		                for(var j = 0; j<content.length;j++)
		                {
		                	quantityChek++;
		                    var quantityChek = 
		                    pictures.innerHTML +=`
		                         <div class = "photos">
		                             <img src="${`https://farm${content[j].farm}.staticflickr.com/${content[j].server}/${content[j].id}_${content[j].secret}.jpg`}" width = '100' height = '100' draggable = "true" class="foto">
		                         </div>`
		                }

                var list = document.createElement("div");
                var history = document.createElement("div");

        	    var massivs = document.getElementById("lists");
        	    var historyZon = document.getElementById("zon_3");
        	    list.setAttribute("class","list");
        	    list.setAttribute("onclick","openHisory("+i+")");
        	    history.setAttribute("class","historia");
        	    history.setAttribute("id",`diver${i}`);
                var name = document.createElement("span");
                var name_1 = document.createElement("span");
                var name_text_1 = document.createTextNode(searchBaz[i]);
                var name_text_2 = document.createTextNode(searchBaz[i]);
                name.appendChild(name_text_1); 
                name_1.appendChild(name_text_2);
                history.appendChild(name_1);
                list.appendChild(name);
                massivs.appendChild(list);
                historyZon.appendChild(history);




            }}}
                const foto = document.querySelector('.foto');
	            const zon_1 = document.querySelector('.photos');
	            const saveZone = document.querySelector('#zon_3');

	            saveZone.ondragover = onDrop; 
	            foto.ondragstart = drag;
	            saveZone.onDrop = dropImage;
	}

function openHisory(diverId) {
	var diver  = document.getElementById("diver"+diverId);
	if (diver.style.display === 'none'){
		diver.style.display = 'block';
	}
	else{
		diver.style.display = 'none';
	}
}
function onDrop(event){
	   event.preventDefault();
	   
   }
function drag(event){
	   event.dataTransfer.setData("class", event.target.class);
	   
   }
function dropImage(event){
	let itemClass = event.dataTransfer.getData('id');
	
	event.target.append(document.getElementById('itemClass'));
   }