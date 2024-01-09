/* FOR SPOILERS */
var split_symbol = "/";


$('.show-hide').click(function(event) {
        event.preventDefault();

        var spoiler_div = $(this).closest('.entry_spoiler').find('.spoiler');
        var str_first = $.trim( $(this).attr('text-string').split(split_symbol)[0] );
        var str_last = $.trim( $(this).attr('text-string').split(split_symbol)[1] );

        if ( spoiler_div.is(":visible") ) {
           $(this).closest('.entry_spoiler').find('.show-hide').text(str_first);
        } else {
            $(this).closest('.entry_spoiler').find('.show-hide').text(str_last);
        }

        spoiler_div.slideToggle(400);

});