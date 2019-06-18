/**
* hexo-tag-emojis-bycoda
* https://github.com/TomoriCoda/hexo-tag-emojis-bycoda.git
* 
/**
* emojis tag
*
* Syntax:
*   {% emoji_coda src, [className] %}
*
* Example
*   {% emoji_coda people/alien %}
*/
hexo.extend.tag.register('emoji_coda', function(args){
  var src = args[0];
  var className = args[1] || 'emoji-coda';

  return `<img class="${className}" src="https://cdn.jsdelivr.net/gh/TomoriCoda/hexo-tag-emojis-bycoda/emojis/${src}.png">`;
});
