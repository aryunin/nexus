$(document).ready(function () {

    // password show
    $('.password-show').click(function () {
        var $this = $(this),
            element = $this.next('input'),
            parent = $this.closest('.form-group');

        if (element.prop('type') === 'password') {
            element.prop('type', 'text');
            $this.addClass('show');
        }
        else {
            element.prop('type', 'password');
            $this.removeClass('show');
        }
    });
});
