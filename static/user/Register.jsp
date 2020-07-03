<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/6/26
  Time: 16:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
    <title>注册</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/login.css"/>
    <script type="text/javascript" src="http://api.map.baidu.com/getscript?v=2.0&ak= uQQtqikbvFwtFdK9wGKn2RkEUkYkA552"></script>
</head>
<body>
<div id="login">
        <form method="post" action="${pageContext.request.contextPath}/Register?method=addUser" >
            <h1>注册</h1>
            <p><font style="color: #ab1e1e">${msg}</font></p>
            用户名：<input type="text" required="required" placeholder="请输入用户名" name="name"><br>
            密码：<input type="password" required="required" placeholder="请输入密码" name="pwd"><br>
            家庭住址：<input type="text" required="required" placeholder="点击地图获取位置信息" name="address" id="address"><br>
            经度：<input type="text" readonly name="lng" id="lng" value="" />
            纬度：<input type="text" readonly name="lat" id="lat" value="" /><br>
            <button class="but" type="submit">注册</button>
            <input type="hidden" name="action" value="logic">
        </form>
</div>
<div id='allmap' style='width: 25%; height: 30%; position: absolute;left: 70%;top: 40%'></div>
</div>
<script type="text/javascript">
    var map = new BMap.Map("allmap");
    var geoc = new BMap.Geocoder(); //地址解析对象
    var markersArray;
    var geolocation = new BMap.Geolocation();
    var mk
    var marker
    var point = new BMap.Point(116.331398, 39.897445);
    map.centerAndZoom(point, 18); // 中心点
    geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            map.enableScrollWheelZoom(true);
            showInfo(r);
            //清除标识
            function clearOverlays() {
                map.removeOverlay(mk)
                map.removeOverlay(marker)
            }
            //地图上标注
            function addMarker(point) {
                clearOverlays();
                marker = new BMap.Marker(point);
                map.addOverlay(marker);
            }
            //点击地图处理
            function showInfo(e) {
                addMarker(e.point);
                document.getElementById('lng').value = e.point.lng;
                document.getElementById('lat').value = e.point.lat;
                geoc.getLocation(e.point, function(rs) {
                    var addComp = rs.addressComponents;
                    var address = addComp.province + addComp.city
                            + addComp.district + addComp.street
                            + addComp.streetNumber;
                    document.getElementById('address').value = address;
                });
            }
            //点击事件在安卓中不起作用 换成touchstart事件
            map.addEventListener("click", showInfo);
        } else {
            alert('failed' + this.getStatus());
        }
    }, {
        enableHighAccuracy : true
    })
</script>
</body>
</html>
