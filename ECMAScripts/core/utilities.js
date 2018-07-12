var reportingSession = function (report, route) {
  report = report || {}
  if (!route) return report

  if (route.constructor === Array) {
    // console.log('Reporteria multiple')
    for (var key in route) {
      report = reportingSession(report, route[key])
    }
    return report
  } else {
    // console.log('Reporteria normal')
    return {
      route: (function () {
        return !this.route ? this.route = '' +
          (!report.route ? report.route = '' : report.route) + route + '|' :
          report.route + route + '|'
      })(),
      routeTime: (function () {
        return !this.routeTime ? this.routeTime = '' +
          (!report.routeTime ? report.routeTime = '' : report.routeTime) + getDuration() + '|' :
          report.routeTime + getDuration() + '|'
      })(),
      start: (function () {
        return !this.start ? this.start = '' +
          (!report.start ? report.start = '' : report.start) + getDate() :
          report.start
      })()
    }
  }
}

function getDuration() {
  var date = new Date()
  var mil = date.getMilliseconds()
  // var min = Math.floor(mil / 60000)
  // var sec = ((mil % 60000) / 1000).toFixed(0)
  // (min < 10 ? '0' : '') + min + ":" + (sec < 10 ? '0' : '') + sec
  return mil
}

function getDate() {
  var date = new Date()
  return date.getDate() + '/' +
    (date.getMonth() + 1) + '/' +
    date.getFullYear() + ' ' +
    (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' +
    (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ':' +
    (date.getSeconds() < 10 ? '0' : '') + date.getSeconds()
}


var clone = function(obj) {	
	  if ( obj === null || typeof obj  !== 'object' ) {
	      return obj;
	  }

	  var temp = obj.constructor();
	  for ( var key in obj ) {
	      temp[ key ] = clone( obj[ key ] );
	  }

	  return temp;
}


global.clones = clone