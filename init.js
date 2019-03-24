var d=new Date();
var day=d.getDate();
var month=d.getMonth() + 1;
var year=d.getFullYear();

if ((day + "." + month + "." + year)=='3.1.2012'){
  document.write('да');
}
else {
  document.write('Мне кажется, ты опаздал на нашу вечеринку. Приходи по-раньше.');
}
