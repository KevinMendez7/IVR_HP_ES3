var planlibreMenu = {    
    id: "4",
    type: "0",
    name: "plan_libre",
    src : ["audio_transfer"],
    init : [
        {
        	callflow : "transfer",       
        	src : ["audio_transfer"],
        	name : "transfer" 
        }
    ]    
}

global.plan_libre = function(){
	return planlibreMenu
}
