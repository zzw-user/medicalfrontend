layui.use(['element','jquery','layer','form'], function() {
    var $ = layui.jquery
        , layer = layui.layer
        , form = layui.form;


    form.on('submit(demo)', function(data){

        $.get( 'http://127.0.0.1/Type/addtype',$("#form").serialize(),function (result) {
            if (result==true){
                layer.msg("新增成功！",{icon:1,time:1000},function(){
                    x_admin_close();  parent.layui.table.reload('testReload'); //重载表格
                });

            }else{
                layer.msg("新增失败！",1);

            }
        })


        return false;
    });

})
/*关闭弹出框口*/
function x_admin_close() {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)") ;
    r = window.location.search.substr(1).match(reg);        // 匹配目标参数
    if (r != null) return decodeURI(r[2]);  // 返回参数值
    return null;  // 如果不存在，返回null
}