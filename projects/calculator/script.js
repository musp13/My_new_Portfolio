let outP='';
let op1='';
let op2='';
let opernd='';
function btnClick(val)
{
    if(!isNaN(val) | val=='.')
    {
    outP+=val;
    console.log(outP);
    document.getElementById("screen").value=outP;
    }
    else
    {
        opernd=val;
        op1=outP;
        outP='';
        document.getElementById("screen").value='';
    }
}
function clr()
{
    document.getElementById("screen").value='';
    outP='';
}
function eqlBtn()
{
    /*let text=document.getElementById("screen").value;
    let result=eval(text);
    document.getElementById("screen").value=result;*/
    let result;
    let op2=document.getElementById("screen").value;
    switch(opernd)
    {
        case '+': result=Number(op1)+Number(op2);
                    break;
        case '-': result=Number(op1)-Number(op2);
                    break;
        case '*': result=Number(op1)*Number(op2);
                    break;
        case '/': result=Number(op1)/Number(op2);
                    break;

    }
    document.getElementById('screen').value=result;
    outP='';
}
function operate(op)
{
    let op1=outP;
}