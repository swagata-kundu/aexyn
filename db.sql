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
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(300) NOT NULL,
  `labour_type` json DEFAULT NULL,
  `img` varchar(500) DEFAULT '',
  `date_created` datetime DEFAULT NULL,
  `date_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (4,'Test','[1]','',NULL,NULL),(5,'Test','[1]','',NULL,NULL),(8,'Test','[1]','',NULL,NULL),(9,'sasas','[2, 3]','',NULL,NULL),(10,'sasas','[1]','',NULL,NULL),(11,'One.com','[1]','',NULL,NULL);
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
  `city` varchar(200) NOT NULL,
  `zip` varchar(10) NOT NULL,
  `state_id` int(11) NOT NULL,
  `lat` float DEFAULT NULL,
  `lng` float DEFAULT NULL,
  `company_id` int(11) NOT NULL,
  `office_order` int(11) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_office`
--

LOCK TABLES `company_office` WRITE;
/*!40000 ALTER TABLE `company_office` DISABLE KEYS */;
INSERT INTO `company_office` VALUES (1,'Noida','Noida','Noida','122001',1,NULL,NULL,1,1),(2,'Noida','Noida','Noida','122001',1,NULL,NULL,2,1),(3,'Noida','Noida','Noida','122001',1,NULL,NULL,2,1),(4,'Gurgaon','ha','Gurgaon','1234',1,NULL,NULL,10,1),(5,'Gurgaon','ha','Gurgaon','1234',1,NULL,NULL,11,1),(6,'Gurgaon','ha','Gurgaon','1234',1,NULL,NULL,4,1),(7,'Gurgaon','ha','Gurgaon','1234',1,NULL,NULL,5,1),(10,'Gurgaon','ha','Gurgaon','1234',1,NULL,NULL,8,1),(16,'om nagar','ha','Gurgaon','1234',1,NULL,NULL,4,1),(17,'Gurgaon','ha','Gurgaon','1234',1,NULL,NULL,9,1),(18,'Gurgaon','ha','Gurgaon','1234',1,NULL,NULL,10,1),(19,'sasas','sasas','sasas','1',20,NULL,NULL,9,1),(20,'sasas','sasas','sasas','1',20,NULL,NULL,4,1),(21,'sasas','sasas','sasas','1',20,NULL,NULL,10,1),(22,'Dlf c','DLF Phase 2 Sector 24','Gurugram','122022',6,NULL,NULL,11,1);
/*!40000 ALTER TABLE `company_office` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `office_package`
--

LOCK TABLES `office_package` WRITE;
/*!40000 ALTER TABLE `office_package` DISABLE KEYS */;
INSERT INTO `office_package` VALUES (1,10,1,'2018-10-16',NULL,NULL,NULL),(7,16,1,'2018-10-17',NULL,NULL,NULL),(8,17,1,'2018-10-18',NULL,NULL,NULL),(9,18,1,'2018-10-18',NULL,NULL,NULL),(10,19,1,'2018-10-21',NULL,NULL,NULL),(11,20,1,'2018-10-21',NULL,NULL,NULL),(12,21,1,'2018-10-21',NULL,NULL,NULL),(13,22,1,'2018-10-26',NULL,NULL,NULL);
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
  `question_set_id` int(11) NOT NULL,
  `invited_company_id` int(11) NOT NULL,
  `invitee_email` varchar(200) DEFAULT '',
  `isEdited` tinyint(4) NOT NULL DEFAULT '0',
  `expiry_date` date DEFAULT NULL,
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_qualification_invites_2_idx` (`question_set_id`),
  KEY `fk_qualification_invites_1_idx` (`invited_company_id`),
  CONSTRAINT `fk_qualification_invites_1` FOREIGN KEY (`invited_company_id`) REFERENCES `company` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_qualification_invites_2` FOREIGN KEY (`question_set_id`) REFERENCES `question_set` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
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
  `opening_statement` text,
  `isDeleted` tinyint(1) DEFAULT '0',
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_question_set_1` (`company_id`),
  CONSTRAINT `fk_question_set_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_set`
--

LOCK TABLES `question_set` WRITE;
/*!40000 ALTER TABLE `question_set` DISABLE KEYS */;
INSERT INTO `question_set` VALUES (2,4,NULL,0,'2018-10-24 13:07:21'),(3,11,NULL,0,'2018-10-26 17:06:39');
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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_types`
--

