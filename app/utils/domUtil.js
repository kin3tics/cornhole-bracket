import _ from 'lodash';
import $ from 'jquery';

var domUtils = {
	customResizeBind () {
	    var debouncedResizeEvent = _.debounce(function () {
	        $(document).trigger('luau:resize');
	    }, 250);
	    window.addEventListener("resize", debouncedResizeEvent, false);
	}


}

export default domUtils;