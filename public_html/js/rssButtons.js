$(function () {
    $(".rssFeed").hide();
    $(window).on("load", function () {
        $(".rssFeed:first").show();
    });
    $("#sidebar a").click(function () {
        $(".rssFeed").hide();
        $($(this).attr("href")).show();
        return false;
    });
});
