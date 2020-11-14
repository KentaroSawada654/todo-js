const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //liタグの生成
  const li = document.createElement("li"); //liタグ作成
  li.className = "list-row"; //クラスをつける

  //pタグの生成（name）
  const p = document.createElement("p");
  p.className = "name";

  //入力した文字を設定
  p.innerText = inputText;

  //liタグの子要素にpタグを追加
  li.appendChild(p);

  //元からあるulにliタグを追加
  document.getElementById("incomplete-list").appendChild(li);
  console.log(li);
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
