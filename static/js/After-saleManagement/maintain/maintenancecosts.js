layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element', 'slider','jquery','form'], function() {
    var laydate = layui.laydate //日期
        , laypage = layui.laypage //分页
        , layer = layui.layer //弹层
        , table = layui.table //表格
        , carousel = layui.carousel //轮播
        , upload = layui.upload //上传
        , element = layui.element //元素操作
        , $ = layui.jquery
        , form = layui.form
        , slider = layui.slider; //滑块//执行一个laydate实例
    //执行一个 table 实例
    table.render({
        elem: '#problem'
        ,id:'testReload'
        ,height: 450
        ,width:1450
        ,url: 'http://127.0.0.1:8081/Maintenancecosts/getCost' //数据接口
        ,title: '问题状态表'
        ,type:'get'
        ,dataType:'json'
        ,crossDomain:true
        ,cols: [[ //表头
              {field:'cid',width:120,title:"序号"}
            , {field: 'mname',width:120, title: '维修人	'}
            , {field: 'address',width:150, title: '维修地址'}
            , {field: 'cost',width:120, title: '总费用'}
            , {field: 'sparepartcost',width:130, title: '备件费用'}
            , {field: 'dataentryclerk',width:150, title: '录入人'}
            , {field: 'inputtime',width:150, title: '录入时间'}
            , {field: 'pname',width:150, title: '产品名'}
            , {field: 'phone',width:150, title: '联系电话'}
            ,{fixed: 'right', title:'操作', toolbar: '#barDemo', width:200}
        ]]
        ,page: true
    });
    $("#sel").on('click',function(){
        table.reload('testReload', {
            where : { // 设定异步数据接口的额外参数，任意设
                mname : $("#mname").val(),
                address :$("#address").val()
                // …
            },
            page : {
                curr : 1
            }
        });
    });
    table.on('tool(test)',
        function(obj) {
            var data = obj.data;
            if (obj.event === 'del') {
                layer.confirm('真的删除么?',function(index) {
                    $.ajax({
                        url : "http://127.0.0.1:8081/Maintenancecosts/delCost",
                        type : "post",
                        data : {
                            cid: data.cid
                        },
                        dataType : "text",
                        success : function(e) {
                            if (e) {
                                layer.alert("删除成功");
                                obj.del();
                            } else {
                                layer.alert("删除失败");
                            }
                        }
                    });

                });
            } else if (obj.event === 'upd') {
                WeAdminShow('修改用户','./updmaintenancecosts.html?cid='+data.cid,800,500);
            }
        });
    window.WeAdminShow = function(title, url, w, h) {
        if(title == null || title == '') {
            title = false;
        };
        if(url == null || url == '') {
            url = "404.html";
        };
        if(w == null || w == '') {
            w = ($(window).width() * 0.9);
        };
        if(h == null || h == '') {
            h = ($(window).height() - 50);
        };
        layer.open({
            type: 2,
            area: [w + 'px', h + 'px'],
            fix: false, //不固定
            width:w,
            height:h,
            maxmin: true,
            shadeClose: true,
            shade: 0.4,
            title: title,
            content: url,
            success:function () {

            },end:function () {
            }
        });
    }
})