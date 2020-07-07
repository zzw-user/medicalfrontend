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
        ,width:1150
        ,url: 'http://127.0.0.1/Repairback/selePayareturnvisit?aftertype=2' //数据接口
        ,title: '问题状态表'
        ,type:'get'
        ,dataType:'json'
        ,crossDomain:true
        ,cols: [[ //表头
            {type:'numbers',title:"序号"}
            , {field: 'pname',width:200, title: '回访客户名称'}
            , {field: 'way',width:200, title: '回访方式'}
            , {field: 'describe',width:200, title: '描述'}
            , {field: 'realname',width:200, title: '记录人员'}
            , {field: 'writetime',width:200, title: '记录时间'}
            , {fixed: 'right', width:178, align:'center',title:'操作',toolbar: '#barDemo'}
        ]]
        ,page: true
    });
    $("#sel").on('click',function(){
        table.reload('testReload', {
            where : { // 设定异步数据接口的额外参数，任意设
                pname : $("#pname").val(),
                way :$("#way").val()
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
                        url : "http://127.0.0.1/Repairback/delPayareturnvisit",
                        type : "post",
                        data : {
                            pid: data.pid
                        },
                        dataType : "text",
                        success : function(e) {
                            if (e) {
                                layer.msg("删除成功");
                                obj.del();
                            } else {
                                layer.msg("删除失败");
                            }
                        }
                    });

                });
            }else if (obj.event === 'upd') {
                WeAdminShow('修改回访','./updrepairback.html?pid='+data.pid,600,400);
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