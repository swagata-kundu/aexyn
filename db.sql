-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- Host: localhost    Database: aexyn
-- ------------------------------------------------------
-- Server version	5.7.24-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `aexyn`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `aexyn` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `aexyn`;

--
-- Table structure for table `business_type`
--

DROP TABLE IF EXISTS `business_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `business_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `business_type`
--

LOCK TABLES `business_type` WRITE;
/*!40000 ALTER TABLE `business_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `business_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(300) NOT NULL,
  `tagLine` text,
  `websiteUrl` varchar(500) DEFAULT NULL,
  `labour_type` json DEFAULT NULL,
  `business_type` json DEFAULT NULL,
  `img` varchar(500) DEFAULT '',
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'Aexyn Updated','http://localhost:3001/company-manager/company-profile','http://localhost:3001/company-manager/company-profile','[2, 3]','[\"Type 2\"]','','2018-11-03 21:40:06','2018-11-25 15:08:05'),(2,'One.com','','','[1]','[]','','2018-11-04 15:30:03','2018-11-04 15:30:03'),(3,'New Company','','','[2]','[]','','2018-11-12 17:03:59','2018-11-12 17:03:59');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_join_invitation`
--

DROP TABLE IF EXISTS `company_join_invitation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company_join_invitation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hash` varchar(100) DEFAULT NULL,
  `company_id` int(11) NOT NULL,
  `office_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_join_invitation`
--

LOCK TABLES `company_join_invitation` WRITE;
/*!40000 ALTER TABLE `company_join_invitation` DISABLE KEYS */;
INSERT INTO `company_join_invitation` VALUES (1,'5e54ca70-f082-11e8-b628-27ec21a712fe',1,4),(2,'f6df8aa0-f082-11e8-a0a3-99faaae8170a',1,4),(3,'0d4e2fd0-f083-11e8-a0a3-99faaae8170a',1,3),(4,'4ede4b50-f093-11e8-83cc-f3437452bc33',1,1);
/*!40000 ALTER TABLE `company_join_invitation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_office`
--

DROP TABLE IF EXISTS `company_office`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company_office` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `address1` mediumtext NOT NULL,
  `address2` mediumtext NOT NULL,
  `phone_no` varchar(20) DEFAULT '',
  `fax_no` varchar(20) DEFAULT NULL,
  `city` varchar(200) NOT NULL,
  `zip` varchar(10) NOT NULL,
  `state_id` int(11) NOT NULL,
  `lat` float DEFAULT NULL,
  `lng` float DEFAULT NULL,
  `company_id` int(11) NOT NULL,
  `office_order` int(11) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_office`
--

LOCK TABLES `company_office` WRITE;
/*!40000 ALTER TABLE `company_office` DISABLE KEYS */;
INSERT INTO `company_office` VALUES (1,'Hurgaon','743/21 Omnagar','Khandsha Road','1234','1234','Hurgaon','122001',6,NULL,NULL,1,1),(2,'Gurgaon','Dlf Phase 2','Dlf','',NULL,'Gurgaon','122001',6,NULL,NULL,2,1),(3,'Gurugram','74/16 Basai Road','Shivaji Nagar Sector 11','',NULL,'Gurugram','122001',9,NULL,NULL,1,1),(4,'Delhi','743/21','Ha','',NULL,'Delhi','122001',3,NULL,NULL,1,1),(5,'Hurgaon','743/21 Omnagar, Khandsha Road','Khandsha Road','',NULL,'Hurgaon','122001',6,NULL,NULL,1,1),(6,'Gurugram','70 Delhi - Jaipur Expressway','Hari Nagar Sector 10A','123456','123456','Gurugram','122001',9,NULL,NULL,1,1),(7,'Gurugram','dlf','DLF Phase 3 Sector 24','',NULL,'Gurugram','122001',6,NULL,NULL,3,1),(8,'Hurgaon','743/21 Omnagar, Khandsha Road','Khandsha Road','9748162576',NULL,'Hurgaon','122001',34,NULL,NULL,1,1);
/*!40000 ALTER TABLE `company_office` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_qm_permission`
--

DROP TABLE IF EXISTS `company_qm_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company_qm_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_id` int(11) NOT NULL,
  `jungle_permission` enum('ALL','DESIGNATED') DEFAULT 'ALL',
  `supplier_permission` enum('NO','VIEW','LIMITED','ADMIN') DEFAULT 'VIEW',
  PRIMARY KEY (`id`),
  KEY `fk_company_id` (`company_id`),
  CONSTRAINT `fk_company_id` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_qm_permission`
--

LOCK TABLES `company_qm_permission` WRITE;
/*!40000 ALTER TABLE `company_qm_permission` DISABLE KEYS */;
INSERT INTO `company_qm_permission` VALUES (1,1,'DESIGNATED','NO'),(2,2,'DESIGNATED','NO'),(3,3,'DESIGNATED','NO');
/*!40000 ALTER TABLE `company_qm_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_tags`
--

DROP TABLE IF EXISTS `company_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company_tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `tags_for_company` int(11) NOT NULL,
  `tag` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_tags`
--

LOCK TABLES `company_tags` WRITE;
/*!40000 ALTER TABLE `company_tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `company_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `country` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'India');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `email_invites`
--

DROP TABLE IF EXISTS `email_invites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `email_invites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(200) DEFAULT NULL,
  `invited_by` int(11) DEFAULT NULL,
  `qset_id` int(11) DEFAULT NULL,
  `invited_user_id` int(11) DEFAULT NULL,
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `email_invites`
--

LOCK TABLES `email_invites` WRITE;
/*!40000 ALTER TABLE `email_invites` DISABLE KEYS */;
INSERT INTO `email_invites` VALUES (1,'me2@swagatak.one',1,1,4,'2018-11-12 16:55:55'),(2,'me@swagatak.one',1,6,2,'2018-11-22 21:55:54'),(3,'me2@swagatak.one',1,6,4,'2018-12-04 17:30:23'),(4,'me2@swagatak.one',1,6,4,'2018-12-04 17:51:44'),(5,'me4@swagatak.one',1,6,NULL,'2018-12-04 20:03:11'),(6,'me3@swagatak.one',1,6,NULL,'2018-12-04 20:03:11'),(7,'me3@swagatak.one',1,6,NULL,'2018-12-04 20:03:11'),(8,'me3@swagatak.one',1,6,NULL,'2018-12-04 20:26:42');
/*!40000 ALTER TABLE `email_invites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `labour_type`
--

DROP TABLE IF EXISTS `labour_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `labour_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `labour_type`
--

LOCK TABLES `labour_type` WRITE;
/*!40000 ALTER TABLE `labour_type` DISABLE KEYS */;
INSERT INTO `labour_type` VALUES (1,'Union'),(2,'Non-Union'),(3,'Prevailing wages'),(4,'None');
/*!40000 ALTER TABLE `labour_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `office_package`
--

DROP TABLE IF EXISTS `office_package`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `office_package` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `office_id` int(11) NOT NULL,
  `package_id` int(11) DEFAULT '1',
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `payment_id` int(11) DEFAULT NULL,
  `payment_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_office_package_1_idx` (`office_id`),
  KEY `fk_office_package_2_idx` (`package_id`),
  CONSTRAINT `fk_office_package_1` FOREIGN KEY (`office_id`) REFERENCES `company_office` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_office_package_2` FOREIGN KEY (`package_id`) REFERENCES `package` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `office_package`
--

LOCK TABLES `office_package` WRITE;
/*!40000 ALTER TABLE `office_package` DISABLE KEYS */;
INSERT INTO `office_package` VALUES (1,1,1,'2018-11-03',NULL,NULL,NULL),(2,2,1,'2018-11-04',NULL,NULL,NULL),(3,3,1,'2018-11-12',NULL,NULL,NULL),(4,4,1,'2018-11-12',NULL,NULL,NULL),(5,5,1,'2018-11-12',NULL,NULL,NULL),(6,6,1,'2018-11-12',NULL,NULL,NULL),(7,7,1,'2018-11-12',NULL,NULL,NULL),(8,8,1,'2018-11-19',NULL,NULL,NULL);
/*!40000 ALTER TABLE `office_package` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package`
--

DROP TABLE IF EXISTS `package`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `package` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package`
--

LOCK TABLES `package` WRITE;
/*!40000 ALTER TABLE `package` DISABLE KEYS */;
INSERT INTO `package` VALUES (1,'FREE'),(2,'TRIAL'),(3,'PRO');
/*!40000 ALTER TABLE `package` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qualification_answers`
--

DROP TABLE IF EXISTS `qualification_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qualification_answers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `invitation_id` int(11) NOT NULL,
  `question_id` int(11) DEFAULT NULL,
  `answer` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_qualification_answers_1_idx` (`invitation_id`),
  CONSTRAINT `fk_qualification_answers_1` FOREIGN KEY (`invitation_id`) REFERENCES `qualification_invites` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qualification_answers`
--

LOCK TABLES `qualification_answers` WRITE;
/*!40000 ALTER TABLE `qualification_answers` DISABLE KEYS */;
INSERT INTO `qualification_answers` VALUES (1,2,318,'{\"value\": \"sasasasasas\"}'),(2,2,319,'[{\"name\": \"sasas\", \"phone\": \"1212121221\", \"address\": \"sasas\"}]'),(3,2,320,'{\"value\": [\"Type 1\", \"Type 2\"]}'),(4,2,321,'{\"value\": [\"Non-Union\", \"Prevailing wages\"]}'),(5,2,322,'{\"value\": [\"Sample-Work\"]}'),(6,2,323,NULL),(7,2,324,'{\"yn\": true, \"explain\": \"1212121221\"}'),(8,2,325,'{\"yn\": false, \"explain\": \"Hi hi please explan\"}'),(9,2,326,NULL),(10,2,327,'{\"ca\": \"1\", \"ed\": \"2121\", \"fs\": \"212\", \"ot\": \"111\", \"tp\": \"2\", \"total\": \"22121212\"}'),(11,2,328,'[{\"name\": \"swagata\", \"email\": \"swagata@\", \"phone\": \"12334343434\"}]'),(12,2,329,'{\"value\": \"3\"}'),(13,2,330,'[{\"state\": \"Haryana\", \"agency\": \"RTI\", \"number\": \"213456\", \"classification\": \"123456\"}]'),(14,2,331,'[{\"year\": \"1234\", \"trade\": \"123\", \"agreement\": \"123\"}]'),(15,2,332,'[{\"affiliation\": \"This is a description\"}]'),(16,2,333,NULL),(17,2,334,'{\"yn\": false}'),(18,2,335,'{\"year1\": \"1`1\", \"year2\": \"23\", \"year3\": \"23\", \"year4\": \"232\"}'),(19,2,336,NULL),(20,2,337,'{\"value\": \"Weekly\"}'),(21,2,338,'{\"value\": \"Weekly\"}'),(22,2,339,'{\"yn\": false}'),(23,2,340,'{\"yn\": false}'),(24,2,341,'{\"year1\": \"12\", \"year2\": \"12\", \"year3\": \"12\", \"year4\": \"12\"}'),(25,2,342,NULL),(26,2,343,NULL),(27,2,344,NULL),(28,2,345,NULL),(29,2,346,NULL),(30,2,347,NULL),(31,2,348,'{\"value\": \"2\"}'),(32,2,349,'{\"value\": \"2\"}'),(33,2,350,'{\"value\": \"-4\"}'),(34,2,351,'{\"value\": \"5\"}'),(35,2,352,'{\"yn\": false, \"explain\": \"\"}'),(36,2,353,'{\"gl\": \"212121212\", \"wc\": \"2121212\", \"gls\": \"21212\", \"auto\": \"4\"}'),(37,2,354,'[{\"email\": \"me@emai.com\", \"phone\": \"123456\", \"address\": \"Haryana\", \"company\": \"Make\"}]'),(38,2,355,'[{\"email\": \"email@1235.com\", \"phone\": \"1234\", \"address\": \"Hello\", \"company\": \"Hi\"}]'),(39,2,356,NULL),(40,2,357,'{\"yn\": false, \"explain\": \"Hhuuueee\"}'),(41,2,358,NULL),(42,2,359,NULL),(43,2,360,NULL),(44,2,361,NULL),(45,2,362,NULL),(46,2,363,NULL),(47,2,364,NULL),(48,2,365,NULL),(49,2,366,NULL),(50,2,367,NULL),(51,2,368,'[{\"date\": \"2018-12-22\", \"name\": \"1234\", \"value\": \"5\", \"client\": \"2222\"}]'),(52,2,369,'{\"date\": \"2018-12-06\", \"name\": \"sasasas\", \"value\": \"3\", \"client\": \"sdad\"}'),(53,2,370,'[{\"date\": \"2018-12-14\", \"name\": \"sasa\", \"value\": \"2\", \"client\": \"sasas\"}, {\"date\": \"2018-12-20\", \"name\": \"sasas\", \"value\": \"3\", \"client\": \"sasasas\"}]'),(54,2,371,NULL),(55,2,372,NULL),(56,2,373,NULL),(57,2,374,NULL),(58,2,375,NULL),(59,2,376,NULL),(60,2,377,NULL),(61,2,378,NULL),(62,2,379,'{\"value\": \"Test\"}'),(63,2,380,'{\"value\": \"FU\"}'),(64,2,381,'{\"explain\": \"Yiii\"}');
/*!40000 ALTER TABLE `qualification_answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qualification_editors`
--

DROP TABLE IF EXISTS `qualification_editors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qualification_editors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `invitation_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_modified` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQUE` (`invitation_id`,`user_id`),
  KEY `fk_qualification_editors_1_idx` (`invitation_id`),
  KEY `fk_qualification_editors_1_idx1` (`user_id`),
  CONSTRAINT `fk_qualification_editors_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_qualification_editors_2` FOREIGN KEY (`invitation_id`) REFERENCES `qualification_invites` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qualification_editors`
--

LOCK TABLES `qualification_editors` WRITE;
/*!40000 ALTER TABLE `qualification_editors` DISABLE KEYS */;
INSERT INTO `qualification_editors` VALUES (9,2,2,'NONE','2018-11-25 19:03:06','2018-11-25 19:03:06'),(10,2,3,'NONE','2018-11-25 19:03:10','2018-11-25 19:03:10');
/*!40000 ALTER TABLE `qualification_editors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qualification_files`
--

DROP TABLE IF EXISTS `qualification_files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qualification_files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `invitation_id` int(11) DEFAULT NULL,
  `email_invitation_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `file_name` varchar(100) DEFAULT NULL,
  `url` varchar(500) DEFAULT NULL,
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_modified` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_qualification_files_1_idx` (`email_invitation_id`),
  KEY `fk_qualification_files_2_idx` (`invitation_id`),
  KEY `fk_qualification_files_3_idx` (`user_id`),
  CONSTRAINT `fk_qualification_files_1` FOREIGN KEY (`email_invitation_id`) REFERENCES `email_invites` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_qualification_files_2` FOREIGN KEY (`invitation_id`) REFERENCES `qualification_invites` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_qualification_files_3` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qualification_files`
--

LOCK TABLES `qualification_files` WRITE;
/*!40000 ALTER TABLE `qualification_files` DISABLE KEYS */;
INSERT INTO `qualification_files` VALUES (1,1,NULL,1,'jio_receipt.pdf','/home/swagatak/work/personal/aexyn/uploads/1543761647357_jio_receipt.pdf','2018-12-02 20:10:47','2018-12-02 20:10:47'),(2,1,NULL,1,'airtel.pdf','/home/swagatak/work/personal/aexyn/uploads/1543761745625_airtel.pdf','2018-12-02 20:12:27','2018-12-02 20:12:27'),(3,2,NULL,1,'13244723464_618cbabaf3_q.jpg','/home/swagatak/work/personal/aexyn/uploads/1544609632153_13244723464_618cbabaf3_q.jpg','2018-12-12 15:43:52','2018-12-12 15:43:52');
/*!40000 ALTER TABLE `qualification_files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qualification_invite_activity`
--

DROP TABLE IF EXISTS `qualification_invite_activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qualification_invite_activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `invitation_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `activity_type` varchar(20) DEFAULT 'VIEWED',
  `activity_status` varchar(100) DEFAULT '',
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qualification_invite_activity`
--

LOCK TABLES `qualification_invite_activity` WRITE;
/*!40000 ALTER TABLE `qualification_invite_activity` DISABLE KEYS */;
INSERT INTO `qualification_invite_activity` VALUES (1,2,4,'ANSWER','IN_PROGRESS','2018-12-11 18:24:33','2018-12-11 18:24:33'),(2,2,2,'ANSWER','SUBMITTED','2018-12-12 14:50:57','2018-12-12 14:50:57'),(3,2,1,'REVIEWER_STATUS','DONE','2018-12-12 15:37:07','2018-12-12 15:37:07'),(4,2,1,'REVIEWER_STATUS','DONE','2018-12-12 15:38:23','2018-12-12 15:38:23'),(5,2,1,'REVIEWER_STATUS','DONE','2018-12-12 15:38:57','2018-12-12 15:38:57'),(6,1,1,'REVIEWER_STATUS','DONE','2018-12-13 14:42:37','2018-12-13 14:42:37'),(7,2,1,'INVITATION','APPROVED','2018-12-13 16:53:54','2018-12-13 16:53:54'),(8,2,1,'INVITATION','APPROVED','2018-12-13 16:54:59','2018-12-13 16:54:59'),(9,2,1,'INVITATION','APPROVED','2018-12-13 16:56:19','2018-12-13 16:56:19'),(10,2,1,'INVITATION','APPROVED_EXCEPTION','2018-12-13 16:57:57','2018-12-13 16:57:57'),(11,2,1,'INVITATION','SUBMITTED','2018-12-13 17:29:49','2018-12-13 17:29:49'),(12,2,1,'INVITATION','SUBMITTED','2018-12-13 17:31:30','2018-12-13 17:31:30'),(13,2,1,'INVITATION','SUBMITTED','2018-12-13 17:31:53','2018-12-13 17:31:53'),(14,2,1,'INVITATION','SUBMITTED','2018-12-13 17:32:34','2018-12-13 17:32:34'),(15,2,1,'INVITATION','APPROVED','2018-12-13 17:33:30','2018-12-13 17:33:30'),(16,2,1,'INVITATION','REVISION','2018-12-13 17:58:57','2018-12-13 17:58:57'),(17,2,1,'INVITATION','REVISION','2018-12-13 17:59:15','2018-12-13 17:59:15'),(18,2,1,'INVITATION','REVISION','2018-12-13 17:59:50','2018-12-13 17:59:50'),(19,2,1,'INVITATION','REVISION','2018-12-13 18:01:07','2018-12-13 18:01:07');
/*!40000 ALTER TABLE `qualification_invite_activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qualification_invites`
--

DROP TABLE IF EXISTS `qualification_invites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qualification_invites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `invited_company_id` int(11) DEFAULT NULL,
  `qset_id` int(11) DEFAULT NULL,
  `invited_by` int(11) DEFAULT NULL,
  `status` enum('SENT','IN_PROGRESS','SUBMITTED','APPROVED','DENIED','APPROVED_EXCEPTION','REVISION') DEFAULT 'SENT',
  `skip_review` tinyint(1) DEFAULT '0',
  `isDraft` tinyint(1) DEFAULT '0',
  `expiry_date` date DEFAULT NULL,
  `total_limit` int(11) DEFAULT '0',
  `project_limit` int(11) DEFAULT '0',
  `summary` text,
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `edited_by` int(11) DEFAULT NULL,
  `date_edited` datetime DEFAULT NULL,
  `submitted_by` int(11) DEFAULT NULL,
  `date_submitted` datetime DEFAULT NULL,
  `date_revision_asked` datetime DEFAULT NULL,
  `files` json DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qualification_invites`
--

LOCK TABLES `qualification_invites` WRITE;
/*!40000 ALTER TABLE `qualification_invites` DISABLE KEYS */;
INSERT INTO `qualification_invites` VALUES (1,3,1,1,'SENT',0,0,NULL,0,0,NULL,'2018-11-12 17:03:59','2018-11-12 17:07:41',NULL,NULL,NULL,NULL,NULL,NULL),(2,2,6,1,'REVISION',0,0,'2018-12-19',3,21212,'sasasas','2018-11-22 21:55:55','2018-12-13 18:01:07',4,'2018-12-11 18:24:34',2,'2018-12-12 14:50:58',NULL,NULL);
/*!40000 ALTER TABLE `qualification_invites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qualification_notes`
--

DROP TABLE IF EXISTS `qualification_notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qualification_notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `invitation_id` int(11) DEFAULT NULL,
  `email_invitation_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `note` text,
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_modified` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_qualification_editors_1_idx` (`invitation_id`),
  KEY `fk_qualification_editors_2_idx` (`email_invitation_id`),
  KEY `fk_qualification_notes_1_idx` (`user_id`),
  CONSTRAINT `fk_qualification_notes_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_qualification_notes_2` FOREIGN KEY (`invitation_id`) REFERENCES `qualification_invites` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_qualification_notes_3` FOREIGN KEY (`email_invitation_id`) REFERENCES `email_invites` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qualification_notes`
--

LOCK TABLES `qualification_notes` WRITE;
/*!40000 ALTER TABLE `qualification_notes` DISABLE KEYS */;
INSERT INTO `qualification_notes` VALUES (3,1,NULL,1,'Hi ','2018-11-24 13:58:22','2018-11-24 13:58:22'),(4,2,NULL,1,'sassas','2018-12-03 18:07:13','2018-12-03 18:07:13'),(5,2,NULL,1,'sasasasasas','2018-12-03 18:07:16','2018-12-03 18:07:16');
/*!40000 ALTER TABLE `qualification_notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qualification_reviewers`
--

DROP TABLE IF EXISTS `qualification_reviewers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qualification_reviewers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `invitation_id` int(11) DEFAULT NULL,
  `email_invitation_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_modified` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_qualification_reviewers_1_idx` (`invitation_id`),
  KEY `fk_qualification_reviewers_2_idx` (`email_invitation_id`),
  KEY `fk_qualification_reviewers_3_idx` (`user_id`),
  CONSTRAINT `fk_qualification_reviewers_1` FOREIGN KEY (`email_invitation_id`) REFERENCES `email_invites` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_qualification_reviewers_2` FOREIGN KEY (`invitation_id`) REFERENCES `qualification_invites` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_qualification_reviewers_3` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qualification_reviewers`
--

LOCK TABLES `qualification_reviewers` WRITE;
/*!40000 ALTER TABLE `qualification_reviewers` DISABLE KEYS */;
INSERT INTO `qualification_reviewers` VALUES (4,NULL,NULL,1,'NONE','2018-11-23 19:48:54','2018-11-23 19:48:54'),(5,NULL,NULL,1,'NONE','2018-11-23 19:49:47','2018-11-23 19:49:47'),(6,NULL,NULL,1,'NONE','2018-11-23 19:51:26','2018-11-23 19:51:26'),(7,NULL,NULL,1,'NONE','2018-11-23 19:55:01','2018-11-23 19:55:01'),(13,1,NULL,1,'DONE','2018-11-25 20:43:04','2018-12-13 14:42:37'),(16,2,NULL,1,'DONE','2018-12-04 21:38:29','2018-12-12 15:38:57');
/*!40000 ALTER TABLE `qualification_reviewers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_set`
--

DROP TABLE IF EXISTS `question_set`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question_set` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_id` int(11) NOT NULL,
  `hash` varchar(50) DEFAULT NULL,
  `opening_statement` text,
  `isDeleted` tinyint(1) DEFAULT '0',
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_question_set_1` (`company_id`),
  CONSTRAINT `fk_question_set_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_set`
--

LOCK TABLES `question_set` WRITE;
/*!40000 ALTER TABLE `question_set` DISABLE KEYS */;
INSERT INTO `question_set` VALUES (1,1,'edda1004-df82-11e8-9490-448500d9a666','Please complete all the questions. The contents of this questionnaire will be considered confidention and used safety to determine your firm\'s qualification and will not be disclosed to others.',1,'2018-11-03 21:40:06'),(2,2,'66723d0b-e018-11e8-9e73-448500d9a666','Please complete all the questions. The contents of this questionnaire will be considered confidention and used safety to determine your firm\'s qualification and will not be disclosed to others.',0,'2018-11-04 15:30:03'),(3,3,'d8b670c2-e66e-11e8-b9be-448500d9a666','Please complete all the questions. The contents of this questionnaire will be considered confidention and used safety to determine your firm\'s qualification and will not be disclosed to others.',0,'2018-11-12 17:03:59'),(4,1,NULL,'Please complete all the questions. The contents of this questionnaire will be considered confidention and used safety to determine your firm\'s qualification and will not be disclosed to others.',1,'2018-11-20 18:06:28'),(5,1,NULL,'Please complete all the questions. The contents of this questionnaire will be considered confidention and used safety to determine your firm\'s qualification and will not be disclosed to others.',1,'2018-11-22 21:50:20'),(6,1,'2d7badd0-ee73-11e8-9fcc-27224cc60184','Please complete all the questions. The contents of this questionnaire will be considered confidention and used safety to determine your firm\'s qualification and will not be disclosed to others.',0,'2018-11-22 21:55:08');
/*!40000 ALTER TABLE `question_set` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_types`
--

DROP TABLE IF EXISTS `question_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `configurable` tinyint(1) DEFAULT NULL,
  `type` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_types`
--

LOCK TABLES `question_types` WRITE;
/*!40000 ALTER TABLE `question_types` DISABLE KEYS */;
INSERT INTO `question_types` VALUES (1,'text response',1,'TEXT'),(2,'list of office locations',0,'OFFICES'),(3,'multi-select',0,'MS'),(4,'business structure (corporate type drop-down options (LLP, PVT. ltd, Public company, proprietor)',0,'BS'),(5,'yes/no, if yes explain',1,'YN-YE'),(6,'yes/no, if no explain',1,'YN-NE'),(7,'yes/no',1,'YN'),(8,'list of employees by dept',0,'EMPLOYEES'),(9,'list of name/email/phone',0,'EMAILS'),(10,'list of licenses',0,'LICENSES'),(11,'list of unions incl expiration',0,'UNIONS'),(12,'list of industry affiliation',0,'IAFFILIATION'),(13,'attach file',1,'FILE'),(14,'data for last 4 years',0,'4YRDATA'),(15,'frequently dropdown (Options will be Annual, Monthly, Weekly, daily, as needed)',0,'FREQUENTLY'),(16,'dollar amount',1,'AMOUNT'),(17,'percentage',1,'PERCENT'),(18,'general, workers comp, auto',0,'WORKERS'),(19,'list of company contact',0,'COMPANY_CONTACT'),(20,'list of project details',0,'PROJECT_LIST'),(21,'project details',0,'PROJECT_DETAIL'),(22,'number',1,'NUMBER'),(23,'yes/no please describe',1,'YN-PD');
/*!40000 ALTER TABLE `question_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question_set_id` int(11) NOT NULL,
  `question_type` int(11) NOT NULL,
  `section` enum('CP','CL','HS','IS','FIN','WEX','LGL','SIG','OTH') NOT NULL,
  `text` varchar(1000) NOT NULL,
  `isDefault` tinyint(1) NOT NULL DEFAULT '1',
  `isRequired` tinyint(1) NOT NULL DEFAULT '1',
  `isDeleted` tinyint(1) DEFAULT '0',
  `isIncluded` tinyint(1) DEFAULT '1',
  `isDisabled` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_questions_1_idx` (`question_set_id`),
  KEY `fk_questions_2_idx` (`question_type`),
  CONSTRAINT `fk_questions_1` FOREIGN KEY (`question_set_id`) REFERENCES `question_set` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_questions_2` FOREIGN KEY (`question_type`) REFERENCES `question_types` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=382 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,1,1,'CP','Company Name',1,1,0,1,0),(2,1,2,'CP','Office location',1,1,0,1,0),(3,1,3,'CP','Business Type',1,0,0,1,0),(4,1,3,'CP','Labour Type',1,0,0,1,0),(5,1,3,'CP','Work Performed',1,0,0,1,0),(6,1,4,'CP','Ownership/Business Structure',1,0,0,1,0),(7,1,5,'CP','Has a company ever done business under diferent name?',1,0,0,1,0),(8,1,5,'CP','Is your company owned or controlled by a parent corporation?',1,0,0,1,0),(9,1,5,'CP','Does someone outside of your company perform your estimating?',1,0,0,1,0),(10,1,8,'CP','Number of employees',1,0,0,1,0),(11,1,9,'CP','Owner or officers of your company',1,0,0,1,0),(12,1,10,'CL','Professional Licenses',1,0,0,1,0),(13,1,11,'CL','Trade unions',1,0,0,1,0),(14,1,12,'CL','Industry affilations or Memberships',1,0,0,1,0),(15,1,13,'HS','Attach a copy of your safety program',1,0,0,1,0),(16,1,5,'HS','Do you have a safety officer or department?',1,0,0,1,0),(17,1,14,'HS','Provide your workers compensation Experience Modification Rate(EMR)',1,0,0,1,0),(18,1,5,'HS','Attach your insurance agent\'s EMR verification Letter',1,0,0,1,0),(19,1,15,'HS','How often do you hold regular safety meetings for field supervisors?',1,0,0,1,0),(20,1,15,'HS','how often does your company hold a job site safety metting?',1,0,0,1,0),(21,1,5,'HS','Does your copmpany have a substance abuse program?',1,0,0,1,0),(22,1,5,'HS','Does your company have an orientation program for newly appointed supervisors?',1,0,0,1,0),(23,1,14,'HS','Man-hours worked',1,0,0,1,0),(24,1,14,'HS','First Aid cases',1,0,0,1,0),(25,1,14,'HS','Recordable Incident Rate(RIR)',1,0,0,1,0),(26,1,14,'HS','Lost Time/Workday cases',1,0,0,1,0),(27,1,14,'HS','Lost Time/Workday Incident cases(LTWR)',1,0,0,1,0),(28,1,14,'HS','fatalities',1,0,0,1,0),(29,1,14,'HS','Average number of employees',1,0,0,1,0),(30,1,16,'IS','Total Bonding capacity',1,0,0,1,0),(31,1,16,'IS','Bonding capacity per project',1,0,0,1,0),(32,1,16,'IS','Average bonding capacity as of this date',1,0,0,1,0),(33,1,17,'IS','bond rate(%)',1,0,0,1,0),(34,1,5,'IS','Attach a reference letter stating aggregrate and single project bonding capacity from your surety company',1,0,0,1,0),(35,1,18,'IS','Insurance Limits',1,0,0,1,0),(36,1,19,'IS','Bonding Agent references',1,0,0,1,0),(37,1,19,'IS','surety References',1,0,0,1,0),(38,1,19,'IS','Insurance References',1,0,0,1,0),(39,1,5,'FIN','Attach a current financial statement. Ideally this is an audited finacial statement covering the last three years',1,0,0,1,0),(40,1,14,'FIN','Revenue',1,0,0,1,0),(41,1,14,'FIN','Net worth',1,0,0,1,0),(42,1,16,'FIN','Current working capital',1,0,0,1,0),(43,1,16,'FIN','Current Assests',1,0,0,1,0),(44,1,16,'FIN','Currrent Liabilities',1,0,0,1,0),(45,1,16,'FIN','What is your current backlog',1,0,0,1,0),(46,1,5,'FIN','Are there are outstanding debts or loans that exceed 20% of your company\'s current net worth?',1,0,0,1,0),(47,1,14,'FIN','Numbers of contrats completed',1,0,0,1,0),(48,1,14,'FIN','Average contract size',1,0,0,1,0),(49,1,19,'FIN','Banking References',1,0,0,1,0),(50,1,20,'WEX','List atleast three major projects your company currently has under contract',1,0,0,1,0),(51,1,21,'WEX','What is the largest contract your company has completed in last three years?',1,0,0,1,0),(52,1,20,'WEX','List atleast three additional projects your company  has completed in the last  five years',1,0,0,1,0),(53,1,5,'LGL','Has your company, its owners, or officers  been in involved in litigation regarding a construction contract within the last three years?',1,0,0,1,0),(54,1,5,'LGL','Has your company falled to complete a construction contract, defaulted, or terminated for cause within the last three years?',1,0,0,1,0),(55,1,5,'LGL','Has your company had any safety or environmental related citations from authorities in last three years?',1,0,0,1,0),(56,1,5,'LGL','Has your company, Its owners, or officers filed for bankruptcy protection within the last three years?',1,0,0,1,0),(57,1,5,'LGL','Has a complaint ever been filed with a licensing agency against your firm?',1,0,0,1,0),(58,1,5,'LGL','Has a surety ever finished one or more of your construction project?',1,0,0,1,0),(59,1,5,'LGL','Has your firm ever been assessed liquidated damages on a project?',1,0,0,1,0),(60,1,5,'LGL','Are threre any remaining issues or conflicts or  interest that would have material effect on your company, its owners or officers, In their operation, financial structure, or ability to perform work for our company?',1,0,0,1,0),(61,1,5,'OTH','Would you like to provide any additional information you feel would help our company determine your company\'s  qualification and expertise?',1,0,0,1,0),(62,1,1,'SIG','Full Name',1,1,0,1,0),(63,1,1,'SIG','Title',1,0,0,1,0),(64,2,1,'CP','Company Name',1,1,0,1,0),(65,2,2,'CP','Office location',1,1,0,1,0),(66,2,3,'CP','Business Type',1,0,0,1,0),(67,2,3,'CP','Labour Type',1,0,0,1,0),(68,2,3,'CP','Work Performed',1,0,0,1,0),(69,2,4,'CP','Ownership/Business Structure',1,0,0,1,0),(70,2,5,'CP','Has a company ever done business under diferent name?',1,0,0,1,0),(71,2,5,'CP','Is your company owned or controlled by a parent corporation?',1,0,0,1,0),(72,2,5,'CP','Does someone outside of your company perform your estimating?',1,0,0,1,0),(73,2,8,'CP','Number of employees',1,0,0,1,0),(74,2,9,'CP','Owner or officers of your company',1,0,0,1,0),(75,2,10,'CL','Professional Licenses',1,0,0,1,0),(76,2,11,'CL','Trade unions',1,0,0,1,0),(77,2,12,'CL','Industry affilations or Memberships',1,0,0,1,0),(78,2,13,'HS','Attach a copy of your safety program',1,0,0,1,0),(79,2,5,'HS','Do you have a safety officer or department?',1,0,0,1,0),(80,2,14,'HS','Provide your workers compensation Experience Modification Rate(EMR)',1,0,0,1,0),(81,2,5,'HS','Attach your insurance agent\'s EMR verification Letter',1,0,0,1,0),(82,2,15,'HS','How often do you hold regular safety meetings for field supervisors?',1,0,0,1,0),(83,2,15,'HS','how often does your company hold a job site safety metting?',1,0,0,1,0),(84,2,5,'HS','Does your copmpany have a substance abuse program?',1,0,0,1,0),(85,2,5,'HS','Does your company have an orientation program for newly appointed supervisors?',1,0,0,1,0),(86,2,14,'HS','Man-hours worked',1,0,0,1,0),(87,2,14,'HS','First Aid cases',1,0,0,1,0),(88,2,14,'HS','Recordable Incident Rate(RIR)',1,0,0,1,0),(89,2,14,'HS','Lost Time/Workday cases',1,0,0,1,0),(90,2,14,'HS','Lost Time/Workday Incident cases(LTWR)',1,0,0,1,0),(91,2,14,'HS','fatalities',1,0,0,1,0),(92,2,14,'HS','Average number of employees',1,0,0,1,0),(93,2,16,'IS','Total Bonding capacity',1,0,0,1,0),(94,2,16,'IS','Bonding capacity per project',1,0,0,1,0),(95,2,16,'IS','Average bonding capacity as of this date',1,0,0,1,0),(96,2,17,'IS','bond rate(%)',1,0,0,1,0),(97,2,5,'IS','Attach a reference letter stating aggregrate and single project bonding capacity from your surety company',1,0,0,1,0),(98,2,18,'IS','Insurance Limits',1,0,0,1,0),(99,2,19,'IS','Bonding Agent references',1,0,0,1,0),(100,2,19,'IS','surety References',1,0,0,1,0),(101,2,19,'IS','Insurance References',1,0,0,1,0),(102,2,5,'FIN','Attach a current financial statement. Ideally this is an audited finacial statement covering the last three years',1,0,0,1,0),(103,2,14,'FIN','Revenue',1,0,0,1,0),(104,2,14,'FIN','Net worth',1,0,0,1,0),(105,2,16,'FIN','Current working capital',1,0,0,1,0),(106,2,16,'FIN','Current Assests',1,0,0,1,0),(107,2,16,'FIN','Currrent Liabilities',1,0,0,1,0),(108,2,16,'FIN','What is your current backlog',1,0,0,1,0),(109,2,5,'FIN','Are there are outstanding debts or loans that exceed 20% of your company\'s current net worth?',1,0,0,1,0),(110,2,14,'FIN','Numbers of contrats completed',1,0,0,1,0),(111,2,14,'FIN','Average contract size',1,0,0,1,0),(112,2,19,'FIN','Banking References',1,0,0,1,0),(113,2,20,'WEX','List atleast three major projects your company currently has under contract',1,0,0,1,0),(114,2,21,'WEX','What is the largest contract your company has completed in last three years?',1,0,0,1,0),(115,2,20,'WEX','List atleast three additional projects your company  has completed in the last  five years',1,0,0,1,0),(116,2,5,'LGL','Has your company, its owners, or officers  been in involved in litigation regarding a construction contract within the last three years?',1,0,0,1,0),(117,2,5,'LGL','Has your company falled to complete a construction contract, defaulted, or terminated for cause within the last three years?',1,0,0,1,0),(118,2,5,'LGL','Has your company had any safety or environmental related citations from authorities in last three years?',1,0,0,1,0),(119,2,5,'LGL','Has your company, Its owners, or officers filed for bankruptcy protection within the last three years?',1,0,0,1,0),(120,2,5,'LGL','Has a complaint ever been filed with a licensing agency against your firm?',1,0,0,1,0),(121,2,5,'LGL','Has a surety ever finished one or more of your construction project?',1,0,0,1,0),(122,2,5,'LGL','Has your firm ever been assessed liquidated damages on a project?',1,0,0,1,0),(123,2,5,'LGL','Are threre any remaining issues or conflicts or  interest that would have material effect on your company, its owners or officers, In their operation, financial structure, or ability to perform work for our company?',1,0,0,1,0),(124,2,5,'OTH','Would you like to provide any additional information you feel would help our company determine your company\'s  qualification and expertise?',1,0,0,1,0),(125,2,1,'SIG','Full Name',1,1,0,1,0),(126,2,1,'SIG','Title',1,0,0,1,0),(127,3,1,'CP','Company Name',1,1,0,1,1),(128,3,2,'CP','Office location',1,1,0,1,1),(129,3,3,'CP','Business Type',1,0,0,1,0),(130,3,3,'CP','Labour Type',1,0,0,1,0),(131,3,3,'CP','Work Performed',1,0,0,1,0),(132,3,4,'CP','Ownership/Business Structure',1,0,0,1,0),(133,3,5,'CP','Has a company ever done business under diferent name?',1,0,0,1,0),(134,3,5,'CP','Is your company owned or controlled by a parent corporation?',1,0,0,1,0),(135,3,5,'CP','Does someone outside of your company perform your estimating?',1,0,0,1,0),(136,3,8,'CP','Number of employees',1,0,0,1,0),(137,3,9,'CP','Owner or officers of your company',1,0,0,1,0),(138,3,10,'CL','Professional Licenses',1,0,0,1,0),(139,3,11,'CL','Trade unions',1,0,0,1,0),(140,3,12,'CL','Industry affilations or Memberships',1,0,0,1,0),(141,3,13,'HS','Attach a copy of your safety program',1,0,0,1,0),(142,3,5,'HS','Do you have a safety officer or department?',1,0,0,1,0),(143,3,14,'HS','Provide your workers compensation Experience Modification Rate(EMR)',1,0,0,1,0),(144,3,5,'HS','Attach your insurance agent\'s EMR verification Letter',1,0,0,1,0),(145,3,15,'HS','How often do you hold regular safety meetings for field supervisors?',1,0,0,1,0),(146,3,15,'HS','how often does your company hold a job site safety metting?',1,0,0,1,0),(147,3,5,'HS','Does your copmpany have a substance abuse program?',1,0,0,1,0),(148,3,5,'HS','Does your company have an orientation program for newly appointed supervisors?',1,0,0,1,0),(149,3,14,'HS','Man-hours worked',1,0,0,1,0),(150,3,14,'HS','First Aid cases',1,0,0,1,0),(151,3,14,'HS','Recordable Incident Rate(RIR)',1,0,0,1,0),(152,3,14,'HS','Lost Time/Workday cases',1,0,0,1,0),(153,3,14,'HS','Lost Time/Workday Incident cases(LTWR)',1,0,0,1,0),(154,3,14,'HS','fatalities',1,0,0,1,0),(155,3,14,'HS','Average number of employees',1,0,0,1,0),(156,3,16,'IS','Total Bonding capacity',1,0,0,1,0),(157,3,16,'IS','Bonding capacity per project',1,0,0,1,0),(158,3,16,'IS','Average bonding capacity as of this date',1,0,0,1,0),(159,3,17,'IS','bond rate(%)',1,0,0,1,0),(160,3,5,'IS','Attach a reference letter stating aggregrate and single project bonding capacity from your surety company',1,0,0,1,0),(161,3,18,'IS','Insurance Limits',1,0,0,1,0),(162,3,19,'IS','Bonding Agent references',1,0,0,1,0),(163,3,19,'IS','surety References',1,0,0,1,0),(164,3,19,'IS','Insurance References',1,0,0,1,0),(165,3,5,'FIN','Attach a current financial statement. Ideally this is an audited finacial statement covering the last three years',1,0,0,1,0),(166,3,14,'FIN','Revenue',1,0,0,1,0),(167,3,14,'FIN','Net worth',1,0,0,1,0),(168,3,16,'FIN','Current working capital',1,0,0,1,0),(169,3,16,'FIN','Current Assests',1,0,0,1,0),(170,3,16,'FIN','Currrent Liabilities',1,0,0,1,0),(171,3,16,'FIN','What is your current backlog',1,0,0,1,0),(172,3,5,'FIN','Are there are outstanding debts or loans that exceed 20% of your company\'s current net worth?',1,0,0,1,0),(173,3,14,'FIN','Numbers of contrats completed',1,0,0,1,0),(174,3,14,'FIN','Average contract size',1,0,0,1,0),(175,3,19,'FIN','Banking References',1,0,0,1,0),(176,3,20,'WEX','List atleast three major projects your company currently has under contract',1,0,0,1,0),(177,3,21,'WEX','What is the largest contract your company has completed in last three years?',1,0,0,1,0),(178,3,20,'WEX','List atleast three additional projects your company  has completed in the last  five years',1,0,0,1,0),(179,3,5,'LGL','Has your company, its owners, or officers  been in involved in litigation regarding a construction contract within the last three years?',1,0,0,1,0),(180,3,5,'LGL','Has your company falled to complete a construction contract, defaulted, or terminated for cause within the last three years?',1,0,0,1,0),(181,3,5,'LGL','Has your company had any safety or environmental related citations from authorities in last three years?',1,0,0,1,0),(182,3,5,'LGL','Has your company, Its owners, or officers filed for bankruptcy protection within the last three years?',1,0,0,1,0),(183,3,5,'LGL','Has a complaint ever been filed with a licensing agency against your firm?',1,0,0,1,0),(184,3,5,'LGL','Has a surety ever finished one or more of your construction project?',1,0,0,1,0),(185,3,5,'LGL','Has your firm ever been assessed liquidated damages on a project?',1,0,0,1,0),(186,3,5,'LGL','Are threre any remaining issues or conflicts or  interest that would have material effect on your company, its owners or officers, In their operation, financial structure, or ability to perform work for our company?',1,0,0,1,0),(187,3,5,'OTH','Would you like to provide any additional information you feel would help our company determine your company\'s  qualification and expertise?',1,0,0,1,0),(188,3,1,'SIG','Full Name',1,1,0,1,0),(189,3,1,'SIG','Title',1,0,0,1,0),(190,4,1,'CP','Company Name',1,1,0,1,0),(191,4,2,'CP','Office location',1,1,0,1,0),(192,4,3,'CP','Business Type',1,0,0,1,0),(193,4,3,'CP','Labour Type',1,0,0,1,0),(194,4,3,'CP','Work Performed',1,0,0,1,0),(195,4,4,'CP','Ownership/Business Structure',1,0,0,1,0),(196,4,5,'CP','Has a company ever done business under diferent name?',1,0,0,1,0),(197,4,5,'CP','Is your company owned or controlled by a parent corporation?',1,0,0,1,0),(198,4,5,'CP','Does someone outside of your company perform your estimating?',1,0,0,1,0),(199,4,8,'CP','Number of employees',1,0,0,1,0),(200,4,9,'CP','Owner or officers of your company',1,0,0,1,0),(201,4,17,'CP','this is a custom question',0,1,0,1,0),(202,4,10,'CL','Professional Licenses',1,0,0,1,0),(203,4,11,'CL','Trade unions',1,0,0,1,0),(204,4,12,'CL','Industry affilations or Memberships',1,0,0,1,0),(205,4,13,'HS','Attach a copy of your safety program',1,0,0,1,0),(206,4,5,'HS','Do you have a safety officer or department?',1,0,0,1,0),(207,4,14,'HS','Provide your workers compensation Experience Modification Rate(EMR)',1,0,0,1,0),(208,4,5,'HS','Attach your insurance agent\'s EMR verification Letter',1,0,0,1,0),(209,4,15,'HS','How often do you hold regular safety meetings for field supervisors?',1,0,0,1,0),(210,4,15,'HS','how often does your company hold a job site safety metting?',1,0,0,1,0),(211,4,5,'HS','Does your copmpany have a substance abuse program?',1,0,0,1,0),(212,4,5,'HS','Does your company have an orientation program for newly appointed supervisors?',1,0,0,1,0),(213,4,14,'HS','Man-hours worked',1,0,0,1,0),(214,4,14,'HS','First Aid cases',1,0,0,1,0),(215,4,14,'HS','Recordable Incident Rate(RIR)',1,0,0,1,0),(216,4,14,'HS','Lost Time/Workday cases',1,0,0,1,0),(217,4,14,'HS','Lost Time/Workday Incident cases(LTWR)',1,0,0,1,0),(218,4,14,'HS','fatalities',1,0,0,1,0),(219,4,14,'HS','Average number of employees',1,0,0,1,0),(220,4,16,'IS','Total Bonding capacity',1,0,0,1,0),(221,4,16,'IS','Bonding capacity per project',1,0,0,1,0),(222,4,16,'IS','Average bonding capacity as of this date',1,0,0,1,0),(223,4,17,'IS','bond rate(%)',1,0,0,1,0),(224,4,5,'IS','Attach a reference letter stating aggregrate and single project bonding capacity from your surety company',1,0,0,1,0),(225,4,18,'IS','Insurance Limits',1,0,0,1,0),(226,4,19,'IS','Bonding Agent references',1,0,0,1,0),(227,4,19,'IS','surety References',1,0,0,1,0),(228,4,19,'IS','Insurance References',1,0,0,1,0),(229,4,5,'FIN','Attach a current financial statement. Ideally this is an audited finacial statement covering the last three years',1,0,0,1,0),(230,4,14,'FIN','Revenue',1,0,0,1,0),(231,4,14,'FIN','Net worth',1,0,0,1,0),(232,4,16,'FIN','Current working capital',1,0,0,1,0),(233,4,16,'FIN','Current Assests',1,0,0,1,0),(234,4,16,'FIN','Currrent Liabilities',1,0,0,1,0),(235,4,16,'FIN','What is your current backlog',1,0,0,1,0),(236,4,5,'FIN','Are there are outstanding debts or loans that exceed 20% of your company\'s current net worth?',1,0,0,1,0),(237,4,14,'FIN','Numbers of contrats completed',1,0,0,1,0),(238,4,14,'FIN','Average contract size',1,0,0,1,0),(239,4,19,'FIN','Banking References',1,0,0,1,0),(240,4,20,'WEX','List atleast three major projects your company currently has under contract',1,0,0,1,0),(241,4,21,'WEX','What is the largest contract your company has completed in last three years?',1,0,0,1,0),(242,4,20,'WEX','List atleast three additional projects your company  has completed in the last  five years',1,0,0,1,0),(243,4,5,'LGL','Has your company, its owners, or officers  been in involved in litigation regarding a construction contract within the last three years?',1,0,0,1,0),(244,4,5,'LGL','Has your company falled to complete a construction contract, defaulted, or terminated for cause within the last three years?',1,0,0,1,0),(245,4,5,'LGL','Has your company had any safety or environmental related citations from authorities in last three years?',1,0,0,1,0),(246,4,5,'LGL','Has your company, Its owners, or officers filed for bankruptcy protection within the last three years?',1,0,0,1,0),(247,4,5,'LGL','Has a complaint ever been filed with a licensing agency against your firm?',1,0,0,1,0),(248,4,5,'LGL','Has a surety ever finished one or more of your construction project?',1,0,0,1,0),(249,4,5,'LGL','Has your firm ever been assessed liquidated damages on a project?',1,0,0,1,0),(250,4,5,'LGL','Are threre any remaining issues or conflicts or  interest that would have material effect on your company, its owners or officers, In their operation, financial structure, or ability to perform work for our company?',1,0,0,1,0),(251,4,1,'SIG','Full Name',1,1,0,1,0),(252,4,1,'SIG','Title',1,0,0,1,0),(253,4,5,'OTH','Would you like to provide any additional information you feel would help our company determine your company\'s  qualification and expertise?',1,0,0,1,0),(254,5,1,'CP','Company Name',1,1,0,1,0),(255,5,2,'CP','Office location',1,1,0,1,0),(256,5,3,'CP','Business Type',1,0,0,1,0),(257,5,3,'CP','Labour Type',1,0,0,1,0),(258,5,3,'CP','Work Performed',1,0,0,1,0),(259,5,4,'CP','Ownership/Business Structure',1,0,0,1,0),(260,5,5,'CP','Has a company ever done business under diferent name?',1,0,0,1,0),(261,5,5,'CP','Is your company owned or controlled by a parent corporation?',1,0,0,1,0),(262,5,5,'CP','Does someone outside of your company perform your estimating?',1,0,0,1,0),(263,5,8,'CP','Number of employees',1,0,0,1,0),(264,5,9,'CP','Owner or officers of your company',1,0,0,1,0),(265,5,17,'CP','this is a custom question',0,1,0,1,0),(266,5,10,'CL','Professional Licenses',1,0,0,1,0),(267,5,11,'CL','Trade unions',1,0,0,1,0),(268,5,12,'CL','Industry affilations or Memberships',1,0,0,1,0),(269,5,13,'HS','Attach a copy of your safety program',1,0,0,1,0),(270,5,5,'HS','Do you have a safety officer or department?',1,0,0,1,0),(271,5,14,'HS','Provide your workers compensation Experience Modification Rate(EMR)',1,0,0,1,0),(272,5,5,'HS','Attach your insurance agent\'s EMR verification Letter',1,0,0,1,0),(273,5,15,'HS','How often do you hold regular safety meetings for field supervisors?',1,0,0,1,0),(274,5,15,'HS','how often does your company hold a job site safety metting?',1,0,0,1,0),(275,5,5,'HS','Does your copmpany have a substance abuse program?',1,0,0,1,0),(276,5,5,'HS','Does your company have an orientation program for newly appointed supervisors?',1,0,0,1,0),(277,5,14,'HS','Man-hours worked',1,0,0,1,0),(278,5,14,'HS','First Aid cases',1,0,0,1,0),(279,5,14,'HS','Recordable Incident Rate(RIR)',1,0,0,1,0),(280,5,14,'HS','Lost Time/Workday cases',1,0,0,1,0),(281,5,14,'HS','Lost Time/Workday Incident cases(LTWR)',1,0,0,1,0),(282,5,14,'HS','fatalities',1,0,0,1,0),(283,5,14,'HS','Average number of employees',1,0,0,1,0),(284,5,16,'IS','Total Bonding capacity',1,0,0,1,0),(285,5,16,'IS','Bonding capacity per project',1,0,0,1,0),(286,5,16,'IS','Average bonding capacity as of this date',1,0,0,1,0),(287,5,17,'IS','bond rate(%)',1,0,0,1,0),(288,5,5,'IS','Attach a reference letter stating aggregrate and single project bonding capacity from your surety company',1,0,0,1,0),(289,5,18,'IS','Insurance Limits',1,0,0,1,0),(290,5,19,'IS','Bonding Agent references',1,0,0,1,0),(291,5,19,'IS','surety References',1,0,0,1,0),(292,5,19,'IS','Insurance References',1,0,0,1,0),(293,5,5,'FIN','Attach a current financial statement. Ideally this is an audited finacial statement covering the last three years',1,0,0,1,0),(294,5,14,'FIN','Revenue',1,0,0,1,0),(295,5,14,'FIN','Net worth',1,0,0,1,0),(296,5,16,'FIN','Current working capital',1,0,0,1,0),(297,5,16,'FIN','Current Assests',1,0,0,1,0),(298,5,16,'FIN','Currrent Liabilities',1,0,0,1,0),(299,5,16,'FIN','What is your current backlog',1,0,0,1,0),(300,5,5,'FIN','Are there are outstanding debts or loans that exceed 20% of your company\'s current net worth?',1,0,0,1,0),(301,5,14,'FIN','Numbers of contrats completed',1,0,0,1,0),(302,5,14,'FIN','Average contract size',1,0,0,1,0),(303,5,19,'FIN','Banking References',1,0,0,1,0),(304,5,20,'WEX','List atleast three major projects your company currently has under contract',1,0,0,1,0),(305,5,21,'WEX','What is the largest contract your company has completed in last three years?',1,0,0,1,0),(306,5,20,'WEX','List atleast three additional projects your company  has completed in the last  five years',1,0,0,1,0),(307,5,5,'LGL','Has your company, its owners, or officers  been in involved in litigation regarding a construction contract within the last three years?',1,0,0,1,0),(308,5,5,'LGL','Has your company falled to complete a construction contract, defaulted, or terminated for cause within the last three years?',1,0,0,1,0),(309,5,5,'LGL','Has your company had any safety or environmental related citations from authorities in last three years?',1,0,0,1,0),(310,5,5,'LGL','Has your company, Its owners, or officers filed for bankruptcy protection within the last three years?',1,0,0,1,0),(311,5,5,'LGL','Has a complaint ever been filed with a licensing agency against your firm?',1,0,0,1,0),(312,5,5,'LGL','Has a surety ever finished one or more of your construction project?',1,0,0,1,0),(313,5,5,'LGL','Has your firm ever been assessed liquidated damages on a project?',1,0,0,1,0),(314,5,5,'LGL','Are threre any remaining issues or conflicts or  interest that would have material effect on your company, its owners or officers, In their operation, financial structure, or ability to perform work for our company?',1,0,0,1,0),(315,5,1,'SIG','Full Name',1,1,0,1,0),(316,5,1,'SIG','Title',1,0,0,1,0),(317,5,5,'OTH','Would you like to provide any additional information you feel would help our company determine your company\'s  qualification and expertise?',1,0,0,1,0),(318,6,1,'CP','Company Name',1,1,0,1,0),(319,6,2,'CP','Office location',1,1,0,1,0),(320,6,3,'CP','Business Type',1,0,0,1,0),(321,6,3,'CP','Labour Type',1,0,0,1,0),(322,6,3,'CP','Work Performed',1,0,0,1,0),(323,6,4,'CP','Ownership/Business Structure',1,0,0,1,0),(324,6,5,'CP','Has a company ever done business under diferent name?',1,0,0,1,0),(325,6,5,'CP','Is your company owned or controlled by a parent corporation?',1,0,0,1,0),(326,6,5,'CP','Does someone outside of your company perform your estimating?',1,1,0,1,0),(327,6,8,'CP','Number of employees',1,1,0,1,0),(328,6,9,'CP','Owner or officers of your company',1,0,0,1,0),(329,6,17,'CP','this is a custom question',0,1,0,1,0),(330,6,10,'CL','Professional Licenses',1,0,0,1,0),(331,6,11,'CL','Trade unions',1,0,0,1,0),(332,6,12,'CL','Industry affilations or Memberships',1,0,0,1,0),(333,6,13,'HS','Attach a copy of your safety program',1,0,0,1,0),(334,6,5,'HS','Do you have a safety officer or department?',1,0,0,1,0),(335,6,14,'HS','Provide your workers compensation Experience Modification Rate(EMR)',1,0,0,1,0),(336,6,5,'HS','Attach your insurance agent\'s EMR verification Letter',1,0,0,1,0),(337,6,15,'HS','How often do you hold regular safety meetings for field supervisors?',1,0,0,1,0),(338,6,15,'HS','how often does your company hold a job site safety metting?',1,0,0,1,0),(339,6,5,'HS','Does your copmpany have a substance abuse program?',1,0,0,1,0),(340,6,5,'HS','Does your company have an orientation program for newly appointed supervisors?',1,0,0,1,0),(341,6,14,'HS','Man-hours worked',1,0,0,1,0),(342,6,14,'HS','First Aid cases',1,0,0,1,0),(343,6,14,'HS','Recordable Incident Rate(RIR)',1,0,0,1,0),(344,6,14,'HS','Lost Time/Workday cases',1,0,0,1,0),(345,6,14,'HS','Lost Time/Workday Incident cases(LTWR)',1,0,0,1,0),(346,6,14,'HS','fatalities',1,0,0,1,0),(347,6,14,'HS','Average number of employees',1,0,0,1,0),(348,6,16,'IS','Total Bonding capacity',1,0,0,1,0),(349,6,16,'IS','Bonding capacity per project',1,0,0,1,0),(350,6,16,'IS','Average bonding capacity as of this date',1,0,0,1,0),(351,6,17,'IS','bond rate(%)',1,0,0,1,0),(352,6,5,'IS','Attach a reference letter stating aggregrate and single project bonding capacity from your surety company',1,0,0,1,0),(353,6,18,'IS','Insurance Limits',1,0,0,1,0),(354,6,19,'IS','Bonding Agent references',1,0,0,1,0),(355,6,19,'IS','surety References',1,0,0,1,0),(356,6,19,'IS','Insurance References',1,0,0,1,0),(357,6,5,'FIN','Attach a current financial statement. Ideally this is an audited finacial statement covering the last three years',1,0,0,1,0),(358,6,14,'FIN','Revenue',1,0,0,1,0),(359,6,14,'FIN','Net worth',1,0,0,1,0),(360,6,16,'FIN','Current working capital',1,0,0,1,0),(361,6,16,'FIN','Current Assests',1,0,0,1,0),(362,6,16,'FIN','Currrent Liabilities',1,0,0,1,0),(363,6,16,'FIN','What is your current backlog',1,0,0,1,0),(364,6,5,'FIN','Are there are outstanding debts or loans that exceed 20% of your company\'s current net worth?',1,0,0,1,0),(365,6,14,'FIN','Numbers of contrats completed',1,0,0,1,0),(366,6,14,'FIN','Average contract size',1,0,0,1,0),(367,6,19,'FIN','Banking References',1,0,0,1,0),(368,6,20,'WEX','List atleast three major projects your company currently has under contract',1,0,0,1,0),(369,6,21,'WEX','What is the largest contract your company has completed in last three years?',1,0,0,1,0),(370,6,20,'WEX','List atleast three additional projects your company  has completed in the last  five years',1,0,0,1,0),(371,6,5,'LGL','Has your company, its owners, or officers  been in involved in litigation regarding a construction contract within the last three years?',1,0,0,1,0),(372,6,5,'LGL','Has your company falled to complete a construction contract, defaulted, or terminated for cause within the last three years?',1,0,0,1,0),(373,6,5,'LGL','Has your company had any safety or environmental related citations from authorities in last three years?',1,0,0,1,0),(374,6,5,'LGL','Has your company, Its owners, or officers filed for bankruptcy protection within the last three years?',1,0,0,1,0),(375,6,5,'LGL','Has a complaint ever been filed with a licensing agency against your firm?',1,0,0,1,0),(376,6,5,'LGL','Has a surety ever finished one or more of your construction project?',1,0,0,1,0),(377,6,5,'LGL','Has your firm ever been assessed liquidated damages on a project?',1,0,0,1,0),(378,6,5,'LGL','Are threre any remaining issues or conflicts or  interest that would have material effect on your company, its owners or officers, In their operation, financial structure, or ability to perform work for our company?',1,0,0,1,0),(379,6,1,'SIG','Full Name',1,1,0,1,0),(380,6,1,'SIG','Title',1,0,0,1,0),(381,6,5,'OTH','Would you like to provide any additional information you feel would help our company determine your company\'s  qualification and expertise?',1,0,0,1,0);
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions_default`
--

DROP TABLE IF EXISTS `questions_default`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions_default` (
  `question_type` int(11) NOT NULL,
  `section` enum('CP','CL','HS','IS','FIN','WEX','LGL','SIG','OTH') NOT NULL,
  `text` varchar(1000) NOT NULL,
  `isDefault` tinyint(4) NOT NULL DEFAULT '1',
  `isRequired` tinyint(4) NOT NULL DEFAULT '1',
  `isIncluded` tinyint(1) DEFAULT '1',
  `isDisabled` tinyint(1) DEFAULT '0',
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions_default`
--

LOCK TABLES `questions_default` WRITE;
/*!40000 ALTER TABLE `questions_default` DISABLE KEYS */;
INSERT INTO `questions_default` VALUES (1,'CP','Company Name',1,1,1,1,1),(2,'CP','Office location',1,1,1,1,2),(3,'CP','Business Type',1,0,1,0,3),(3,'CP','Labour Type',1,0,1,0,4),(3,'CP','Work Performed',1,0,1,0,5),(4,'CP','Ownership/Business Structure',1,0,1,0,6),(5,'CP','Has a company ever done business under diferent name?',1,0,1,0,7),(5,'CP','Is your company owned or controlled by a parent corporation?',1,0,1,0,8),(5,'CP','Does someone outside of your company perform your estimating?',1,0,1,0,9),(8,'CP','Number of employees',1,0,1,0,10),(9,'CP','Owner or officers of your company',1,0,1,0,11),(10,'CL','Professional Licenses',1,0,1,0,12),(11,'CL','Trade unions',1,0,1,0,13),(12,'CL','Industry affilations or Memberships',1,0,1,0,14),(13,'HS','Attach a copy of your safety program',1,0,1,0,15),(5,'HS','Do you have a safety officer or department?',1,0,1,0,16),(14,'HS','Provide your workers compensation Experience Modification Rate(EMR)',1,0,1,0,17),(5,'HS','Attach your insurance agent\'s EMR verification Letter',1,0,1,0,18),(15,'HS','How often do you hold regular safety meetings for field supervisors?',1,0,1,0,19),(15,'HS','how often does your company hold a job site safety metting?',1,0,1,0,20),(5,'HS','Does your copmpany have a substance abuse program?',1,0,1,0,21),(5,'HS','Does your company have an orientation program for newly appointed supervisors?',1,0,1,0,22),(14,'HS','Man-hours worked',1,0,1,0,23),(14,'HS','First Aid cases',1,0,1,0,24),(14,'HS','Recordable Incident Rate(RIR)',1,0,1,0,25),(14,'HS','Lost Time/Workday cases',1,0,1,0,26),(14,'HS','Lost Time/Workday Incident cases(LTWR)',1,0,1,0,27),(14,'HS','fatalities',1,0,1,0,28),(14,'HS','Average number of employees',1,0,1,0,29),(16,'IS','Total Bonding capacity',1,0,1,0,30),(16,'IS','Bonding capacity per project',1,0,1,0,31),(16,'IS','Average bonding capacity as of this date',1,0,1,0,32),(17,'IS','bond rate(%)',1,0,1,0,33),(5,'IS','Attach a reference letter stating aggregrate and single project bonding capacity from your surety company',1,0,1,0,34),(18,'IS','Insurance Limits',1,0,1,0,35),(19,'IS','Bonding Agent references',1,0,1,0,36),(19,'IS','surety References',1,0,1,0,37),(19,'IS','Insurance References',1,0,1,0,38),(5,'FIN','Attach a current financial statement. Ideally this is an audited finacial statement covering the last three years',1,0,1,0,39),(14,'FIN','Revenue',1,0,1,0,40),(14,'FIN','Net worth',1,0,1,0,41),(16,'FIN','Current working capital',1,0,1,0,42),(16,'FIN','Current Assests',1,0,1,0,43),(16,'FIN','Currrent Liabilities',1,0,1,0,44),(16,'FIN','What is your current backlog',1,0,1,0,45),(5,'FIN','Are there are outstanding debts or loans that exceed 20% of your company\'s current net worth?',1,0,1,0,46),(14,'FIN','Numbers of contrats completed',1,0,1,0,47),(14,'FIN','Average contract size',1,0,1,0,48),(19,'FIN','Banking References',1,0,1,0,49),(20,'WEX','List atleast three major projects your company currently has under contract',1,0,1,0,50),(21,'WEX','What is the largest contract your company has completed in last three years?',1,0,1,0,51),(20,'WEX','List atleast three additional projects your company  has completed in the last  five years',1,0,1,0,52),(5,'LGL','Has your company, its owners, or officers  been in involved in litigation regarding a construction contract within the last three years?',1,0,1,0,53),(5,'LGL','Has your company falled to complete a construction contract, defaulted, or terminated for cause within the last three years?',1,0,1,0,54),(5,'LGL','Has your company had any safety or environmental related citations from authorities in last three years?',1,0,1,0,55),(5,'LGL','Has your company, Its owners, or officers filed for bankruptcy protection within the last three years?',1,0,1,0,56),(5,'LGL','Has a complaint ever been filed with a licensing agency against your firm?',1,0,1,0,57),(5,'LGL','Has a surety ever finished one or more of your construction project?',1,0,1,0,58),(5,'LGL','Has your firm ever been assessed liquidated damages on a project?',1,0,1,0,59),(5,'LGL','Are threre any remaining issues or conflicts or  interest that would have material effect on your company, its owners or officers, In their operation, financial structure, or ability to perform work for our company?',1,0,1,0,60),(5,'OTH','Would you like to provide any additional information you feel would help our company determine your company\'s  qualification and expertise?',1,0,1,0,61),(1,'SIG','Full Name',1,1,1,0,62),(1,'SIG','Title',1,0,1,0,63);
/*!40000 ALTER TABLE `questions_default` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `state`
--

DROP TABLE IF EXISTS `state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `state` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country_id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `state`
--

LOCK TABLES `state` WRITE;
/*!40000 ALTER TABLE `state` DISABLE KEYS */;
INSERT INTO `state` VALUES (1,1,'ANDHRA PRADESH'),(2,1,'ASSAM'),(3,1,'ARUNACHAL PRADESH'),(4,1,'GUJRAT'),(5,1,'BIHAR'),(6,1,'HARYANA'),(7,1,'HIMACHAL PRADESH'),(8,1,'JAMMU & KASHMIR'),(9,1,'KARNATAKA'),(10,1,'KERALA'),(11,1,'MADHYA PRADESH'),(12,1,'MAHARASHTRA'),(13,1,'MANIPUR'),(14,1,'MEGHALAYA'),(15,1,'MIZORAM'),(16,1,'NAGALAND'),(17,1,'ORISSA'),(18,1,'PUNJAB'),(19,1,'RAJASTHAN'),(20,1,'SIKKIM'),(21,1,'TAMIL NADU'),(22,1,'TRIPURA'),(23,1,'UTTAR PRADESH'),(24,1,'WEST BENGAL'),(25,1,'GOA'),(26,1,'PONDICHERY'),(27,1,'LAKSHDWEEP'),(28,1,'DAMAN & DIU'),(29,1,'DADRA & NAGAR'),(30,1,'CHANDIGARH'),(31,1,'ANDAMAN & NICOBAR'),(32,1,'UTTARANCHAL'),(33,1,'JHARKHAND'),(34,1,'CHATTISGARH'),(35,1,'ASSAM');
/*!40000 ALTER TABLE `state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(300) NOT NULL,
  `password` varchar(500) NOT NULL,
  `pic` varchar(200) DEFAULT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT '0',
  `user_role_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Swagatak ','Mundu','swagatak@one.com','$2b$10$0XdUAkuIDpWqbqNPpXSgNeaGtHnp1ZbjcIxOoJVU/r7xWB77jeoPi',NULL,1,1),(2,'Swagata','Kundu','me@swagatak.one','$2b$10$FlF3iMcHEbhZQfQYIoSffO7UlNshOgeJbE9FLjl9TW/oZZEb2wTy.',NULL,1,1),(3,'Rohit','Sharm','test2@srohit.in','$2b$10$cFi2bavXs8kki3jO7xeDneHnX13dwOQC0T4EnR9cC86tFTfiZNZsm',NULL,1,1),(4,'Rohit','Kumar','me2@swagatak.one','$2b$10$oudhNPY4UbkHdMj6BOAUkuoluTJHQW3SE3NttrF1zEr1mk9mcjv7e',NULL,1,1),(5,'Swagata','Kundu','ashish@one.com','$2b$10$HvGQqhKuFDyxULaNYKBotuZvSqGZlz0VUN9lW7JNWWxW.eaDG6x52',NULL,0,1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_company_notification_link`
--

DROP TABLE IF EXISTS `user_company_notification_link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_company_notification_link` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `status` enum('ALLOWED','BLOCKED') DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_company_notification_link_1_idx` (`user_id`),
  KEY `fk_user_company_notification_link_2` (`company_id`),
  CONSTRAINT `fk_user_company_notification_link_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_company_notification_link_2` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_company_notification_link`
--

LOCK TABLES `user_company_notification_link` WRITE;
/*!40000 ALTER TABLE `user_company_notification_link` DISABLE KEYS */;
INSERT INTO `user_company_notification_link` VALUES (1,1,2,'BLOCKED'),(2,1,2,'ALLOWED');
/*!40000 ALTER TABLE `user_company_notification_link` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_jungle_permission`
--

DROP TABLE IF EXISTS `user_jungle_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_jungle_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_company_id` (`user_id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_jungle_permission`
--

LOCK TABLES `user_jungle_permission` WRITE;
/*!40000 ALTER TABLE `user_jungle_permission` DISABLE KEYS */;
INSERT INTO `user_jungle_permission` VALUES (4,1),(1,2),(5,4);
/*!40000 ALTER TABLE `user_jungle_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_mfs_permission`
--

DROP TABLE IF EXISTS `user_mfs_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_mfs_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `autoAdd` tinyint(1) DEFAULT '0',
  `permission` enum('NO','VIEW','LIMITED','ADMIN') DEFAULT 'VIEW',
  PRIMARY KEY (`id`),
  KEY `fk_user_mfs_permission_user_id` (`user_id`),
  CONSTRAINT `fk_user_mfs_permission_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_mfs_permission`
--

LOCK TABLES `user_mfs_permission` WRITE;
/*!40000 ALTER TABLE `user_mfs_permission` DISABLE KEYS */;
INSERT INTO `user_mfs_permission` VALUES (1,2,1,'ADMIN'),(5,1,1,'VIEW'),(6,4,1,'ADMIN');
/*!40000 ALTER TABLE `user_mfs_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_office_profile`
--

DROP TABLE IF EXISTS `user_office_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_office_profile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `office_id` int(11) NOT NULL,
  `isPrimaryOffice` tinyint(1) DEFAULT '1',
  `technical_lead` tinyint(1) DEFAULT '0',
  `job_title` varchar(100) NOT NULL,
  `personal_phone` varchar(20) DEFAULT NULL,
  `work_phone` varchar(15) NOT NULL,
  `work_performed` json NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_company_profile_1_idx` (`office_id`),
  KEY `fk_user_office_profile_1_idx` (`user_id`),
  CONSTRAINT `fk_user_company_profile_1` FOREIGN KEY (`office_id`) REFERENCES `company_office` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_office_profile_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_office_profile`
--

LOCK TABLES `user_office_profile` WRITE;
/*!40000 ALTER TABLE `user_office_profile` DISABLE KEYS */;
INSERT INTO `user_office_profile` VALUES (1,1,1,0,1,'Senior Developer','8750912129','9748162576','[1]'),(2,2,2,1,0,'Developer',NULL,'8750912129','[]'),(3,3,2,1,0,'',NULL,'','[]'),(4,4,7,1,0,'Developer',NULL,'8750912129','[1]'),(5,1,3,1,0,'Senior Developer','8750912129','9748162576','[1]'),(7,1,6,0,1,'Senior Developer','8750912129','9748162576','[1]');
/*!40000 ALTER TABLE `user_office_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_preference`
--

DROP TABLE IF EXISTS `user_preference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_preference` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `notification_preference` enum('ALL','BLOCKED','ALLOWED') NOT NULL DEFAULT 'ALL',
  `start_page` enum('OM','QM','PM') NOT NULL DEFAULT 'QM',
  `tz` varchar(45) NOT NULL DEFAULT '+00:00',
  PRIMARY KEY (`id`),
  KEY `fk_user_preference_1_idx` (`user_id`),
  CONSTRAINT `fk_user_preference_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_preference`
--

LOCK TABLES `user_preference` WRITE;
/*!40000 ALTER TABLE `user_preference` DISABLE KEYS */;
INSERT INTO `user_preference` VALUES (1,1,'BLOCKED','PM','-11:00'),(2,2,'ALL','QM','+00:00'),(3,4,'ALL','QM','+00:00');
/*!40000 ALTER TABLE `user_preference` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_reset_password`
--

DROP TABLE IF EXISTS `user_reset_password`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_reset_password` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(200) NOT NULL,
  `hash` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_reset_password`
--

LOCK TABLES `user_reset_password` WRITE;
/*!40000 ALTER TABLE `user_reset_password` DISABLE KEYS */;
INSERT INTO `user_reset_password` VALUES (1,'test2@srohit.in','1974f9b0-e5e8-11e8-9f54-05ffdcd3bb91');
/*!40000 ALTER TABLE `user_reset_password` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_verify_email`
--

DROP TABLE IF EXISTS `user_verify_email`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_verify_email` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(200) NOT NULL,
  `user_id` int(11) NOT NULL,
  `hash` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_verify_email_user_id_idx` (`user_id`),
  CONSTRAINT `fk_user_verify_email_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_verify_email`
--

LOCK TABLES `user_verify_email` WRITE;
/*!40000 ALTER TABLE `user_verify_email` DISABLE KEYS */;
INSERT INTO `user_verify_email` VALUES (1,'me@swagatak.one',2,'$2b$10$qTmjaBhgiICtm.L040JFBO8xeZArdpcqp3S4N58LkIIhBnttZSxA2'),(2,'ashish@one.com',5,'$2b$10$oiyx/tdGv0qTRVcZp9k4WeSNgfmTuz9VQMHW3GShB8CDrMAmA7Lna');
/*!40000 ALTER TABLE `user_verify_email` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_devision`
--

DROP TABLE IF EXISTS `work_devision`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `work_devision` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_devision`
--

LOCK TABLES `work_devision` WRITE;
/*!40000 ALTER TABLE `work_devision` DISABLE KEYS */;
INSERT INTO `work_devision` VALUES (1,'D1');
/*!40000 ALTER TABLE `work_devision` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_performed`
--

DROP TABLE IF EXISTS `work_performed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `work_performed` (
  `id` int(11) NOT NULL,
  `work_devision_id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_work_performed_1_idx` (`work_devision_id`),
  CONSTRAINT `fk_work_performed_1` FOREIGN KEY (`work_devision_id`) REFERENCES `work_devision` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_performed`
--

LOCK TABLES `work_performed` WRITE;
/*!40000 ALTER TABLE `work_performed` DISABLE KEYS */;
INSERT INTO `work_performed` VALUES (1,1,'Sample-Work');
/*!40000 ALTER TABLE `work_performed` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'aexyn'
--
/*!50003 DROP PROCEDURE IF EXISTS `sp_create_first_questionier` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE  PROCEDURE `sp_create_first_questionier`(
in company_id int(11))
BEGIN
DECLARE question_set_id INT;

INSERT INTO question_set(`company_id`,`isDeleted`,`hash`,`opening_statement`)
values(company_id,false,UUID(),"Please complete all the questions. The contents of this questionnaire will be considered confidention and used safety to determine your firm's qualification and will not be disclosed to others.");

SET question_set_id= LAST_INSERT_ID();

SELECT question_set_id;

INSERT INTO questions(`question_set_id`,`question_type`,`section`,`text`,`isDefault`,`isRequired`,`isIncluded`,`isDisabled`)
SELECT question_set_id,
 `question_type`,`section`,`text`,`isDefault`,`isRequired`,`isIncluded`,`isDisabled` from questions_default;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_get_invites_from_jungle` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE  PROCEDURE `sp_get_invites_from_jungle`(
in company_id int(11),
in status varchar(100),
in sortBy varchar(10))
BEGIN
SELECT 
    QI.*,
    C.name AS company_name,
    C.img AS company_image,
    U.first_name,
    U.last_name,
    U.pic AS user_image,
	U.id AS user_id
FROM
    qualification_invites QI
        JOIN
    question_set QSET ON QSET.id = QI.qset_id
        JOIN
    company C ON C.id = QSET.company_id
        JOIN
    user U ON U.id = QI.invited_by
    WHERE QI.invited_company_id=company_id
    AND QI.status=status;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_get_office_employee_invitations` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE  PROCEDURE `sp_get_office_employee_invitations`(
in company_id int(11),
in invitee_company int(11))
BEGIN
SELECT 
    C.name AS company_name,
    C.img,
    C.id AS company_id,
    CO.id AS office_id,
    CO.city AS office,
    U.first_name,
    U.last_name,
    U.email,
    UOP.job_title,
    
    (SELECT 
    COUNT(EL.id)
	FROM
    email_invites EL
        JOIN
    question_set QSET ON EL.qset_id = QSET.id
    WHERE QSET.company_id=invitee_company AND EL.email=U.email) as isInvited
FROM
    company C
        JOIN
    company_office CO ON C.id = CO.company_id
        LEFT JOIN
    user_office_profile UOP ON UOP.office_id = CO.id
    LEFT JOIN user U ON UOP.user_id=U.id
    WHERE C.id=company_id
    AND UOP.isPrimaryOffice=true
    ORDER BY CO.city ASC;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_get_supplier_sent_invites` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE  PROCEDURE `sp_get_supplier_sent_invites`(
in company_id int(11),
in status varchar(100),
in sortBy varchar(10))
BEGIN

# List that are linked to company
SELECT 
    QI.*,
    C.name AS company_name,
    C.img AS company_image,
    company_id AS invited_by_company
FROM
    qualification_invites QI
        JOIN
    company C ON QI.invited_company_id = C.id
		JOIN
	question_set QSET ON QSET.id=QI.qset_id
    WHERE QSET.company_id=company_id
    AND QI.status=status;
 
#List that are not linked to any company 
IF status='SENT' THEN
SELECT 
    EI.*
FROM
    email_invites EI
        JOIN
    question_set QSET ON EI.qset_id = QSET.id
WHERE
    QSET.company_id = company_id
    AND invited_user_id IS NULL;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_invitaion_history` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE  PROCEDURE `sp_invitaion_history`(
IN invitation_id int(11))
BEGIN

	SELECT QA.*,U.first_name,U.last_name,U.pic 
    FROM qualification_invite_activity QA
    JOIN user U ON U.id=QA.user_id
    WHERE QA.invitation_id=invitation_id
    ORDER BY QA.id ASC;

            
            
	SELECT 
    U.id AS user_id,
    U.first_name,
    U.last_name,
    U.pic AS user_image,
    UOP.job_title,
    EI.date_created AS invited_on
FROM
    email_invites EI
        JOIN
    user U ON EI.email = U.email
        JOIN
    user_office_profile UOP ON UOP.user_id = U.id
        JOIN
    company_office CO ON CO.id = UOP.office_id
        JOIN
    qualification_invites QI ON QI.invited_company_id = CO.company_id
WHERE
    UOP.isPrimaryOffice = TRUE
        AND QI.id = invitation_id;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_invitaion_info_mfs` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE  PROCEDURE `sp_invitaion_info_mfs`(
IN invitation_id int(11),
IN qset_id int(11),
IN invited_company_id INT(11)
)
BEGIN


SELECT 
    U.id AS user_id,
    U.first_name,
    U.last_name,
    U.pic AS user_image
FROM
    email_invites EI
        JOIN
    user U ON EI.email = U.email
		JOIN
	user_office_profile UOP ON UOP.user_id=U.id
		JOIN
	company_office CO ON CO.id=UOP.office_id
	WHERE EI.qset_id=qset_id
    AND CO.company_id=invited_company_id
    AND UOP.isPrimaryOffice=true;
    
    
	SELECT 
    U.id AS user_id,
    U.first_name,
    U.last_name,
    U.pic AS user_image,
    QR.status
FROM
    qualification_reviewers QR
        JOIN
    user U ON QR.user_id = U.id
        JOIN
    user_office_profile UOP ON UOP.user_id = U.id
    WHERE UOP.isPrimaryOffice=TRUE
    AND QR.invitation_id=invitation_id;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_invitaion_status_mfs` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE  PROCEDURE `sp_invitaion_status_mfs`(
IN invitation_id int(11))
BEGIN


		SELECT 
            QI.*,
            C.name AS invited_by_company_name,
            C2.name as invited_company_name,
            C.id AS invited_by_company_id,
            QSET.opening_statement,
            CONCAT_WS(' ',U1.first_name,U1.last_name) AS edited_by_name,
			CONCAT_WS(' ',U2.first_name,U2.last_name) AS submitted_by_name,
			CONCAT_WS(' ',U3.first_name,U3.last_name) AS sent_by_name,
			U3.email AS sent_by_email


            
        FROM
            qualification_invites QI
                JOIN
            question_set QSET ON QI.qset_id = QSET.id
            JOIN company C ON QSET.company_id=C.id
            JOIN company C2 ON QI.invited_company_id=C2.id
            LEFT JOIN user U1 ON U1.id=QI.edited_by
			LEFT JOIN user U2 ON U2.id=QI.submitted_by
			LEFT JOIN user U3 ON U3.id=QI.invited_by
            WHERE QI.id=invitation_id;
            
            
	#Invited users
    
    SELECT 
    U.id AS user_id,
    U.first_name,
    U.last_name,
    U.pic AS user_image,
    UOP.job_title,
    EI.date_created AS invited_on
FROM
    email_invites EI
        JOIN
    user U ON EI.email = U.email
		JOIN
	user_office_profile UOP ON UOP.user_id=U.id
		JOIN
	company_office CO ON CO.id=UOP.office_id
		JOIN 
	qualification_invites QI ON QI.qset_id=EI.qset_id
	WHERE CO.company_id=QI.invited_company_id
    AND UOP.isPrimaryOffice=true
    AND QI.id=invitation_id;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_link_user_invites_to_company` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE  PROCEDURE `sp_link_user_invites_to_company`(
in company_id int(11),
in email varchar(200))
BEGIN

DROP TEMPORARY TABLE if exists t1;
CREATE TEMPORARY TABLE t1

SELECT EI.invited_by,EI.qset_id 
FROM email_invites EI 
JOIN question_set QSET ON QSET.id=EI.qset_id
WHERE EI.email=email 
AND QSET.company_id NOT IN(
	SELECT QSET.company_id #Find out already sent invitations for this company
    FROM qualification_invites QI 
    JOIN question_set QSET 
    ON QSET.id=QI.qset_id
    WHERE QI.invited_company_id=company_id);
    
#Insert these new invites to the company the user is signed up

INSERT INTO qualification_invites(`invited_company_id`,`invited_by`,`qset_id`)
SELECT company_id,t1.invited_by,t1.qset_id FROM t1;

DROP TEMPORARY TABLE if exists t1;

#Update the user_id in invited table for the new user
UPDATE email_invites EI
        JOIN
    user U ON EI.email = U.email 
SET 
    EI.invited_user_id = U.id
WHERE EI.invited_user_id IS NULL;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_qualification_invite_by_email` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE  PROCEDURE `sp_qualification_invite_by_email`(
in company_id int(11),
in qset_id int(11),
in invited_by int(11),
in email varchar(200))
BEGIN
DECLARE invited_company_id INT;
DECLARE old_qset_id INT;
DECLARE final_qset_id INT;

#GET company_id for the user if exists
SET invited_company_id= (SELECT 
    CO.company_id
FROM
    user_office_profile UOP
        JOIN
    user U ON UOP.user_id = U.id
        JOIN
    company_office CO ON CO.id = UOP.office_id
    WHERE U.email=email LIMIT 1);

#GET Question set id if the company exists    
SET old_qset_id=(SELECT 
    qset_id
FROM
    qualification_invites QI
        JOIN
    question_set QSET ON QI.qset_id = QSET.id
WHERE
    QI.invited_company_id = invited_company_id
        AND QSET.company_id = company_id
LIMIT 1);

IF old_qset_id IS NULL THEN
	SET final_qset_id=qset_id;
ELSE 
	SET final_qset_id=old_qset_id;
END IF;


IF invited_company_id IS NULL OR invited_company_id<>company_id THEN
	INSERT INTO email_invites(`email`,`qset_id`,`invited_by`)VALUES (email,final_qset_id,invited_by);
		 
	IF invited_company_id IS NOT NULL AND old_qset_id IS NULL THEN
			
			INSERT INTO qualification_invites(`invited_company_id`,`qset_id`,`invited_by`) VALUES(invited_company_id,final_qset_id,invited_by);
			
	END IF;    
END IF;

#Update the user_id in invited table for the new user
UPDATE email_invites EI
        JOIN
    user U ON EI.email = U.email 
SET 
    EI.invited_user_id = U.id
WHERE EI.invited_user_id IS NULL; 

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_search_company_for_invite` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE  PROCEDURE `sp_search_company_for_invite`(
in ignore_company int(11),
in searchText varchar (100),
in locations varchar(500),
in work_performed varchar(500),
in tags varchar(500),
in labour_types varchar(500),
in q_status varchar (500) 
)
BEGIN

DROP temporary table if exists AND_RESULTS;
DROP temporary table if exists OR_RESULTS;

CREATE temporary TABLE AND_RESULTS
SELECT 
	DISTINCT
    C.id AS company_id
FROM
    company C
        LEFT JOIN
    labour_type LT ON JSON_CONTAINS(C.labour_type, CAST(LT.id AS CHAR))
    JOIN company_office CO ON C.id=CO.company_id
    LEFT JOIN user_office_profile UOP ON UOP.office_id=CO.id
    LEFT JOIN work_performed WP on JSON_CONTAINS(UOP.work_performed, CAST(WP.id AS CHAR))
    LEFT JOIN company_tags CT ON CT.tags_for_company=C.id
    LEFT JOIN state STATE on CO.state_id=STATE.id
    LEFT JOIN country COUNTRY ON STATE.country_id=COUNTRY.id
    LEFT JOIN qualification_invites QI ON QI.invited_company_id=C.id
    WHERE C.id<>ignore_company
    AND (searchText='' OR C.name LIKE concat('%',searchText,'%'))
    AND (locations='' OR FIND_IN_SET(LOWER(COUNTRY.name),locations)>0 OR FIND_IN_SET(LOWER(CO.city),locations)>0)
    AND (work_performed='' OR work_performed IS NULL OR FIND_IN_SET(WP.id,work_performed)>0)
	AND (tags='' OR CT.tag IS NULL OR FIND_IN_SET(CT.tag,tags)>0)
    AND (q_status='' OR QI.status IS NULL OR FIND_IN_SET(QI.status,q_status)>0)
	AND (labour_types='' OR LT.id IS NULL OR FIND_IN_SET(LT.id,labour_types)>0);
    
CREATE temporary TABLE OR_RESULTS
SELECT 
	DISTINCT
    C.id AS company_id
FROM
    company C
        LEFT JOIN
    labour_type LT ON JSON_CONTAINS(C.labour_type, CAST(LT.id AS CHAR))
    JOIN company_office CO ON C.id=CO.company_id
    LEFT JOIN user_office_profile UOP ON UOP.office_id=CO.id
    LEFT JOIN work_performed WP on JSON_CONTAINS(UOP.work_performed, CAST(WP.id AS CHAR))
    LEFT JOIN company_tags CT ON CT.tags_for_company=C.id
    LEFT JOIN state STATE on CO.state_id=STATE.id
    LEFT JOIN country COUNTRY ON STATE.country_id=COUNTRY.id
	LEFT JOIN qualification_invites QI ON QI.invited_company_id=C.id
    WHERE C.id<>ignore_company
    AND
	((searchText='' OR C.name LIKE concat('%',searchText,'%'))
    OR (locations='' OR FIND_IN_SET(LOWER(COUNTRY.name),locations)>0 OR FIND_IN_SET(LOWER(CO.city),locations)>0)
    OR (work_performed='' OR work_performed IS NULL OR FIND_IN_SET(WP.id,work_performed)>0)
	OR (tags='' OR CT.tag IS NULL OR FIND_IN_SET(CT.tag,tags)>0)
	OR (q_status='' OR QI.status IS NULL OR FIND_IN_SET(QI.status,q_status)>0)
	OR (labour_types='' OR LT.id IS NULL OR FIND_IN_SET(LT.id,labour_types)>0));
    
    
SELECT 
    C.*,
	ANY_VALUE(QI.status) as qualification_status,
    group_concat(CO.name) AS locations
FROM
    AND_RESULTS JOIN company C ON C.id=AND_RESULTS.company_id
	LEFT JOIN qualification_invites QI ON QI.invited_company_id=C.id
    JOIN company_office CO ON CO.company_id=C.id GROUP BY C.id;
    
SELECT 
    C.*,
    ANY_VALUE(QI.status) AS qualification_status,
    group_concat(CO.name) AS locations
FROM
    OR_RESULTS JOIN company C ON C.id=OR_RESULTS.company_id
	LEFT JOIN qualification_invites QI ON QI.invited_company_id=C.id
    JOIN company_office CO ON CO.company_id=C.id GROUP BY C.id;
    
    DROP temporary table AND_RESULTS;
	DROP temporary table OR_RESULTS;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-13 18:24:39
