<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
	<meta http-equiv="Content-Language" content="zh-cn">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<style type="text/css">
		BODY {
			MARGIN: 0px;
			BACKGROUND-COLOR: #ffffff
		}

		BODY {
			FONT-SIZE: 12px;
			COLOR: #000000
		}

		TD {
			FONT-SIZE: 12px;
			COLOR: #000000
		}

		TH {
			FONT-SIZE: 12px;
			COLOR: #000000
		}
		.height1{width:100%; height:74px; }
		.img_logo{
			min-width:100%;
			max-width:100%;
			height:74px;
		}

	</style>
	<link href="${pageContext.request.contextPath}/css/Style.css"
		  rel="stylesheet" type="text/css">


</HEAD>
<body>
<div class="height1">
	<img class="img_logo" src="${pageContext.request.contextPath}/user/images/top_11.png">
</div>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
	<tr>
		<td height="26" valign="bottom"
			background="${pageContext.request.contextPath}/user/images/mis_01.jpg">
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td width="85%" align="left">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<font color="#000000">
							<script language="JavaScript">
								tmpDate = new Date();
								date = tmpDate.getDate();
								month = tmpDate.getMonth() + 1;
								year = tmpDate.getFullYear();
								document.write(year);
								document.write("年");
								document.write(month);
								document.write("月");
								document.write(date);
								document.write("日 ");

								myArray = new Array(6);
								myArray[0] = "星期日"
								myArray[1] = "星期一"
								myArray[2] = "星期二"
								myArray[3] = "星期三"
								myArray[4] = "星期四"
								myArray[5] = "星期五"
								myArray[6] = "星期六"
								weekday = tmpDate.getDay();
								if (weekday == 0 | weekday == 6) {
									document.write(myArray[weekday])
								} else {
									document.write(myArray[weekday])
								};
							</script>
						</font>
					</td>
					<td width="15%" >
						<table  width="100%" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td width="16" align="right">
									<a href="<c:url value="/UserServlet?method=quit"/>" target="_parent"><font size="3" style="color: green">退出</font></a>
								</td>


							</tr>
						</table>
					</td>
					<td align="right" width="5%"></td>
				</tr>
			</table>
		</td>
	</tr>
</table>
</body>
</HTML>
