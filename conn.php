<?php
$conn=@mysql_connect("localhost","root","") or die("db connect error!");
mysql_select_db("mybooks1",$conn);
mysql_query("set names utf8");
?>