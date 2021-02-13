window.onload = function() {
    var msg = document.getElementById('msg');
    var apply = document.getElementById('apply');
    var show = document.getElementById('show');
    var list = document.getElementById('list');

    var arr = [];

    apply.addEventListener('click', function() {
        if (msg.value) {
            arr.push(msg.value);
            msg.value = "";
        }
    });

    msg.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            apply.dispatchEvent(new Event('click'));
        }
    });


    show.addEventListener('click', function() {

        // case 1: while
        list.innerHTML = '';
        var i = 0;
        while (i < arr.length) {
            var html = '<li>' + arr[i] + '</li>';
            list.innerHTML = list.innerHTML + html;
            i++;
        }

        // case 2: for
        list.innerHTML = '';
        for (var i = 0; i < arr.length; i++) {
            var html = '<li>' + arr[i] + '</li>';
            list.innerHTML = list.innerHTML + html;
        }

        // case 3: map
        list.innerHTML = '';
        arr.map(function(This) {
            list.innerHTML += `<li>${This}</li>`;
        });

    });
};