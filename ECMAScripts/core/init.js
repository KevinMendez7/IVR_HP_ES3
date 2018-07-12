global.sessionCall = function (session) {
  return {
    caller: (function () {
      try {
        var getInfo = session
        getInfo = getInfo["remote"]["uri"].substring(5)
        return getInfo.split('@')[0]
      } catch (e) {
        return e
      }
    })(),
    dialedNumber: (function () {
      try {
        var getInfo = session
        getInfo = getInfo["local"]["uri"].substring(4)
        return getInfo.split('@')[0]
      } catch (e) {
        return e
      }
    })(),
    serverIp: (function () {
      try {
        var getInfo = session
        return getInfo["ccxml"]["sessionid"].split('/')[2]
      } catch (e) {
        return e
      }
    })()
  }
}

/*getGlobalConfiguration
 * 
 * Description:
 * Brings the configuration depends on Telefonica Backend, FO correct functionality 
 * 
 * Parameters:
 * config.state from global config
 * 
 * Return:
 * Initial configuration 
 * 
 * Use:
 * Use only on setVariable in start diagram
 * 
 * */

function getGlobalConfiguration(config){	
	return global[config]
}

/*handleState
 * 
 * Description:
 * Handle the state of the initial config and the segment.
 * 
 * Parameters:
 * Subscriber class
 * 
 * Return:
 * Next callflow to move
 *
 * 
 * Use:
 * Use only in ExternalGoto component
 * 
 * */

function handleState(sub){ 
	var state = sub.state
    if(sub.state.hasOwnProperty("next")){    
    	if(sub.state.hasOwnProperty("current")){
    		if(sub.state.current.hasOwnProperty("property")&&(sub.state.current.property=="menu"||sub.state.current.property=="option")){
        		sub.state.masterState = global.clones(sub.state.current)
        		sub.state.previous = global.clones(sub.state.current)
        		sub.state.current = sub.state.next.shift()
        	} else{
        		sub.state.previous = global.clones(sub.state.current)
        		sub.state.current = sub.state.next.shift()
        	}    
    	} else{
    		sub.state.previous = global.clones(sub.state.current)
    		sub.state.current = sub.state.next.shift()
    	}    		                  	    	       
    } else {

        if(sub.state.length){             
            if(sub.state[0].hasOwnProperty("exec")){            	
                sub.flowChart = sub.state[0].exec()
                sub.state.pop()
                handleState(sub)                        
            } else{                          	          
                sub.state.current = sub.state.shift()                   
            }                               
        } else{        	
            if(sub.hasOwnProperty("flowChart")){ 
                sub.state.next = sub.flowChart.init
                handleState(sub)
            }   
        }

    }
    
    if(sub.access.hasOwnProperty(state.current.name)&&!sub.access[state.current.name]){    	
    	return "disconnect.vxml"
    } else{    	
    	return sub.state.current.callflow + ".vxml"
    }              
}

function getStateByDigit(option, sub){
	var currState = sub.state.current 
    var flow = sub.flowChart
    for(var i in flow[currState.property]){
        if(flow[currState.property][i].name===currState.name){            
            for(var j in flow[currState.property][i].options){                
                if(flow[currState.property][i].options[j].option==option){
                    sub.state.next = flow[currState.property][i].options[j].init.slice()
                    return sub
                }
            }
        }
    }   
}

function getAudio(sub){    
    var currState = sub.state.current
    var preState = sub.state.masterState
    if(currState.hasOwnProperty("src")){
    	return currState.src
    } else{    	
    	if(sub.flowChart.hasOwnProperty(currState.property)){									
    		for(var i in sub.flowChart[currState.property]){										
    			if(sub.flowChart[currState.property][i].name===currState.name){					
    				return sub.flowChart[currState.property][i].src
				}  
			}
    	} else if(sub.flowChart.hasOwnProperty(preState.property)){
    		if(sub.flowChart[preState.property][0].name===preState.name){
    			for(var j in sub.flowChart[preState.property][0].options){
					if(sub.flowChart[preState.property][0].options[j].name==currState.name){
						return sub.flowChart[preState.property][0].options[j].src
					}
				}
			} 
		}        
    }    
}

function getPath(audio, sub){	
	if(sub.hasOwnProperty("flowChart")){
		return "../promptFiles/audio/" + sub.flowChart.name + "/" + audio + ".wav"
	} else{
		return "../promptFiles/audio/general/" + audio + ".wav"
	}
	
}


