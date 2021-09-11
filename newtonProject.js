


$(document).ready(function(){
$("#html").click(function(){
$("#floatrightdiv").fadeOut();
$('#floatrightdiv').fadeIn();
});
/*-------------------------------------*/
$("#tagsAttributes").click(function(){
$("#floatrightdiv").fadeOut();
$('#floatrightdiv').fadeIn();
});
/*-------------------------------------*/
$("#formatting").click(function(){
$("#floatrightdiv").fadeOut();
$('#floatrightdiv').fadeIn();
});
/*-------------------------------------*/
$("#cssIntro").click(function(){
$("#floatrightdiv").fadeOut();
$('#floatrightdiv').fadeIn();
});
/*-------------------------------------*/
$("#cssBackground").click(function(){
$("#floatrightdiv").fadeOut();
$('#floatrightdiv').fadeIn();
});

/*-------------------------------------*/
$("#cssBorder").click(function(){
$("#floatrightdiv").fadeOut();
$('#floatrightdiv').fadeIn();
});

/*-------------------------------------*/
$("#jsIntro").click(function(){
$("#floatrightdiv").fadeOut();
$('#floatrightdiv').fadeIn();
});

/*-------------------------------------*/
$("#jsFunction").click(function(){
$("#floatrightdiv").fadeOut();
$('#floatrightdiv').fadeIn();
});

/*-------------------------------------*/
$("#jsConst").click(function(){
$("#floatrightdiv").fadeOut();
$('#floatrightdiv').fadeIn();
});
/*-------------------------------------*/
$("#home").click(function(){
$("#floatrightdiv").fadeOut();
$('#floatrightdiv').fadeIn();
});
$("#about").click(function(){
$("#floatrightdiv").fadeOut();
$('#floatrightdiv').fadeIn();
});

});





function loadPage()
{
    var fullHeight = window.screen.availHeight ;
    var objectOne = '<object style="width:100%;height:';
    var objectTwo = ';" type="text/html" data="htmlFundamentals.html" ></object>'
    document.getElementById("pageContent").innerHTML=objectOne+fullHeight+"px"+objectTwo;
}
function loadPageTagsAttributes()
{
    var fullHeight = window.screen.availHeight ;
    var objectOne = '<object style="width:100%;height:';
    var objectTwo = ';" type="text/html" data="tagsAttributes.html" ></object>'
    document.getElementById("pageContent").innerHTML=objectOne+fullHeight+"px"+objectTwo;
}

function loadPageFormatting()
{
    var fullHeight = window.screen.availHeight ;
    var objectOne = '<object style="width:100%;height:';
    var objectTwo = ';" type="text/html" data="formatting.html" ></object>'
    document.getElementById("pageContent").innerHTML=objectOne+fullHeight+"px"+objectTwo;
}

function cssIntro()
{
    var fullHeight = window.screen.availHeight ;
    var objectOne = '<object style="width:100%;height:';
    var objectTwo = ';" type="text/html" data="cssIntro.html" ></object>'
    document.getElementById("pageContent").innerHTML=objectOne+fullHeight+"px"+objectTwo;
}

function cssBackground()
{
    var fullHeight = window.screen.availHeight ;
    var objectOne = '<object style="width:100%;height:';
    var objectTwo = ';" type="text/html" data="cssBackground.html" ></object>'
    document.getElementById("pageContent").innerHTML=objectOne+fullHeight+"px"+objectTwo;
}
function cssBorder()
{
    var fullHeight = window.screen.availHeight ;
    var objectOne = '<object style="width:100%;height:';
    var objectTwo = ';" type="text/html" data="cssBorder.html" ></object>'
    document.getElementById("pageContent").innerHTML=objectOne+fullHeight+"px"+objectTwo;
}

function jsIntro()
{
    var fullHeight = window.screen.availHeight ;
    var objectOne = '<object style="width:100%;height:';
    var objectTwo = ';" type="text/html" data="jsIntro.html" ></object>'
    document.getElementById("pageContent").innerHTML=objectOne+fullHeight+"px"+objectTwo;
}

function jsFunction()
{
    var fullHeight = window.screen.availHeight ;
    var objectOne = '<object style="width:100%;height:';
    var objectTwo = ';" type="text/html" data="jsFunction.html" ></object>'
    document.getElementById("pageContent").innerHTML=objectOne+fullHeight+"px"+objectTwo;
}

function jsConst()
{
    var fullHeight = window.screen.availHeight ;
    var objectOne = '<object style="width:100%;height:';
    var objectTwo = ';" type="text/html" data="jsConst.html" ></object>'
    document.getElementById("pageContent").innerHTML=objectOne+fullHeight+"px"+objectTwo;
}
function home()
{
    var fullHeight = window.screen.availHeight ;
    var objectOne = '<object style="width:100%;height:';
    var objectTwo = ';" type="text/html" data="home.html" ></object>'
    document.getElementById("pageContent").innerHTML=objectOne+fullHeight+"px"+objectTwo;
}
function about()
{
    var fullHeight = window.screen.availHeight ;
    var objectOne = '<object style="width:100%;height:';
    var objectTwo = ';" type="text/html" data="about.html" ></object>'
    document.getElementById("pageContent").innerHTML=objectOne+fullHeight+"px"+objectTwo;
}
