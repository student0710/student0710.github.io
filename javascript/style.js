var result = prompt('ページを読み込みました\nページ内容を表示するにはパスワードを入力してください。');

if (result === 'test') {
    alert('パスワードが通りました。\nOKを押したらすぐにリダイレクトされます。');
    setTimeout("redirect()", 1000);

    function redirect() {
        location.href = './page/index.html';
    }
} else {
    alert('パスワードが違います。OKを押してから3秒後に再読み込みされます。');
    setTimeout("redirect()", 3000);

    function redirect() {
        location.href = 'index.html';
    }
}