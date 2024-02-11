document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "💖Yay! Can't wait to spend Valentine's Day with you!";
});

document.getElementById('noBtn').addEventListener('click', function() {
    var randomX = Math.random() * (window.innerWidth - 200); // Adjust button size
    var randomY = Math.random() * (window.innerHeight - 50); // Adjust button size

    document.getElementById('noBtn').style.position = 'absolute';
    document.getElementById('noBtn').style.left = randomX + 'px';
    document.getElementById('noBtn').style.top = randomY + 'px';
});
