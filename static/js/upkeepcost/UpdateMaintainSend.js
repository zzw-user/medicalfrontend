layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element', 'slider', 'jquery', 'form' , "pca"],
    function() {
        var laydate = layui.laydate //日期
            ,
            laypage = layui.laypage //分页
            ,
            layer = layui.layer //弹层
            ,
            table = layui.table //表格
            ,
            carousel = layui.carousel //轮播
            ,
            upload = layui.upload //上传
            ,
            element = layui.element //元素操作

            ,pca = layui.pca,
            $ = layui.jquery,
            form = layui.form,
            slider = layui.slider; //滑块//执行一个laydate实例
        //常规用法
        laydate.render({
            elem: '#test1'
            ,type: 'datetime'
        });






        $("#operator").load('http://127.0.0.1:8080/SendaSingleInstallation/getMpuser',function (result) {
        var data=eval(result);
        $(data).each(function (i,o) {
            $("#operator").append("<option value="+this.mpid+">"+this.realname+"</option>")
        });
        form.render("select");
    })

    var did=getUrlParam("did");
    $.get('http://127.0.0.1:8080/SendaSingleInstallation/getDeliveryByDid',{did:did},function (result) {
        form.val('example',result);
        var str = result.address;
        var arr=new Array();
        arr=str.split(' ');

        //  $("#province").val(arr[0]);
        $("#province").val(arr[0]);
        $("#city").val(arr[1]);
        $("#area").val(arr[2]);
        $("#site").val(arr[3]);
        pca.init('select[name=P1]', 'select[name=C1]', 'select[name=A1]', arr[0], arr[1], arr[2]);

    });

    form.on('submit(formDemo)', function(data){
        var province = $("#province").val();
        var area = $("#area").val();
        var city= $("#city").val();
        var site = $("#site").val();
        var str = province+' '+city+' '+area+' '+site;
        $("#address").val(str);
        $.get( 'http://127.0.0.1:8080/SendaSingleInstallation/updateDeliveryByAid',$("#pro").serialize(),function (result) {

            if (result=="ok"){
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