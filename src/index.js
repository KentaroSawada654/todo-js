const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  if (inputText !== "") {
    document.getElementById("add-text").value = "";
    createIncompleteList(inputText);
  }
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  //対象を受け取ってそれを未完了リストから削除する。
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //liタグの生成
  const li = document.createElement("li"); //liタグ作成
  li.className = "list-row"; //クラスをつける

  //pタグの生成（name）
  const p = document.createElement("p");
  p.className = "name";

  //入力した文字を設定
  p.innerText = text;

  //button（完了）タグを生成（この時点でイベントも付けちゃう）
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  //イベントの設定
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText; //一番最初の子要素の名前を取得できる。

    //li以下を初期化
    addTarget.textContent = null;

    const addP = document.createElement("p");
    addP.className = "name";
    addP.innerText = text;

    //戻すボタン作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻るボタンの親タグを完了リストから削除する。
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(addP);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button（削除）タグを生成（この時点でイベントも付けちゃう）
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  //イベントの設定
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
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
