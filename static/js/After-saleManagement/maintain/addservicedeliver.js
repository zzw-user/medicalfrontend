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
    //常规用法
    laydate.render({
        elem: '#test1'
    });
    $.post('http://127.0.0.1:8081/Maintenancecosts/getMpuserOne',function(result){
        var str="<option value='0'>--请选择--</option>";
        $(result).each(function() {
            str+="<option value="+this.mpid+">"+this.mname+"</option>";

        })
        $("#operator").append(str);
        form.render('select');

    })
    $("#coding").blur(function(){
        var coding=$("#coding").val();
        $.post('http://127.0.0.1:8081/Maintenancecosts/getProductOne',{coding:coding},function(result){
            if (result){

            }else {
                layer.alert("对不起，没有该产品编码！");
                var coding=$("#coding").val('');
            }

        })
    })
    form.on('submit(demo1)', function(data){
        $.ajax({
            url: 'http://127.0.0.1:8081/delivery/addDelivery',
            type: 'post',
            data: $("#form").serialize(),
            dataType:'text',
            success: function (result) {
                if (result) {
                    layer.alert("新增成功！", function () {
                        window.parent.location.reload('testReload');
                        x_admin_close()

                    })
                } else {
                    layer.alert("新增失败！", function () {
                        x_admin_close()
                    })
                }
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