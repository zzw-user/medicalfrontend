<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import="java.sql.*"%>
<%@ page import="org.json.*"%>
<%@ page import="java.util.Iterator" %>
<%@ page import="javax.servlet.http.Cookie" %>
<%@ page import="cn.entity.Region" %>
<%@ page import="java.util.List" %>


<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<!-- 查询所有-->
<%
    session=request.getSession();
    String lsCity = "";
    JSONObject json = new JSONObject();
    JSONArray jsonMembers = new JSONArray();
    List<Region> regions= (List<Region>) session.getAttribute("regions");
    for (int i=0;i<regions.size();i++){
        JSONObject city1 = new JSONObject();
        Region region=new Region();
        region=regions.get(i);
        city1.put("regionName",region.getRegionName());
        city1.put("peopleNumbers",region.getPeopleNumbers());
        city1.put("latitude",region.getLatitude());
        city1.put("longitude",region.getLongitude());
        city1.put("price",region.getPrice());
        city1.put("realValues",region.getRealValues());
        city1.put("evaluateValues",region.getEvaluateValues());
        jsonMembers.put(city1);
    }
    json.put("city", jsonMembers);
    lsCity =jsonMembers.toString();
%>
<!-- 按条件查询-->
<%

    String driverName = "com.mysql.jdbc.Driver";
    String url = "jdbc:mysql://localhost:3306/jdbc";
    String username = "root";
    String password = "root";
    String lsCity1 = "";
    Connection dbConn;
    Class.forName(driverName);
    dbConn = DriverManager.getConnection(url, username, password);

    String street = request.getParameter("street");
    String sql = "select * from region where street=?";
    PreparedStatement ps = dbConn.prepareStatement(sql);
    ps.setString(1,street);
    ResultSet rs = ps.executeQuery();
    JSONObject json1 = new JSONObject();
    JSONArray jsonMembers1 = new JSONArray();
    while(rs.next()){
        JSONObject citys = new JSONObject();
        citys.put("regionName", rs.getString(2));
        citys.put("peopleNumbers", rs.getInt(5));
        citys.put("latitude", rs.getDouble(10));
        citys.put("longitude", rs.getDouble(11));
        citys.put("price", rs.getInt(4));
        citys.put("realValues", rs.getInt(6));
        citys.put("evaluateValues", rs.getInt(7));
        jsonMembers1.put(citys);
    }
    json1.put("citys", jsonMembers1);
    lsCity1 =jsonMembers1.toString();
    System.out.print("====================================");
    System.out.print(street);
    System.out.print("====================================");
    System.out.print(jsonMembers1.toString());
%>

<HTML>
<HEAD>
    <base href="<%=basePath%>">
    <meta http-equiv="Content-Type" content="text/html;  charset=ISO-8859-1">
    <script type="text/javascript"  src="${pageContext.request.contextPath}/user/js/jquery.js"></script>
    <script type="text/javascript"  src="${pageContext.request.contextPath}/user/js/GlobalProvinces_main.js"></script>
    <script type="text/javascript"  src="${pageContext.request.contextPath}/user/js/GlobalProvinces_extend.js"></script>
    <script type="text/javascript"  src="${pageContext.request.contextPath}/user/js/initLocation.js"></script>
    <script type="text/javascript"
            src="http://api.map.baidu.com/api?v=2.0&ak=uQQtqikbvFwtFdK9wGKn2RkEUkYkA552">
    </script>
    <style type="text/css">
        html {
            height: 100%
        }

        body {
            font: 100%/1.4 Verdana, Arial, Helvetica, sans-serif;
            height: 100%;
            margin: 0px;
            padding: 0px;
        }

        #menu {
            padding: 5px 0px 0px 0px;
            width: 100%;
            height: 7%;
        }

        #main {
            width: 100%;
            height: 60%;
            float: left;
            position: fixed;
        }
    </style>
    <script type="text/javascript">
        var map; // 创建地图全局实例
        var ls_City = '<%=lsCity%>';
        var ls_City1 = '<%=lsCity1%>';
        //创建和初始化地图
        function load_map() {
            //从数据库查询数据，json格式
            map = new BMap.Map("main");
            var point = new BMap.Point(114.398893, 27.811062);//北京
            map.centerAndZoom(point, 7); //初始化地图,设置中心点坐标和地图级别。
            map.enableScrollWheelZoom(true); //启用滚轮放大缩小
            map.addControl(new BMap.NavigationControl());//向地图中添加缩放控件
            var ctrlSca = new window.BMap.ScaleControl({
                anchor: BMAP_ANCHOR_BOTTOM_LEFT
            });
            map.addControl(ctrlSca);//比例尺
            //地图、卫星、混合模式切换
            map.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP]}));
        }

        function map_tag() {
            map.clearOverlays();
            var objRecords = eval("(" + ls_City + ")");//后台得到的数据包含经纬度，json格式的
            var points = new Array();//存放标注点经纬信息的数组
            for ( var i = 0; i < objRecords.length; i++) {
                var json = objRecords[i];
                var p0 = json.latitude;
                var p1 = json.longitude;
                var point = new BMap.Point(p0,p1);//循环生成新的地图点
                var marker = new BMap.Marker(point);//按照地图点坐标生成标记
                marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
                var iw = createInfoWindow(i);//创建信息窗口对象
                var label = new window.BMap.Label("申购价格:"+json.price+"元/月", { offset: new window.BMap.Size(20, -10) });
                marker.setLabel(label);//显示marker的title
                points.push(marker);
                map.addOverlay(points[i]);//把标记的点添加到地图上
                //添加点击事件
                (function(){
                    var _json = json;
                    var _iw = createInfoWindow(_json);
                    var _marker = marker;
                    _marker.addEventListener("mouseover",function(){
                        this.openInfoWindow(_iw);
                    });
                })()
            }
        }

        //测试
       function map_tag1() {
            map.clearOverlays();
            var objRecords1 = eval("(" + ls_City1 + ")");//后台得到的数据包含经纬度，json格式的
            var points1 = new Array();//存放标注点经纬信息的数组
            for ( var i = 0; i < objRecords1.length; i++) {
                var json1 = objRecords1[i];
                var p0 = json1.latitude;
                var p1 = json1.longitude;
                var point1 = new BMap.Point(p0,p1);//循环生成新的地图点
                var marker1 = new BMap.Marker(point1);//按照地图点坐标生成标记
                marker1.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
                var iw = createInfoWindow(i);//创建信息窗口对象
                var label = new window.BMap.Label("申购价格:"+json1.price+"元/月", { offset: new window.BMap.Size(20, -10) });
                marker1.setLabel(label);//显示marker的title
                points1.push(marker1);
                map.addOverlay(points1[i]);//把标记的点添加到地图上
                //添加点击事件
                (function(){
                    var _json = json1;
                    var _iw = createInfoWindow(_json);
                    var _marker = marker1;
                    _marker.addEventListener("mouseover",function(){
                        this.openInfoWindow(_iw);
                    });
                })()
            }
        }

        //创建InfoWindow
        function createInfoWindow(json){
            var opts1 = {title : '<span style="font-size:20px;color:#0A8021">垃圾箱信息</span>'};
            var iw = new BMap.InfoWindow("<div style='line-height:1.8em;font-size:12px;'><b>地区名称: </b>"+ json.regionName+ "</br><b>小区总人数:</b>"+json.peopleNumbers+"人"+"</br><b>实际价格: </b>"
                    +json.realValues+"元"+"</br><b>估计价格:</b>"+json.evaluateValues+"元"+"</br></a></div>", opts1);
            return iw;
        }

        //异步调用百度js
        function map_load() {
            var load = document.createElement("script");
            load.src = "http://api.map.baidu.com/api?v=1.4&callback=load_map";
            document.body.appendChild(load);
        }
        window.onload = map_load;

    </script>

