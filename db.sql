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
  `labour_type` json DEFAULT NULL,
  `business_type` json DEFAULT NULL,
  `img` varchar(500) DEFAULT '',
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'Aexyn','[1]','[]','','2018-11-03 21:40:06','2018-11-03 21:40:06'),(2,'One.com','[1]','[]','','2018-11-04 15:30:03','2018-11-04 15:30:03');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_office`
--

DROP TABLE IF EXISTS `company_office`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company_office` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address1` mediumtext NOT NULL,
  `address2` mediumtext NOT NULL,
  `phone_no` varchar(20) DEFAULT '',
  `city` varchar(200) NOT NULL,
  `zip` varchar(10) NOT NULL,
  `state_id` int(11) NOT NULL,
  `lat` float DEFAULT NULL,
  `lng` float DEFAULT NULL,
  `company_id` int(11) NOT NULL,
  `office_order` int(11) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_office`
--

LOCK TABLES `company_office` WRITE;
/*!40000 ALTER TABLE `company_office` DISABLE KEYS */;
INSERT INTO `company_office` VALUES (1,'743/21 Omnagar','Khandsha Road','','Hurgaon','122001',6,NULL,NULL,1,1),(2,'Dlf Phase 2','Dlf','','Gurgaon','122001',6,NULL,NULL,2,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_qm_permission`
--

LOCK TABLES `company_qm_permission` WRITE;
/*!40000 ALTER TABLE `company_qm_permission` DISABLE KEYS */;
INSERT INTO `company_qm_permission` VALUES (1,1,'DESIGNATED','NO'),(2,2,'DESIGNATED','NO');
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
  `qset_id` int(11) DEFAULT NULL,
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `email_invites`
--

LOCK TABLES `email_invites` WRITE;
/*!40000 ALTER TABLE `email_invites` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `office_package`
--

LOCK TABLES `office_package` WRITE;
/*!40000 ALTER TABLE `office_package` DISABLE KEYS */;
INSERT INTO `office_package` VALUES (1,1,1,'2018-11-03',NULL,NULL,NULL),(2,2,1,'2018-11-04',NULL,NULL,NULL);
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
-- Table structure for table `qualification_invites`
--

DROP TABLE IF EXISTS `qualification_invites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qualification_invites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `invited_company_id` int(11) DEFAULT NULL,
  `qset_id` int(11) DEFAULT NULL,
  `isDraft` tinyint(1) DEFAULT '0',
  `expiry_date` date DEFAULT NULL,
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qualification_invites`
--

LOCK TABLES `qualification_invites` WRITE;
/*!40000 ALTER TABLE `qualification_invites` DISABLE KEYS */;
/*!40000 ALTER TABLE `qualification_invites` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_set`
--

LOCK TABLES `question_set` WRITE;
/*!40000 ALTER TABLE `question_set` DISABLE KEYS */;
INSERT INTO `question_set` VALUES (1,1,'edda1004-df82-11e8-9490-448500d9a666',NULL,0,'2018-11-03 21:40:06'),(2,2,'66723d0b-e018-11e8-9e73-448500d9a666',NULL,0,'2018-11-04 15:30:03');
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
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,1,1,'CP','Company Name',1,1,0,1,0),(2,1,2,'CP','Office location',1,1,0,1,0),(3,1,3,'CP','Business Type',1,0,0,1,0),(4,1,3,'CP','Labour Type',1,0,0,1,0),(5,1,3,'CP','Work Performed',1,0,0,1,0),(6,1,4,'CP','Ownership/Business Structure',1,0,0,1,0),(7,1,5,'CP','Has a company ever done business under diferent name?',1,0,0,1,0),(8,1,5,'CP','Is your company owned or controlled by a parent corporation?',1,0,0,1,0),(9,1,5,'CP','Does someone outside of your company perform your estimating?',1,0,0,1,0),(10,1,8,'CP','Number of employees',1,0,0,1,0),(11,1,9,'CP','Owner or officers of your company',1,0,0,1,0),(12,1,10,'CL','Professional Licenses',1,0,0,1,0),(13,1,11,'CL','Trade unions',1,0,0,1,0),(14,1,12,'CL','Industry affilations or Memberships',1,0,0,1,0),(15,1,13,'HS','Attach a copy of your safety program',1,0,0,1,0),(16,1,5,'HS','Do you have a safety officer or department?',1,0,0,1,0),(17,1,14,'HS','Provide your workers compensation Experience Modification Rate(EMR)',1,0,0,1,0),(18,1,5,'HS','Attach your insurance agent\'s EMR verification Letter',1,0,0,1,0),(19,1,15,'HS','How often do you hold regular safety meetings for field supervisors?',1,0,0,1,0),(20,1,15,'HS','how often does your company hold a job site safety metting?',1,0,0,1,0),(21,1,5,'HS','Does your copmpany have a substance abuse program?',1,0,0,1,0),(22,1,5,'HS','Does your company have an orientation program for newly appointed supervisors?',1,0,0,1,0),(23,1,14,'HS','Man-hours worked',1,0,0,1,0),(24,1,14,'HS','First Aid cases',1,0,0,1,0),(25,1,14,'HS','Recordable Incident Rate(RIR)',1,0,0,1,0),(26,1,14,'HS','Lost Time/Workday cases',1,0,0,1,0),(27,1,14,'HS','Lost Time/Workday Incident cases(LTWR)',1,0,0,1,0),(28,1,14,'HS','fatalities',1,0,0,1,0),(29,1,14,'HS','Average number of employees',1,0,0,1,0),(30,1,16,'IS','Total Bonding capacity',1,0,0,1,0),(31,1,16,'IS','Bonding capacity per project',1,0,0,1,0),(32,1,16,'IS','Average bonding capacity as of this date',1,0,0,1,0),(33,1,17,'IS','bond rate(%)',1,0,0,1,0),(34,1,5,'IS','Attach a reference letter stating aggregrate and single project bonding capacity from your surety company',1,0,0,1,0),(35,1,18,'IS','Insurance Limits',1,0,0,1,0),(36,1,19,'IS','Bonding Agent references',1,0,0,1,0),(37,1,19,'IS','surety References',1,0,0,1,0),(38,1,19,'IS','Insurance References',1,0,0,1,0),(39,1,5,'FIN','Attach a current financial statement. Ideally this is an audited finacial statement covering the last three years',1,0,0,1,0),(40,1,14,'FIN','Revenue',1,0,0,1,0),(41,1,14,'FIN','Net worth',1,0,0,1,0),(42,1,16,'FIN','Current working capital',1,0,0,1,0),(43,1,16,'FIN','Current Assests',1,0,0,1,0),(44,1,16,'FIN','Currrent Liabilities',1,0,0,1,0),(45,1,16,'FIN','What is your current backlog',1,0,0,1,0),(46,1,5,'FIN','Are there are outstanding debts or loans that exceed 20% of your company\'s current net worth?',1,0,0,1,0),(47,1,14,'FIN','Numbers of contrats completed',1,0,0,1,0),(48,1,14,'FIN','Average contract size',1,0,0,1,0),(49,1,19,'FIN','Banking References',1,0,0,1,0),(50,1,20,'WEX','List atleast three major projects your company currently has under contract',1,0,0,1,0),(51,1,21,'WEX','What is the largest contract your company has completed in last three years?',1,0,0,1,0),(52,1,20,'WEX','List atleast three additional projects your company  has completed in the last  five years',1,0,0,1,0),(53,1,5,'LGL','Has your company, its owners, or officers  been in involved in litigation regarding a construction contract within the last three years?',1,0,0,1,0),(54,1,5,'LGL','Has your company falled to complete a construction contract, defaulted, or terminated for cause within the last three years?',1,0,0,1,0),(55,1,5,'LGL','Has your company had any safety or environmental related citations from authorities in last three years?',1,0,0,1,0),(56,1,5,'LGL','Has your company, Its owners, or officers filed for bankruptcy protection within the last three years?',1,0,0,1,0),(57,1,5,'LGL','Has a complaint ever been filed with a licensing agency against your firm?',1,0,0,1,0),(58,1,5,'LGL','Has a surety ever finished one or more of your construction project?',1,0,0,1,0),(59,1,5,'LGL','Has your firm ever been assessed liquidated damages on a project?',1,0,0,1,0),(60,1,5,'LGL','Are threre any remaining issues or conflicts or  interest that would have material effect on your company, its owners or officers, In their operation, financial structure, or ability to perform work for our company?',1,0,0,1,0),(61,1,5,'OTH','Would you like to provide any additional information you feel would help our company determine your company\'s  qualification and expertise?',1,0,0,1,0),(62,1,1,'SIG','Full Name',1,1,0,1,0),(63,1,1,'SIG','Title',1,0,0,1,0),(64,2,1,'CP','Company Name',1,1,0,1,0),(65,2,2,'CP','Office location',1,1,0,1,0),(66,2,3,'CP','Business Type',1,0,0,1,0),(67,2,3,'CP','Labour Type',1,0,0,1,0),(68,2,3,'CP','Work Performed',1,0,0,1,0),(69,2,4,'CP','Ownership/Business Structure',1,0,0,1,0),(70,2,5,'CP','Has a company ever done business under diferent name?',1,0,0,1,0),(71,2,5,'CP','Is your company owned or controlled by a parent corporation?',1,0,0,1,0),(72,2,5,'CP','Does someone outside of your company perform your estimating?',1,0,0,1,0),(73,2,8,'CP','Number of employees',1,0,0,1,0),(74,2,9,'CP','Owner or officers of your company',1,0,0,1,0),(75,2,10,'CL','Professional Licenses',1,0,0,1,0),(76,2,11,'CL','Trade unions',1,0,0,1,0),(77,2,12,'CL','Industry affilations or Memberships',1,0,0,1,0),(78,2,13,'HS','Attach a copy of your safety program',1,0,0,1,0),(79,2,5,'HS','Do you have a safety officer or department?',1,0,0,1,0),(80,2,14,'HS','Provide your workers compensation Experience Modification Rate(EMR)',1,0,0,1,0),(81,2,5,'HS','Attach your insurance agent\'s EMR verification Letter',1,0,0,1,0),(82,2,15,'HS','How often do you hold regular safety meetings for field supervisors?',1,0,0,1,0),(83,2,15,'HS','how often does your company hold a job site safety metting?',1,0,0,1,0),(84,2,5,'HS','Does your copmpany have a substance abuse program?',1,0,0,1,0),(85,2,5,'HS','Does your company have an orientation program for newly appointed supervisors?',1,0,0,1,0),(86,2,14,'HS','Man-hours worked',1,0,0,1,0),(87,2,14,'HS','First Aid cases',1,0,0,1,0),(88,2,14,'HS','Recordable Incident Rate(RIR)',1,0,0,1,0),(89,2,14,'HS','Lost Time/Workday cases',1,0,0,1,0),(90,2,14,'HS','Lost Time/Workday Incident cases(LTWR)',1,0,0,1,0),(91,2,14,'HS','fatalities',1,0,0,1,0),(92,2,14,'HS','Average number of employees',1,0,0,1,0),(93,2,16,'IS','Total Bonding capacity',1,0,0,1,0),(94,2,16,'IS','Bonding capacity per project',1,0,0,1,0),(95,2,16,'IS','Average bonding capacity as of this date',1,0,0,1,0),(96,2,17,'IS','bond rate(%)',1,0,0,1,0),(97,2,5,'IS','Attach a reference letter stating aggregrate and single project bonding capacity from your surety company',1,0,0,1,0),(98,2,18,'IS','Insurance Limits',1,0,0,1,0),(99,2,19,'IS','Bonding Agent references',1,0,0,1,0),(100,2,19,'IS','surety References',1,0,0,1,0),(101,2,19,'IS','Insurance References',1,0,0,1,0),(102,2,5,'FIN','Attach a current financial statement. Ideally this is an audited finacial statement covering the last three years',1,0,0,1,0),(103,2,14,'FIN','Revenue',1,0,0,1,0),(104,2,14,'FIN','Net worth',1,0,0,1,0),(105,2,16,'FIN','Current working capital',1,0,0,1,0),(106,2,16,'FIN','Current Assests',1,0,0,1,0),(107,2,16,'FIN','Currrent Liabilities',1,0,0,1,0),(108,2,16,'FIN','What is your current backlog',1,0,0,1,0),(109,2,5,'FIN','Are there are outstanding debts or loans that exceed 20% of your company\'s current net worth?',1,0,0,1,0),(110,2,14,'FIN','Numbers of contrats completed',1,0,0,1,0),(111,2,14,'FIN','Average contract size',1,0,0,1,0),(112,2,19,'FIN','Banking References',1,0,0,1,0),(113,2,20,'WEX','List atleast three major projects your company currently has under contract',1,0,0,1,0),(114,2,21,'WEX','What is the largest contract your company has completed in last three years?',1,0,0,1,0),(115,2,20,'WEX','List atleast three additional projects your company  has completed in the last  five years',1,0,0,1,0),(116,2,5,'LGL','Has your company, its owners, or officers  been in involved in litigation regarding a construction contract within the last three years?',1,0,0,1,0),(117,2,5,'LGL','Has your company falled to complete a construction contract, defaulted, or terminated for cause within the last three years?',1,0,0,1,0),(118,2,5,'LGL','Has your company had any safety or environmental related citations from authorities in last three years?',1,0,0,1,0),(119,2,5,'LGL','Has your company, Its owners, or officers filed for bankruptcy protection within the last three years?',1,0,0,1,0),(120,2,5,'LGL','Has a complaint ever been filed with a licensing agency against your firm?',1,0,0,1,0),(121,2,5,'LGL','Has a surety ever finished one or more of your construction project?',1,0,0,1,0),(122,2,5,'LGL','Has your firm ever been assessed liquidated damages on a project?',1,0,0,1,0),(123,2,5,'LGL','Are threre any remaining issues or conflicts or  interest that would have material effect on your company, its owners or officers, In their operation, financial structure, or ability to perform work for our company?',1,0,0,1,0),(124,2,5,'OTH','Would you like to provide any additional information you feel would help our company determine your company\'s  qualification and expertise?',1,0,0,1,0),(125,2,1,'SIG','Full Name',1,1,0,1,0),(126,2,1,'SIG','Title',1,0,0,1,0);
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
  `verified` tinyint(1) NOT NULL DEFAULT '0',
  `user_role_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Swagata','Kundu','swagatak@one.com','$2b$10$2BGv374IaWm/NR0Kl1s9ZewYVqQ8GTFS/IZ5GcrgjIoz1Od5zaDFm',1,1),(2,'Swagata','Kundu','me@swagatak.one','$2b$10$FlF3iMcHEbhZQfQYIoSffO7UlNshOgeJbE9FLjl9TW/oZZEb2wTy.',1,1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_jungle_permission`
