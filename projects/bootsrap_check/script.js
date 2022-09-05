$(document).ready(function()
{    
    
    $("#reg-form").validate(
    {   
        rules:
        {
            fname:
            {
                required:true,
                minlength:3
            },
            mailId:
            {
                required: true,
                email: true
            },
            pswd:
            {
                required:true,
                minlength:4,
                maxlength:8,
                passwordCheck: true
            },
            pswd2:
            {
                required:true,
                equalTo: "#paswd"
            }
        }   
    })
    /*$.vaidator.addMethod("pswdCheck",function(value)
    {
        // at least 1 number and at least 1 character
        [^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))
    });*/
})
jQuery.validator.addMethod("passwordCheck",
        function(value, element, param) {
            if (this.optional(element)) {
                return true;
            } else if (!/[A-Z]/.test(value)) {
                return false;
            } else if (!/[a-z]/.test(value)) {
                return false;
            } else if (!/[0-9]/.test(value)) {
                return false;
            }

            return true;
        },
        "Please include on uppercase, one lowercase and a number");
        /*$.validator.addMethod("passwordCheck", function(value) {
            // at least 1 number and at least 1 character
            [^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))
        });*/