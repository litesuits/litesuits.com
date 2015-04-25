// what are litesuits
(function ($) {
  var icon = $('#slide-icon'),
      container = $('#what-are-litesuits'),
      litesuits = ['LiteHttp', 'LiteAsync', 'LiteOrm', 'LiteCommon', 'LiteBle', 'LiteUI'];
  var slide = function (callback) {
    var i = this.i || 0,
        j = this.wordPosition || 0,
        adding = (this.adding === undefined?true:this.adding);
    container.html(litesuits[j].slice(0, i));
    if(adding)
      this.i = ++i;
    else
      this.i = --i;
    if(i === litesuits[j].length + 8 && adding)
      this.adding = false;
    else if(i === 0 && !adding) {
      this.adding = true;
      this.wordPosition = ++j;
      if(this.wordPosition === litesuits.length)
        this.wordPosition = 0;
      callback(this.wordPosition);
    }
  }
  var changeIcon = function (i) {
    var j = i || 0;
    icon.removeClass().addClass(litesuits[j]);
  }
  var animation = function () {
    return setInterval(function(){
      slide(changeIcon)
    }, 100);
  }
  animation();
  changeIcon();
})(jQuery);