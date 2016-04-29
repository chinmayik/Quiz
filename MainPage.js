/**
 * Created by vinodravipally on 4/27/16.
 */
function myFun()
{
 var x="Vinnie you are the best best chubby bubbly hubby on the planet earth";
    var y="Vinnie you so bad...you belong on Mars";
    var z="Vinnie.. you messed up pretty bad!! Pick a side..be a better man!";
    var a="Select an option for the below questions";
    var b="Select an option for question no.2";
    var c="Select an option for question no.1";
    if((document.getElementById('o1').checked) && (document.getElementById('o3').checked))
    {

        window.alert(x);
    }
    else if((document.getElementById('o2').checked) && (document.getElementById('o4').checked))
    {
        window.alert(y);
    }
    else if(((document.getElementById('o1').checked) && (document.getElementById('o4').checked) || (document.getElementById('o2').checked) && (document.getElementById('o3').checked)))
    {
        window.alert(z);
    }
    else if((!(document.getElementById('o1').checked) && !(document.getElementById('o2').checked)) && (!(document.getElementById('o3').checked) && !(document.getElementById('o4').checked)))
    {
        window.alert(a);
    }
    else if(((document.getElementById('o1').checked) || (document.getElementById('o2').checked)) && (!(document.getElementById('o3').checked) || !(document.getElementById('o4').checked)))

    {
        window.alert(b);
    }
    else if(((document.getElementById('o3').checked) || (document.getElementById('o4').checked)) && (!(document.getElementById('o1').checked) || !(document.getElementById('o2').checked)))

    {
        window.alert(c);
    }
}
