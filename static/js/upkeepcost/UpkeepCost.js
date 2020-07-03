   layui.use(['form', 'laydate','table','layer','jquery'], function(){
    var form = layui.form,
        laydate = layui.laydate,
            table = layui.table,
            $=layui.jquery,
            layer = layui.layer;
  table.render({
	  elem: '#problem'
	  ,url:'http://127.0.0.1:8081/Cost/getCost'
	  ,id:'toolbarDemos'
      ,limit:2
	  ,height:520
	  ,toolbar: '#toolbarDemo' //开启头部工具栏，并为其绑定左侧模板
	  ,defaultToolbar: ['filter', 'exports', 'print', { //自定义头部工具栏右侧图标。如无需自定义，去除该参数即可
		  title: '提示'
		  ,layEvent: 'LAYTABLE_TIPS'
		  ,icon: 'layui-icon-tips'
	  }]
	  ,cols: [
    	[
			{field:'cid',width:150,title:"序号"}
			, {field: 'mname',width:150, title: '保养人'}
			, {field: 'address',width:150, title: '保养地址'}
			, {field: 'cost',width:150, title: '费用'}
			, {field: 'inputtime',width:150, title: '录入时间'}
			, {field: 'dataentryclerk',width:150, title: '录入人'}
			, {field: 'coding',width:150, title: '产品编码'}
			, {field: 'phone',width:150, title: '联系电话'}
			,{fixed: 'right', title:'操作', toolbar: '#barDemo', width:250}
    ]
	  ]
    ,page: true
    
  });
 /* table.on('toolbar(test)', function(obj){
	    var checkStatus = table.checkStatus(obj.config.id);
	    switch(obj.event){
	      case 'getCheckData':
	        var data = checkStatus.data;
	       if(data.length==0){
	       layer.alert("请先选择数据");
	       return;
	       }
	       layer.confirm("确定要删除要"+data.length+"条?",function(){
	       var mids=new Array();
	       $.each(data,function(index,item){
	       mids.push(item.mid)
	       })
	          
		$.ajax({
		url:"pil",
		type:'post',
		data:JSON.stringify(mids),
		contentType:'application/json',
		dataType:'json',
		success:function(e){
		var co=e.code;
		layer.msg("删除了"+co+"条数据",{time:1000,icon:3,title:'提示'},function(){
		table.reload('toolbarDemos');
		});
		}
		}) 
		})
		break;
	      case 'adds':
	    	  layer.open({
	        		title : "新增图书",
					type : 2,
					content : 'add', //这里content是一个普通的String
					area : [ '800px', '500px' ]
	   
	    	  })
	            break;
	      //自定义头工具栏右侧图标 - 提示
	      case 'LAYTABLE_TIPS':
	        layer.alert('这是工具栏右侧自定义的一个图标按钮');
	      break;
	    };
	  });*/
 $('#reload').on('click',function(){

  		 table.reload('toolbarDemos',{	 
        where: {
			address:$("#address").val(),
			mname:$("#mname").val()
        }
      })
      return false;
  });
  table.on('tool(test)', function(obj){
	    var data = obj.data;
	    //console.log(obj)

	    if(obj.event == 'del'){

	      layer.confirm('真的删除行么', function(index){  
			 $.ajax({
			  url:"http://127.0.0.1:8081/Cost/delCost",
			  type:"post",
			  data:{cid:data.cid},
			  dataType:"text",
			  success:function(e){	 
				  if(e=='true'){
					  layer.alert("删除成功");
					  obj.del();
				  }else {
					alert("删除失败");
				}
			  }
			
		  });

	      });
	    }else if(obj.event === 'edit'){
            WeAdminShow('修改保养费用','./UpdateUpkeepCost.html?cid='+data.cid,800,500);
	}
	   
	  //工具栏事件

	});
});