LOCK TABLES `question_types` WRITE;
/*!40000 ALTER TABLE `question_types` DISABLE KEYS */;
INSERT INTO `question_types` VALUES (1,'text response',1,'TEXT'),(2,'list of office locations',0,'OFFICES'),(3,'multi-select',0,'MS'),(4,'business structure (corporate type drop-down options (LLP, PVT. ltd, Public company, proprietor)',0,'BS'),(5,'yes/no, if yes explain',1,'YN-YE'),(6,'yes/no, if no explain',1,'YN-NE'),(7,'yes/no',1,'YN'),(8,'list of employees by dept',0,'EMPLOYEES'),(9,'list of name/email/phone',0,'EMAILS'),(10,'list of licenses',0,'LICENSES'),(11,'list of unions incl expiration',0,'UNIONS'),(12,'list of industry affiliation',0,'IAFFILIATION'),(13,'attach file',1,'FILE'),(14,'data for last 4 years',0,'4YRDATA'),(15,'frequently dropdown (Options will be Annual, Monthly, Weekly, daily, as needed)',0,'FREQUENTLY_DDL'),(16,'dollar amount',1,'AMOUNT'),(17,'percentage',1,'PERCENT'),(18,'general, workers comp, auto',0,'WORKERS'),(19,'list of company contact',0,'COMPANY_CONTACT'),(20,'list of project details',0,'PROJECT_LIST'),(21,'project details',0,'PROJECT_DETAIL'),(22,'number',1,'NUMBER');
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
INSERT INTO `questions` VALUES (1,2,1,'CP','Company Name',1,1,0,1),(2,2,2,'CP','Office location',1,1,0,1),(3,2,3,'CP','Business Type',1,0,0,1),(4,2,3,'CP','Labour Type',1,0,0,1),(5,2,3,'CP','Work Performed',1,0,0,1),(6,2,4,'CP','Ownership/Business Structure',1,0,0,1),(7,2,5,'CP','Has a company ever done business under diferent name?',1,0,0,1),(8,2,5,'CP','Is your company owned or controlled by a parent corporation?',1,0,0,1),(9,2,5,'CP','Does someone outside of your company perform your estimating?',1,0,0,1),(10,2,8,'CP','Number of employees',1,0,0,1),(11,2,9,'CP','Owner or officers of your company',1,0,0,1),(12,2,10,'CL','Professional Licenses',1,0,0,1),(13,2,11,'CL','Trade unions',1,0,0,1),(14,2,12,'CL','Industry affilations or Memberships',1,0,0,1),(15,2,13,'HS','Attach a copy of your safety program',1,0,0,1),(16,2,5,'HS','Do you have a safety officer or department?',1,0,0,1),(17,2,14,'HS','Provide your workers compensation Experience Modification Rate(EMR)',1,0,0,1),(18,2,5,'HS','Attach your insurance agent\'s EMR verification Letter',1,0,0,1),(19,2,15,'HS','How often do you hold regular safety meetings for field supervisors?',1,0,0,1),(20,2,15,'HS','how often does your company hold a job site safety metting?',1,0,0,1),(21,2,5,'HS','Does your copmpany have a substance abuse program?',1,0,0,1),(22,2,5,'HS','Does your company have an orientation program for newly appointed supervisors?',1,0,0,1),(23,2,14,'HS','Man-hours worked',1,0,0,1),(24,2,14,'HS','First Aid cases',1,0,0,1),(25,2,14,'HS','Recordable Incident Rate(RIR)',1,0,0,1),(26,2,14,'HS','Lost Time/Workday cases',1,0,0,1),(27,2,14,'HS','Lost Time/Workday Incident cases(LTWR)',1,0,0,1),(28,2,14,'HS','fatalities',1,0,0,1),(29,2,14,'HS','Average number of employees',1,0,0,1),(30,2,16,'IS','Total Bonding capacity',1,0,0,1),(31,2,16,'IS','Bonding capacity per project',1,0,0,1),(32,2,16,'IS','Average bonding capacity as of this date',1,0,0,1),(33,2,17,'IS','bond rate(%)',1,0,0,1),(34,2,5,'IS','Attach a reference letter stating aggregrate and single project bonding capacity from your surety company',1,0,0,1),(35,2,18,'IS','Insurance Limits',1,0,0,1),(36,2,19,'IS','Bonding Agent references',1,0,0,1),(37,2,19,'IS','surety References',1,0,0,1),(38,2,19,'IS','Insurance References',1,0,0,1),(39,2,5,'FIN','Attach a current financial statement. Ideally this is an audited finacial statement covering the last three years',1,0,0,1),(40,2,14,'FIN','Revenue',1,0,0,1),(41,2,14,'FIN','Net worth',1,0,0,1),(42,2,16,'FIN','Current working capital',1,0,0,1),(43,2,16,'FIN','Current Assests',1,0,0,1),(44,2,16,'FIN','Currrent Liabilities',1,0,0,1),(45,2,16,'FIN','What is your current backlog',1,0,0,1),(46,2,5,'FIN','Are there are outstanding debts or loans that exceed 20% of your company\'s current net worth?',1,0,0,1),(47,2,14,'FIN','Numbers of contrats completed',1,0,0,1),(48,2,14,'FIN','Average contract size',1,0,0,1),(49,2,19,'FIN','Banking References',1,0,0,1),(50,2,20,'WEX','List atleast three major projects your company currently has under contract',1,0,0,1),(51,2,21,'WEX','What is the largest contract your company has completed in last three years?',1,0,0,1),(52,2,20,'WEX','List atleast three additional projects your company  has completed in the last  five years',1,0,0,1),(53,2,5,'LGL','Has your company, its owners, or officers  been in involved in litigation regarding a construction contract within the last three years?',1,0,0,1),(54,2,5,'LGL','Has your company falled to complete a construction contract, defaulted, or terminated for cause within the last three years?',1,0,0,1),(55,2,5,'LGL','Has your company had any safety or environmental related citations from authorities in last three years?',1,0,0,1),(56,2,5,'LGL','Has your company, Its owners, or officers filed for bankruptcy protection within the last three years?',1,0,0,1),(57,2,5,'LGL','Has a complaint ever been filed with a licensing agency against your firm?',1,0,0,1),(58,2,5,'LGL','Has a surety ever finished one or more of your construction project?',1,0,0,1),(59,2,5,'LGL','Has your firm ever been assessed liquidated damages on a project?',1,0,0,1),(60,2,5,'LGL','Are threre any remaining issues or conflicts or  interest that would have material effect on your company, its owners or officers, In their operation, financial structure, or ability to perform work for our company?',1,0,0,1),(61,2,5,'OTH','Would you like to provide any additional information you feel would help our company determine your company\'s  qualification and expertise?',1,0,0,1),(62,2,1,'SIG','Full Name',1,1,0,1),(63,2,1,'SIG','Title',1,0,0,1),(64,3,1,'CP','Company Name',1,1,0,1),(65,3,2,'CP','Office location',1,1,0,1),(66,3,3,'CP','Business Type',1,0,0,1),(67,3,3,'CP','Labour Type',1,0,0,1),(68,3,3,'CP','Work Performed',1,0,0,1),(69,3,4,'CP','Ownership/Business Structure',1,0,0,1),(70,3,5,'CP','Has a company ever done business under diferent name?',1,0,0,1),(71,3,5,'CP','Is your company owned or controlled by a parent corporation?',1,0,0,1),(72,3,5,'CP','Does someone outside of your company perform your estimating?',1,0,0,1),(73,3,8,'CP','Number of employees',1,0,0,1),(74,3,9,'CP','Owner or officers of your company',1,0,0,1),(75,3,10,'CL','Professional Licenses',1,0,0,1),(76,3,11,'CL','Trade unions',1,0,0,1),(77,3,12,'CL','Industry affilations or Memberships',1,0,0,1),(78,3,13,'HS','Attach a copy of your safety program',1,0,0,1),(79,3,5,'HS','Do you have a safety officer or department?',1,0,0,1),(80,3,14,'HS','Provide your workers compensation Experience Modification Rate(EMR)',1,0,0,1),(81,3,5,'HS','Attach your insurance agent\'s EMR verification Letter',1,0,0,1),(82,3,15,'HS','How often do you hold regular safety meetings for field supervisors?',1,0,0,1),(83,3,15,'HS','how often does your company hold a job site safety metting?',1,0,0,1),(84,3,5,'HS','Does your copmpany have a substance abuse program?',1,0,0,1),(85,3,5,'HS','Does your company have an orientation program for newly appointed supervisors?',1,0,0,1),(86,3,14,'HS','Man-hours worked',1,0,0,1),(87,3,14,'HS','First Aid cases',1,0,0,1),(88,3,14,'HS','Recordable Incident Rate(RIR)',1,0,0,1),(89,3,14,'HS','Lost Time/Workday cases',1,0,0,1),(90,3,14,'HS','Lost Time/Workday Incident cases(LTWR)',1,0,0,1),(91,3,14,'HS','fatalities',1,0,0,1),(92,3,14,'HS','Average number of employees',1,0,0,1),(93,3,16,'IS','Total Bonding capacity',1,0,0,1),(94,3,16,'IS','Bonding capacity per project',1,0,0,1),(95,3,16,'IS','Average bonding capacity as of this date',1,0,0,1),(96,3,17,'IS','bond rate(%)',1,0,0,1),(97,3,5,'IS','Attach a reference letter stating aggregrate and single project bonding capacity from your surety company',1,0,0,1),(98,3,18,'IS','Insurance Limits',1,0,0,1),(99,3,19,'IS','Bonding Agent references',1,0,0,1),(100,3,19,'IS','surety References',1,0,0,1),(101,3,19,'IS','Insurance References',1,0,0,1),(102,3,5,'FIN','Attach a current financial statement. Ideally this is an audited finacial statement covering the last three years',1,0,0,1),(103,3,14,'FIN','Revenue',1,0,0,1),(104,3,14,'FIN','Net worth',1,0,0,1),(105,3,16,'FIN','Current working capital',1,0,0,1),(106,3,16,'FIN','Current Assests',1,0,0,1),(107,3,16,'FIN','Currrent Liabilities',1,0,0,1),(108,3,16,'FIN','What is your current backlog',1,0,0,1),(109,3,5,'FIN','Are there are outstanding debts or loans that exceed 20% of your company\'s current net worth?',1,0,0,1),(110,3,14,'FIN','Numbers of contrats completed',1,0,0,1),(111,3,14,'FIN','Average contract size',1,0,0,1),(112,3,19,'FIN','Banking References',1,0,0,1),(113,3,20,'WEX','List atleast three major projects your company currently has under contract',1,0,0,1),(114,3,21,'WEX','What is the largest contract your company has completed in last three years?',1,0,0,1),(115,3,20,'WEX','List atleast three additional projects your company  has completed in the last  five years',1,0,0,1),(116,3,5,'LGL','Has your company, its owners, or officers  been in involved in litigation regarding a construction contract within the last three years?',1,0,0,1),(117,3,5,'LGL','Has your company falled to complete a construction contract, defaulted, or terminated for cause within the last three years?',1,0,0,1),(118,3,5,'LGL','Has your company had any safety or environmental related citations from authorities in last three years?',1,0,0,1),(119,3,5,'LGL','Has your company, Its owners, or officers filed for bankruptcy protection within the last three years?',1,0,0,1),(120,3,5,'LGL','Has a complaint ever been filed with a licensing agency against your firm?',1,0,0,1),(121,3,5,'LGL','Has a surety ever finished one or more of your construction project?',1,0,0,1),(122,3,5,'LGL','Has your firm ever been assessed liquidated damages on a project?',1,0,0,1),(123,3,5,'LGL','Are threre any remaining issues or conflicts or  interest that would have material effect on your company, its owners or officers, In their operation, financial structure, or ability to perform work for our company?',1,0,0,1),(124,3,5,'OTH','Would you like to provide any additional information you feel would help our company determine your company\'s  qualification and expertise?',1,0,0,1),(125,3,1,'SIG','Full Name',1,1,0,1),(126,3,1,'SIG','Title',1,0,0,1);
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
  `isIncluded` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions_default`
--

LOCK TABLES `questions_default` WRITE;
/*!40000 ALTER TABLE `questions_default` DISABLE KEYS */;
INSERT INTO `questions_default` VALUES (1,'CP','Company Name',1,1,1),(2,'CP','Office location',1,1,1),(3,'CP','Business Type',1,0,1),(3,'CP','Labour Type',1,0,1),(3,'CP','Work Performed',1,0,1),(4,'CP','Ownership/Business Structure',1,0,1),(5,'CP','Has a company ever done business under diferent name?',1,0,1),(5,'CP','Is your company owned or controlled by a parent corporation?',1,0,1),(5,'CP','Does someone outside of your company perform your estimating?',1,0,1),(8,'CP','Number of employees',1,0,1),(9,'CP','Owner or officers of your company',1,0,1),(10,'CL','Professional Licenses',1,0,1),(11,'CL','Trade unions',1,0,1),(12,'CL','Industry affilations or Memberships',1,0,1),(13,'HS','Attach a copy of your safety program',1,0,1),(5,'HS','Do you have a safety officer or department?',1,0,1),(14,'HS','Provide your workers compensation Experience Modification Rate(EMR)',1,0,1),(5,'HS','Attach your insurance agent\'s EMR verification Letter',1,0,1),(15,'HS','How often do you hold regular safety meetings for field supervisors?',1,0,1),(15,'HS','how often does your company hold a job site safety metting?',1,0,1),(5,'HS','Does your copmpany have a substance abuse program?',1,0,1),(5,'HS','Does your company have an orientation program for newly appointed supervisors?',1,0,1),(14,'HS','Man-hours worked',1,0,1),(14,'HS','First Aid cases',1,0,1),(14,'HS','Recordable Incident Rate(RIR)',1,0,1),(14,'HS','Lost Time/Workday cases',1,0,1),(14,'HS','Lost Time/Workday Incident cases(LTWR)',1,0,1),(14,'HS','fatalities',1,0,1),(14,'HS','Average number of employees',1,0,1),(16,'IS','Total Bonding capacity',1,0,1),(16,'IS','Bonding capacity per project',1,0,1),(16,'IS','Average bonding capacity as of this date',1,0,1),(17,'IS','bond rate(%)',1,0,1),(5,'IS','Attach a reference letter stating aggregrate and single project bonding capacity from your surety company',1,0,1),(18,'IS','Insurance Limits',1,0,1),(19,'IS','Bonding Agent references',1,0,1),(19,'IS','surety References',1,0,1),(19,'IS','Insurance References',1,0,1),(5,'FIN','Attach a current financial statement. Ideally this is an audited finacial statement covering the last three years',1,0,1),(14,'FIN','Revenue',1,0,1),(14,'FIN','Net worth',1,0,1),(16,'FIN','Current working capital',1,0,1),(16,'FIN','Current Assests',1,0,1),(16,'FIN','Currrent Liabilities',1,0,1),(16,'FIN','What is your current backlog',1,0,1),(5,'FIN','Are there are outstanding debts or loans that exceed 20% of your company\'s current net worth?',1,0,1),(14,'FIN','Numbers of contrats completed',1,0,1),(14,'FIN','Average contract size',1,0,1),(19,'FIN','Banking References',1,0,1),(20,'WEX','List atleast three major projects your company currently has under contract',1,0,1),(21,'WEX','What is the largest contract your company has completed in last three years?',1,0,1),(20,'WEX','List atleast three additional projects your company  has completed in the last  five years',1,0,1),(5,'LGL','Has your company, its owners, or officers  been in involved in litigation regarding a construction contract within the last three years?',1,0,1),(5,'LGL','Has your company falled to complete a construction contract, defaulted, or terminated for cause within the last three years?',1,0,1),(5,'LGL','Has your company had any safety or environmental related citations from authorities in last three years?',1,0,1),(5,'LGL','Has your company, Its owners, or officers filed for bankruptcy protection within the last three years?',1,0,1),(5,'LGL','Has a complaint ever been filed with a licensing agency against your firm?',1,0,1),(5,'LGL','Has a surety ever finished one or more of your construction project?',1,0,1),(5,'LGL','Has your firm ever been assessed liquidated damages on a project?',1,0,1),(5,'LGL','Are threre any remaining issues or conflicts or  interest that would have material effect on your company, its owners or officers, In their operation, financial structure, or ability to perform work for our company?',1,0,1),(5,'OTH','Would you like to provide any additional information you feel would help our company determine your company\'s  qualification and expertise?',1,0,1),(1,'SIG','Full Name',1,1,1),(1,'SIG','Title',1,0,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (15,'sas','sasas','as@assa.cc','sasas',0,1),(16,'sas','sasas','as@asasa.cc','sasas',0,1),(17,'sas','sasas','as@asasa.cca','$2b$10$hgxpJr1Iy6EgToPw983WSed.CcUPZF9uT7kMjaT8YHBc/QI1aDbfu',0,1),(18,'sas','sasas','as1@asasa.cca','$2b$10$j2F9cfWPT.BmscMzSC.SR.ELx4YlPTkN05Fg5jr8ZBAhWlsbVhqSi',0,1),(32,'sas','sasas','as1@asasa.ccaa','$2b$10$qGLkCf7vr9de1Cbf6PWT2OfvNGzSWOh63R2/1nGPqSIO1lSTNM7q6',0,1),(33,'s','s','swagatak@one.com','$2b$10$uGkueZ/HtqGQ/4oz./dd3O.AUtUh7w5m30EBeQSvIFoQEr6GIsXgC',1,1),(34,'s','s','swagatak1@one.com','$2b$10$uGkueZ/HtqGQ/4oz./dd3O.AUtUh7w5m30EBeQSvIFoQEr6GIsXgC',0,1),(35,'s','s','swagatak2@one.com','$2b$10$PNDa/5F9ykQsVaq1g77I5eOX2r6KtSyJloynXZx.xnVBL1ojaxzt.',0,1),(36,'Swagata','Kundu','me@swagatak.one','$2b$10$ZgwaC8ooxo2IKxyna.g5kuAP6BNTN4WZCd6FYSEGMHpotLyZSl5au',0,1),(37,'s','Kundu','me2@swagatak.one','$2b$10$1ukzQ24i/afNz9iqYNV5DuknNoaItYWdCn1Qm35p2Nv5ppeb0QwFq',1,1),(38,'Swagata','Kundu','me4@swagatak.one','$2b$10$yMR4LsdyuJX8CvKtMPic2.8kd6uhjMkQi8NI8LaxHcw4CFOPH4lo2',0,1),(39,'Swagata','Kundu','swagatak3@one.com','$2b$10$uudgaMUl.eJh6xX5iMTVBeFtzfyQQnZEeuW8QekrOVTinYzzKCDjq',0,1),(40,'Swagata','Kundu','me1@swagatak.one','$2b$10$ejVwYRRxOSK9ep/P57SR0uw2Xb4/gnszFAstCHsmfIcez7U9tFu.C',0,1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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
  `job_title` varchar(100) NOT NULL,
  `work_phone` varchar(15) NOT NULL,
  `pic` varchar(300) DEFAULT NULL,
  `work_performed` json NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_company_profile_1_idx` (`office_id`),
  CONSTRAINT `fk_user_company_profile_1` FOREIGN KEY (`office_id`) REFERENCES `company_office` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_office_profile`
--

LOCK TABLES `user_office_profile` WRITE;
/*!40000 ALTER TABLE `user_office_profile` DISABLE KEYS */;
INSERT INTO `user_office_profile` VALUES (1,15,16,'Test','1234',NULL,'[1, 3, 4]'),(2,16,16,'Test','1234',NULL,'[1, 3, 4]'),(3,17,16,'Test','1234',NULL,'[1, 3, 4]'),(4,18,16,'Test','1234',NULL,'[1, 3, 4]'),(5,32,16,'','',NULL,'[]'),(6,33,16,'','',NULL,'[]'),(7,34,19,'Test','123456',NULL,'[1]'),(8,35,10,'','',NULL,'[]'),(9,36,7,'','',NULL,'[]'),(10,37,16,'','',NULL,'[]'),(11,38,20,'','',NULL,'[]'),(12,39,21,'Test','123456',NULL,'[1]'),(13,40,22,'Developer','9748162576',NULL,'[1]');
/*!40000 ALTER TABLE `user_office_profile` ENABLE KEYS */;
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_verify_email`
--

