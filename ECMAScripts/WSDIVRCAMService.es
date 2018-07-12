
	var request="SOAP";
	var Ptf_DIM = '&';
	
		function buildHeaders_WSDIVRCAMService(headers) {
	
		if (headers == null) {
			return '';
		}
		
		var headerNames = '';
		var headerValues = '';
		
		for (var name in headers) {
			if (headerNames == '') {
				headerNames=name;
				headerValues=headers[name];
			}
			else {
				headerNames+= ',' + name;
				headerValues+= ',' + headers[name];
			}		
		}
		
		if (headerNames == '') {
			return '';
		}
		
		return  Ptf_DIM + 'header.names=' + encodeURIComponent(headerNames) + Ptf_DIM + 'header.values=' + encodeURIComponent(headerValues);		
	}
	
	function base64Encode(str) {
    var CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var out = "", i = 0, len = str.length, c1, c2, c3;
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += CHARS.charAt(c1 >> 2);
            out += CHARS.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += CHARS.charAt(c1 >> 2);
            out += CHARS.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
            out += CHARS.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += CHARS.charAt(c1 >> 2);
        out += CHARS.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += CHARS.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += CHARS.charAt(c3 & 0x3F);
    }
    return out;
	}	
	function WSIVRCAMstring_WSDIVRCAMService(WSIVRCAMstring_metodo,WSIVRCAMstring_param,WSIVRCAMstring_valor,WSIVRCAMstring_delimitador,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = WSDIVRCAMService.AS_URL + '?' + "_service=" + WSDIVRCAMService.service + Ptf_DIM + "_application=" + WSDIVRCAMService.application + Ptf_DIM + "_operation=" + "WSIVRCAMstring"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + buildHeaders_WSDIVRCAMService(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(WSIVRCAMstring_metodo != null){
lRequest = lRequest + Ptf_DIM + "WSIVRCAMstring.metodo="+encodeURIComponent(WSIVRCAMstring_metodo);
}
if(WSIVRCAMstring_param != null){
lRequest = lRequest + Ptf_DIM + "WSIVRCAMstring.param="+encodeURIComponent(WSIVRCAMstring_param);
}
if(WSIVRCAMstring_valor != null){
lRequest = lRequest + Ptf_DIM + "WSIVRCAMstring.valor="+encodeURIComponent(WSIVRCAMstring_valor);
}
if(WSIVRCAMstring_delimitador != null){
lRequest = lRequest + Ptf_DIM + "WSIVRCAMstring.delimitador="+encodeURIComponent(WSIVRCAMstring_delimitador);
}
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}
			return lRequest;
			}
		function ConsultaSaldos_WSDIVRCAMService(ConsultaSaldos_Metodo,ConsultaSaldos_msisdn,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = WSDIVRCAMService.AS_URL + '?' + "_service=" + WSDIVRCAMService.service + Ptf_DIM + "_application=" + WSDIVRCAMService.application + Ptf_DIM + "_operation=" + "ConsultaSaldos"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + buildHeaders_WSDIVRCAMService(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(ConsultaSaldos_Metodo != null){
lRequest = lRequest + Ptf_DIM + "ConsultaSaldos.Metodo="+encodeURIComponent(ConsultaSaldos_Metodo);
}
if(ConsultaSaldos_msisdn != null){
lRequest = lRequest + Ptf_DIM + "ConsultaSaldos.msisdn="+encodeURIComponent(ConsultaSaldos_msisdn);
}
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}
			return lRequest;
			}
		function ConsultaBolsas_WSDIVRCAMService(ConsultaBolsas_Metodo,ConsultaBolsas_msisdn,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = WSDIVRCAMService.AS_URL + '?' + "_service=" + WSDIVRCAMService.service + Ptf_DIM + "_application=" + WSDIVRCAMService.application + Ptf_DIM + "_operation=" + "ConsultaBolsas"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + buildHeaders_WSDIVRCAMService(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(ConsultaBolsas_Metodo != null){
lRequest = lRequest + Ptf_DIM + "ConsultaBolsas.Metodo="+encodeURIComponent(ConsultaBolsas_Metodo);
}
if(ConsultaBolsas_msisdn != null){
lRequest = lRequest + Ptf_DIM + "ConsultaBolsas.msisdn="+encodeURIComponent(ConsultaBolsas_msisdn);
}
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}
			return lRequest;
			}
		function ConsultaBonos_WSDIVRCAMService(ConsultaBonos_Metodo,ConsultaBonos_msisdn,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = WSDIVRCAMService.AS_URL + '?' + "_service=" + WSDIVRCAMService.service + Ptf_DIM + "_application=" + WSDIVRCAMService.application + Ptf_DIM + "_operation=" + "ConsultaBonos"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + buildHeaders_WSDIVRCAMService(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(ConsultaBonos_Metodo != null){
lRequest = lRequest + Ptf_DIM + "ConsultaBonos.Metodo="+encodeURIComponent(ConsultaBonos_Metodo);
}
if(ConsultaBonos_msisdn != null){
lRequest = lRequest + Ptf_DIM + "ConsultaBonos.msisdn="+encodeURIComponent(ConsultaBonos_msisdn);
}
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}
			return lRequest;
			}
		function CompraPaquete_WSDIVRCAMService(CompraPaquete_Metodo,CompraPaquete_msisdn,CompraPaquete_nameProduct,CompraPaquete_IDDistributionChannel,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = WSDIVRCAMService.AS_URL + '?' + "_service=" + WSDIVRCAMService.service + Ptf_DIM + "_application=" + WSDIVRCAMService.application + Ptf_DIM + "_operation=" + "CompraPaquete"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + buildHeaders_WSDIVRCAMService(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(CompraPaquete_Metodo != null){
lRequest = lRequest + Ptf_DIM + "CompraPaquete.Metodo="+encodeURIComponent(CompraPaquete_Metodo);
}
if(CompraPaquete_msisdn != null){
lRequest = lRequest + Ptf_DIM + "CompraPaquete.msisdn="+encodeURIComponent(CompraPaquete_msisdn);
}
if(CompraPaquete_nameProduct != null){
lRequest = lRequest + Ptf_DIM + "CompraPaquete.nameProduct="+encodeURIComponent(CompraPaquete_nameProduct);
}
if(CompraPaquete_IDDistributionChannel != null){
lRequest = lRequest + Ptf_DIM + "CompraPaquete.IDDistributionChannel="+encodeURIComponent(CompraPaquete_IDDistributionChannel);
}
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}
			return lRequest;
			}
		function ConsultaNumeroFavorito_WSDIVRCAMService(ConsultaNumeroFavorito_Metodo,ConsultaNumeroFavorito_msisdn,ConsultaNumeroFavorito_listCode,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = WSDIVRCAMService.AS_URL + '?' + "_service=" + WSDIVRCAMService.service + Ptf_DIM + "_application=" + WSDIVRCAMService.application + Ptf_DIM + "_operation=" + "ConsultaNumeroFavorito"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + buildHeaders_WSDIVRCAMService(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(ConsultaNumeroFavorito_Metodo != null){
lRequest = lRequest + Ptf_DIM + "ConsultaNumeroFavorito.Metodo="+encodeURIComponent(ConsultaNumeroFavorito_Metodo);
}
if(ConsultaNumeroFavorito_msisdn != null){
lRequest = lRequest + Ptf_DIM + "ConsultaNumeroFavorito.msisdn="+encodeURIComponent(ConsultaNumeroFavorito_msisdn);
}
if(ConsultaNumeroFavorito_listCode != null){
lRequest = lRequest + Ptf_DIM + "ConsultaNumeroFavorito.listCode="+encodeURIComponent(ConsultaNumeroFavorito_listCode);
}
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}
			return lRequest;
			}
		function ConsultaCategoriaCliente_WSDIVRCAMService(ConsultaCategoriaCliente_Metodo,ConsultaCategoriaCliente_msisdn,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = WSDIVRCAMService.AS_URL + '?' + "_service=" + WSDIVRCAMService.service + Ptf_DIM + "_application=" + WSDIVRCAMService.application + Ptf_DIM + "_operation=" + "ConsultaCategoriaCliente"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + buildHeaders_WSDIVRCAMService(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(ConsultaCategoriaCliente_Metodo != null){
lRequest = lRequest + Ptf_DIM + "ConsultaCategoriaCliente.Metodo="+encodeURIComponent(ConsultaCategoriaCliente_Metodo);
}
if(ConsultaCategoriaCliente_msisdn != null){
lRequest = lRequest + Ptf_DIM + "ConsultaCategoriaCliente.msisdn="+encodeURIComponent(ConsultaCategoriaCliente_msisdn);
}
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}
			return lRequest;
			}
		function ConsultaExisteNumero_WSDIVRCAMService(ConsultaExisteNumero_Metodo,ConsultaExisteNumero_msisdn,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = WSDIVRCAMService.AS_URL + '?' + "_service=" + WSDIVRCAMService.service + Ptf_DIM + "_application=" + WSDIVRCAMService.application + Ptf_DIM + "_operation=" + "ConsultaExisteNumero"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + buildHeaders_WSDIVRCAMService(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(ConsultaExisteNumero_Metodo != null){
lRequest = lRequest + Ptf_DIM + "ConsultaExisteNumero.Metodo="+encodeURIComponent(ConsultaExisteNumero_Metodo);
}
if(ConsultaExisteNumero_msisdn != null){
lRequest = lRequest + Ptf_DIM + "ConsultaExisteNumero.msisdn="+encodeURIComponent(ConsultaExisteNumero_msisdn);
}
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}
			return lRequest;
			}
		function ConsultaFactura_WSDIVRCAMService(ConsultaFactura_Metodo,ConsultaFactura_msisdn,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = WSDIVRCAMService.AS_URL + '?' + "_service=" + WSDIVRCAMService.service + Ptf_DIM + "_application=" + WSDIVRCAMService.application + Ptf_DIM + "_operation=" + "ConsultaFactura"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + buildHeaders_WSDIVRCAMService(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(ConsultaFactura_Metodo != null){
lRequest = lRequest + Ptf_DIM + "ConsultaFactura.Metodo="+encodeURIComponent(ConsultaFactura_Metodo);
}
if(ConsultaFactura_msisdn != null){
lRequest = lRequest + Ptf_DIM + "ConsultaFactura.msisdn="+encodeURIComponent(ConsultaFactura_msisdn);
}
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}
			return lRequest;
			}
		function ConsultaCliente_WSDIVRCAMService(ConsultaCliente_Metodo,ConsultaCliente_msisdn,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = WSDIVRCAMService.AS_URL + '?' + "_service=" + WSDIVRCAMService.service + Ptf_DIM + "_application=" + WSDIVRCAMService.application + Ptf_DIM + "_operation=" + "ConsultaCliente"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + buildHeaders_WSDIVRCAMService(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(ConsultaCliente_Metodo != null){
lRequest = lRequest + Ptf_DIM + "ConsultaCliente.Metodo="+encodeURIComponent(ConsultaCliente_Metodo);
}
if(ConsultaCliente_msisdn != null){
lRequest = lRequest + Ptf_DIM + "ConsultaCliente.msisdn="+encodeURIComponent(ConsultaCliente_msisdn);
}
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}
			return lRequest;
			}
		function ValidaNIP_WSDIVRCAMService(ValidaNIP_Metodo,ValidaNIP_msisdn,ValidaNIP_codigoNip,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = WSDIVRCAMService.AS_URL + '?' + "_service=" + WSDIVRCAMService.service + Ptf_DIM + "_application=" + WSDIVRCAMService.application + Ptf_DIM + "_operation=" + "ValidaNIP"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + buildHeaders_WSDIVRCAMService(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(ValidaNIP_Metodo != null){
lRequest = lRequest + Ptf_DIM + "ValidaNIP.Metodo="+encodeURIComponent(ValidaNIP_Metodo);
}
if(ValidaNIP_msisdn != null){
lRequest = lRequest + Ptf_DIM + "ValidaNIP.msisdn="+encodeURIComponent(ValidaNIP_msisdn);
}
if(ValidaNIP_codigoNip != null){
lRequest = lRequest + Ptf_DIM + "ValidaNIP.codigoNip="+encodeURIComponent(ValidaNIP_codigoNip);
}
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}
			return lRequest;
			}
		function WSIVRCAM_WSDIVRCAMService(WSIVRCAM_Metodo,WSIVRCAM_nombreParametro,WSIVRCAM_valorParametro,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = WSDIVRCAMService.AS_URL + '?' + "_service=" + WSDIVRCAMService.service + Ptf_DIM + "_application=" + WSDIVRCAMService.application + Ptf_DIM + "_operation=" + "WSIVRCAM"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + buildHeaders_WSDIVRCAMService(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(WSIVRCAM_Metodo != null){
lRequest = lRequest + Ptf_DIM + "WSIVRCAM.Metodo="+encodeURIComponent(WSIVRCAM_Metodo);
}
if(WSIVRCAM_nombreParametro != null){
lRequest = lRequest + Ptf_DIM + "WSIVRCAM.nombreParametro="+encodeURIComponent(WSIVRCAM_nombreParametro);
}
if(WSIVRCAM_valorParametro != null){
lRequest = lRequest + Ptf_DIM + "WSIVRCAM.valorParametro="+encodeURIComponent(WSIVRCAM_valorParametro);
}
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}
			return lRequest;
			}
		