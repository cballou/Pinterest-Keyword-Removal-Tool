(function() {
    var skip = ['weight', 'fat loss', 'workout', 'flat abs', 'nails', 'manicure'];

    $(document).bind('DOMNodeInserted', function(e) {
        var $n = $(e.target);
        if ($n.hasClass('pin')) {
            removalTest($n);
        }
    });

    /**
     * Run on load.
     */
    $('.pin').each(function() {
        removalTest($(this));
    });

    /**
     * Handles testing the description board names against a set of user-defined
     * blacklist keywords to see if the pin should be removed.
     */
    function removalTest($n) {
        var desc = $n.find('.description').text();
        console.log(desc);
        for (i in skip) {
            if (desc.indexOf(skip[i]) > -1) {
	        console.log('Removing:');
	        console.log(desc);
	        $n.remove();
            }
        } 
    }
})();
