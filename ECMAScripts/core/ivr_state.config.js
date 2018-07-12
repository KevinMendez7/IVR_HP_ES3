global.OK = {
		validations : {
			local : true,
			external: true,
			scl: true,
			mask: true,
			transfer: true,
			market: true
		},
		init: [
		       {
		    	   callflow: "merge",
		    	   route: "B0",
		    	   name: "reporteria"
		       },
		       {
		    	   callflow: "backend",
		    	   name: "IVRPA"
		       }		       
		]
}

global.OF = {
		validations : {
			local : true,
			external: true,
			scl: false
		}	
}

global.GE = {
		validations : {
			local : false,
			external: false,
			scl: false
		},
		init: [
		       /*{
		    	   callflow : "audio",
		    	   name : "error"
		       }*/
		       {
		    	   callflow : "transfer",       
		    	   src : ["audio_transfer"],
		    	   name : "transfer" 
		       }
		]	
}

global.LE = {
		validations : {
			local : false,
			external: true,
			scl: true
		},
		init: [
		       {
		    	   exec: global.init
		       },
		       {
		    	   callflow : "menu",
		    	   name : "master"
		       }
		]	
}

global.AE = {
		validations : {
			local : true,
			external: false,
			scl: true
		}	
}

global.SE = {
		validations : {
			local : true,
			external: true,
			scl: false
		}	
}
