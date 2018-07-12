function mergeAudioInfo(subscriber){
	var state = subscriber.state.current.name
	switch(state){
		case 'balance' :
			return validateBalance(subscriber)
			break;
		case 'balanceMarket' :
			return validateBalanceMarket(subscriber)
			break;
		//Pospago
		case 'invoice' :
			return validateInvoice(subscriber)
			break;
		case 'consumedPlan' :
			return validateConsumedPlan(subscriber)
			break;
		default : 
			var loc = getAudio(subscriber)
			return loc.slice()
	}	
	
}

function validateBalance(sub){	
	var balance = sub.external.balance
	var audio = getAudio(sub).slice()	
	if(balance.hasOwnProperty("total")){			
		audio.splice(1,1,sub.external.balance.total);
		audio.push(sub.local.audioPromo)
		return audio
	} else{		
		audio.splice(1,0,sub.external.balance.rechargeBalance.total)
		audio.splice(3,0, sub.external.balance.rechargeBalance.date)
		audio.splice(5,0,sub.external.balance.promotionalBalance.total)
		audio.splice(7,0, sub.external.balance.promotionalBalance.date)
		audio.splice(9,0,sub.external.balance.advancementBalance.total)
		audio.splice(11,0, sub.external.balance.advancementBalance.date)
		audio.push(sub.local.audioPromo)
		return audio
	}			
}

function validateBalanceMarket(sub){
	var balance = sub.external.balance
	var audio = getAudio(sub).slice()	
	if(balance.hasOwnProperty("total")){
		sub.access[sub.state.next[0].name] = false
		return ["no_balance"]
	} else{
		if(sub.external.balance.rechargeBalance.total==0){
			sub.access[sub.state.next[0].name] = false
			return ["no_balance"]
		} else{
			audio.splice(1,0,sub.external.balance.rechargeBalance.total)
			return audio
		}		
	}
}


/***********************************************************************************************/
/*****************************************POSPAGO***********************************************/
/***********************************************************************************************/

function validateInvoice(sub){
	var invoice = sub.scl.invoice
	var audio = getAudio(sub).slice()
		
	audio.splice(2,0, invoice.dateInvoiceRelease)
	audio.splice(4,0, invoice.totalLastInvoice)
	audio.splice(6,0, invoice.dateLastInvoice)
	return audio
}

function validateConsumedPlan(sub){
	var invoice = sub.scl.invoice
	var audio = getAudio(sub).slice()
		
	audio.splice(2,0, invoice.excedentMmins)
	audio.splice(4,0, invoice.excedentMin)
	audio.splice(7,0, invoice.consumedMin)
	audio.splice(9,0, invoice.inRedMin)
	audio.splice(12,0, invoice.outRedMin)
	audio.splice(15,0, invoice.dateLastCall)
	audio.splice(17,0, invoice.hourLastCall)
	audio.splice(20,0, invoice.dateLastInvoice)
	audio.splice(22,0, invoice.dateCloseCicle)
	return audio
}