// alert('alert'); テスト
console.log('test');

function ScrollWindow(elem) {
  var element = document.getElementById(elem);
  var rect = element.getBoundingClientRect();
  console.log(rect);
  var elemtop = rect.top + window.pageYOffset;
  document.documentElement.scrollTop = elemtop;
}