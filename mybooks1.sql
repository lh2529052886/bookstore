/*
SQLyog Enterprise - MySQL GUI v6.15
MySQL - 5.1.41 : Database - mybooks1
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

create database if not exists `mybooks1`;

USE `mybooks1`;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

/*Table structure for table `books` */

DROP TABLE IF EXISTS `books`;

CREATE TABLE `books` (
  `bookId` int(11) NOT NULL AUTO_INCREMENT,
  `bookName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `bookOri` float NOT NULL,
  `bookPrice` float NOT NULL,
  `bookPub` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `bookAddTime` datetime NOT NULL,
  PRIMARY KEY (`bookId`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `books` */

insert  into `books`(`bookId`,`bookName`,`bookOri`,`bookPrice`,`bookPub`,`bookAddTime`) values (8,'aaaa',111,2222,'清华大学aaa','2017-09-14 10:35:57'),(6,'react',100,90,'电子工业出版社','2017-09-14 10:25:15'),(3,'angularjs',87,80,'清华大学出版社1','2017-01-01 00:00:00'),(7,'react',100,90,'电子工业出版社','2017-09-14 10:26:28'),(5,'vue3',1002,892,'清华大学出版社2','2017-01-01 00:00:00'),(9,'react',100,90,'电子工业出版社','2017-09-14 10:36:50'),(10,'react',100,90,'电子工业出版社','2017-09-14 10:37:24'),(11,'sdfsdfs',11,6,'sfdsff','2017-09-14 13:08:50'),(12,'sdfsdfs',11,6,'sfdsff','2017-09-14 13:08:51'),(13,'sdfsdfs',11,6,'sfdsff','2017-09-14 13:08:52'),(14,'bbbb',11,2,'dsfdf','2017-09-14 13:10:01'),(15,'cc',122,11,'ssdd','2017-09-14 13:11:40'),(16,'ddddd',111,22,'dffdff','2017-09-14 13:12:52'),(17,'fdfdffdf',22222,1111,'dfdsf','2017-09-14 13:14:39'),(18,'wwww',1111,222,'fdfdffd','2017-09-14 13:15:07'),(19,'sdfsdffs',11111,222,'dfsdfdfdd','2017-09-14 13:15:28'),(20,'dfssdff',2222,333,'dsdsfsf','2017-09-14 13:17:15'),(21,'asdfasfdf',112,222,'dfdfdffdf','2017-09-14 13:19:29'),(26,'abc',222,1111,'33333','2017-09-14 14:07:27'),(23,'dfsdfdf',1111,2222,'fdsdfsdfdsfd','2017-09-14 13:22:00'),(24,'afasdfasdf',1111,22,'asdfasdfdf','2017-09-14 13:23:57'),(25,'afasdfasdf',1111,22,'asdfasdfdf','2017-09-14 13:24:04'),(27,'abcdefg',1111,22,'dfdff','2017-09-14 14:08:51'),(28,'aaaaa',22222,11111,'222222','2017-09-14 14:09:39');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
