<?php
header("content-type:text/html;charset=utf-8");
$bookId=$_GET['bookId'];
include("conn.php");
$num=mysql_query("delete from books where bookId='$bookId'");
if($num>0){
	 echo '{"status":1,"message":"删除成功"}';
}else{
	 echo '{"status":0,"message":"失败"}';	
}
?>