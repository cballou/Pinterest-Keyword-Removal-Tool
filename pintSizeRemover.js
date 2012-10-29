(function() {
    var skip = ['weight', 'fat loss', 'workout', 'work out', 'burn calories', 'flat abs', 'nails', 'manicure', 'fitness'];

    $(document).bind('DOMNodeInserted', function(e) {
        var $n = $(e.target);
        if ($n.hasClass('BoardLayout')) {
            $n.find('.pin:not(.pintSized)').each(removalTest);
        }
    });

    /**
     * Live binding for removal action.
     */
     $('#wrapper').on('click', '.eatPint', function() {
         var $this = $(this),
             $pin = $this.closest('.pin'),
             desc = $pin.find('.description').text().toLowerCase();

         // create the removal tool
         _log('Clicked pin.');
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

	$this.addClass('pintSized');
        $this.find('.PinHolder .actions').append('<a href="Button Button11 WhiteButton ContrastButton eatPint">Hide Keyword(s)</a>');
        for (i in skip) {
            if (desc.indexOf(skip[i]) > -1) {
                _log('"' + skip[i] + '" keyword found. Removing pin "' + desc + '"');
	        $this.remove();
                break;
            }
        } 
    }

    function _log(msg) { if (window.console) console.log(msg); }
})();
