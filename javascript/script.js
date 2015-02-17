jQuery(document).ready(function(){
                       jQuery("#video").hide();
    jQuery('#watch_video').click(function(){
                        // jQuery("#video").show();
                         
                         });
                       
    /*jQuery('#main').click(function(){
                            
                                                    jQuery("#video").hide();
                            
                            
                                                    });
                       
      */
                       
	jQuery("#socialmedia").hide();

	jQuery('.btn').click(function(){

		jQuery(".error").hide();
		jQuery(".success").hide();
		var hasError = false;
		var emailRegx = /((([a-zA-Z]|\d|[!#\jQuery%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\jQuery%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?/;
		var isSubmitted = false;

		var emailVal = jQuery("#email").val();
		if(emailVal == ''){
			jQuery("#signup").after('<span class="error">Please enter your email address.</span>');			
			hasError = true;
		}

		else if (!emailRegx.test(emailVal)) {
			jQuery("#signup").after('<span class="error">Enter a valid email address.</span>');
			hasError = true;
		};

		if (hasError == true) {jQuery("#email").focus();return false};

		if (isSubmitted == false) {
			jQuery("#signup").after('<span class="success">Okay! We\'ll send you an invite when we\'re ready.</span>');
			jQuery("#socialmedia").show();			
			submitted = true;
		};

		if(isSubmitted == true) {return false};

	});
	
	
});