function scraper(from, to){
	var from = from.toUpperCase();
	var to = to.toUpperCase();
	var firstLegs = [];
	var secondLegs = [];
	var trips = document.getElementsByName('saleBox')
	for(var i = 0; i < trips.length; i++){
		var newObj = {};
		if(trips[i].firstChild.firstChild.innerText.toUpperCase().includes(from.toUpperCase())){
			var firstTo = trips[i].firstChild.lastChild.innerText;
			firstTo = firstTo.substring(4, firstTo.length);
			firstTo = firstTo.substring(0, firstTo.indexOf(' ')).toUpperCase();
			newObj.firstFrom = from;
			newObj.firstTo = firstTo;
			newObj.firstPrice = trips[i].lastChild.children[1].children[0].innerText
			newObj.firstDate = trips[i].lastChild.children[1].children[1].innerText;
			firstLegs.push(newObj);
		}
		newObj = {};
		if(trips[i].firstChild.lastChild.innerText.toUpperCase().includes(to.toUpperCase())){
			var secondFrom = trips[i].firstChild.firstChild.innerText;
			secondFrom = secondFrom.substring(6, secondFrom.length);
			secondFrom = secondFrom.substring(0, secondFrom.indexOf(' ')).toUpperCase();
			newObj.secondFrom = secondFrom;
			newObj.secondTo = to;
			newObj.secondPrice = trips[i].lastChild.children[1].children[0].innerText
			newObj.secondDate = trips[i].lastChild.children[1].children[1].innerText;
			secondLegs.push(newObj);
		}
		newObj = {};
	}
	console.log('First legs', firstLegs);
	console.log('Second legs', secondLegs);
	var anotherArr = [];
	for(var x = 0; x < firstLegs.length; x++){
		for(var y = 0; y < secondLegs.length; y++){
			if(firstLegs[x].firstTo === secondLegs[y].secondFrom){
				newObj.from = from;
				newObj.middle = firstLegs[x].firstTo;
				newObj.to = to;
				newObj.firstDate = firstLegs[x].firstDate;
				newObj.secondDate = secondLegs[y].secondDate;
				newObj.price = firstLegs[x].firstPrice.concat(secondLegs[y].secondPrice);
				anotherArr.push(newObj);
				newObj = {};
			}
		}
	}
	console.log('Itinerary', anotherArr);
}
