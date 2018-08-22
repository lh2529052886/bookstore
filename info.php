<?php
header("content-type:text/html;charset=utf-8");
include("conn.php");
$rs=mysql_query("select * from books order by bookAddTime desc");
$bookjson='{"status":0,"message":"正常","data":[';
while($info=mysql_fetch_array($rs)){
  $bookjson.='{"bookId":"'.$info['bookId'].'",'.'"bookName":"'.$info['bookName'].'",'.	'"bookOri":'.$info['bookOri'].','.'"bookPrice":'.$info['bookPrice'].','.'"bookPub":"'.$info['bookPub'].'",'.'"bookAddTime":"'.$info['bookAddTime'].'"},';
}
echo substr($bookjson,0,strlen($bookjson)-1).']}';
mysql_free_result($rs);
mysql_close($conn);
?>