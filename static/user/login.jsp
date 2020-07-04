<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/6/26
  Time: 15:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html>
<head>
    <base href="<%=basePath%>">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/login.css"/>
    <meta http-equiv="Content-Language" content="zh-cn">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>登录</title>
</head>

<body>
<div id="login">
    <h1>login</h1>
    <form method="post" action="/Login">
        用户名：<input type="text" required="required" placeholder="用户名" name="username">
        <br>
        密&nbsp;&nbsp;&nbsp;码：<input type="password" required="required" placeholder="密码" name="password">
        <br>
        <button class="but" type="submit">登录</button>
        <input type="hidden" name="action" value="login">
    </form>
    <a href="${pageContext.request.contextPath}/user/Register.jsp"><font style="color: #1E6BAE">注册</font></a>
</div>

</body>

</html>