LOCK TABLES `user_verify_email` WRITE;
/*!40000 ALTER TABLE `user_verify_email` DISABLE KEYS */;
INSERT INTO `user_verify_email` VALUES (1,'swagatak@one.com',1,'$2b$10$pplJAtdK/mdhd5l1cCEQHup3TiRioNe3aXDceAquNjz4c.yZPqk8C'),(4,'me4@swagatak.one',38,'$2b$10$MN0/YHBYo7NWqHljtI6PUuojDVIxjVnlRkzMpgSmN7F167tpCXwCO'),(5,'swagatak3@one.com',39,'$2b$10$vDsJA3tytV0WAD67ER2Za.TuDjmqaiUaquzZZfzLwg6N1jlRDJaIq'),(6,'me1@swagatak.one',40,'$2b$10$Xj764.ajVN626apXxkEy0eob6s1HZkodEpAUKsdWJg9tNj3CGX0LC');
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_create_first_questionier`(
in company_id int(11))
BEGIN
DECLARE question_set_id INT;

INSERT INTO question_set(`company_id`,`isDeleted`)values(company_id,false);

SET question_set_id= LAST_INSERT_ID();

SELECT question_set_id;

INSERT INTO questions(`question_set_id`,`question_type`,`section`,`text`,`isDefault`,`isRequired`,`isIncluded`)
SELECT question_set_id,
 `question_type`,`section`,`text`,`isDefault`,`isRequired`,`isIncluded` from questions_default;
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_get_office_employee_invitations`(
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_search_company_for_invite`(
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

-- Dump completed on 2018-10-29 14:31:45
