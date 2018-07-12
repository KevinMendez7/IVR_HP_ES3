var hibridoMenu = {    
    id: "1",
    type: "5",
    name: "pospago",
    init : [
            {
				callflow: "merge",
				route: "C0",
				name: "reporteria"
			},
			{
				callflow: "audio",
				src: ["welcome_whatsapp"],
				name: "welcome"	
			},    
			{
				callflow: "backend",
				name: "scl"
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
            src: ["master_menu_pos"],
            options : [
                {
                    id: "1",
                    option: "1",
                    name: "invoice",
                    src: ["audio_info_mth","audio_last_invoice","audio_total_invoice","audio_expire_invoice"],
                    init: [
                           {
								callflow: "merge",
								route: "C1",
								name: "reporteria"
							},
							{
								callflow : "audio",
								property: "option",
								name : "invoice" 
							},
							{
								callflow: "merge",
								route: "X12",
								name: "reporteria"
							},
							{
								callflow: "merge",
								route: "X13",
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
                    name: "consumedPlan",
                    src: ["audio_info_mth","audio_consumed_minutes","audio_excedent_minutes","audio_minutes","audio_excedent_consumption","audio_minutes_inside_net","audio_minutes","audio_minutes_outside_net","audio_minutes","audio_last_registred_call","audio_to","audio_hours","audio_last_invoice_registred","audio_cycle_closure"],
                    init: [
							{
								callflow: "merge",
								route: "C2",
								name: "reporteria"
							},
							{
								callflow : "audio",
								property: "option",
								name : "consumedPlan" 
							},
							{
								callflow : "menu", 
								property: "menu",
								name : "return"                        	   
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
								route: "C4",
								name: "reporteria"
							},
                    ]
                },
                {
                    id: "4",
                    option: "0",
                    name: "transfer",
                    src: ["audio_transfer"],
                    init: [
							{
								callflow: "merge",
								route: "C5",
								name: "reporteria"
							},
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
                        	   callflow : "menu", 
	   							property: "menu",
	   							name : "master"                        	   
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
          }
    ]
}

global.hibrido = function(){
	return hibridoMenu
}
