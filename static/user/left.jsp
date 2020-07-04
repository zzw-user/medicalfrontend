<%@ page language="java" pageEncoding="UTF-8"%>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>菜单</title>
	<link href="${pageContext.request.contextPath}/css/left.css" rel="stylesheet" type="text/css">
</head>
	<body>
		<table width="100" border="0" cellspacing="0" cellpadding="0">
		  <tr>
		    <td height="12"></td>
		  </tr>
		</table>
		<table width="100%" border="0">

            <tr>
                <td><a href="${pageContext.request.contextPath}/user/ListAll.jsp" target="mainFrame" class="left_list">全国垃圾信息</a></td>
            </tr>
            <tr>
                  <td><a href="${pageContext.request.contextPath}/user/Listone.jsp" target="mainFrame" class="left_list">区域申请</a></td>
            </tr>
            <tr>
                <td><a href="${pageContext.request.contextPath}/AreaInfoServlet?method=findAll" target="mainFrame" class="left_list">区域实时信息</a></td>
            </tr>
            <tr>
                <td><a href="${pageContext.request.contextPath}/DustBinInfoServlet?method=findAll" target="mainFrame" class="left_list">垃圾箱满信息</a></td>
            </tr>
            <tr>
                <td><a href="${pageContext.request.contextPath}/RewardServlet?method=find" target="mainFrame" class="left_list">纪律及奖惩</a></td>
            </tr>
		</table>
	</body>
</html>
