layui.use(['form', 'layedit', 'laydate','jquery'], function() {
    var form = layui.form
        , layer = layui.layer
        , $ = layui.jquery
        , layedit = layui.layedit
        , laydate = layui.laydate;

    //日期
    laydate.render({
        elem: '#date'
    });
    laydate.render({
        elem: '#date1'
    });

    form.on('submit(demo)', function (data) {

        $.get('http://127.0.0.1:8081/Role/addRole', $("#form").serialize(), function (result) {
            if (result == true) {
                layer.msg("新增成功！", {icon: 1, time: 1000}, function () {
                    x_admin_close();
                    window.parent.location.reload('');
                });

            } else {
                layer.msg("新增失败！", 1);

            }
        });


        return false;
    });
    form.verify({
        Ndouble:[
            /^[0-7]\d*$/
            ,'等级只有0-7'
        ]
    });
});
function x_admin_close() {
    var index = parent.layer.getFrameIndex(window.name);

    parent.layer.close(index);
};