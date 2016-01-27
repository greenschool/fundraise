function progressUp(){
	var progress = document.getElementById('progress');
	progress.style.width = "16.5%";
}

function updateBlock(n, device) { //n is the index of the selected project 
	var imageItem = imagesList.eq(n), //imageList contains the .cd-images-list > li elements
		contentItem = contentList.eq(n); //contentList contains the .cd-content-block > ul > li elements
	
	//this function assigns the is-selected class to the 2 selected list items, removing it from their siblings
	classUpdate($([imageItem, contentItem])); 
	
	if( device == 'mobile') {
		//on mobile version
		contentItem.scrollTop(0);
		//add a cover layer to the images
		$('.cd-image-block').addClass('content-block-is-visible');
		//move the slide-in panel back into the viewport
		contentWrapper.addClass('is-visible');
	} else {
		//hide scrolling bar while changing project content
		contentList.addClass('overflow-hidden');
		contentItem.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			//wait for the end of the animation
			contentItem.siblings().scrollTop(0);
			contentList.removeClass('overflow-hidden');
		});
	}
 
	//this function updates the visibility of the .block-navigation buttons according to visible project
	updateBlockNavigation(n);
}