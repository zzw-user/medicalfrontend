layui.use(['form', 'laydate','table','layer','jquery'], function(){

    var form = layui.form,
        laydate = layui.laydate,
        table = layui.table,
        $=layui.jquery,
        layer = layui.layer;
    laydate.render({
        elem: '#test1'
    });
    $("#coding").blur(function(){
        var coding=$("#coding").val();
        $.post('http://127.0.0.1:8080/Cost/getProductOne',{coding:coding},function(result){
            if (result){
                  alert(coding);
            }else {
                layer.msg("对不起，没有该产品编码！");
                var coding=$("#coding").val('');
            }

        })
    })
    $.post('http://127.0.0.1:8080/Cost/getMpuser',function(result){
        var str="<option value='0'>--请选择--</option>";
        $(result).each(function() {
            str+="<option value="+this.mpid+">"+this.realname+"</option>";

        })
        $("#cid").append(str);
        form.render('select');

    })
    form.on('submit(formDemo)', function(data){
        var province = $("#province").val();
        var area = $("#area").val();
        var city= $("#city").val();
        var site = $("#site").val();
        var str = province+' '+city+' '+area+' '+site;
        $("#address").val(str);
        var userInfo=$("#form").serialize();
        $.ajax({
            url:"http://127.0.0.1:8080/Cost/addCost",
            type:"post",
            data:userInfo,
            dataType:"text",
            success:function(e){
                if(e=="true"){
                    layer.msg("新增成功！",{time:1000,icon:6},function(){
                        var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
                        window.parent.location.reload();
                        parent.layer.close(index);
                        layer.open({
                            oend:function(){
                                table.reload('testReload');
                            }
                        })
                    });
                }else{
                    layer.alert("新增失败");
                }
            }
        })
        return false;
    });
});