$(function () {
    var r2 = localStorage.getItem('R2');
    r2 = (r2 == "" || r2 == null || typeof (r2) == 'undefined') ? 0 : r2;
    var r3 = localStorage.getItem('R3');
    r3 = (r3 == "" || r3 == null || typeof (r3) == 'undefined') ? 0 : r3;
    if (r2 !== 0) {
        $('.faint2').remove()
    }
    if (r3 !== 0) {
        $('.faint3').remove()
    }
});