function getComponentParameteres(sub,input){
	switch(sub.state.current.name){
		case "mask" : 
			sub.session.origin = sub.session.caller			
			sub.session.caller = input
			sub.state.next.unshift(sub.state.previous)			
	}
	
}