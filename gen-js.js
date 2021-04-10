function AddName() {
  const names = document.getElementById("name").value;
  const gids = document.getElementById("gid").value;
  const tag = document.getElementById("tagname").value;
  
  const rt1 = `if (x1 == 'https://aakashkavaiya.blogspot.com/p/pdf-download.html#${tag}' || x1 == 'https://aakashkavaiya.blogspot.com/p/pdf-download.html?m=1#${tag}')
{
  var x2 = '${gids}';
  document.getElementById("123").innerHTML = '<center><iframe src="https://drive.google.com/file/d/' + x2 + '/preview" width="100%" height="550"></iframe><br></center>';
  document.getElementById('12').innerHTML = "${names}";
  document.getElementById('bt-pdf').innerHTML = '<center><a class="ak-bt bt-gr a-ak" href="https://drive.google.com/uc?export=download&id=' + x2 + '" target="_blank"><i class="fa fa-download" aria-hidden="true"></i> Download PDF</a><br></center>'
}`;
  document.getElementById('result').innerHTML = rt1;

}
function myFcpa() {
var copyTxt = document.getElementById("result");
copyTxt.select();
document.execCommand("copy");
}
