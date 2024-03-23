function post(javascript_array, idx, url, method) {
	method = method || "post"; // post (set to default) or get

	// Create the form object
	var form = document.createElement("form");
	form.setAttribute("method", method);
	form.setAttribute("action", url);

	// For each key-value pair
	//for (key in javascript_array) {
		row = javascript_array[idx];
		//alert('key: ' + key + ', value:' + javascript_array[key]); // debug
		
		//print "GT, GT ID, NOISY, NOISY ID, THUMB, THUMB ID, ..., PHONE, ..., ISO, ..., ..., Exposure :<br>";
		//idx:   0    1      2         3      4      5      ,  6 ,   7  ,   8,  9 ,  10,  11,   12
				
		var hf1 = document.createElement("input");	
		hf1.setAttribute("type", "hidden"); 
		hf1.setAttribute("name", "gt");
		hf1.setAttribute("value", row[1]); // gt ID
		
		var hf2 = document.createElement("input");	
		hf2.setAttribute("type", "hidden"); 
		hf2.setAttribute("name", "noisy");
		hf2.setAttribute("value", row[3]); // noisy ID
		
		var hf3 = document.createElement("input");	
		hf3.setAttribute("type", "hidden"); 
		hf3.setAttribute("name", "phone");
		hf3.setAttribute("value", row[7]); // phone
		
		var hf4 = document.createElement("input");	
		hf4.setAttribute("type", "hidden"); 
		hf4.setAttribute("name", "ISO");
		hf4.setAttribute("value", row[9]); // ISO
		
		var hf5 = document.createElement("input");	
		hf5.setAttribute("type", "hidden"); 
		hf5.setAttribute("name", "Exp");
		hf5.setAttribute("value", row[12]); // Exposure
		
		// append the newly created control to the form
		form.appendChild(hf1); 
		form.appendChild(hf2); 
		form.appendChild(hf3); 
		form.appendChild(hf4); 
		form.appendChild(hf5); 
	//}

	document.body.appendChild(form); // inject the form object into the body section
	form.submit();
}