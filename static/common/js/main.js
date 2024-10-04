set100vh()
window.onresize = function(){
	set100vh()
}

function set100vh(){
	document.documentElement.style.setProperty('--100vh', window.innerHeight + 'px' )
}



function SetCookieTool(name, value) { var Days = 30; var exp = new Date(); exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1e3); document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString(); }
function getCookieTool(name) { var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)")); if (arr != null) return unescape(arr[2]); return null; }
function delCookieTool(name) { var exp = new Date(); exp.setTime(exp.getTime() - 1); var cval = getCookieTool(name); if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString(); }
function setLocalStorageItem(key, value, tim) {
    var times= tim*60*60*1000 //24*60*60*1000 =24小時
    let item = {
        value: value,
        expiry: tim ? Date.now() + times : null
    };
    localStorage.setItem(key, JSON.stringify(item));
}
function getLocalStorageItem(key) {
    let item = localStorage.getItem(key);
    if (!item) return null;
    item = JSON.parse(item);
    if (item.expiry && Date.now() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
}
function getQueryString(param) {
    var q = document.location.search || document.location.hash;
    if (param == null) { return q; }
    if (q) {
        var pairs = q.substring(1).split("&");
        for (var i = 0; i < pairs.length; i++) {
            if (pairs[i].substring(0, pairs[i].indexOf("=")) == param) {
                return pairs[i].substring((pairs[i].indexOf("=") + 1));
            }
        }
    }
}

function delLocalStorageItem(key){
    localStorage.removeItem(key);
}

var lanObj=['en','zh-tw']
var newType=[];
var pages=''
var lan='zh-tw'
$(document).ready(function(){
	var objs=getLocalStorageItem('lan')
	if(objs!=null){
		lan=objs.Msg;
	}
    initi18()
 });

function changeLan(a){
 setLan(lanObj[a])
}


function setLan(lans){
    var obj={"Msg":lans}
    setLocalStorageItem('lan',obj,500)
    window.location.reload();
}
