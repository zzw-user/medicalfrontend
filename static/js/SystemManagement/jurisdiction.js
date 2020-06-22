layui.use(['tree', 'util','form','layedit','laydate'], function(){
    var tree = layui.tree
        ,layer = layui.layer
        ,util = layui.util
        ,layer = layui.layer
        ,layedit = layui.layedit
        ,laydate = layui.laydate
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

    //基本演示
    laydate.render({
        elem: '#date'
    });
    laydate.render({
        elem: '#date1'
    });



    //开启复选框
    tree.render({
        elem: '#test7'
        ,data: data
        ,showCheckbox: true
    });


});