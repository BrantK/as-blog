$(function () {
    $(window).on("load", function () {
        $(".rssFeed").hide();
        $(".rssFeed:first").show();
    });
    $("#sidebar a").click(function () {
        $(".rssFeed").hide();
        $($(this).attr("href")).show();
        return false;
    });
});
