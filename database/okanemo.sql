-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 13 Apr 2021 pada 02.27
-- Versi server: 10.4.14-MariaDB
-- Versi PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `okanemo`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `nab`
--

CREATE TABLE `nab` (
  `id` int(10) NOT NULL,
  `nab` decimal(50,20) NOT NULL,
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `nab`
--

INSERT INTO `nab` (`id`, `nab`, `updatedAt`) VALUES
(1, '0.50251000000000000000', '2021-04-13 07:12:26'),
(2, '5.02513000000000000000', '2021-04-13 07:12:34');

-- --------------------------------------------------------

--
-- Struktur dari tabel `unit`
--

CREATE TABLE `unit` (
  `id` int(10) NOT NULL,
  `userId` int(20) NOT NULL,
  `unit` decimal(30,10) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `unit`
--

INSERT INTO `unit` (`id`, `userId`, `unit`, `createdAt`) VALUES
(1, 1, '29849.9740305226', '2021-04-13 07:24:27'),
(2, 2, '19899.9826870151', '2021-04-13 07:24:42'),
(3, 1, '-1989.9982687015', '2021-04-13 07:25:19'),
(4, 2, '-2984.9974030523', '2021-04-13 07:25:32');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `userId` int(10) NOT NULL,
  `name` varchar(60) NOT NULL,
  `username` varchar(20) NOT NULL,
  `profilePicture` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`userId`, `name`, `username`, `profilePicture`) VALUES
(1, 'John Doe', 'John', '2021-04-12T23-09-41.331Zimg-admin.png'),
(2, 'Mohammad Ilham', 'Ilham', '2021-04-12T23-27-01.910Zprofile.png'),
(3, 'Nurdhi Hafsyah', 'Hafsyah', '2021-04-12T23-28-46.722Zphoto.png');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `nab`
--
ALTER TABLE `nab`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `unit`
--
ALTER TABLE `unit`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `nab`
--
ALTER TABLE `nab`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `unit`
--
ALTER TABLE `unit`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
