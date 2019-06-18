-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 20, 2019 lúc 03:35 PM
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
-- Cơ sở dữ liệu: `quanly_car_online`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `ten_dang_nhap` varchar(100) NOT NULL,
  `mat_khau` varchar(100) NOT NULL,
  `id_KH` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`ten_dang_nhap`, `mat_khau`, `id_KH`) VALUES
('PhanQuan', 'quan123', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `checkdelete` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name`, `checkdelete`) VALUES
(1, 'Thể thao', '0'),
(2, 'Gia đình ', '0'),
(3, 'xe 6 chỗ', '1'),
(4, 'Mui trần', '1'),
(5, 'Mui', '1'),
(6, 'Xe thể thao mui trần', '1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `tenkhachhang` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `soDT` int(11) NOT NULL,
  `linkAnh` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `customer`
--

INSERT INTO `customer` (`id`, `tenkhachhang`, `email`, `soDT`, `linkAnh`) VALUES
(1, 'Phan Đức Quân', 'Phanducquan.1997@gmail.com', 388285252, '/images/avatar1.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `tenkhachhang` varchar(100) NOT NULL,
  `madonhang` varchar(50) NOT NULL,
  `ngaydathang` date NOT NULL,
  `thanhtoan` float NOT NULL,
  `idTrangThai` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `producers`
--

CREATE TABLE `producers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `checkdelete` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `producers`
--

INSERT INTO `producers` (`id`, `name`, `checkdelete`) VALUES
(1, 'ferrari', '0'),
(2, 'Lamborghini', '0'),
(3, 'Bugati', '0'),
(5, 'Mercedes', '1'),
(7, 'porche123', '1'),
(9, 'Mercedes', '1'),
(10, 'mazda', '1'),
(11, 'honda1234', '1'),
(12, 'Mercedes', '1'),
(13, 'Mercedes Việt Nam', '1');

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
  `idLoai` int(11) DEFAULT NULL,
  `idNhaSX` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `filepathanh`, `giaban`, `mota`, `soluonghienco`, `ten`, `xuatxu`, `idLoai`, `idNhaSX`) VALUES
(1, '/images/ferrari-418.jpg', 1300000000, 'Bao đẹp bao chất lượng, tạo cảm giác thoải mái khi di chuyển', 7, 'Ferrari_1', 'Mỹ', 1, 1),
(2, '/images/banner2.jpg', 1000000000, 'Sản phẩm ngoài mong đợi', 10, 'Bugati', 'Mĩ', 1, 3),
(3, '/images/banner1.jpg', 1200000000, 'Hàng đẹp bao chất lượng, giá cả phải chăng, hợp túi tiền người mua', 10, 'Lamborghini_123', 'Anh', 1, 2),
(4, '/images/bugati.jpg', 1300000000, 'Hàng đẹp bao chất lượng, giá cả phải chăng, hợp túi tiền người mua', 10, 'Bugati_123', 'Mĩ', 1, 3),
(5, '/images/buggati-chiron.jpg', 1200000000, 'Là sự lựa chọn của nhiều người, được gia công, lắp rap hoàn toàn theo một quy trình khép kín, cho ra sản phẩm hoàn toàn ưng ý và không có một chi tiết sai sốt là một mẫu xe đáng quan tâm', 7, 'Bagati_chiron', 'Thụy Điển', 1, 3),
(6, '/images/mercedes1.jpg', 2000000000, 'Là sự lựa chọn của nhiều người, được gia công, lắp rap hoàn toàn theo một quy trình khép kín, cho ra sản phẩm hoàn toàn ưng ý và không có một chi tiết sai sốt là một mẫu xe đáng quan tâm', 4, 'mercedes', 'Mỹ', NULL, NULL),
(7, '/images/banner.jpg', 1000000000, 'Sản phẩm đẹp, chất lượng', 10, 'Ferrari_418', 'Anh', 1, 1),
(8, '/images/ferrari.PNG', 1000000000, 'Sản phẩm ngoài mong đợi', 10, 'Ferrari', 'Mĩ', 1, 1),
(9, '/images/lexus1.jpg', 1200000000, 'Hàng đẹp bao chất lượng, giá cả phải chăng, hợp túi tiền người mua', 10, 'lexus1_123', 'Anh', NULL, NULL),
(10, '/images/lexus.jpg', 1300000000, 'Hàng đẹp bao chất lượng, giá cả phải chăng, hợp túi tiền người mua', 10, 'lexus_123', 'Mĩ', NULL, NULL),
(11, '/images/gd4.jpg', 1200000000, 'Là sự lựa chọn của nhiều người, được gia công, lắp rap hoàn toàn theo một quy trình khép kín, cho ra sản phẩm hoàn toàn ưng ý và không có một chi tiết sai sốt là một mẫu xe đáng quan tâm', 7, 'Toyota_1123', 'Thụy Điển', NULL, NULL),
(12, '/images/honda.jpg', 2000000000, 'Là sự lựa chọn của nhiều người, được gia công, lắp rap hoàn toàn theo một quy trình khép kín, cho ra sản phẩm hoàn toàn ưng ý và không có một chi tiết sai sốt là một mẫu xe đáng quan tâm', 4, 'honda', 'Mỹ', NULL, NULL),
(13, '/images/banner1.jpg', 1200000000, 'đẹp', 7, 'lamborghini_avendor', 'mỹ', 1, 2),
(18, 'https://www.rentlux.es/vehicle_images/huge/27_15254498270.jpg', 1400000000, 'đẹp', 2, 'lamborghini_avendor', 'Canada ', 1, 1),
(28, '/images/banner.jpg', 1200000000, 'xe đẹp', 4, 'ferrari_12345678', 'Anh', NULL, NULL),
(29, '/images/background.jpg', 1200000000, 'xe đẹp', 4, 'lamborghini_2018', 'Mỹ', 1, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `shops`
--

CREATE TABLE `shops` (
  `id` int(11) NOT NULL,
  `diachi` varchar(255) NOT NULL,
  `sodienthoai` int(11) NOT NULL,
  `quanly` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `shops`
--

INSERT INTO `shops` (`id`, `diachi`, `sodienthoai`, `quanly`) VALUES
(1, 'Quận 1, TP HCM', 388285252, 'Phan Quân'),
(2, 'Quận 2, TP HCM', 122334455, 'Ngọc Quang');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`ten_dang_nhap`),
  ADD KEY `FK_loy139wwyoj6ac11a75cnh9fx` (`id_KH`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `producers`
--
ALTER TABLE `producers`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_loy136wwyoj6ac11a75cnh9fx` (`idLoai`),
  ADD KEY `FK_loy137wwyoj6ac11a75cnh9fx` (`idNhaSX`);

--
-- Chỉ mục cho bảng `shops`
--
ALTER TABLE `shops`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `producers`
--
ALTER TABLE `producers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `shops`
--
ALTER TABLE `shops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `account`
--
ALTER TABLE `account`
  ADD CONSTRAINT `FK_loy139wwyoj6ac11a75cnh9fx` FOREIGN KEY (`id_KH`) REFERENCES `customer` (`id`);

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_loy136wwyoj6ac11a75cnh9fx` FOREIGN KEY (`idLoai`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `FK_loy137wwyoj6ac11a75cnh9fx` FOREIGN KEY (`idNhaSX`) REFERENCES `producers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
