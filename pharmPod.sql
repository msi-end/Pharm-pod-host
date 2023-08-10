

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


--
-- Database: `pharmPod`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth`
--

CREATE TABLE `auth` (
  `id` int(10) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `c_id` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth`
--

INSERT INTO `auth` (`id`, `username`, `password`, `c_id`) VALUES
(1, 'min01', 'affe24b899e2d2a880bd5f1a54fc777efbcc6b2bfc55252e28798a4d905a10a4', 'min01');

-- --------------------------------------------------------

--
-- Table structure for table `client_Info`
--

CREATE TABLE `client_Info` (
  `c_id` varchar(200) NOT NULL,
  `c_name` varchar(50) NOT NULL,
  `c_contact` varchar(50) NOT NULL,
  `c_location` varchar(100) NOT NULL,
  `c_about` varchar(255) NOT NULL,
  `services` varchar(200) NOT NULL,
  `map_location` varchar(200) NOT NULL,
  `fees` int(10) NOT NULL,
  `form_Status` varchar(5) NOT NULL DEFAULT 'true',
  `autoReqAppl` varchar(5) NOT NULL DEFAULT 'true',
  `maxApply` int(3) NOT NULL DEFAULT 7
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `client_Info`
--

INSERT INTO `client_Info` (`c_id`, `c_name`, `c_contact`, `c_location`, `c_about`, `services`, `map_location`, `fees`, `form_Status`, `autoReqAppl`, `maxApply`) VALUES
('min01', 'mintu sharma', '9401069337', 'nagaon,assam,india', 'about Here! ', 'programmming, coding', 'nagaon', 500, 'true', 'false', 7);

-- --------------------------------------------------------

--
-- Table structure for table `cl_doctor`
--

CREATE TABLE `cl_doctor` (
  `doc_id` int(50) NOT NULL,
  `d_name` varchar(100) DEFAULT NULL,
  `time_table` varchar(100) DEFAULT NULL,
  `fees` int(5) DEFAULT NULL,
  `c_id` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `cl_img`
--

CREATE TABLE `cl_img` (
  `id` int(11) NOT NULL,
  `img` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `c_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `doc_profile`
--

CREATE TABLE `doc_profile` (
  `d_name` varchar(100) NOT NULL,
  `d_type` varchar(50) NOT NULL,
  `d_exp` varchar(50) NOT NULL,
  `d_dg` varchar(50) NOT NULL,
  `d_lang` varchar(20) NOT NULL,
  `d_rating` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `min01_PS_data`
--

CREATE TABLE `min01_PS_data` (
  `p_name` varchar(30) NOT NULL,
  `p_OthInfo` varchar(50) NOT NULL,
  `p_doctor` varchar(30) NOT NULL,
  `p_aptDate` varchar(30) NOT NULL,
  `p_aptStatus` varchar(10) NOT NULL DEFAULT 'true',
  `id` int(20) NOT NULL,
  `p_number` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rr_data`
--

CREATE TABLE `rr_data` (
  `id` int(11) NOT NULL,
  `c_id` varchar(50) NOT NULL,
  `rating` int(2) NOT NULL,
  `review` varchar(255) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `SU_auth`
--

CREATE TABLE `SU_auth` (
  `id` int(11) NOT NULL,
  `uName` varchar(20) NOT NULL,
  `pWord` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `SU_Del_PSData`
--

CREATE TABLE `SU_Del_PSData` (
  `p_name` varchar(30) NOT NULL,
  `p_OthInfo` varchar(50) NOT NULL,
  `p_doctor` varchar(30) NOT NULL,
  `p_aptDate` varchar(30) NOT NULL,
  `p_aptStatus` varchar(10) NOT NULL DEFAULT 'true',
  `id` int(20) NOT NULL,
  `p_number` varchar(10) NOT NULL,
  `c_id` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `SU_feedback`
--

CREATE TABLE `SU_feedback` (
  `id` int(10) NOT NULL,
  `feedback` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `SU_Rej_PSData`
--

CREATE TABLE `SU_Rej_PSData` (
  `p_name` varchar(30) NOT NULL,
  `p_OthInfo` varchar(50) NOT NULL,
  `p_doctor` varchar(30) NOT NULL,
  `p_aptDate` varchar(30) NOT NULL,
  `p_aptStatus` varchar(10) NOT NULL DEFAULT 'true',
  `id` int(20) NOT NULL,
  `p_number` varchar(10) NOT NULL,
  `c_id` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`id`),
  ADD KEY `c_id` (`c_id`);

--
-- Indexes for table `client_Info`
--
ALTER TABLE `client_Info`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `cl_doctor`
--
ALTER TABLE `cl_doctor`
  ADD PRIMARY KEY (`doc_id`),
  ADD KEY `c_id` (`c_id`);

--
-- Indexes for table `cl_img`
--
ALTER TABLE `cl_img`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `min01_PS_data`
--
ALTER TABLE `min01_PS_data`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `rr_data`
--
ALTER TABLE `rr_data`
  ADD PRIMARY KEY (`id`),
  ADD KEY `c_id` (`c_id`);

--
-- Indexes for table `SU_auth`
--
ALTER TABLE `SU_auth`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SU_Del_PSData`
--
ALTER TABLE `SU_Del_PSData`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SU_feedback`
--
ALTER TABLE `SU_feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SU_Rej_PSData`
--
ALTER TABLE `SU_Rej_PSData`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth`
--
ALTER TABLE `auth`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cl_doctor`
--
ALTER TABLE `cl_doctor`
  MODIFY `doc_id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cl_img`
--
ALTER TABLE `cl_img`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `min01_PS_data`
--
ALTER TABLE `min01_PS_data`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rr_data`
--
ALTER TABLE `rr_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `SU_auth`
--
ALTER TABLE `SU_auth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `SU_Del_PSData`
--
ALTER TABLE `SU_Del_PSData`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `SU_feedback`
--
ALTER TABLE `SU_feedback`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `SU_Rej_PSData`
--
ALTER TABLE `SU_Rej_PSData`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth`
--
ALTER TABLE `auth`
  ADD CONSTRAINT `auth_ibfk_1` FOREIGN KEY (`c_id`) REFERENCES `client_Info` (`c_id`);

--
-- Constraints for table `cl_doctor`
--
ALTER TABLE `cl_doctor`
  ADD CONSTRAINT `cl_doctor_ibfk_1` FOREIGN KEY (`c_id`) REFERENCES `client_Info` (`c_id`);

--
-- Constraints for table `rr_data`
--
ALTER TABLE `rr_data`
  ADD CONSTRAINT `rr_data_ibfk_1` FOREIGN KEY (`c_id`) REFERENCES `client_Info` (`c_id`);
COMMIT;

