window.onload = function() {
    var counter = document.getElementById('counter');
    var plus = document.getElementById('plus');
    var minus = document.getElementById('minus');
    var reset = document.getElementById('reset');

    plus.addEventListener('click', function() {
        var value = Number(counter.value);
        if (value < 10) {
            counter.value = value + 1;
        } else {
            alert("stop");
        }
    });

    minus.addEventListener('click', function() {
        var value = Number(counter.value);
        if (value > -10) {
            counter.value = counter.value - 1;
        } else {
            alert("stop");
        }
    });

    reset.addEventListener('click', function() {
        counter.value = 0;
    });

    counter.addEventListener('change', function() {
        if (counter.value < -10) {
            counter.value = -10;
        } else if (counter.value > 10) {
            counter.value = 10;
        }
    });

}