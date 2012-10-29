(function() {
    var skip = ['weight', 'fat loss', 'workout', 'flat abs', 'nails', 'manicure'];

    $(document).bind('DOMNodeInserted', function(e) {
        var $n = $(e.target);
        if ($n.hasClass('pin') && !$n.hasClass('.pintSized')) {
            removalTest($n);
        }
    });

    /**
     * Run on load.
     */
    $('.pin:not(.pintSized)').each(function() {
        removalTest($(this));
    });

    /**
     * Handles testing the description board names against a set of user-defined
     * blacklist keywords to see if the pin should be removed.
     */
    function removalTest($n) {
        var desc = $n.find('.description').text().toLowerCase();
	_log('Triggering removal test on: ' + desc);

	$n.addClass('pintSized');
        for (i in skip) {
            if (desc.indexOf(skip[i]) > -1) {
	        _log('== Removing ==');
	        $n.remove();
            }
        } 
    }

    function _log(msg) { if (window.console) console.log(msg); }
})();
