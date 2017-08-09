$(document).ready(function() {
		var apilist;
		$("#insopt").load("http://blog.cumtpn.com/vipvideo/api.html",function(){
			apilist = document.getElementById("insopt");
			var xx = $.getUrlParam("src");
			if(xx != null)
			{
				var pindex = $.getUrlParam("index");
				api=apilist.options[pindex?pindex:0].value;
				document.getElementById("vplay").src=api+xx;
			}
		});

	});

(function ($) {
	$.getUrlParam = function (name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
	}
})(jQuery);


function getvideo(){
	var vurl = document.getElementById("url").value;
	var apilist = document.getElementById("insopt");
	var index = document.getElementById("insopt").selectedIndex;
	var api = apilist.options[index].value;
	if (api == "userapi")
	{
		api = document.getElementById("uapi").value;
	}
/*
	var xx = $.getUrlParam('src');
	if(xx != null)
	{
		document.getElementById("vplay").src=api+xx;
		return true;
	}
*/
	if (vurl =="输入您想播放的视频地址......") {
                alert("请先在输入框内输入正确的视频地址哦！");
                return false;
				}

	document.getElementById("vplay").src=api+vurl;
	}

	function showiapi(){
		var apilist = document.getElementById("insopt");
		var index = document.getElementById("insopt").selectedIndex;
		var api = apilist.options[index].value;
		if (api == "userapi")
		{
			$('.userapi').css('display','inline');
		}
		else
		{			
			$('.userapi').css('display','none');
		}
	}

    function feedback(){
        alert("请联系ygcaicn@gmail.com报错")
    }

