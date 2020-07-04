<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/7/2
  Time: 17:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312"/>

    <title>纪律及奖惩规则</title>
    <link href="css/announce.css" type="text/css" rel="stylesheet"/>

</head>

<body>
<c:choose>
    <c:when test="${reward.statue eq 1 }">
        <div class="announce_info">
            <p><strong>${reward.reason }</strong></p>
            <p>您将扣除<a><font size="3">40%</font></a>交的申请费用 ,并将机会让给其他申请该区域的人</p>
        </div>
    </c:when>
    <c:when test="${reward.statue eq 2 }">
        <div class="announce_info">
            <p><strong>${reward.reason }</strong></p>
            <p>您将获得<a><font size="3">20%</font></a>的申请费用 ,希望再接再厉<font size="3">！</font></p>
        </div>
    </c:when>
</c:choose>

<p>&nbsp;</p>
</body>
</html>
