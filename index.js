/**
* hexo-tag-emojis-byhj
* https://github.com/honjun/hexo-tag-emojis-byhj.git
* 
/**
* emojis tag
*
* Syntax:
*   {% emoji_hj src, [className] %}
*
* Example
*   {% emoji_hj people/alien %}
*/
hexo.extend.tag.register('emoji_coda', function(args){
  var src = args[0];
  var className = args[1] || 'emoji-coda';

  return `<img class="${className}" src="https://cdn.jsdelivr.net/gh/TomoriCoda/hexo-tag-emojis-bycoda/emojis/${src}.png">`;
});
