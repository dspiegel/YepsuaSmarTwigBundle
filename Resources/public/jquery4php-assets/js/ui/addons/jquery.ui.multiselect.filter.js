/*
 * jQuery MultiSelect UI Widget Filtering Plugin 1.2
 * Copyright (c) 2011 Eric Hynds
 *
 * http://www.erichynds.com/jquery/jquery-ui-multiselect-widget/
 *
 * Depends:
 *   - jQuery UI MultiSelect widget
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
*/
(function(c){var f=/[\-\[\]{}()*+?.,\\^$|#\s]/g;c.widget("ech.multiselectfilter",{options:{label:"Filter:",width:null,placeholder:"Enter keywords"},_create:function(){var e;var a=this,b=this.options,d=this.instance=c(this.element).data("multiselect");this.header=d.menu.find(".ui-multiselect-header").addClass("ui-multiselect-hasfilter");e=this.wrapper=c('<div class="ui-multiselect-filter">'+(b.label.length?b.label:"")+'<input placeholder="'+b.placeholder+'" type="search"'+(/\d/.test(b.width)?'style="width:'+b.width+'px"':"")+" /></div>").prependTo(this.header),b=e;this.inputs=d.menu.find('input[type="checkbox"], input[type="radio"]');this.input=b.find("input").bind({keydown:function(a){a.which===13&&a.preventDefault()},keyup:c.proxy(a._handler,a),click:c.proxy(a._handler,a)});this.updateCache();d._toggleChecked=function(b,d){var e=d&&d.length?d:this.labels.find("input"),i=this,e=e.not(a.instance._isOpen?":disabled, :hidden":":disabled").each(this._toggleCheckbox("checked",b));this.update();var j=e.map(function(){return this.value}).get();this.element.find("option").filter(function(){!this.disabled&&c.inArray(this.value,j)>-1&&i._toggleCheckbox("selected",b).call(this)})};c(document).bind("multiselectrefresh",function(){a.updateCache();a._handler()})},_handler:function(a){var b=c.trim(this.input[0].value.toLowerCase()),d=this.rows,g=this.inputs,h=this.cache;if(b){d.hide();var e=RegExp(b.replace(f,"\\$&"),"gi");this._trigger("filter",a,c.map(h,function(a,b){if(a.search(e)!==-1)return d.eq(b).show(),g.get(b);return null}))}else d.show();this.instance.menu.find(".ui-multiselect-optgroup-label").each(function(){var a=c(this);a[a.nextUntil(".ui-multiselect-optgroup-label").filter(":visible").length?"show":"hide"]()})},updateCache:function(){this.rows=this.instance.menu.find(".ui-multiselect-checkboxes li:not(.ui-multiselect-optgroup-label)");this.cache=this.element.children().map(function(){var a=c(this);this.tagName.toLowerCase()==="optgroup"&&(a=a.children());if(!a.val().length)return null;return a.map(function(){return this.innerHTML.toLowerCase()}).get()}).get()},widget:function(){return this.wrapper},destroy:function(){c.Widget.prototype.destroy.call(this);this.input.val("").trigger("keyup");this.wrapper.remove()}})})(jQuery);
