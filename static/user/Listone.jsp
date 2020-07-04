<%@ page import="java.util.List" %>
<%@ page import="javax.persistence.criteria.CriteriaBuilder" %>
<%@ page import="cn.entity.Region" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<HTML>
<HEAD>
	<script type="text/javascript" src="${pageContext.request.contextPath}/user/js/jquery.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/user/js/GlobalProvinces_main.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/user/js/GlobalProvinces_extend.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/user/js/initLocation.js"></script>
	<meta http-equiv="Content-Language" content="zh-cn">
	<meta http-equiv="Content-Type" content="text/html;  charset=ISO-8859-1">

</HEAD>
<body>
<%
    String province = "";
    String city = "";
    String country="";
    String  street="";
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
<script type="text/javascript">

    function s_1(){
        document.info.action="${pageContext.request.contextPath}/Purchase";
        document.info.submit();
    }
    function s_2(){

        document.info.action="${pageContext.request.contextPath}/Purchase_2?method=findAll";
        document.info.submit();
    }
</script>
<form id="Form1" action="${pageContext.request.contextPath}/Purchase" method="post" name='info'
	  style="margin: 0px;">
    <p>${msg}</p>
	<table cellSpacing="1" cellPadding="0" width="100%" align="center" bgColor="#f5fafe" border="0">
		<TBODY>
		<tr>
			<td class="ta_01" align="center" bgColor="#afd1f3">
				<strong>查 询 条 件</strong>
			</td>
		</tr>
		<tr>
			<td>
                <script type="text/javascript">
                    $(function(){initLocation({sheng_val:"<%=province%>",shi_val:"<%=city%>",xian_val:"<%=country%>",xiang_val:"<%=street%>"});})
                </script>
				<select id="sheng" name="province" style="width: 100px">
				</select> 省
				<select id="shi" name="city" style="width: 100px">
				</select> 市
				<select id="xian" name="country" style="width: 100px">
				</select> 县(区)
				<select id="xiang" name="street" style="width: 100px">
				</select>
				<input type="submit" value="确定" style="width: 50px" onclick="s_1()" >
                <input type="submit"  value="申购" style="width: 50px" onclick="s_2()">
			</td>
		</tr>
        </TBODY>
        </table>
    <table cellSpacing="1" cellPadding="0" width="100%" align="center" bgColor="#f5fafe" border="0">
        <tbody>

        <tr>
            <td class="ta_01" align="center" bgColor="#f5fafe">
                <table cellspacing="0" cellpadding="1" rules="all" bordercolor="gray" border="1" id="DataGrid1">
                    <!--  循环输出所有商品 -->
                    </br>
                    </br>
                    <%--<c:forEach items="${bin_infos}" var="bin_infos">--%>
                        <%--<tr onmouseover="this.style.backgroundColor = 'white'"--%>
                            <%--onmouseout="this.style.backgroundColor = '#F5FAFE';">--%>
                            <%--<td style="CURSOR: hand; HEIGHT: 15px" align="center" width="8%">垃圾箱id：${bin_infos.bid }</td>--%>
                            <%--<td style="CURSOR: hand; HEIGHT: 15px" align="center" width="8%">&nbsp;&nbsp;价值：${bin_infos.price }</td>--%>
                            <%--<td style="CURSOR: hand; HEIGHT: 15px" align="center" width="8%">&nbsp;&nbsp;申购价格：${bin_infos.cost }</td>--%>
                            <%--<td style="CURSOR: hand; HEIGHT: 15px" align="center" width="8%">&nbsp;&nbsp;当前状况：${bin_infos.flag }</td>--%>
                        <%--</tr>--%>
                    <%--</c:forEach>--%>
                </table>
            </td>
        </tr>
        </tbody>
    </table>
</form>

</body>
</HTML>