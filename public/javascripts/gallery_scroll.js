var theWidth;
var theHeight;
var currentContent = 0;

$(window).resize(function () {sizeContent();
});

$(window).ready(function () { sizeContent();
});

function sizeContent() {
    
    //theWidth = $(window).width();
    //theHeight = $(window).height();
    theWidth = 320;
    theHeight = 350;
    
    //alert("w " + theWidth + "; H " + theHeight);
    sizeContentItems();
    setLeftOnContentItems();
    sizeContentWrapper(theWidth, theHeight);
}

function sizeContentItems() {
    $(".contentItem").css('width', theWidth);
    $(".contentItem").css('height', theHeight);
}

function setLeftOnContentItems() {
    var contentCount = 0;
    $(".contentItem").each(function (i) {
        contentCount += i;
        $(this).css('left', i * theWidth);
    });
}

function sizeContentWrapper(width, height) {
    $("#contentWrapper").css('width', width - 80);
    $("#contentWrapper").css('height', height);
}

function moveContent(i, width) {
    $("#contentWrapper").scrollLeft(i * width);
}

function changeSelected(i) {
    $(".selected").removeClass("selected");
    $("li:eq(" + i + ") a").addClass("selected");
}

function scrollContentNext() {
    scrollContent(currentContent + 1);
}
function scrollContentLast() {
    scrollContent(currentContent - 1);
}

function scrollContent(i) {
    i = checkMinMax(i);
    currentContent = i;
    $("#contentWrapper").animate({ scrollLeft: i * theWidth }, 1000);
}

function checkMinMax(i) {
    var maxItems = 9; //$("li").length;
    var minItems = 0;
    //alert("min "+ minItems + "; max: "+ maxItems );
    if (i <= minItems) {     return (maxItems-1);
    } else if (i >= maxItems) { return 0;
    }
    return i;
}