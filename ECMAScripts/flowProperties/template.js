var Subscriber = function(config, session) {
    this.access = config.validations
    this.state = config.init   
    this.session = global.sessionCall(session)    
}

/*template view
 * 
 
 * var subscriber = {
 * local: {
 *	  number: "66666666", //numero
 *	  mask: false, //mascara
 *	  openPlan: false, //plan libre
 *	  audioPromo: "no_loc", //audiopromo
 *	  subscriberType: "0", //tipoabonado 
 *	  transfer: "512", //numero desvio
 *	  recaller: false, //rellamador
 *	  outOfService: false //fuera de horario
 * }, 
 * external:{
 *	  statePlan: "A|CN", //estadoplan
 *	  balance: {
 *		  total: "0",
 *		  date: ""
 *	  } //saldo
 * },
 * segmentation: {
 *	  id: "3",
 *	  name: "PLAN_LIBRE",
 *	  type: ""	  	  	  
 * },
 * state: {
 *	  last: "",
 *	  now: {
 * 		  id: "1",
 * 		  flow: "backend",
 * 		  type: "backend",
 * 		  name: "ivrpaRequest"
 *
 * 	  },
 * 	  next: {
 * 		  id: "1",
 * 		  flow: "menu",
 *  	  type: "menu",
 * 		  name: "master"	  		  
 *
 * 	  }
 * },
 * actions: {
 *	  a: getMsisdn,
 *	  b: updateRemoteUri,
 *	  c: defineSegment,
 *	  d: refreshRules
 * }
 * 
 * 
 */