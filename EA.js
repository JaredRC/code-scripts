jq1111 = jQuery.noConflict(true);

var sevenlooks7daysApp = (function(){
var products = {image:["1002vdsc400_fce0bd","1002vdsc400_836a5c","1002vdsc400_a48b7e",
"1002vdsc400_75889a","1002bflc400_ed8172","1002bflc400_a25556","1002bflc400_cf3580"],
names:["Beautiful Color Eye Shadow Bone",
"Beautiful Color Eye Shadow Chocolate",
"Beautiful Color Eye Shadow Bronze Lustre",
"Beautiful Color Eye Shadow Mediterranean",
"Beautiful Color Luminous Lip Gloss Coral Kiss",
"Beautiful Color Luminous Lip Gloss Royal Plum",
"Beautiful Color Luminous Lip Gloss Passion Fruit"],
price:["$18.50","$18.50","$18.50","$18.50","$18","$18","$18"],
links: links
};

var days = [
"#1002vdsc400_fce0bd,#1002vdsc400_836a5c,#1002bflc400_ed8172",
"#1002vdsc400_fce0bd,#1002vdsc400_836a5c,#1002vdsc400_a48b7e,#1002bflc400_ed8172",
"#1002vdsc400_fce0bd,#1002vdsc400_836a5c,#1002vdsc400_75889a,#1002bflc400_a25556",
"#1002vdsc400_fce0bd,#1002vdsc400_a48b7e,#1002vdsc400_75889a,#1002bflc400_a25556",
"#1002vdsc400_fce0bd,#1002vdsc400_a48b7e,#1002bflc400_cf3580",
"#1002vdsc400_fce0bd,#1002vdsc400_75889a,#1002bflc400_ed8172",
"#1002vdsc400_fce0bd,#1002vdsc400_836a5c,#1002vdsc400_a48b7e,#1002vdsc400_75889a,#1002bflc400_ed8172"
];

function setCycle2(){
jq1111('#slideshow').cycle({
speed: 600,
manualSpeed: 100,
slides: '>div',
slideClass: 'day',
timeout: 0,
pager: '>#sevendays'
});
}

function slideMoved(event, opts){
var idx = opts.nextSlide;
jq1111("#sevendays li").removeClass("active");
jq1111("#sevendays li:eq("+idx+")").addClass("active");	
jq1111("#shoplooks div").css({"display":"none"});
jq1111(days[idx]).css({"display":"block"});
var slide = (".cycle-slide-active");
var zoomImg = jq1111(slide+" .leftcol>img").attr("data-zoom-image");
var bgf = jq1111(".zoomWindow").filter(function(){
return jq1111(this).css("background-image").match(zoomImg);
});
jq1111(".zoomContainer").removeClass("zontop");
bgf.parent().parent().addClass("zontop");
}

function setAction(){
jq1111("#sevendays li").click( function(){
var idx = jq1111(this).index();
jq1111('#slideshow').cycle('goto', idx);
});
}

var zoom = function(){
jq1111('#zoom0,#zoom1,#zoom2,#zoom3,#zoom4,#zoom5,#zoom6').elevateZoom({
zoomScroll: true,
zoomType: "inner",
cursor: "crosshair",
zoomWindowFadeIn: 500,
zoomWindowFadeOut: 750,
responsive: true
});
};

var zoomInit = function (){
setTimeout(function () {
var bgf = jq1111(".zoomWindow").filter(function(){
return jq1111(this).css("background-image").match(/Monday/);
});
bgf.parent().parent().addClass("zontop"); 
}, 3000);
};

function initProducts(){
var imgUrl = "http://demandware.edgesuite.net/sits_pod18/dw/image/v2/AAHP_PRD/on/demandware.static/Sites-ElizabethArden-Site/Sites-elizabetharden-master-catalog/default/v1406056357964/images/";
var imgSize = "?sw=259&sh=259";
var stars = "http://staging.elizabetharden.pfsweb.demandware.net/on/demandware.static/Sites-ElizabethArden-Site/-/default/v1404762612979/images/stars/rating-5_0.gif";
jq1111.each(products.image,function(idx,val){
var elem = '<div id="'+val+'" class="product producttile">';
elem += '<a href="'+products.links[idx]+'"><img src="'+imgUrl+val+'.jpg'+imgSize+'" />';
elem += '<p>'+products.names[idx]+'<br>'+products.price[idx]+' >></p></a><p><img src="'+stars+'" /></p></div>';
jq1111("#shoplooks").append(elem);
});

jq1111(days[0]).css({"display":"block"});
}

return{
init : function (){
setCycle2();
jq1111('#slideshow').on( 'cycle-after', slideMoved );
zoom();
zoomInit();
setAction();
initProducts();
}
};

})();

jq1111(document).ready(function(){
sevenlooks7daysApp.init();
});
