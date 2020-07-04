//引入新的插件
layui.config({
    base: '../../../static/js/'//拓展模块的根目录
}).extend({
    pca: 'pca'
});
function ddclick(obj) {
    var t = $(obj).text();
    $("#site").val(t);
    document.getElementById("addressTip").style.display = "none";
}

//使用自定义的插件pca
layui.use(['form', 'layedit', 'laydate', 'upload', "jquery", "pca"], function () {
    var $ = layui.$
        , form = layui.form
        , pca = layui.pca;
    //带初始值进行初始化text
    pca.init('select[name=P1]', 'select[name=C1]', 'select[name=A1]', '浙江', '杭州', '滨江区');

    //不带初始值
    // pca.init('select[name=P1]', 'select[name=C1]', 'select[name=A1]');

    //输入提示
    $("#site").bind('input propertychange', function () {
        var address = document.getElementById("site").value;
        if (address == "") {
            document.getElementById("addressTip").style.display = "none";
            return;
        }
        var html = '';
        var province = document.getElementById("province").value;
        if (province == "全部") {
            province = '';
        }
        var city = document.getElementById("city").value;
        if (city == "全部") {
            city = '';
        }
        var area = document.getElementById("area").value;
        if (area == "全部") {
            area = '';
        }

        //查询关键字
        var keywords = province + city + area + address;
            var  palceS=province + city + area + address;
        //此处使用的是自定义高德地图服务，可以根据情况进行修改
        var str="";
        $.ajax({
            type: "POST",
            url: "https://restapi.amap.com/v3/assistant/inputtips?keywords="+palceS+"&key="+"3b22f4dc88946eb047aac02a1b2e1e22",
           data:{keywords:palceS},
            dataType: "json",
           success: function (json) {
                var data = json.tips;//json数组
                for (var i = 0; i < data.length; i++) {

                    str += '<dd lay-value="" class="addressDd" onclick="ddclick(this)">' + data[i].name + '<span style="color:#9c9a9a;font-size:5px;">&nbsp' + data[i].address + '</span>' + '</dd>';
                }
                console.log(str)
               document.getElementById("addressTip").innerHTML = str;
               var s = document.getElementById("addressTip").innerHTML;
               if (str == "") {
                   document.getElementById("addressTip").style.display = "none";
               } else {
                   document.getElementById("addressTip").style.display = "block";
               }
            }
        });




        var lis = document.getElementById("addressDetail").getElementsByTagName("dd");
        for (var i = 0; i < lis.length; i++) {
            if (lis[i].tagName == "DD") {
                lis[i].onclick = (function () {//增加单击事件
                    return function () {
                        document.getElementById("site").value = this.innerText.trim().split(/\s+/)[0];
                        document.getElementById("addressTip").style.display = "none";
                    }
                }
                )
                    (i);
            }

        }

    }
    );


});