--

LOCK TABLES `user_jungle_permission` WRITE;
/*!40000 ALTER TABLE `user_jungle_permission` DISABLE KEYS */;
INSERT INTO `user_jungle_permission` VALUES (1,2);
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_mfs_permission`
--

LOCK TABLES `user_mfs_permission` WRITE;
/*!40000 ALTER TABLE `user_mfs_permission` DISABLE KEYS */;
INSERT INTO `user_mfs_permission` VALUES (1,2,1,'ADMIN');
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
  `technical_lead` tinyint(1) DEFAULT '0',
  `job_title` varchar(100) NOT NULL,
  `work_phone` varchar(15) NOT NULL,
  `pic` varchar(300) DEFAULT NULL,
  `work_performed` json NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_company_profile_1_idx` (`office_id`),
  KEY `fk_user_office_profile_1_idx` (`user_id`),
  CONSTRAINT `fk_user_company_profile_1` FOREIGN KEY (`office_id`) REFERENCES `company_office` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_office_profile_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_office_profile`
--

LOCK TABLES `user_office_profile` WRITE;
/*!40000 ALTER TABLE `user_office_profile` DISABLE KEYS */;
INSERT INTO `user_office_profile` VALUES (1,1,1,0,'Developer','9748162576',NULL,'[1]'),(2,2,2,0,'Developer','8750912129',NULL,'[]');
/*!40000 ALTER TABLE `user_office_profile` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_reset_password`
--

