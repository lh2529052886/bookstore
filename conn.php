<?php
$conn=@mysql_connect("localhost","root","88888888") or die("db connect error!");
mysql_select_db("link76",$conn);
mysql_query("set names utf8");
?>