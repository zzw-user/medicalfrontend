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
        ,url: 'http://127.0.0.1:8081/Client/getClientALL' //数据接口
        ,title: '客户表'
        ,type:'get'
        ,limit:5
        ,dataType:'json'
        ,crossDomain:true
        ,cols: [[ //表头
            {type:'numbers',title:"序号",fixed: 'left'}
            , {field: 'cid', title: 'ID'}
            , {field: 'cname',title: '姓名'}
            , {field: 'address', title: '地址'}
            , {field: 'phone', title: '手机号'}
            , {fixed: 'right',width:120, align:'center',title:'操作', toolbar: '#barDemo'}
        ]]
        ,page: true
    });
    form.on('submit(formDemo)', function(data){
        table.reload('testReload', {
            where: { //设定异步数据接口的额外参数，任意设
                cname: $("#cname").val()

                //…
            }
            ,page: {
                curr: 1 //重新从第 1 页开始
            }
        });
    });
    //监听行工具事件
    table.on('tool(problem)', function(obj){
        var data = obj.data;
        //console.log(obj)
        if(obj.event === 'del') {
            layer.confirm('确定删除吗?', function (index) {
                $.get('http://127.0.0.1:8081/Client/delClient', {"cid": data.cid}, function (result) {
                    if (result == true) {
                        layer.msg('删除成功!',{icon:1},function () {
                            table.reload('testReload');
                        });

                    } else {
                        layer.msg('删除失败！');
                    }
                })

            });
        } else if(obj.event === 'edit'){
            WeAdminShow('修改客户','./updateClient.html?cid='+data.cid,600,400);
        }
    });
    $('.btnArr .layui-btn').on('click', function(){
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
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