function getFunction(sub){
	var state = sub.state.current.name
	switch(state){
		case 'reporteria' :
			validateRouteFlow(sub)
			break;		
	}	
	
}

function validateRouteFlow(sub){
	var route = sub.state.current.route
	if(sub.report != undefined){
		sub.report = reportingSession(sub.report, route)		
	} else{
		sub.report = {}	
		sub.report = reportingSession(sub.report, route)
	}	
}