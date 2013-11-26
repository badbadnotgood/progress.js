/**
 * Progress.js By Matthew A. Tavares
 * See https://github.com/badbadnotgood/progress.js for documentation
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function( $ ) {
  $.fn.progress = function(amount, color) {
    _this = this
    var steps = []
    
    if (!amount) { amount = 10 }
    if (!color) { color = "#999"}
    
    for (var i=0;i<amount;i++) {
      steps[i] = $("<span class='step'>I</span>").css("color", color)
    }
    
    $.each(steps, function(i, step) {
      _this.append(steps)
    })
  },
  
  $.fn.progress_update = function(index, color) {
    if (!index) { index = 0 }
    if (!color) { color = "#000"}
    steps = []
    $(this).children(".step").each(function(i, v) {
      steps[i] = $(v)
    })
    scale = steps.length * .01
    index = Math.round(index * scale)
    if (steps[index]) {
      steps[index].css("color", color)
      steps[index].addClass("selected")
    }
  },
  
  $.fn.progress_reset = function(color) {
    if (!color) { color = "#999"}
    $(this).children(".step").each(function(i, v) {
      steps[index].css("color", color)
    })
  },
  
  $.fn.progress_selected = function() {
    return (this).children(".step.selected").length
  }
})( jQuery );