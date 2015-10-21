/**
 * @fileoverview Global js functions used on most pages.
*/
/* Create NetR namespace */
if(typeof NetR == "undefined"){ var NetR = {}; }

/**
 * @requires jQuery
 * @class Module with tabbed content
 * @constructor
 * @param {String or Object} id_or_node The module for which to add tabs
 */
NetR.TabbedModule = function(id_or_node,options){
	this.options = options || {};
	this.el      = typeof id_or_node == "string" ? $("#" + id_or_node) : $(id_or_node);
	this.el.addClass("tabbed-module");
	this._createTabs();
};
NetR.TabbedModule.prototype = {
	/**
	 * Activates a given tab
	 * @param {Object} tab A tab from the this.tabs array
	 */
	activateTab: function(tab){
		$(this.tabs).each(function(){
			$(this.link).removeClass("sel");
			$(this.content).removeClass("active");
		});
		this.tabs_ul.attr("class", tab.content.id + "-active module-tabs clearfix");
		$(tab.link).append(this.active_tab_suffix);
		$(tab.link).addClass("sel");
		$(tab.content).addClass("active");
	},

	/**
	 * Creates the neccessary markup for all tabs
	 * @private
	 */
	_createTabs: function(){
		var self     = this;
		this.tabs    = [];
		this.tabs_ul = $("<ul class=\"module-tabs clearfix\"></ul>").insertAfter($("h2",this.el));
		if(this.options.before_tabs){ $("<p></p>").text(this.options.before_tabs).attr("class", "structural").insertBefore(this.tabs_ul); }
		$(".module-content", this.el).each(function(){
			var tab     = {};
			tab.content = this;
			tab.label   = $($(".tab-label", this)[0]).text();
			tab.link    = $("<a href=\"#" + tab.content.id + "\"><span></span>" + tab.label +"</a>").addClass("tab-" + tab.content.id);
			if($(tab.content).is(".active")){ tab.link.addClass("sel"); }
			tab.link.appendTo(self.tabs_ul).wrap("<li></li>");
			tab.link.click(function(e){
				e.preventDefault();
				self.activateTab(tab);
			});
			self.tabs.push(tab);
		});
	}
};

/**
 * Adds an onclick handler that brings up an alert for all links that do not lead anywhere
 * in this prototype. Remove before deploying.
 */
var NetRLinkInfo = {
	init:function() {
		var links = document.getElementsByTagName('A');
		var re = /inactive/;
		for (var i = 0; i < links.length; i++) {
			if (re.test(links[i].getAttribute('href',2))) { /* The second parameter is needed for IE to return the actual value of the href attribute */
				links[i].onclick = NetRLinkInfo.linkinfo;
			}
		}
	},
	linkinfo:function() {
		alert('This link is not active in the prototype.');
		return false;
	}
};

var GB_DONE = false;

// login form
function GB_show(caption, url) {
    try {
        if(!GB_DONE) {
            $("body")
                .append("<div id='GB_overlay'></div><div id='GB_window'><div id='GB_caption'></div>"
                        + "<img src='/css/images/close.gif' alt='Close window'/></div>");
            $("#GB_window img").click(GB_hide);
            $("#GB_overlay").click(GB_hide);
            //$(window).resize(GB_position);
            GB_DONE = true;
        }

        $("#GB_frame").remove();
        $("#GB_window").append("<iframe id='GB_frame' src='"+url+"'></iframe>");
        $("#GB_caption").html(caption);
        $("#GB_window").vCenter();
        $("#GB_overlay").show();
        $("#GB_window").show();//slideDown("slow");

    } catch(e) {
        alert( e );
    }
}

function GB_hide() {
    $("#GB_window,#GB_overlay").hide();
}


// vertical positioning in the viewport
(function($){
    $.fn.vCenter = function(options) {
        var pos = {
            sTop : function() {
                return window.pageYOffset || $.boxModel && document.documentElement.scrollTop ||	document.body.scrollTop;
            },
            wHeight : function() { 
                //if ( $.browser.safari && parseInt($.browser.version) > 520 ) {
                //    return window.innerHeight - (($(document).height() > window.innerHeight) ? getScrollbarWidth() : 0);
    		//} else 
                if ( $.browser.safari || $.browser.opera ) {
                    return window.innerHeight;
                }	else {
                    return $.boxModel && document.documentElement.clientHeight || document.body.clientHeight;
                }
            }
        };
        return this.each(function(index) {
                if (index == 0) {
                    var $this = $(this);
                    var elHeight = $this.height();
                    $this.css({
                            position: 'absolute',
                                marginTop: '0',
                                top: pos.sTop() + (pos.wHeight() / 2) - (elHeight / 2) + 100
                                });        
                }
            });
    };

})(jQuery);


