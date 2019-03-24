var d=new Date();
var day=d.getDate();
var month=d.getMonth() + 1;
var year=d.getFullYear();
if ((day + "." + month + "." + year)=='11.9.2001'){
  document.write('да');
}
else {
  document.write('Мне кажется, ты опаздал.\nПриходи по-раньше');
}
