  var textarea = $("#article");
  var input = $("#name1");
let img = document.querySelector('img');


  textarea.ready(function(){
    textarea.val(localStorage.getItem("article"));
  });

  textarea.keyup(function(){
    var value = textarea.val();
    localStorage.setItem("article", value);
  });

  $("#clear").click(function(){
    var result = window.confirm('リセットしても宜しいですか？');
    
    if( result ) {
    textarea.val("");
    input.val("");
    localStorage.clear();
    img.removeAttribute('src')
    alert('クリアしました')
    }
    else {
    alert('クリアしませんでした')
    }
  });
  
  input.ready(function(){
  input.val(localStorage.getItem("name1"));
  });
  
  input.keyup(function(){
  var value = input.val();
  localStorage.setItem("name1", value);
  });
  
  document.getElementById('file-sample').addEventListener('change', function (e) {
    // 1枚だけ表示する
    var file = e.target.files[0];

    // ファイルのブラウザ上でのURLを取得する
    var blobUrl = window.URL.createObjectURL(file);

    // img要素に表示
    var img = document.getElementById('file-preview');
    img.src = blobUrl;
});