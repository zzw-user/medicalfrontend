layui.use(['tree', 'util','form','layedit','laydate','jquery'], function(){
    var tree = layui.tree
        ,layer = layui.layer
        ,util = layui.util
        ,layedit = layui.layedit
        ,laydate = layui.laydate
        , $ = layui.jquery
        ,form = layui.form
        //模拟数据

        //模拟数据2
        ,data = [{
            title: '模块名称'
            ,id: 1
            ,children: [{
                title: '子模块1'
                ,id: 5
            },{
                title: '子模块2'
                ,id: 6
            },{
                title: '子模块3'
                ,id: 7
            }]
        }];

    $("#roleid").load('http://127.0.0.1:8081/Role/getRoleId',function (result) {
        var data=eval(result);
        $("#roleid").append("<option value=''>请选择角色</option>");
        $(data).each(function (i,o) {
            $("#roleid").append("<option value='"+o.rid+"'>"+o.rname+"</option>")
        });
        form.render("select");
    });


    function getData() {
        var data = [];
        $.ajax({
            url: "http://127.0.0.1:8081/Navigation/treeload",    //后台数据请求地址
            type: "post",
            async: false,
            success: function (result) {
                data = result;
            }
        });
        return data;
    }


        tree.render({
            elem: '#test7'
            ,data: getData()
            ,showCheckbox: true  //是否显示复选框
            ,id: 'nid'
            ,isJump: true //是否允许点击节点时弹出新窗口跳转
            ,onlyIconControl:true
            ,click: function (obj) {
                var id = obj.data.id;
                alert(id);
                $("#dept_home").load("Navigation/show?id=" + id);
            }
        });











});