function getnames()
{
    var a=document.getElementById("name1").value;
    var b=document.getElementById("name2").value;
    var c;
    c=Math.random();
    c=c*100;
    c=Math.ceil(c);
    
    var d=document.getElementById("res");
    var e=document.getElementById("res2");
    d.innerHTML="Hello, "+a+" and "+b+", Your Love Percentage is: ";
    e.innerHTML=c+"%";
    //alert("Hello, "+a+" and "+b+", Your Love percentage is: "+c+"%");
   // <h3>"Hello, "+a+" and "+b+", Your Love percentage is: "+c+"%"</h3>
}