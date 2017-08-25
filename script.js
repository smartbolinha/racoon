

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getBaseUrl(){
    return "http://webponto.meta.com.br/PcPonto/WebPonto/conRegistro.asp"
}

function getFullUrl(){
    var user = getParameterByName('user');
    var pwd = getParameterByName('pwd');
    return getBaseUrl() + '?CodFunc='+user+'&Login=1&Senha='+pwd+'&now=' + new Date().getTime();
}

function redirectUrl(){
	var user = getParameterByName('user');
    var pwd = getParameterByName('pwd');
	if(user && pwd){
		window.location.href = getFullUrl();
	}
	console.log('Missing user and pass!');              
}
