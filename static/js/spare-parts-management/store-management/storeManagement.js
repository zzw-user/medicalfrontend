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
    table.render({
        elem: '#problem'
        ,url:'http://127.0.0.1:8081/Warehouse/seleWarehouse'
        ,toolbar: true
        ,cols: [[
              {field:'wid',width:172,title:"序号"}
            , {field: 'wname',width:210, title: '仓库名称'}
            , {field: 'address',width:262, title: '仓库地址'}
            , {field: 'mname',width:180, title: '创建人'}
            , {field: 'creationtime',width:260, title: '创建时间'}
            , {fixed: 'right',title: '操作', width:208, align:'center', toolbar: '#barDemo'}
        ]]
        ,id : 'testReload'
        ,page: true
        ,limit:3
        ,height:300
        ,width:1300
    });
    $("#sel").on('click',function(){
        table.reload('testReload', {
            where : { // 设定异步数据接口的额外参数，任意设
                wname : $("#wname").val(),
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
                        url : "http://127.0.0.1:8081/Warehouse/delWarehouse",
                        type : "post",
                        data : {
                            wid: data.wid
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
                WeAdminShow('修改用户','./updateStoreManagement.html?wid='+data.wid,800,400);
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


});

