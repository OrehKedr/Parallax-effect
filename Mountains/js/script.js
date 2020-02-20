$(document).ready(function() {
    $(window).scroll(function(event) {
        let scroll = $(this).scrollTop();
        let win_width = $(this).outerWidth();
        let h_content = $('.content').outerHeight();
        let h_parallax = $('.parallax').outerHeight();

        // Вычисляем процент прокрутки контентной части
        let p_content = scroll / h_content * 100;

        // Вычисляем процент прокрутки parallax части
        let p_parallax = scroll / h_parallax * 100;

        // Вычисление opacity (непрозрачности для тумана)
        let opacity = 1 - p_parallax / 100;

        // Накладываем параллакс-эффект на блок с туманом
        // Коэффициент приближения speed = 10000, подобран опытным путём
        let zoom_1 = 1 + (win_width / 10000 * p_parallax);
        $('.parallax__fog').css('transform', 'scale('+zoom_1+')');
        $('.parallax__fog').css('opacity', opacity);

        // Накладываем параллакс-эффект на блок с центральной горой
        // Коэффициент приближения speed = 5000000, подобран опытным путём
        let zoom_2 = 1 + (win_width / 5000000 * p_content);
        $('.parallax__mountain_1').css('transform', 'scale('+zoom_2+')');

        // Накладываем параллакс-эффект на блок с правой горой
        let vector_x = win_width / 2000 * p_parallax;
        let zoom_3 = 1 + win_width * 0.000005 * p_parallax;
        $('.parallax__mountain_2').css('transform', 'translate3d('+vector_x+'px, 0, 0) scale('+zoom_3+')');

        // Накладываем параллакс-эффект на блок с левой горой
        let vector2_x = win_width / 1500 * p_parallax;
        let zoom_4 = 1 + win_width * 0.00001 * p_parallax;
        $('.parallax__mountain_3').css('transform', 'translate3d('+vector2_x+'px, 0, 0) scale('+zoom_4+')');
    });
});