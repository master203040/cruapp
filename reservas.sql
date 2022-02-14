-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-02-2022 a las 02:31:42
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `reservas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombres` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `edad` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sexo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `identificacion` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ubicacion` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id`, `nombres`, `apellido`, `edad`, `sexo`, `identificacion`, `direccion`, `telefono`, `email`, `ubicacion`, `created_at`, `updated_at`) VALUES
(1, 'carlos', 'ortega', '40', 'Masculino', '71217546', 'Calle #54-85', '31485497', '@ortega.com', 'silla norte', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Kevin Juan', 'Rodriguez Ezquivel', '49', 'Masculino', '78218555', 'calle 98#23', '934994351', 'kevin@gmail.com', 'silla 52 zo', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'María Perla', 'Saruc Main', '40', 'Femenino', '80218522', 'calle 74#68', '952312435', 'maria@gmail.com', 'silla 3 zona norte', '0000-00-00 00:00:00', '2022-02-13 09:11:00'),
(4, 'Diego Carlos', 'Mesa Oswaldo', '30', 'Masculino', '11991122', 'calle 77#64', '977123331', 'diego2021@gmail.com', 'silla 4 zona oriental', '0000-00-00 00:00:00', '2022-02-13 09:35:41'),
(5, 'juan ', 'naranjo', '35', '41745874', 'calle9-9', '412541', '@naranjo', 'silla ocidental', '[value-10]', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `reservas_identificacion_unique` (`identificacion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
