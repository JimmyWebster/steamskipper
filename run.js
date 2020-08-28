(function() {
    'use strict';

    console.log('Automatically skip games');
    
	try {
        if (window.location.pathname.indexOf('/agecheck') > -1) {
            var appid = window.location.pathname.replace('/agecheck', '').replace('/app/', '');
            HideAgeGate(appid);
        } else 
            $J('#next_in_queue_form').submit();
   
	}
	catch(err) {
		console.log('Error');}
}
)
(
)
;
