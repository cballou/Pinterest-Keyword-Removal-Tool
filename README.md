# About the Pinterest Keyword Removal Tool Bookmarklet #

#### So what's this for? ####

This bookmarklet is useful if your Pinterest feed is full of crap and you want to hide all pins mentioning keywords such as "weight loss" or "finger painting".

#### So how does it work? ####

This tool simply allows you to specify a set of keywords which will be used as a blacklist for all pin descriptions. It's a textbook example of using the `DOMNodeInserted` event to intercept pins as they are inserted into the DOM.

## Setup ##

This project was built as a proof of concept.

You'll want to fork the project into your own github repository and update the `var skip` array in `pintSizeRemover.js` with your own list of keywords you'd like to skip.

The default skip keywords are as follows:

```js
var skip = [
  'weight', 
  'fat loss', 
  'workout', 
  'work out', 
  'burn calories', 
  'flat abs', 
  'nails', 
  'manicure', 
  'fitness'
];
```

## Usage ##

Github won't allow the creation of bookmarklet anchors in a README, so you'll need to
create a new bookmark on your bar and add the following as the url:

```bash
javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://raw.github.com/cballou/Pinterest-Keyword-Removal-Tool/master/pintSizeRemover.js';})();
```
