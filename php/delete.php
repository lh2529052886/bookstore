<?php
header("content-type:text/html;charset=utf-8");
include("./conn.php");
$bookId=$_GET['bookId'];
$rs=mysql_query("delete from mybooks where bookId='$bookId'");
if($rs>0){
	 echo '{"status":1,"message":"删除成功"}';
}else{
	 echo '{"status":0,"message":"失败"}';	
}
mysql_close($conn);
?>