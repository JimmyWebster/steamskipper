(function() {
    'use strict';

    console.log('Steam Auto Queue Loaded - Will try to click Next automatically...');
    
	try {
        if (window.location.pathname.indexOf('/agecheck') > -1) {
            var appid = window.location.pathname.replace('/agecheck', '').replace('/app/', '');
            HideAgeGate(appid);
        } else {
            $J('#next_in_queue_form').submit();
        }
	}
	catch(err) {
		console.log('Error clicking next.');
	}
})();
