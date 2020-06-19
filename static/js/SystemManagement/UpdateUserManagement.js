layui.use(['form', 'layedit', 'laydate','jquery'], function(){
    var form = layui.form
        ,layer = layui.layer
        , $ = layui.jquery
        ,layedit = layui.layedit
        ,laydate = layui.laydate;

    //日期
    laydate.render({
        elem: '#date'
    });
    laydate.render({
        elem: '#date1'
    });
    var mpid=getUrlParam("mpid");
    $("#roleid").load('http://127.0.0.1:8081/Role/getRoleId',function (result) {
        var data=eval(result);
        $(data).each(function (i,o) {
            $("#roleid").append("<option value='"+o.rid+"'>"+o.rname+"</option>")
        });
        form.render("select");
    })

    $.get('http://127.0.0.1:8081/UserManagement/getUserOne',{mpid:mpid},function (result) {
        form.val('example',result);
    });

    form.on('submit(demo)', function(data){

        $.get( 'http://127.0.0.1:8081/UserManagement/updateUser',$("#form").serialize(),function (result) {
            if (result==true){
                layer.msg("修改成功！",{icon:1,time:1000},function(){
                    x_admin_close();
                    window.parent.location.reload('testReload');
                });

            }else{
                layer.msg("修改失败！",{icon:2});
            }
        });


        return false;
    });



});
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    r = window.location.search.substr(1).match(reg); // 匹配目标参数
    if (r != null) return decodeURI(r[2]); // 返回参数值
    return null; // 如果不存在，返回null
}
function x_admin_close() {
    var index = parent.layer.getFrameIndex(window.name);

    parent.layer.close(index);
}