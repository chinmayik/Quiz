/**
 * Created by vinodravipally on 4/27/16.
 */
function myFun()
{
 var x="Vinnie you are the best best chubby bubbly hubby on the planet earth";
    var y="Vinnie you so bad...you belong on Mars";
    var z="Vinnie.. you messed up pretty bad!! Pick a side..be a better man!";
    if((document.getElementById('o1').checked) && (document.getElementById('o3').checked))
    {

        window.alert(x);
    }
    else if((document.getElementById('o2').checked) && (document.getElementById('o4').checked))
    {
        window.alert(y);
    }
    else if(((document.getElementById('o1').checked) && (document.getElementById('o4')) || (document.getElementById('o2').checked) && (document.getElementById('o3').checked)))
    {
        window.alert(z);
    }

}
