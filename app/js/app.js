var  a = [1, 2, 3, 4, 5];

var iterate = function(){
  var i = 0;
  while(i < a.length){
    console.log(a[i]);
    i = i + 1;
  }
};

var push =function(){
  var last = a[a.length - 1];
  a.push(last + 1);
};

var splice = function(){
  if(a.length > 3){
    a.splice(2, 1);
  }
};

document.querySelector("#iterate").addEventListener("click", iterate);
document.querySelector("#push").addEventListener("click", push);
document.querySelector("#splice").addEventListener("click", splice);