</HEAD>
<body onLoad="load_map()">
<%
    String province = "";
    String city = "";
    String country="";
    //String  street="";
    //获取当前站点的所有Cookie
    //el表达式
//取出Cookie
    Region area=(Region)request.getSession().getAttribute("area");
    if(area!=null){
        province=area.getProvince();
        city=area.getCity();
        country=area.getCountry();
        street=area.getStreet();
    }
%>

<br />
<form id="Form1" action="" method="post" id='info'
      style="margin: 0px;">
    <table cellSpacing="1" cellPadding="0" width="100%" align="center" bgColor="#f5fafe" border="0">
        <TBODY>
        <tr>
            <td class="ta_01" align="center" bgColor="#afd1f3">
                <strong>查 询 条 件</strong>
            </td>
        </tr>
        <tr>
            <td>
                <select id="sheng" name="province" style="width: 100px">
                </select> 省
                <select id="shi" name="city" style="width: 100px">
                </select> 市
                <select id="xian" name="country" style="width: 100px">
                </select> 县(区)
                <select id="xiang" name="street" style="width: 100px">
                </select>
                <input type="submit" value="查询" onClick="map_tag();" style="width: 50px" >
                <script type="text/javascript">
                    $(function(){initLocation({sheng_val:"<%=province%>",shi_val:"<%=city%>",xian_val:"<%=country%>",xiang_val:"<%=street%>"});})
                </script>

            </td>
        </tr>

        <tr>
            <td class="ta_01" align="center" bgColor="#f5fafe">
                <table cellspacing="0" cellpadding="1" rules="all" bordercolor="gray" border="1" id="DataGrid1">
                    <!--  循环输出所有商品 -->
                    </br>
                    </br>
                    <c:forEach items="${area_infos}" var="area_infos">
                        <tr onmouseover="this.style.backgroundColor = 'white'"
                            onmouseout="this.style.backgroundColor = '#F5FAFE';">
                            <td style="CURSOR: hand; HEIGHT: 15px" align="center" width="8%">区名：${area_infos.a_name }</td>
                            <td style="CURSOR: hand; HEIGHT: 15px" align="center" width="8%">&nbsp;&nbsp;总价值:${area_infos.value }</td>
                            <td style="CURSOR: hand; HEIGHT: 15px" align="center" width="8%">&nbsp;&nbsp;净收入:${area_infos.price }</td>
                            <td style="CURSOR: hand; HEIGHT: 15px" align="center" width="8%">&nbsp;&nbsp;申购价格:${area_infos.income }</td>
                            <td style="CURSOR: hand; HEIGHT: 15px" align="center" width="8%">&nbsp;&nbsp;申购情况:${area_infos.flag }</td>
                        </tr>
                    </c:forEach>
                </table>
            </td>
        </tr>
        </TBODY>
    </table>
</form>
<div id="menu">
    <input name="button1" type="button" id="button1" onClick="map_tag();"
           value="全国垃圾箱信息查询"
           style="width: 150px; height: 40px; margin: 0px 0px 0px 5px">
</div>
<hr>
<div id="main"></div>
</body>
</HTML>