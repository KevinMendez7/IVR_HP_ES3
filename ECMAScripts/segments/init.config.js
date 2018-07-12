var flowChart = {    
    id: "1",
    type: "1",
    name: "init",
    init : [
        /*{
        	callflow: "backend",
	    	name: "IVRPA"
        },  */  
        {
        	callflow: "menu",
        	property: "menu",
            name: "master"
        }
    ],    
    menu : [
        {
            id: "1",
            name: "master",
            description: "principal menu",
            src: ["master_menu_init"],
            options : [
                {
                    id: "1",
                    option: "1",
                    name: "prepago",
                    init: [
                           {
                        	   callflow: "disconnect",
                        	   name: "disconnect"
                           }
                    ]
                },
                {
                    id: "2",
                    option: "2",
                    name: "pospago",        
                    src: ["audio_transfer"],
                    init: [
                           {
                        	   callflow : "transfer",
                        	   property: "option",
                        	   name : "pospago" 
                           }
                    ]
                }
            ]
        }
    ]
}

global.init = function(){
	return flowChart
}
