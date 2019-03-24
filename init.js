var d=new Date();
var day=d.getDate();
var month=d.getMonth() + 1;

if ((day + "." + month)=='3.1'){
  document.getElementById("myspan").innerHTML="Пролей свет.";
  document.getElementById("imger").src="photo.png";
}
else {
  document.getElementById("myspan").innerHTML='Кажется, ты опоздал на вечеринку. Возьми время в свои руки и приходи раньше.';

}
