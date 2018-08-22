<?php
header("content-type:text/html;charset=utf-8");
sleep(3);
$books=json_decode(file_get_contents('php://input'),true);//获取前端通过POST传递的原始数据，然后转换为数组
$bookName=$books['bookName'];
$bookOri=$books['bookOri'];
$bookPrice=$books['bookPrice'];
$bookPub=$books['bookPub'];
include("conn.php");
$num=mysql_query("insert into books(bookName,bookOri,bookPrice,bookPub,bookAddTime) values('$bookName','$bookOri','$bookPrice','$bookPub',now())");
if($num>0){
	echo '{"status":1,"message":"添加成功"}';
	}else{
		echo '{"status":0,"message":"添加失败"}';
		}

?>