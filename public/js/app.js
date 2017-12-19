$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:false,
    });

    var picker = new Pikaday({
        field: document.getElementById('fecha'),
        firstDay: 1,
        minDate: new Date(2000, 0, 1),
        maxDate: new Date(2020, 12, 31),
        yearRange: [2000,2020]
    });

    var btn = document.getElementById('btns'),
        button = new Hammer(btn);

    button.on('tap', function(e){
        var $target = $(e.target),
            $num = parseInt($('.user-label').text());

        if ($target.hasClass('plus')) {
            $num += 1;
        }
        else if ($target.hasClass('minus')) {
            $num -= 1;
        }

        $('.user-label').text($num);
    });

});
