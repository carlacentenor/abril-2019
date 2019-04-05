///// Tweet
$(document).ready(function(){
jQuery(function($){
        $("#tweet").tweet({
          count: 1,
          username: "wegraphics",
          template: "{text} » {retweet_action}"
        });
      }).bind("loaded", function(){
        $(this).find("a.tweet_action").click(function(ev) {
          window.open(this.href, "Retweet",
                      'menubar=0,resizable=0,width=550,height=420,top=200,left=400');
          ev.preventDefault();
        });
      });
});
