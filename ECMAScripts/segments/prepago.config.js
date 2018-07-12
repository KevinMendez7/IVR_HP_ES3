var prepagoMenu = {    
    id: "1",
    type: "2",
    name: "prepago",
    init : [
            {
	   			callflow: "merge",
	   			route: "P0",
	   			name: "reporteria"
			},
            {
            	callflow: "audio",
            	src: ["welcome_whatsapp"],
            	name: "welcome"
            	
            },
            {
            	callflow: "backend",
            	name: "external"
            },    
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
            src: ["master_menu_prep"],
            options : [
                {
                    id: "1",
                    option: "1",
                    name: "balance",
                    src: ["audio_balance", "audio_balance_expire","audio_balance_promotional", "audio_balance_expire","audio_balance_advancement", "audio_balance_expire","audio_plan"],
                    init: [
                            {
	   							callflow: "merge",
	   							route: "P1",
	   							name: "reporteria"
                           	},
                           	{
	   							callflow: "merge",
	   							route: "X0",
	   							name: "reporteria"
						  	},
						   	{
						  		callflow : "audio",
						  		property: "option",
						  		name : "balance" 
						  	},
						  	{
	   							callflow: "merge",
	   							route: "X1",
	   							name: "reporteria"
						  	},
						  	{
						  		callflow : "menu", 
						  		property: "menu",
						  		name : "return"                        	   
						  	}
                    ]   
                },
                {
                    id: "2",
                    option: "2",
                    name: "market",
                    src: ["market_master_menu"],
                    init: [
                           {
								callflow: "merge",
								route: "P2",
								name: "reporteria"
							},
							{
								callflow: "audio",
								src: ["audio_balance", "audio_balance_expire"],
								name: "balanceMarket"                        	  
							},
							{
								callflow: "menu",
								property: "menu",
								name: "market"
							}
                    ]
                },
                {
                    id: "3",
                    option: "3",
                    name: "infoMTH",
                    src: ["audio_return_info_mth"],
                    init: [
                           	{
								callflow: "merge",
								route: "P4",
								name: "reporteria"
							},
							{
								callflow: "menu", 
								property: "menu",
								name: "return"                        	                           	
							}
                    ]
                },
                {
                    id: "4",
                    option: "0",
                    name: "transfer",
                    src: ["audio_transfer"],
                    init: [
                           {
                        	   callflow : "transfer",
                        	   property: "option",
                        	   name : "transfer" 
                           }
                    ]   
                },
                {
                    id: "5",
                    option: "7",
                    name: "returnLast",
                    init: [
                           {
                        	   callflow: "menu",
                        	   property: "menu",
                        	   name: "master"
                           }
                    ]
                },
                {
                    id: "6",
                    option: "8",
                    name: "returnMaster",
                    init: [
                           {
                        	   callflow: "menu",
                        	   property: "menu",
                        	   name: "master"
                           }
                    ]
                },
                {
                    id: "7",
                    option: "9",
                    name: "disconnect",
                    init: [
                           {
                        	   callflow: "disconnect",
                        	   name: "disconnect"
                           }
                    ]
                    	
                }
            ]
          },
          {
            id: "2",
	        name: "return",
	        description: "return menu option 1 from master",
            src: ["return_menu"],
            options : [
                {
                    id: "1",
                    option: "8",
                    name: "returnMaster",
                    init: [
                           {
                        	   callflow: "menu",
                        	   property: "menu",
                        	   name: "master"
                           }
                    ]
                },
                {
                    id: "2",
                    option: "9",
                    name: "disconnect",
                    init: [
                           {
                        	   callflow: "disconnect",
                        	   name: "disconnect"
                           }
                    ]
                }
            ]
          },
          {
            id: "3",
            name: "market",
            description: "market menu option 2 from master menu with id 1",
            src: ["market_master_menu"],
            options : [
                {
                    id: "1",
                    option: "1",
                    name: "Data2",
                    init: [
                           {
                        	   callflow: "menu",
                        	   property: "menu",
                        	   name: "marketConfirmation"
                           }
                    ]
                },
                {
                    id: "2",
                    option: "2",
                    name: "Data4",
                    init: [
                           {
                        	   callflow: "menu",
                        	   property: "menu",
                        	   name: "marketConfirmation"
                           }
                    ]
                },
                {
                    id: "3",
                    option: "3",
                    name: "Data7",
                    init: [
                           {
                        	   callflow: "menu",
                        	   property: "menu",
                        	   name: "marketConfirmation"
                           }
                    ]
                },
                {
                    id: "4",
                    option: "4",
                    name: "Data15",
                    init: [
                           {
                        	   callflow: "menu",
                        	   property: "menu",
                        	   name: "marketConfirmation"
                           }
                    ]
                },
                {
                    id: "5",
                    option: "7",
                    name: "repeatMenu",
                    init: [
                           {
                        	   callflow: "menu",
                        	   property: "menu",
                        	   name: "market"
                           }
                    ]
                },
                {
                    id: "6",
                    option: "8",
                    name: "returnMaster",
                    init: [
                           {
                        	   callflow: "menu",
                        	   property: "menu",
                        	   name: "master"
                           }
                    ]
                },
                {
                    id: "7",
                    option: "9",
                    name: "disconnect",
                    init: [
                           {
                        	   callflow: "disconnect",
                        	   name: "disconnect"
                           }
                    ]
                }
            ]
        },
        {
            id: "4",
            name: "marketConfirmation",
            description: "Menu confirmation from market menu",
            src: ["market_confirmation_menu"],
            options : [
                {
                    id: "1",
                    option: "1",
                    name: "confirmation",
                    init: [
                           {
                        	   callflow: "menu",
                        	   property: "menu",
                        	   name: "marketEnd"
                           }
                    ]
                },
                {
                    id: "2",
                    option: "2",
                    name: "returnMarket",
                    init: [
                           {
                        	   callflow: "menu",
                        	   property: "menu",
                        	   name: "market"
                           }
                    ]
                }
            ]
        },
        {
            id: "5",
            name: "marketEnd",
            description: "next buy menu from market menu",
            src: ["market_menu_next_buy"],
            options : [
                       {
                    	   id: "1",
                    	   option: "1",
                    	   name: "disconnect",
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
                    	   name: "returnMarket",
                    	   init: [
                    	          {
                    	        	  callflow: "menu",
                    	        	  property: "menu",
                    	        	  name: "market"
                    	          }
                    	   ]
                       }                
            ] 
        }
    ]
}

global.prepago = function(){
	return prepagoMenu
} 