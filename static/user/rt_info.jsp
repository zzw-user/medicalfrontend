<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/7/1
  Time: 16:52
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

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


        <table border="1" width="100%" cellspacing="0" background="black">
            <tr>
                <th>区域号</th>
                <th>区域名</th>
                <th>用户数量</th>
                <th>申请费用</th>
                <th>位置</th>
                <th>垃圾箱号</th>
                <th>垃圾箱最大容量</th>
                <th>垃圾名</th>
                <th>数量</th>
                <th>计量单位</th>
            </tr>
            <c:forEach items="${areaInfo}" var="ai">
                <tr>
                    <td>${ai.rid}</td>
                    <td>${ai.regionName}</td>
                    <td>${ai.peopleNumbers}</td>
                    <td>${ai.price}</td>
                    <td>${ai.detailAddress}</td>
                    <td>${ai.id}</td>
                    <td>${ai.maxVolumns}</td>
                    <td>${ai.name}</td>
                    <td>${ai.num}</td>
                    <td>${ai.unit}</td>

                </tr>
            </c:forEach>
        </table>

</body>
</html>
