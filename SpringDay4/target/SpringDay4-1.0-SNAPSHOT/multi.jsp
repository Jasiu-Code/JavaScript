<%--
  Created by IntelliJ IDEA.
  User: imac
  Date: 07/11/2022
  Time: 19:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<table>
    <thead>
    <th scope="col">x</th>
<c:forEach var="i" begin="1" end="${cols}">
    <th scope="col">${i}</th>

</c:forEach>

    </thead>
 <c:forEach var="i" begin="1" end="${rows}">
     <tr>
         <th scope="row">${i}</th>
     <c:forEach var="j" begin="1" end="${cols}">
     <td>${i*j}</td>
     </c:forEach>
     </tr>
 </c:forEach>
</table>

</body>
</html>
