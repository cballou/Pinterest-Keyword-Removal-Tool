(function() {
    var skip = ['weight', 'fat loss', 'workout', 'flat abs', 'nails', 'manicure'];

    $(document).bind('DOMNodeInserted', function(e) {
        var $n = $(e.target);
        if ($n.hasClass('BoardLayout')) {
            $n.find('.pin:not(.pintSized)').each(removalTest);
        }
    });

    /**
     * Run on load.
     */
    $('.pin:not(.pintSized)').each(removalTest);

    /**
     * Handles testing the description board names against a set of user-defined
     * blacklist keywords to see if the pin should be removed.
     */
    function removalTest() {
        var $this = $(this),
            desc = $this.find('.description').text().toLowerCase();
	_log('Triggering removal test on: ' + desc);

	$this.addClass('pintSized');
        for (i in skip) {
            if (desc.indexOf(skip[i]) > -1) {
	        _log('== Removing ==');
	        $this.remove();
            }
        } 
    }

    function _log(msg) { if (window.console) console.log(msg); }
})();
