layui.use(['form', 'laydate','table','layer','jquery'], function(){

    var form = layui.form,
        laydate = layui.laydate,
        table = layui.table,
        $=layui.jquery,
        layer = layui.layer;
    laydate.render({
        elem: '#test1'
    });
    $.post('findChecktypeinfo',function(result){
        var str="<option value='0'>--请选择--</option>";
        $(result).each(function() {
            str+="<option value="+this.cid+">"+this.mname+"</option>";
        })
        $("#cid").append(str);
        form.render('select');

    })
    form.on('submit(demo)', function(data){
        var userInfo=$("#form").serialize();
        $.ajax({
            url:"http://127.0.0.1:8081/Cost/addCost",
            type:"post",
            data:userInfo,
            dataType:"text",
            success:function(e){
                if(e=="yes"){
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