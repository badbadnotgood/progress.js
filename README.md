progress.js
===========

`progress.js` is a very simple jQuery extension that creates a text based progress bar using the sans-serif letter "I".  A text example would look like this:

> __I____I____I____I____I____I____I____I__IIIIIIIII

##Usage

Using progress.js is very simple, use these functions (where amount is the total amount of bars, eg 50 or 30, and color is what the highlighted color of them will be)

```
$("#element").progress(amount, color)

// And to update it do this:

$("#element").progress_update()

// You can also reset or get the currently progressed amount with these functions:

$("#element").progress_reset()
$("#element").progress_selected()
```