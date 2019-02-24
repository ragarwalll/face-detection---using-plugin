$('#picture').faceDetection({
	complete: function(faces) {
		console.log(faces);

		$face = $('<div>', { class: 'box' });
		$face.css('top', faces[0].positionY);
		$face.css('left', faces[0].positionX);
		$face.css('width', faces[0].width);
		$face.css('height', faces[0].height);
		$face.css('transform', 'scale(' + faces[0].scaleX + ',' + faces[0].scaleY + ')');
		$('.center').append($face);
	}
});
