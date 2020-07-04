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
        ,url: 'http://127.0.0.1:8080/SendaSingleInstallation/getDeliveryByAid?aftertype=3' //数据接口
        ,type:'get'
        ,dataType:'json'
        ,crossDomain:true
        ,width:1200
        ,cols: [[ //表头
            {type:'numbers',title:"序号",width:100}
            , {field: 'realname',width:200, title: '安装人'}
            , {field: 'address',width:250, title: '保养地址'}
            , {field: 'deliverytime',width:200, title: '保养时间'}
            , {field: 'coding',width:130, title: '产品编码'}
            , {field: 'phone',width:170, title: '联系电话'}
            , {fixed: 'right', width:150,title:'操作' ,toolbar: '#barDemo'}
        ]]
        ,page: true
    });
    form.on('submit(formDemo)', function(data){
        table.reload('testReload', {
            where: { //设定异步数据接口的额外参数，任意设
                realname: $("#realname").val()
                ,address: $("#address").val()
                ,coding: $("#coding").val()
                //…
            }
            ,page: {
                curr: 1 //重新从第 1 页开始
            }
        });
    })

    table.on('tool(demo)', function(obj){
        var data = obj.data;
        if(obj.event === 'detail'){
            WeAdminShow('修改派单','./UpdateMaintainSend.html?did='+data.did,800,500);
        } else if(obj.event === 'del'){
            layer.confirm('真的删除行么', function(index){
                $.get("http://127.0.0.1:8080/SendaSingleInstallation/deleteDeliveryByDid?did="+data.did,function (ret) {
                    if (ret=="ok"){
                        layer.msg("删除成功！")
                        table.reload('testReload');
                    }else {
                        layer.msg("删除失败！")
                    }
                })
            });
        }
    });
    $('.btnArr .layui-btn').on('click', function(){
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
    });
    $("#xz").click(function(){
        WeAdminShow('新增','./addMaintainSend.html',600,500)

    })

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

            },end: function(layero, index){
                table.reload('testReload');
            }
        });
    }
})