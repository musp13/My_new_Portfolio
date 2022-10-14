$(document).ready(function()
{ 
    $("#contact-form").validate(
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
                }
            }
        }
    )
}
)