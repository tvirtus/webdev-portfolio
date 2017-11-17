// $(function () {
//
//     createSticky($("nav"));
//
// });
//
// function createSticky(sticky) {
//
//     if (typeof sticky !== "undefined") {
//
//         var pos = sticky.offset().top,
//             win = $(window);
//
//         win.scroll(function () {
//             win.scrollTop() >= pos ? sticky.addClass("sticky") : sticky.removeClass("sticky");
//         });
//     }
// }