document.addEventListener('DOMContentLoaded', () => {
    console.log('ページが読み込まれました');
    
    const greetButton = document.getElementById('greetButton');
    greetButton.addEventListener('click', () => {
        alert('こんにちは！Botの公式サイトへようこそ！');
    });
});
