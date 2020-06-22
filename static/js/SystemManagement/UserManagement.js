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
    $("#roleid").load('http://127.0.0.1:8081/Role/getRoleId',function (result) {
        var data=eval(result);
        $("#roleid").append("<option value=''>请选择</option>")
        $(data).each(function (i,o) {
            $("#roleid").append("<option value='"+o.rid+"'>"+o.rname+"</option>")
        });
        form.render("select");
    })
    //执行一个 table 实例
    table.render({
        elem: '#problem'
        ,id:'testReload'
        ,height: 450
        ,width:1150
        ,url: 'http://127.0.0.1:8081/UserManagement/getUserALL' //数据接口
        ,title: '问题状态表'
        ,type:'get'
        ,dataType:'json'
        ,limit:5
        ,crossDomain:true
        ,cols: [[ //表头
            {field: 'mpid',width:38, fixed: 'left',title: 'ID'}
            , {field: 'mname',width:200, fixed: 'left',title: '用户名'}
            , {field: 'realname',width:200, title: '姓名'}
            , {field: 'sex',width:250, title: '性别',templet:function (d) {
                    if (d.sex===0){
                        return "男";
                    }else{
                        return  "女";
                    }
                }}
            , {field: 'address',width:200, title: '居住地址'}
            , {field: 'phone',width:230, title: '手机号码'}
            , {field: 'roleid',width:230, title: '角色'}
            , {field: 'mailbox',width:230, title: '邮箱'}
            , {field: 'birthday',width:230, title: '生日'}
            , {field: 'wechatid',width:230, title: '微信'}
            , {field: 'qq',width:230, title: 'qq'}
            , {fixed: 'right', width:120,title:'操作', align:'center', toolbar: '#barDemo'}
        ]]
        ,page: true
    });
    form.on('submit(formDemo)', function(data){
        table.reload('testReload', {
            where: { //设定异步数据接口的额外参数，任意设
                mname: $("#mname").val()
                ,roleid: $("#roleid").val()
            }

        });
    });
    //监听行工具事件
    table.on('tool(problem)', function(obj){
        var data = obj.data;
        //console.log(obj)
        if(obj.event === 'del') {
            layer.confirm('确定删除吗?', function (index) {
                $.get('http://127.0.0.1:8081/UserManagement/delUser', {"mpid": data.mpid}, function (result) {
                    if (result == true) {
                        layer.msg('删除成功！',{icon:1},function () {
                            table.reload('testReload');
                        });
                    } else {
                        layer.msg('删除失败！');
                    }
                })

            });
        } else if(obj.event === 'edit'){
            WeAdminShow('修改用户','./updateUserManagement.html?mpid='+data.mpid,800,400);
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
