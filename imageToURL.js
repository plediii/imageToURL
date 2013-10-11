

$(function () {
    $('input[type=file]').change(function (evt) {
	var files = evt.target.files;
	if (!files || files.length < 1) {
	    console.log('No files selected: ', this.files);
	    return;
	}
	else {
	    var reader = new FileReader();
	    reader.onload = function () {
		var src = reader.result;
		$('#converted').prepend('<p> <img src="'  + src + '" />  <a href="' + src + '">Copy this link </a></p>');
	    };
	    reader.readAsDataURL(files[0]);
	}
    });    
});