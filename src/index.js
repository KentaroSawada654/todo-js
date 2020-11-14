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

  //button（完了）タグを生成（この時点でイベントも付けちゃう）
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  //イベントの設定
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  //button（削除）タグを生成（この時点でイベントも付けちゃう）
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  //イベントの設定
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //liタグの子要素にpタグを追加
  li.appendChild(p);
  //liタグの子要素に完了ボタンを追加
  li.appendChild(completeButton);
  //liタグの子要素に削除ボタンを追加
  li.appendChild(deleteButton);

  //元からあるulにliタグを追加
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
