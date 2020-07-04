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



var size=0;
    $("#roleid").load('http://127.0.0.1/Role/getRoleId',function (result) {
        var data=eval(result);
        $("#roleid").append("<option value=''>请选择角色</option>");
        $(data).each(function (i,o) {
            $("#roleid").append("<option value='"+o.rid+"'>"+o.rname+"</option>")
        });
        form.render("select");
    });
    var idsz=new Array();
$("#bc").click(function () {
    for(var i =1;i<size;i++){
        var checkData = tree.getChecked('rid'+i);
        for (var o=0;o<checkData.length;o++){
                idsz.push(checkData[o].id);
                if(checkData[o].children.length!=0){
                    getId(checkData[o].children);
                }
        }

    }
    var jurisdiction="";
    for(var p=0;p<idsz.length;p++){
        if(p==(idsz.length-1)){
            jurisdiction+=idsz[p];
        }else {
            jurisdiction += idsz[p] + ",";
        }
    }
    var rid=$("#roleid").val();
    $.ajax({
        type:"post",
        url:"http://127.0.0.1/Navigation/updateNav",
        data:{jurisdiction:jurisdiction,rid:rid},
        dataType:"text",
        success:function(result){
            if(result=="true"){
                layer.msg("保存成功",{time:1000,icon:6});

            }else{
                layer.msg("保存失败",{time:1000,icon:6});
            }
            idsz=new Array();
        }
    })
})
    function getId(sz){
        for (var o=0;o<sz.length;o++) {
            idsz.push(sz[o].id);
            if(sz[o].children.length!=0){
                getId(sz[o].children);
            }
        }
    }


    form.on('select(roleid)', function(data){

        getData(data.value)
    });
    function getData(rid) {
        var data = [null];
        $.ajax({
            url: "http://127.0.0.1/Navigation/treeload",    //后台数据请求地址
            type: "post",
            data:{rid:rid},
            async: false,
            success: function (result) {
                data = result;
                var a=1;
                $(result).each(function () {

                    if(this.title=="系统管理"||this.title=="订单管理" || this.title=="统计分析"){
                        $("#xitong").append("<div id='test"+a+"'style='display: inline-block;margin-bottom: 20px' class='demo-tree' ></div>");
                    }else if(this.title=="产品管理" || this.title=="库存管理" || this.title=="备件管理"){
                        $("#changping").append("<div id='test"+a+"'style='display: block;margin-bottom: 20px' class='demo-tree' ></div>");
                    }else if(this.title=="售后管理" ){
                        $("#shouhou").append("<div id='test"+a+"'style='display: block;margin-bottom: 20px' class='demo-tree' ></div>");
                    }



                   var eleme ="#test"+a;
                    tree.render({
                        elem: eleme
                        ,data: [this]
                        ,showCheckbox: true  //是否显示复选框
                        ,id: "rid"+a
                        ,checked: true
                        ,isJump: true //是否允许点击节点时弹出新窗口跳转
                        ,onlyIconControl:true
                        ,click: function (obj) {
                            var id = obj.data.id;
                            alert(id);
                            $("#dept_home").load("Navigation/show?id=" + id);
                        }
                    });
                    a++;
                    size=a;
                })

            }
        });
        return data;
    }

$(function () {
getData();
})












});