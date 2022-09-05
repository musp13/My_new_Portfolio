$(document).ready(function()
{
    /*$("main").addClass("animated bounce");*/
    $("#resume-ball").hover(
        function()
        {
            $("#resume-ball").css("background-color","white").css("color","black");   
        },
        function()
        {
            $("#resume-ball").css("background-color","rgb(255, 165, 0)");
        }
    );
    $("#projects-ball").hover(
        function()
        {
            $("#projects-ball").css("background-color","white").css("color","black");   
        },
        function()
        {
            $("#projects-ball").css("background-color","rgb(255, 55, 29)");
        }
    );
    $("#contact-ball").hover(
        function()
        {
            $("#contact-ball").css("background-color","white").css("color","black");  
             
        },
        function()
        {
            $("#contact-ball").css("background-color","cyan");
        }
    );
    /*$("#resume-ball").*/
    /*$('#https://musp13.github.io/Musfira-s-Portfolio/Musfira%20-%20CV_New.pdf').trigger('click');*/
    /*$("#resume-ball" ).click(function()
    {
        $("#resume-ball" ).load("https://musp13.github.io/Musfira-s-Portfolio/Musfira%20-%20CV_New.pdf");
    }
    );*/
    $('main').scroll();
});