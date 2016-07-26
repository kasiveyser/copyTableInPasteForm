var array = new Array;

var copytable = function copyTable(){
	for(i = array.length; i < 10; i++){
		array[i] = document.querySelector(".wikitable").getElementsByTagName("tr")[i].getElementsByTagName("td")[1].innerHTML;
	}
};

var pasteinform = function pasteInForm(){
	for(i = array.length; i > 0; i--){
		document.getElementsByTagName("form")[0][i].value = array[i];
	}
};

setInterval(function(){
chrome.runtime.sendMessage({method: "getStatus"}, function(response) {
	if ("copy" == response.status) {
		copytable();
		console.log("copy ok");
	}
		else console.log("send false");
});
}, 200);

