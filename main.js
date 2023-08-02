var a=new Date();
/*document.write(" new date:  "+a+"<br>");*/

var b=a.getDate();

document.write(b+"<br>");

if  ((b==0)||(b==6)){
    document.write ("the given day is weekend");
}
else{
    document.write("the given day is not a weekend");
}
