<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/7/3
  Time: 11:11
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<html>
<head>
    <title>Title</title>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
    <meta http-equiv="description" content="This is my page">
    <meta http-equiv="content-type" content="text/html;charset=utf-8">

    <style type="text/css">
        * {
            font-size: 11pt;
        }
        li {
            margin: 10px;
        }



    </style>
</head>
<body>
<c:choose>
    <c:when test="${ empty DustBinInfo }">
        <p><font size="4" style="color: #0ca714">暂无垃圾箱满信息!!!!!!</font></p>
    <img  src="${pageContext.request.contextPath}/user/images/dustbin.png" width="300"/>
</c:when>
    <c:otherwise>

<table border="1" width="100%" cellspacing="0" background="black">
    <tr>
        <th>垃圾箱号</th>
        <th>小区名</th>
        <th>小区地址</th>
        <th>垃圾种类</th>
        <th>数量</th>
        <th>垃圾箱最大容量</th>
        <th>垃圾箱状态</th>
    </tr>
<c:forEach items="${DustBinInfo}" var="dust">
    <tr>
        <td>${dust.did}</td>
        <td>${dust.name}</td>
        <td>${dust.detailAddress}</td>
        <td>${dust.unit}</td>
        <td>${dust.num}</td>
        <td>${dust.maxVolumns}</td>
        <td>${dust.state}</td>
    </tr>
</c:forEach>
</table>
</c:otherwise>
</c:choose>
</body>
</html>
