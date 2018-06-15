function myFunction(n1) {
document.form1.main.value=document.form1.main.value+n1;
    }

    function equal()
    {
    	var exp=document.form1.main.value;
    	if(exp)
    	{
			document.form1.main.value=eval(exp);
		}
    }

    function clearnum()
    {
    	document.form1.main.value="";

    }
    function backfun()
    {
    	var exp=document.form1.main.value;
    	document.form1.main.value=exp.substring(0,exp.length-1);
    }