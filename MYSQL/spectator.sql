-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2022 at 11:15 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `spectator`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `isActive` tinyint(4) NOT NULL,
  `date_created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `username`, `email`, `password`, `isActive`, `date_created`) VALUES
(1, 'admin', 'qasimriaz814@gmail.com', 'pbkdf2:sha256:150000$juZszk85$9c7a877552838825ec65241d6c62a8cc843f200796721062c5c8fefe9bca04ba', 1, '2022-06-29');

-- --------------------------------------------------------

--
-- Table structure for table `contact_messages`
--

CREATE TABLE `contact_messages` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `message` varchar(500) NOT NULL,
  `date_created` date NOT NULL,
  `user_user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact_messages`
--

INSERT INTO `contact_messages` (`id`, `name`, `email`, `phone`, `message`, `date_created`, `user_user_id`) VALUES
(4, 'qaasty', 'testuser@gmail.com', '1231231232423', 'asdasdasdasd', '2022-07-19', NULL),
(8, 'test', 'test@gmail.com', '1231231232423', 'asdasdsd', '2022-07-20', 1),
(17, 'test', 'qasimriaz814@gmail.com', '03215142274', 'test', '2022-07-25', NULL),
(19, 'Muhammad Qasim', 'homatij540@sweatmail.com', '03215142274', 'asdasdasd', '2022-07-26', NULL),
(20, 'Muhammad Qasim', 'homatij540@sweatmail.com', '03215142274', 'sexy', '2022-07-26', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `invoice_id` int(11) NOT NULL,
  `queries_remaining` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `isActive` tinyint(4) NOT NULL,
  `date_created` date NOT NULL,
  `user_user_id` int(11) NOT NULL,
  `plan_plan_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`invoice_id`, `queries_remaining`, `price`, `start_date`, `end_date`, `isActive`, `date_created`, `user_user_id`, `plan_plan_id`) VALUES
(1, 0, 90, '2022-01-01', '2022-07-30', 1, '2022-01-01', 1, 1),
(2, 322, 32, '2022-07-13', '2022-08-14', 1, '2022-07-13', 2, 4),
(3, 90, 30, '2022-07-14', '2022-07-17', 1, '2022-07-14', 3, 1),
(11, 322, 100, '2022-07-22', '2022-08-22', 1, '2022-07-22', 5, 3),
(12, 322, 100, '2022-07-22', '2022-08-01', 1, '2022-07-22', 6, 3),
(13, 322, 100, '2022-07-22', '2022-07-01', 1, '2022-07-01', 7, 3),
(14, 322, 100, '2022-07-22', '2022-08-22', 1, '2022-07-22', 8, 3),
(15, 322, 100, '2022-07-22', '2022-08-22', 1, '2022-07-22', 9, 3),
(16, 322, 100, '2022-07-22', '2022-08-22', 1, '2022-07-22', 10, 3),
(17, 322, 100, '2022-07-22', '2022-08-22', 1, '2022-07-22', 12, 3),
(18, 322, 100, '2022-07-22', '2022-08-22', 1, '2022-07-22', 13, 3),
(19, 322, 2160, '2022-07-23', '2023-07-23', 1, '2022-07-23', 14, 4),
(20, 322, 2160, '2022-07-23', '2023-07-23', 1, '2022-07-23', 15, 4),
(21, 322, 100, '2022-07-23', '2022-08-23', 1, '2022-07-23', 16, 3);

-- --------------------------------------------------------

--
-- Table structure for table `plan`
--

