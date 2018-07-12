function getBackendParameters(sub){
	switch(sub.state.current.name){
		case 'IVRPA' : 
			sub.backend = {}
			sub.backend.methodName = 'getClientData'
			sub.backend.parameterName = 'msisdn'
			sub.backend.valueName = sub.session.caller
			break
		case 'external' :
			sub.backend = {}
			sub.backend.methodName = 'getSubscriberExternalData'
			sub.backend.parameterName = 'msisdn'
			sub.backend.valueName = sub.session.caller
			break
		case 'scl' : 
			sub.backend = {}
			sub.backend.methodName = 'getSubscriberSclData'
			sub.backend.parameterName = 'msisdn'
			sub.backend.valueName = sub.session.caller	
	}	
}

function handleBackendResponse(sub, resp){
	switch(sub.state.current.name){
	case 'IVRPA' : 
		sub.local = createObjectFromString(resp)
		valLocalResponse(sub)
		break
	case 'external' :
		sub.external = createObjectFromString(resp)
		valExternalResponse(sub)
	case 'scl' :		
		sub.scl = {}
		sub.scl.invoice = createObjectFromString(resp)
		valSclResponse(sub)
	}	
}

function createObjectFromString(object){
	var tmp = object.HttpResponse.WSIVRCAMResponse['return'][0].valorWS.split(',')
	var obj = {}
	for(var i in tmp){
	  var property = tmp[i].toString().split(':')[0]
	  var value = tmp[i].toString().split(':')[1]
	  obj[property.toString().replace(' ','')] = value.toString().replace(' ','')
	}
	return obj	
}

//////////////////////

function valLocalResponse(sub){	
	var mask = false
	var plan = false
	var getPlan = sub.local.planLibre
	var getSeg = sub.local.mask
	for(var i in sub.local){
		if(i=="mask"){
			if(sub.local[i]=="true"){	
				mask = true				
				var obj = [
						{
							callflow: "input",
							src: ["audio_mask"],
							name: "mask"
						}
				]						
				sub.state.next = obj
			}			
		}
		
		if(i=="planLibre"&&getSeg=="false"){			
			if(sub.local[i]=="true"){		
				plan = true						
				var obj = [
						{
							exec: global.plan_libre
						} 
				]				
				sub.state.next = obj			
			}			
		}
		if(i=="segment"&&getSeg=="false"&&getPlan=="false"){							
			var obj = [
					{						
						exec: global[sub.local[i]]
					} 
			]				
			sub.state = obj	
		}
	}
}

function valExternalResponse(sub){
	var balance = sub.external.balance
	if(balance.toString().match('Error')){
		sub.external.balance = {
				total: 0
		}		
	} else {
		var tmpArray = balance.toString().split('|')		
		var expire = tmpArray[6].slice()
		var bal = tmpArray[5].slice()	
		var rechargeBalance = bal.toString().split('?')[0]
		var rechargeDate = expire.toString().split('?')[0]
		var promotionalBalance = bal.toString().split('?')[1]
		var promotionalDate = expire.toString().split('?')[1]
		var advancementBalance = bal.toString().split('?')[2]
		var advancementBalanceCase = bal.toString().split('?')[4]
		var advancementDate = expire.toString().split('?')[2]
		if(tmpArray[4]==="1?2?3?4?6??"){
			sub.external.balance = {}			
			sub.external.balance.rechargeBalance = {
					total: parseInt(rechargeBalance),
					date: new Date(rechargeDate.substr(4,2)+'/'+rechargeDate.substr(6,2)+'/'+rechargeDate.substr(0,4))
			}
			sub.external.balance.promotionalBalance = {
					total: parseInt(promotionalBalance),
					date: new Date(promotionalDate.substr(4,2)+'/'+promotionalDate.substr(6,2)+'/'+promotionalDate.substr(0,4))
			}
			sub.external.balance.advancementBalance = {
					total: parseInt(advancementBalanceCase),
					date: new Date(advancementDate.substr(4,2)+'/'+advancementDate.substr(6,2)+'/'+advancementDate.substr(0,4))
			}
		} else {
			sub.external.balance = {}
			sub.external.balance.rechargeBalance = {
					total: parseInt(rechargeBalance),
					date: new Date(rechargeDate.substr(4,2)+'/'+rechargeDate.substr(6,2)+'/'+rechargeDate.substr(0,4))
			}
			sub.external.balance.promotionalBalance = {
					total: parseInt(promotionalBalance),
					date: new Date(rechargeDate.substr(4,2)+'/'+rechargeDate.substr(6,2)+'/'+rechargeDate.substr(0,4))
			}
			sub.external.balance.advancementBalance = {
					total: parseInt(advancementBalance),
					date: new Date(advancementDate.substr(4,2)+'/'+advancementDate.substr(6,2)+'/'+advancementDate.substr(0,4))
			}
		}
	}
	
	sub.local.audioPromo = getAudioPromo(sub)
}

function getAudioPromo(sub){
	var promo = global["audioPromo"]["state"]
	for(var i in promo){
		if(promo[i].plan===sub.external.statePlan.toString().split('|')[1]){
			return promo[i].audio.toString()
		}
		
	}
}

function valSclResponse(sub){
	var invoice = sub.scl.invoice
	
	for(var i in invoice){
		if(i.match("date")){
			invoice[i] = new Date(invoice[i].substr(0,2)+'/'+invoice[i].substr(2,2)+'/'+invoice[i].substr(4,4))
		} else{
			invoice[i] = parseFloat(invoice[i])
		}
	}
}