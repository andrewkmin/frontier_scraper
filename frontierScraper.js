// NOTE: TODO -- take in two locations (from and to)

function scraper(from, to){
	var seaArr = [];
	var phlArr = [];
	var laxArr = [];
	var sfoArr = [];
	var snaArr = [];
	var phxArr = [];
	var nyArr = [];
	var trips = document.getElementsByName('saleBox')
	for(var i = 0; i < trips.length; i++){
		var newObj = {};
		if(trips[i].outerText.toUpperCase().includes('SEATTLE')){
			newObj.from = trips[i].firstChild.firstChild.innerText;
			newObj.to = trips[i].firstChild.lastChild.innerText;
			// newObj.price = trips[i].lastChild.children[1].children[0].getElementsByClassName('priceNonDiscountDen')[0].outerText;
			newObj.price = trips[i].lastChild.children[1].children[0].innerText
			newObj.date = trips[i].lastChild.children[1].children[1].innerText;
			seaArr.push(newObj)
		} else if(trips[i].outerText.toUpperCase().includes('PHILADELPHIA')){
			newObj.from = trips[i].firstChild.firstChild.innerText;
			newObj.to = trips[i].firstChild.lastChild.innerText;
			// newObj.price = trips[i].lastChild.children[1].children[0].getElementsByClassName('priceNonDiscountDen')[0].outerText;
			newObj.price = trips[i].lastChild.children[1].children[0].innerText
			newObj.date = trips[i].lastChild.children[1].children[1].innerText;
			phlArr.push(newObj);
		} else if(trips[i].outerText.toUpperCase().includes('LOS ANGELES')){
			newObj.from = trips[i].firstChild.firstChild.innerText;
			newObj.to = trips[i].firstChild.lastChild.innerText;
			// newObj.price = trips[i].lastChild.children[1].children[0].getElementsByClassName('priceNonDiscountDen')[0].outerText;
			newObj.price = trips[i].lastChild.children[1].children[0].innerText
			newObj.date = trips[i].lastChild.children[1].children[1].innerText;
			laxArr.push(newObj);
		} else if(trips[i].outerText.toUpperCase().includes('SAN FRANCISCO')){
			newObj.from = trips[i].firstChild.firstChild.innerText;
			newObj.to = trips[i].firstChild.lastChild.innerText;
			// newObj.price = trips[i].lastChild.children[1].children[0].getElementsByClassName('priceNonDiscountDen')[0].outerText;
			newObj.price = trips[i].lastChild.children[1].children[0].innerText
			newObj.date = trips[i].lastChild.children[1].children[1].innerText;
			sfoArr.push(newObj);
		} else if(trips[i].outerText.toUpperCase().includes('SANTA ANA')){
			newObj.from = trips[i].firstChild.firstChild.innerText;
			newObj.to = trips[i].firstChild.lastChild.innerText;
			// newObj.price = trips[i].lastChild.children[1].children[0].getElementsByClassName('priceNonDiscountDen')[0].outerText;
			newObj.price = trips[i].lastChild.children[1].children[0].innerText
			newObj.date = trips[i].lastChild.children[1].children[1].innerText;
			snaArr.push(newObj);
		} else if(trips[i].outerText.toUpperCase().includes('PHOENIX')){
			newObj.from = trips[i].firstChild.firstChild.innerText;
			newObj.to = trips[i].firstChild.lastChild.innerText;
			// newObj.price = trips[i].lastChild.children[1].children[0].getElementsByClassName('priceNonDiscountDen')[0].outerText;
			newObj.price = trips[i].lastChild.children[1].children[0].innerText
			newObj.date = trips[i].lastChild.children[1].children[1].innerText;
			phxArr.push(newObj);
		} else if(trips[i].outerText.toUpperCase().includes('NEW YORK')){
			newObj.from = trips[i].firstChild.firstChild.innerText;
			newObj.to = trips[i].firstChild.lastChild.innerText;
			// newObj.price = trips[i].lastChild.children[1].children[0].getElementsByClassName('priceNonDiscountDen')[0].outerText;
			newObj.price = trips[i].lastChild.children[1].children[0].innerText
			newObj.date = trips[i].lastChild.children[1].children[1].innerText;
			nyArr.push(newObj);
		}
	}
	var finalObj = {
		SEATTLE: seaArr,
		PHILADELPHIA: phlArr,
		LOSANGELES: laxArr,
		SANFRANCISCO: sfoArr,
		SANTAANA: snaArr,
		PHOENIX: phxArr,
		NEWYORK: nyArr
	};

	if(!location){
		return finalObj;
	} else {
		return finalObj[location.toUpperCase().replace(/\s+/g, '')];
	}
	console.log('Finished.', finalObj);
}