CREATE TABLE `plan` (
  `plan_id` int(11) NOT NULL,
  `plan_name` varchar(45) NOT NULL,
  `description` varchar(500) NOT NULL,
  `queries_available` int(11) NOT NULL,
  `subscription_days` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `isActive` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `plan`
--

INSERT INTO `plan` (`plan_id`, `plan_name`, `description`, `queries_available`, `subscription_days`, `price`, `isActive`) VALUES
(1, 'Basic', 'Unique Design,\nUnlimited Video Call,\nAdd Favorite Contact,\nCamera Filter,\nUnique Design,\nUnlimited Video Call,\nAdd Favorite Contact,\nCamera Filter,\nUnique Design', 10, 3, 30, 1),
(3, 'Standard', 'Unique Design,\nUnlimited Video Call,\nAdd Favorite Contact,\nCamera Filter,\nUnique Design,\nUnlimited Video Call,\nAdd Favorite Contact,\nCamera Filter,\nUnique Design', 322, 32, 100, 1),
(4, 'Pro', 'Unique Design,\nUnlimited Video Call,\nAdd Favorite Contact,\nCamera Filter,\nUnique Design,\nUnlimited Video Call,\nAdd Favorite Contact,\nCamera Filter,\nUnique Design', 322, 32, 180, 1);

-- --------------------------------------------------------

--
-- Table structure for table `query`
--

CREATE TABLE `query` (
  `query_id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `records_required` int(11) NOT NULL DEFAULT 100,
  `isActive` tinyint(4) NOT NULL,
  `date_created` date NOT NULL,
  `user_user_id` int(11) NOT NULL,
  `working_status_id` int(11) NOT NULL DEFAULT 1,
  `admin_working_status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `query`
--

INSERT INTO `query` (`query_id`, `name`, `records_required`, `isActive`, `date_created`, `user_user_id`, `working_status_id`, `admin_working_status`) VALUES
(13, 'Web Scraping with Python', 30, 1, '2022-07-23', 1, 3, 1),
(14, 'Web Scraping with Python', 0, 1, '2022-07-23', 1, 3, 1),
(21, 'software houses in islamabad\r\n', 100, 1, '2022-07-06', 16, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `reviewer_name` varchar(45) NOT NULL,
  `review_text` varchar(500) NOT NULL,
  `rating` int(11) NOT NULL,
  `date_created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `reviewer_name`, `review_text`, `rating`, `date_created`) VALUES
(1, 'qasim', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo et nostrum, assumenda quod ipsam provident expedita beatae, veniam nisi\nLorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo et nostrum, assumenda quod ipsam provident expedita beatae, veniam nisi\nLorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo et nostrum, assumenda quod ipsam provident expedita beatae, veniam nisi', 5, '2022-07-07'),
(2, 'Muhammad Qasim', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo et nostrum, assumenda quod ipsam provident expedita beatae, veniam nisi\nLorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo et nostrum, assumenda quod ipsam provident expedita beatae, veniam nisi\nLorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo et nostrum, assumenda quod ipsam provident expedita beatae, veniam nisi', 4, '2022-07-19'),
(4, 'Muhammad Asim', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo et nostrum, assumenda quod ipsam provident expedita beatae, veniam nisi\nLorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo et nostrum, assumenda quod ipsam provident expedita beatae, veniam nisi\nLorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo et nostrum, assumenda quod ipsam provident expedita beatae, veniam nisi', 1, '2022-07-19');

-- --------------------------------------------------------

--
-- Table structure for table `search_result`
--

CREATE TABLE `search_result` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `image_360` varchar(45) DEFAULT NULL,
  `query_id` int(11) NOT NULL,
  `address` varchar(200) NOT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `website` varchar(40) DEFAULT NULL,
  `latitude` varchar(50) NOT NULL,
  `longitude` varchar(50) NOT NULL,
  `url` varchar(1000) NOT NULL,
  `email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `search_result`
--

INSERT INTO `search_result` (`id`, `name`, `image_360`, `query_id`, `address`, `phone`, `website`, `latitude`, `longitude`, `url`, `email`) VALUES
(98, 'Hat Incorporation', 'N', 13, 'Hat Incorporation, R-500, Shadman Town Sector 14 B Shadman Town, Karachi, Karachi City, Sindh, Pakistan', '+92 332 2982223', 'http://www.hatinco.com', '24.961866', '67.0600852', 'https://www.google.com/maps/place/Hat+Incorporation/@24.961866,67.0600852,17z/data=!4m6!3m5!1s0x3eb341b8e49ed601:0xc94433069dd0caf9!8m2!3d24.961866!4d67.0600852!16s%2Fg%2F11gjszyzdm?authuser=0&hl=en&rclk=1', ''),
(99, 'Worth Web Scraping', 'Y', 13, 'Worth Web Scraping, 4049 Spring Garden St, Philadelphia, PA 19104, United States', NULL, 'https://www.worthwebscraping.com', '39.961657599999995', '-75.20407999999999', 'https://www.google.com/maps/place/Worth+Web+Scraping/@39.961657599999995,-75.20407999999999,17z/data=!4m6!3m5!1s0x89c6c774097f9315:0xffde9122bf3dbb2d!8m2!3d39.961657599999995!4d-75.20407999999999!16s%2Fg%2F11gjszyzdm?authuser=0&hl=en&rclk=1', 'info@worthwebscraping.com'),
(100, 'KNYSYS, LLC', 'N', 13, 'W36P+269 KNYSYS, LLC, Block 13 C Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Pakistan', NULL, 'http://knysys.com', '24.910028399999998', '67.0855941', 'https://www.google.com/maps/place/KNYSYS%2C+LLC/@24.910028399999998,67.0855941,17z/data=!4m6!3m5!1s0x3eb33f2eaaa19a47:0x400da466fdc4c185!8m2!3d24.910028399999998!4d67.0855941!16s%2Fg%2F11gjszyzdm?authuser=0&hl=en&rclk=1', ''),
(101, 'Aimbys Solutions Pvt. Ltd.', 'N', 13, 'Aimbys Solutions Pvt. Ltd., A-612 Titanium City Center, Nr. Sachin Tower, Nr. Cross Roads, Satellite Shyamal, 100 Feet Anand Nagar Rd, Jodhpur Village, Ahmedabad, Gujarat 380015, India', '+91 79 4032 7893', 'http://aimbys.com', '23.012064', '72.5236592', 'https://www.google.com/maps/place/Aimbys+Solutions+Pvt.+Ltd./@23.012064,72.5236592,17z/data=!4m6!3m5!1s0x395e84d59eb9ec95:0x97f0c83db28a3292!8m2!3d23.012064!4d72.5236592!16s%2Fg%2F11gjszyzdm?authuser=0&hl=en&rclk=1', ''),
(102, 'Seven Sigma Technologies', 'N', 21, 'Seven Sigma Technologies, Saudi-Pak Towers, 61-A Nazim-ud-din Rd, Block L F 7/4 Blue Area, Islamabad, Islamabad Capital Territory 44000, Pakistan', '+92 51 2800077', '', '33.7152524', '73.0634815', 'https://www.google.com/maps/place/Seven+Sigma+Technologies/@33.7152524,73.0634815,17z/data=!4m6!3m5!1s0x38dfbfa2860a633b:0xfd33d1f3716c64a4!8m2!3d33.7152524!4d73.0634815!16s%2Fg%2F11gjszyzdm?authuser=0&hl=en&rclk=1', 'none'),
(103, 'DataBeeAnalytics.com', 'N', 21, 'DataBeeAnalytics.com, 94 west Jinnah Ave, Block I G 7/2 Blue Area, Islamabad, Islamabad Capital Territory 44000, Pakistan', NULL, '', '33.7091493', '73.0555667', 'https://www.google.com/maps/place/DataBeeAnalytics.com/@33.7091493,73.0555667,17z/data=!4m6!3m5!1s0x38dfbf8a8669e81b:0x6240d8100a6d5c32!8m2!3d33.7091493!4d73.0555667!16s%2Fg%2F11gjszyzdm?authuser=0&hl=en&rclk=1', 'none');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `isActive` tinyint(4) NOT NULL,
  `date_created` date NOT NULL,
  `email_verified` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `name`, `email`, `address`, `phone`, `password`, `isActive`, `date_created`, `email_verified`) VALUES
(1, 'qas', 'test', 'T1@gmail.com', 'tsdssdf', '1231231232423', 'pbkdf2:sha256:150000$juZszk85$9c7a877552838825ec65241d6c62a8cc843f200796721062c5c8fefe9bca04ba', 1, '2022-07-19', 1),
(16, 'test2', 'Muhammad Qasim', 'qasimriaz814@gmail.com', 'Flat No s12', '23423423', 'pbkdf2:sha256:260000$XJuv9lgT5yQWNujh$358a804cedaec89173e92a678912f6ea219bb463ca4d3fa694ca0669c7524c', 1, '2022-07-23', 1);

-- --------------------------------------------------------

--
-- Table structure for table `working_status`
--

CREATE TABLE `working_status` (
  `id` int(11) NOT NULL,
  `text` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `working_status`
--

INSERT INTO `working_status` (`id`, `text`) VALUES
(1, 'ready to start'),
(2, 'scraper_working'),
(3, 'scraper_done'),
(4, 'scraper_error'),
(5, 'ml_working'),
(6, 'ml done'),
(7, 'ml_error');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `contact_messages`
--
ALTER TABLE `contact_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_contact_messages_user1_idx` (`user_user_id`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`invoice_id`),
  ADD KEY `fk_invoice_plan1_idx` (`plan_plan_id`),
  ADD KEY `fk_invoice_user1_idx` (`user_user_id`);

--
-- Indexes for table `plan`
--
ALTER TABLE `plan`
  ADD PRIMARY KEY (`plan_id`);

--
-- Indexes for table `query`
--
ALTER TABLE `query`
  ADD PRIMARY KEY (`query_id`),
  ADD KEY `fk_query_working_status1_idx` (`working_status_id`),
  ADD KEY `fk_query_working_status2_idx` (`admin_working_status`),
  ADD KEY `fk_query_user1_idx` (`user_user_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `search_result`
--
ALTER TABLE `search_result`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_search_result_query1_idx` (`query_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `working_status`
--
ALTER TABLE `working_status`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contact_messages`
--
ALTER TABLE `contact_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `invoice_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `plan`
--
ALTER TABLE `plan`
  MODIFY `plan_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `query`
--
ALTER TABLE `query`
  MODIFY `query_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `search_result`
--
ALTER TABLE `search_result`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `working_status`
--
ALTER TABLE `working_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contact_messages`
--
ALTER TABLE `contact_messages`
  ADD CONSTRAINT `fk_contact_messages_user1` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `invoice`
--
ALTER TABLE `invoice`
  ADD CONSTRAINT `fk_invoice_plan1` FOREIGN KEY (`plan_plan_id`) REFERENCES `plan` (`plan_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_invoice_user1` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `query`
--
ALTER TABLE `query`
  ADD CONSTRAINT `fk_query_user1` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_query_working_status1` FOREIGN KEY (`working_status_id`) REFERENCES `working_status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_query_working_status2` FOREIGN KEY (`admin_working_status`) REFERENCES `working_status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `search_result`
--
ALTER TABLE `search_result`
  ADD CONSTRAINT `fk_search_result_query1` FOREIGN KEY (`query_id`) REFERENCES `query` (`query_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
