-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2026 at 08:30 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vsbms`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customerid` int(11) NOT NULL,
  `FirstName` varchar(100) NOT NULL,
  `LastName` varchar(100) DEFAULT NULL,
  `Address` varchar(100) NOT NULL,
  `Telephone` varchar(100) NOT NULL,
  `VehiclePlateNumber` varchar(100) NOT NULL,
  `VehicleType` varchar(100) NOT NULL,
  `ServiceDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Serviceid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customerid`, `FirstName`, `LastName`, `Address`, `Telephone`, `VehiclePlateNumber`, `VehicleType`, `ServiceDate`, `Serviceid`) VALUES
(1, 'John', 'Doe', 'Kigali, Rwanda', '0788123456', 'RAB123A', 'Toyota Corolla', '2026-05-25 18:09:51', NULL),
(2, 'claudine', 'dushime', 'kigali', '0736282911', '23c', 'toyota', '2026-05-26 09:45:58', NULL),
(3, 'claudine', 'dushime', 'kigali', '0736282911', '23c', '3', '2026-05-26 09:49:02', NULL),
(4, 'claudine', 'dushime', 'kigali', '0736282911', '23c', 'toyota', '2026-05-26 20:24:38', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `invoiceid` int(11) NOT NULL,
  `TotalCost` decimal(10,2) NOT NULL,
  `PaidAmount` decimal(10,2) NOT NULL,
  `Balance` decimal(10,2) NOT NULL,
  `PaymentMonth` varchar(100) DEFAULT NULL,
  `Serviceid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`invoiceid`, `TotalCost`, `PaidAmount`, `Balance`, `PaymentMonth`, `Serviceid`) VALUES
(1, 50000.00, 30000.00, 20000.00, '2026-05-25', NULL),
(3, 57000.00, 7000.00, 50000.00, '2026-06-01', NULL),
(4, 120000.00, 70000.00, 50000.00, '2026-06-01', NULL),
(5, 20000.00, 1000.00, 19000.00, '2026-05-26', NULL),
(7, 4000.00, 3000.00, 1000.00, '2026-05-01', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `ServiceCode` enum('ENG','OIL','WSH','TIR') DEFAULT NULL,
  `ServiceName` enum('EngineRepair','OilChange','CarWash','TireReplacement') DEFAULT NULL,
  `ServiceCost` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `ServiceCode`, `ServiceName`, `ServiceCost`) VALUES
(1, 'ENG', '', 150000.00),
(2, 'ENG', 'EngineRepair', 150000.00),
(3, 'OIL', 'OilChange', 3000.00),
(4, 'WSH', 'CarWash', 7000.00),
(5, 'WSH', 'CarWash', 4000.00);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`) VALUES
(1, 'admin', '$2b$10$61CWiM1JJJpKhB3ZdjlJ0.PQbL/NR7Uju2vhLqIfJbH4pMQyAwt52'),
(2, 'keza', '$2b$10$P.awtZKwP0ZSPzEdwmE/3OHGYJ4KQZwMyLtloeDENt3iYD3RGhu5m'),
(3, 'lilly', '$2b$10$2ExRKdRNUWTeRLeZsJy58eKVfzeyzKd6Kxzg1DMAke8Mtjlkp9SXi'),
(4, 'penuella', '$2b$10$ZhvpShP7M1aVguZfXxCXO.mBQlycUCGo1VIgUqMt3q3ObIZp5YJem'),
(5, 'claudine', '$2b$10$QguvsTrKSRUZlvelDGPX5.zr6htyW28j9V6gRvKYHoSYLNfEgeBGi'),
(7, 'destin', '$2b$10$twstpLbMk71h5EK9KRQjkuf.YtxNPzA1w5LsWR7ShPPBkScT1ZtvW');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customerid`),
  ADD KEY `Serviceid` (`Serviceid`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`invoiceid`),
  ADD KEY `Serviceid` (`Serviceid`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customerid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `invoiceid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`Serviceid`) REFERENCES `services` (`id`);

--
-- Constraints for table `invoices`
--
ALTER TABLE `invoices`
  ADD CONSTRAINT `invoices_ibfk_1` FOREIGN KEY (`Serviceid`) REFERENCES `services` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
