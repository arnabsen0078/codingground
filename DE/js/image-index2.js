function lunchf(){
	launchImageEditor2();
}
function launchImageEditor2() {
		

		currentImage = document.getElementById("editable-image");
		csdkImageEditor.launch({
			image: currentImage.id,
		});
	}
// Image Editor configuration
	var csdkImageEditor = new Aviary.Feather({
		apiKey: configObj.apiKey,
		onSave: function(imageID, newURL) {
			currentImage.src = newURL;
			csdkImageEditor.close();
			console.log(newURL);
		},
		onError: function(errorObj) {
			console.log(errorObj.code);
			console.log(errorObj.message);
			console.log(errorObj.args);
		}
	});

function uploadf(){
	
	
}
