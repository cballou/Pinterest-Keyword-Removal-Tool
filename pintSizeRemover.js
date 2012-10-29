(function() {
  var skip = ['weight', 'fat loss', 'workout', 'flat abs', 'nails', 'manicure'];

  $(document).bind('DOMNodeInserted', function(e) {
    var $n = $(e.target);
    if ($n.hasClass('pin')) {
      removalTest();
    }
  });

  $('.pin').each(function() {
    removalTest($(this));
  });

  function removalTest($n) {
    var desc = $n.find('.description').text();
    for (i in skip) {
      if (desc.indexOf(skip[i]) > -1) {
	console.log('Removing:');
	console.log(desc);
	$n.remove();
      }
    } 
  }
})();
