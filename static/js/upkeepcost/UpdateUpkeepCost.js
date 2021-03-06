layui.use(['form', 'layedit', 'laydate','jquery','pca'], function(){
    var form = layui.form
        ,layer = layui.layer
        , $ = layui.jquery
        ,layedit = layui.layedit
        ,laydate = layui.laydate
, pca = layui.pca;
    //日期
    laydate.render({
        elem: '#date'
    });
    laydate.render({
        elem: '#date1'
    });
    $("#cid").load('http://127.0.0.1/Cost/getMpuser',function (result) {
        var data=eval(result);
        $(data).each(function (i,o) {
            $("#cid").append("<option value="+this.mpid+">"+this.realname+"</option>")
        });
        form.render("select");
    })

    var cid=getUrlParam("cid");
    $("#site").blur(function () {
        var province = $("#province").val();
        var area = $("#area").val();
        var city= $("#city").val();
        var site = $("#site").val();
        var str = province+' '+city+' '+area+' '+site;
        $("#address").val(str);

        $.ajax({
            type:"get",
            data:{"address":str,"key":"389880a06e3f893ea46036f030c94700"},
            dataJson: "json",
            url:"http://restapi.amap.com/v3/geocode/geo",
            success:function (result) {
                console.log(result);
                console.log(result.geocodes[0].location);
                var sz=result.geocodes[0].location.split(",");
                $("#longitude").val(sz[0]);
                $("#latitude").val(sz[1]);
            }
        })
        console.log(address);
    })
    $.get('http://127.0.0.1/Cost/getCostOne',{cid:cid},function (result) {
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
        $.get( 'http://127.0.0.1/Cost/updateCost',$("#form").serialize(),function (result) {
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