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
    $.get('include/header.html?v=10', (res) => {
        $('header')[0].outerHTML = res;
        if ($.fn.localize) {
            $('.i18lan').localize();
            $('#lanshow').html(selectlan.toUpperCase())
        } 
      
    });
    $.get('include/footer.html?v=10', (res)=>{ 
        $('footer')[0].outerHTML = res; 
        if ($.fn.localize) {
            $('.i18lan').localize();
        } 
        })
 });

function changeLan(a){
 setLan(lanObj[a])
}


function setLan(lans){
    var obj={"Msg":lans}
    setLocalStorageItem('lan',obj,500)
    window.location.reload();
}


//目前在第幾頁
var newspage=1
//總共頁數
var newsCount=1
function news(types,pages){
    newspage=pages
    newstype=0;
    if(types!=-1){
        newstype=types;
    }else{
        newstype=getQueryString('type')
    }
    $('.loading').css('display', 'flex');
    $.ajax({
        url: apiUrl+'/api/news/list',
        type: 'POST',
        data: {
            lang: lan,
            //type:newType[newstype],
            type:-1,
            page:newspage
        },
        error: function (xhr) {
            $(".loading").hide();
            alert('Ajax request');
        },
        success: function (obj) {
           
            $('.loading').css('display', 'none');
            data=obj.data.news.data
      
           // newsCount = Math.ceil(obj.data.news.total / 10);
            
            if (obj.status == 1) {
                for(var i=0;i<data.length;i++) {
                    _html='<div class="row"><div class="col-12 col-md-6 col-lg-4">'
                    _html='<a href="newscontent.html?id='+data[i]['uuid']+'"><div class="news-item">'             
                    _html+='<img src="'+apiUrl+'/uploads/'+data[i]['preview_img']+'" alt="">'                                     
                    _html+='<h5>'+data[i]['title'] +'</h5>'                   
                    _html+='</div> </a></div>'                
                    $('.news-container').append(_html); 
                }       
            } else {
                alert(dates.Msg)
            }
        }
    })

}



function getNewsDetail(id){
   
    if(id!=undefined && id!='')//列表
    {
        $('.loading').css('display', 'flex');
        $.ajax({
            url: apiUrl+'/api/news/detail',
            type: 'GET',
            data: {
                id: id,
                lang: lan,
            },
            error: function (xhr) {
                $(".loading").hide();
                alert('Ajax request');
            },
            success: function (obj) {
               
                $('.loading').css('display', 'none');
                data=obj.data.news
                if (obj.status == 1) {
                  
                   // $('#tag').html(data[0].type)
                    $('#title').html(data[0].title)
                    $('#news-container').html(data[0].content)
                    
                } else {
                    $('#news-container').html("<p data-i18n='all.nodata'></p>")
                    $('.i18lan').localize();
                }
            }
        })         
    }else{

    }
   
}
