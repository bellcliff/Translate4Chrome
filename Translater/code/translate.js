// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function genericOnClick(info, tab) {
	console.log("item " + info.menuItemId + " was clicked");
	console.log("info: " + JSON.stringify(info));
	console.log("tab: " + JSON.stringify(tab));
	if(info.selectionText)
	chrome.tabs.create({
		'url' : 'http://translate.google.com/#en/zh-CN/'+info.selectionText
	}, function(tab) {
		// Tab opened.
	});
}

// Create one test item for each context type.
var contexts = [ "selection" ];
for ( var i = 0; i < contexts.length; i++) {
	var context = contexts[i];
	var title = "Translate '" + context + "'";
	var id = chrome.contextMenus.create({
		"title" : title,
		"contexts" : [ context ],
		"onclick" : genericOnClick
	});
	console.log("'" + context + "' item:" + id);
}
