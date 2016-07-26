
// function get_modal(info,tab)
//   {
//      chrome.tabs.executeScript(null, {file: "tablecopy.js"});
//    }

var array = new Array;

var copytable = function copyTable(){
	for(i = 0; i < 10; i++){
		array[i] = document.querySelector(".wikitable").getElementsByTagName("tr")[i].getElementsByTagName("td")[1].innerHTML;
	}
};

var pasteinform = function pasteInForm(){
	for(i = array.length; i > 0; i--){
		document.getElementsByTagName("form")[0][i].value = array[i];
	}
};

chrome.contextMenus.create({
    "title": "copytable",
    "type": "normal",
    "id": "copyT",
    "contexts": ["all"],
    "documentUrlPatterns": ["<all_urls>"],
    "onclick": onMess
});

/*chrome.contextMenus.onClicked.addListener(function(){console.log("nice")});*/

chrome.contextMenus.create({
    "title": "paste in form",
    "type": "normal",
    "id": "pasteT",
    "contexts": ["all"],
    "onclick": pasteinform
});

var onMess = function onMessage(){
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.method == "getStatus")
          sendResponse({status: "copy"});
        else
          sendResponse({}); // snub them.
    });
}

// chrome.runtime.sendMessage({method: "getStatus"}, function(response) {
// 	if (copy == response.status)
// 		else console.log("send false");
// });