$(document).ready(function(){

	/**
	 * Finds all .modules with two or more .module-contents in it and creates .module-tabs for them
	 */
	$('.module').each(function() {
		if($(this).children('.module-wrapper').children('.module-content').length > 1) {
			new NetR.TabbedModule($(this));
		}
	});

        // login box
        $("a.greybox").click(function(){
                var t = this.title || $(this).text() || this.href;
                GB_show(t,this.href);
                return false;
            });
 
        // preview box
        $("#ud_text").keyup(function() {
                $comment = $(this).val();
                $comment = $comment.replace(/\n/g, "<br />").replace(/\n\n+/g, '<br /><br />').replace(/(&lt;\/?)script/g,"$1noscript");
                $('#ud_preview').html( $comment );
            });

        // remove the hint in the email subscription box
        $("#feedburnermail").val("Pon tu email para suscribirte").one('click',function(){
                $(this).val("");
            });

        // add target to google search box to stay xhtml compliant
        $("#search").attr("target","_top");
          
        // vote buttons
        $("a.vote-up,a.vote-down,a.abuse,a.post-up,a.post-down").click(function(){
                var t = this.title || $(this).text() || this.href;

                var action = $(this).attr("class");
            
                if (action == 'vote-up' || action == 'vote-down' || action == 'abuse' ) {
                    var tparent = $(this).parents('li.comment');
                    var arg = tparent.attr("id");
                } else {
                    var tparent = $(this).parents('div.blog-rate');
                    var arg = tparent.attr("id");
                }

                $.get("/wp-content/plugins/lightpress/rpc.php", { action: action, arg: arg }, 
                      function(data){

                          if (data == 'REGISTER') { 

                              // call openid registration with right ref
                              var login_url = '/login?openid=yes&action=' + action + '&arg=' + arg;
			      if (action == 'abuse') {
                                  GB_show('Necesita estar identificado para reportar',login_url);
                              } else {
                                  GB_show('Necesita estar identificado para votar',login_url);
                              }

                          } else if (data == 'VOTED') {

                              // Already voted, alert
                              alert("Ya has votado");
                              return false;

                          } else if (data == 'OK') {

                              // change class of vote buttons

                              // select the voteup button
                              if (action == 'vote-up' || action == 'vote-down' || action == 'abuse' ) {
                                  // comment votes
                                  $("a.vote-up",tparent).replaceWith('<img style="float:left;margin-left:5px;" alt="Vote up" src="/css/images/plus-comment-off.png"/>');
                                  $("a.vote-down",tparent).replaceWith('<img style="float:left;margin-left:5px;" alt="Vote down" src="/css/images/minus-comment-off.png"/>');
                                  $("a.abuse",tparent).replaceWith('<img style="position:absolute;right:20px;top:25px;" alt="Report" src="/css/images/report-off.gif"/>');
                              } else {

                                  console.log('in the right branch');

                                  // post votes, grey vote up and vote down buttons and update the counter
                                  $("a.post-up",tparent).replaceWith('<img style="vertical-align:top;" alt="Vote up" src="/css/images/plus-off.gif"/>');
                                  $("a.post-down",tparent).replaceWith('<img style="vertical-align:top;" alt="Vote down" src="/css/images/minus-off.gif"/>');
                                  // increment the counter
                                  var votes = parseInt($("div.blog-votes",tparent.parent()).children().html());

                                  if (votes) {
                                      // hide/unhide counter
                                      if (action == 'post-up') {
                                          votes = votes + 1;
                                      } else if (action == 'post-down') {
                                          votes = votes - 1;
                                      }

                                      if (votes > 1) {
                                          $("div.blog-votes",tparent.parent()).children().html(votes);
                                      } else if (votes == 1) {
                                          $("div.blog-votes",tparent.parent()).html('<strong>1</strong> voto');
                                      } else {
                                          $("div.blog-votes",tparent.parent()).children().html('');
                                      }
                                  } else if (action == 'post-up') {
                                      tparent.prepend('<div class="blog-votes"><strong>1</strong> voto</div>');
                                  }
                              }
                              return false;
                          }
                      });
                return false;
            });
    });
