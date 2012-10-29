# Pinterest Keyword Removal Tool (Bookmarklet) #

Your wife complains her Pinterest feed is full of crap she has no interest in seeing like weight loss and fingernail painting. 

What do you do as a developer? Build something to fix the problem.

This tool simply allows you to specify a set of keywords which will be used as a blacklist for all pin descriptions. It uses
the DOMNodeInserted event to intercept pins as they are inserted into the DOM. 

## Currently Alpha ##

This project is currently not tested and is more of a proof of concept.

## Usage ##

Github won't allow the creation of bookmarklet anchors in a README, so you'll need to
create a new bookmark on your bar and add the following as the url:

```bash
javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://raw.github.com/cballou/Pinterest-Keyword-Removal-Tool/master/pintSizeRemover.js';})();
```
