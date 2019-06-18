-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 12, 2019 lúc 12:11 PM
-- Phiên bản máy phục vụ: 10.1.37-MariaDB
-- Phiên bản PHP: 7.0.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `car_online`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `checkdelete` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `checkdelete`, `name`) VALUES
(1, '0', 'Lamborghini'),
(2, '0', 'ferari\r\n');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `filepathanh` varchar(255) DEFAULT NULL,
  `giaban` float DEFAULT NULL,
  `mota` varchar(255) DEFAULT NULL,
  `soluonghienco` int(11) DEFAULT NULL,
  `ten` varchar(255) DEFAULT NULL,
  `xuatxu` varchar(255) DEFAULT NULL,
  `idLoai` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `filepathanh`, `giaban`, `mota`, `soluonghienco`, `ten`, `xuatxu`, `idLoai`) VALUES
(1, '/images/ferrari-418.jpg', 1000000000, 'Sản phẩm đẹp, chất lượng', 10, 'Ferrari_418', 'Anh', NULL),
(2, '/images/banner2.jpg', 1000000000, 'Sản phẩm ngoài mong đợi', 10, 'Bugati', 'Mĩ', 2),
(3, '/images/banner1.jpg', 1200000000, 'Hàng đẹp bao chất lượng, giá cả phải chăng, hợp túi tiền người mua', 10, 'Lamborghini_123', 'Anh', NULL),
(4, '/images/bugati.jpg', 1300000000, 'Hàng đẹp bao chất lượng, giá cả phải chăng, hợp túi tiền người mua', 10, 'Bugati_123', 'Mĩ', NULL),
(5, '/images/buggati-chiron.jpg', 1200000000, 'Là sự lựa chọn của nhiều người, được gia công, lắp rap hoàn toàn theo một quy trình khép kín, cho ra sản phẩm hoàn toàn ưng ý và không có một chi tiết sai sốt là một mẫu xe đáng quan tâm', 7, 'Bagati_chiron', 'Thụy Điển', NULL),
(6, '/images/mercedes1.jpg', 2000000000, 'Là sự lựa chọn của nhiều người, được gia công, lắp rap hoàn toàn theo một quy trình khép kín, cho ra sản phẩm hoàn toàn ưng ý và không có một chi tiết sai sốt là một mẫu xe đáng quan tâm', 4, 'mercedes', 'Mỹ', NULL),
(7, '/images/banner.jpg', 1000000000, 'Sản phẩm đẹp, chất lượng', 10, 'Ferrari_418', 'Anh', NULL),
(8, '/images/ferrari.PNG', 1000000000, 'Sản phẩm ngoài mong đợi', 10, 'Ferrari', 'Mĩ', 2),
(9, '/images/lexus1.jpg', 1200000000, 'Hàng đẹp bao chất lượng, giá cả phải chăng, hợp túi tiền người mua', 10, 'lexus1_123', 'Anh', NULL),
(10, '/images/lexus.jpg', 1300000000, 'Hàng đẹp bao chất lượng, giá cả phải chăng, hợp túi tiền người mua', 10, 'lexus_123', 'Mĩ', NULL),
(11, '/images/gd4.jpg', 1200000000, 'Là sự lựa chọn của nhiều người, được gia công, lắp rap hoàn toàn theo một quy trình khép kín, cho ra sản phẩm hoàn toàn ưng ý và không có một chi tiết sai sốt là một mẫu xe đáng quan tâm', 7, 'Toyota_1123', 'Thụy Điển', NULL),
(12, '/images/honda.jpg', 2000000000, 'Là sự lựa chọn của nhiều người, được gia công, lắp rap hoàn toàn theo một quy trình khép kín, cho ra sản phẩm hoàn toàn ưng ý và không có một chi tiết sai sốt là một mẫu xe đáng quan tâm', 4, 'honda', 'Mỹ', NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_loy136wwyoj6ac11a75cnh9fx` (`idLoai`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_loy136wwyoj6ac11a75cnh9fx` FOREIGN KEY (`idLoai`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