LOCK TABLES `user_reset_password` WRITE;
/*!40000 ALTER TABLE `user_reset_password` DISABLE KEYS */;
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
  CONSTRAINT `fk_user_verify_email_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_verify_email`
--

LOCK TABLES `user_verify_email` WRITE;
/*!40000 ALTER TABLE `user_verify_email` DISABLE KEYS */;
INSERT INTO `user_verify_email` VALUES (1,'me@swagatak.one',2,'$2b$10$qTmjaBhgiICtm.L040JFBO8xeZArdpcqp3S4N58LkIIhBnttZSxA2');
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

INSERT INTO question_set(`company_id`,`isDeleted`,`hash`)values(company_id,false,UUID());

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
in company_id int(11))
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
    false as isInvited
FROM
    company C
        JOIN
    company_office CO ON C.id = CO.company_id
        LEFT JOIN
    user_office_profile UOP ON UOP.office_id = CO.id
    LEFT JOIN user U ON UOP.user_id=U.id
    WHERE C.id=company_id
    ORDER BY CO.city ASC;
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
in email varchar(200))
BEGIN
DECLARE invited_company_id INT;

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

IF invited_company_id<>company_id THEN
 
	INSERT INTO email_invites(`email`,`qset_id`)VALUES (email,qset_id);
		 
	IF invited_company_id THEN
			
			#If the company is already invited then donot add invitation for the company.
			IF (SELECT COUNT(QI.id) FROM
			qualification_invites QI
			JOIN question_set QSET ON QI.qset_id = QSET.id
			WHERE QI.invited_company_id=invited_company_id
			AND QSET.company_id=company_id) =0 THEN 
			
				INSERT INTO qualification_invites(`invited_company_id`,`qset_id`) VALUES(invited_company_id,qset_id);
			
			END IF;    
		END IF; 
