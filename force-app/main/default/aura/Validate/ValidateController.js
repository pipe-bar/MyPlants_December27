({
	submitScoreAction : function(component, event, helper) {
        var isValidate = true;
        
        var userName = component.find('userName');
        var userEmail = component.find('userEmail');
        var userPhone = component.find('userPhone');
        var userState = component.find('userState');
        
        
        var userNameVal = component.find('userName').get('v.value');        
        var userEmailVal = component.find('userEmail').get('v.value');
        var userPhoneVal = component.find('userPhone').get('v.value');
        var userStateVal = component.find('userState').get('v.value');
        
        
        if($A.util.isUndefinedOrNull(userNameVal) || $A.util.isUndefined(userNameVal) || $A.util.isEmpty(userNameVal)){
            userName.set("v.errors",[{message:'Name is required'}]);
            isValidate = false;
        }else{
            userName.set("v.errors",null);
        }        
        
        
        if($A.util.isUndefinedOrNull(userEmailVal) || $A.util.isUndefined(userEmailVal) || $A.util.isEmpty(userEmailVal)){
            userEmail.set("v.errors",[{message:'Email is required'}]);
            isValidate = false;
        }else{
            userEmail.set("v.errors",null);
        }
        
        
        if($A.util.isUndefinedOrNull(userPhoneVal) || $A.util.isUndefined(userPhoneVal) || $A.util.isEmpty(userPhoneVal)){
            userPhone.set("v.errors",[{message:'Phone is required'}]);
            isValidate = false;
        }else{
            userPhone.set("v.errors",null);
        }
        
        if(userStateVal == '--None--'){
            userState.set("v.errors",[{message:'Please select state option'}]);
            isValidate = false;
        }else{
            userState.set("v.errors",null);
        }
        
        if(isValidate){
            //alert('Form submitted successfully');
           
            var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title":"Success",
                    "type":"success",
                    "message":"Form submitted successfully.",                        
                });
                toastEvent.fire();
             
            $A.get('e.force:refreshView').fire();
        }
        
		
	},
    
    
})