END IF; 

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
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
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
    WHERE ignore_company<>C.id
    AND (searchText='' OR C.name LIKE concat('%',searchText,'%'))
    AND (locations='' OR FIND_IN_SET(LOWER(COUNTRY.name),locations)>0 OR FIND_IN_SET(LOWER(CO.city),locations)>0)
    AND (work_performed='' OR work_performed IS NULL OR FIND_IN_SET(WP.id,work_performed)>0)
	AND (tags='' OR CT.tag IS NULL OR FIND_IN_SET(CT.tag,tags)>0)
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
    WHERE ignore_company<>C.id
	OR (searchText='' OR C.name LIKE concat('%',searchText,'%'))
    OR (locations='' OR FIND_IN_SET(LOWER(COUNTRY.name),locations)>0 OR FIND_IN_SET(LOWER(CO.city),locations)>0)
    OR (work_performed='' OR work_performed IS NULL OR FIND_IN_SET(WP.id,work_performed)>0)
	OR (tags='' OR CT.tag IS NULL OR FIND_IN_SET(CT.tag,tags)>0)
	OR (labour_types='' OR LT.id IS NULL OR FIND_IN_SET(LT.id,labour_types)>0);
    
    
SELECT 
    C.*,
    group_concat(CO.city) AS locations
FROM
    AND_RESULTS JOIN company C ON C.id=AND_RESULTS.company_id 
    JOIN company_office CO ON CO.company_id=C.id GROUP BY C.id;
    
SELECT 
    C.*,
    group_concat(CO.city) AS locations
FROM
    OR_RESULTS JOIN company C ON C.id=OR_RESULTS.company_id 
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

-- Dump completed on 2018-11-05 14:34:11
