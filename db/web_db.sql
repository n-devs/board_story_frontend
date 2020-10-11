-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2020 at 08:58 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `title` text DEFAULT NULL,
  `region` text DEFAULT NULL,
  `county` text DEFAULT NULL,
  `detail` text DEFAULT NULL,
  `cover` text DEFAULT NULL,
  `data` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `region`, `county`, `detail`, `cover`, `data`, `created_at`, `updated_at`) VALUES
(1, 'คลองลาน (Khlong Lan)', 'ภาคเหนือ', 'กำแพงเพชร ', ' อุทยานแห่งชาติคลองลาน อ.คลองลาน จ.กำแพงเพชร 62180', 'https://www.chillpainai.com/src/wewakeup/img_travel/740/1443760625-klonglan_2.jpg', '# ที่ตั้งและแผนที่\r\n#### สถานที่ติดต่อ : \r\n> อุทยานแห่งชาติคลองลาน อ.คลองลาน จ.กำแพงเพชร 62180\r\n\r\n#### โทรศัพท์ : \r\n> 088 407 9915\r\n\r\n#### E-mail : \r\n> klonglan_np@hotmail.com\r\n\r\n#### หัวหน้าอุทยานแห่งชาติ : \r\n> นายสุระชัย โภคะมณี\r\n\r\n#### ตำแหน่ง : \r\n> นักวิชาการป่าไม้ชำนาญการ\r\n\r\n#### อัตราค่าบริการเข้าอุทยานแห่งชาติ\r\n> ชาวไทย : ผู้ใหญ่ 40 บาท เด็ก 20 บาท\r\n\r\n> ชาวต่างชาติ : ผู้ใหญ่ 200 บาท เด็ก 100 บาท\r\n\r\n### อัตราค่าบริการสำหรับยานพาหนะ : [คลิก](http://portal.dnp.go.th/Content/nationalpark?contentId=8139)\r\n> **หมายเหตุ เมื่อชำระค่าบริการเข้าอุทยานแห่งชาติแล้วกรุณาพกบัตรค่าบริการติดตัว ขณะท่องเที่ยวในอุทยานแห่งชาติเพื่อการตรวจสอบ\r\n\r\n#### ร้านค้าสวัสดิการ\r\n> ร้านค้าสวัสดิการ (กาแฟ น้ำดื่ม ขนม) เปิดบริการทุกวันเวลา 08.00 น.- 16.30 น.\r\n\r\n### สัญญาณโทรศัพท์ในพื้นที่\r\n> บริเวณที่ทำการอุทยานแห่งชาติ : AIS, TRUE, DTAC\r\n\r\n\r\n> กองอุทยานแห่งชาติ กรมป่าไม้ได้มีคำสั่งที่ 192/2523 ลงวันที่ 28 มกราคม 2523 ให้นายปรีชา จันทร์ศิริตานนท์ นักวิชาการป่าไม้ 4 ไปทำการสำรวจและจัดพื้นที่บริเวณป่าคลองลาน จังหวัดกำแพงเพชร เป็นอุทยานแห่งชาติ ปรากฏว่าพื้นที่ดังกล่าวมีสภาพป่าไม้สัก และไม้กระยาเลยสมบูรณ์มาก เป็นภูเขาสูงประกอบด้วยทิวทัศน์และธรรมชาติสวยงามมาก เป็นป่าต้นน้ำลำธาร เหมาะสมที่จะจัดตั้งเป็นอุทยานแห่งชาติ กองอุทยานแห่งชาติ กรมป่าไม้ได้นำเสนอคณะกรรมการอุทยานแห่งชาติ มีมติในการประชุมครั้งที่ 1/2525 เมื่อวันที่ 15 มิถุนายน2525 เห็นสมควรให้ออกพระราชกฤษฎีกากำหนดพื้นที่ป่าคลองลานเป็นอุทยานแห่งชาติ โดยมีพระราชกฤษฎีกา กำหนดบริเวณที่ดินป่าคลองลานในท้องที่ ตำบลโป่งน้ำร้อน ตำบลคลองลาน และตำบลคลองลานพัฒนา อำเภอคลองลาน จังหวัดกำแพงเพชร ให้เป็นอุทยานแห่งชาติ พ.ศ. 2525 ซึ่งประกาศในราชกิจจานุเบกษา เล่มที่ 99 ตอนที่ 191 ลงวันที่ 25 ธันวาคม 2525 นับเป็นอุทยานแห่งชาติแห่งที่ 44 ของประเทศ\r\n\r\n> อุทยานแห่งชาติคลองลาน ตั้งอยู่ท้องที่ ตำบลโป่งน้ำร้อน คลองน้ำไหล คลองลานพัฒนา อำเภอคลองลาน จังหวัดกำแพงเพชร อยู่ระหว่างเส้นรุ้งที่ 16 องศา 2 ลิปดา –16 องศา 20 ลิปดาเหนือ และอยู่ระหว่างเส้นแวงที่ 99 องศา 6 ลิปดา – 99 องศา 19 ลิปดาตะวันออก ครอบคลุมพื้นที่ประมาณ 187,500 ไร่ หรือ 300 ตารางกิโลเมตร\r\n\r\n\r\n# สถานที่ท่องเที่ยว \r\n[แก่งเกาะร้อย](http://park.dnp.go.th/visitor/scenicshow.php?id=45) | [ลำน้ำคลองสวนหมาก](http://park.dnp.go.th/visitor/scenicshow.php?id=46) | [ทางเดินศึกษาธรรมชาติกิ่วงวงช้าง](http://park.dnp.go.th/visitor/scenicshow.php?id=48) | [น้ำตกคลองน้ำไหล(น้ำตกปางควาย)](http://park.dnp.go.th/visitor/scenicshow.php?id=49)\r\n\r\n[น้ำตกเพชรจะขอ](http://park.dnp.go.th/visitor/scenicshow.php?id=50) | [น้ำตกคลองลาน](http://park.dnp.go.th/visitor/scenicshow.php?id=159) | [เส้นทางศึกษาธรรมชาติน้ำตกคลองลาน](http://park.dnp.go.th/visitor/scenicshow.php?id=160) | [น้ำตกคลองน้ำไหล](http://park.dnp.go.th/visitor/scenicshow.php?id=612)\r\n\r\n# ภาพแผนที่\r\n![alt text](http://park.dnp.go.th/dnp/ptamap/1044map270109_74842.png)\r\n\r\n# ขนาดพื้นที่\r\n> 187500.00 ไร่\r\n\r\n# หน่วยงานในพื้นที่\r\n* ขุนลาน\r\n* หน่วยพิทักษ์อุทยานแห่งชาติที่ คล.1 (แม่พืช)\r\n* หน่วยพิทักษ์อุทยานแห่งชาติที่ คล.2 (คลองน้ำไหล)\r\n* หน่วยพิทักษ์อุทยานแห่งชาติที่ คล.3 (เพชรจะขอ)\r\n* หน่วยพิทักษ์อุทยานแห่งชาติที่ คล.4 (คลองสวนหมาก)\r\n\r\n# ลักษณะภูมิประเทศ\r\n> สภาพภูมิประเทศเป็นภูเขาสูงสลับซับซ้อน ด้านทิศตะวันออกเป็นที่ราบ ดินร่วนปนทราย ภูเขาแต่ละลูกเชื่อมโยงติดต่อกับขุนคลองลานซึ่งเป็นจุดสูงสุดในบริเวณนี้ สูงจากระดับน้ำทะเลประมาณ 1,439 เมตร สภาพป่าสมบูรณ์ เป็นป่าต้นน้ำลำธาร ต้นกำเนิดของแม่น้ำหลายสาย เช่น คลองขลุง คลองสวนหมาก ไหลรวมกันลงสู่แม่น้ำปิง\r\n\r\n# ลักษณะภูมิอากาศ\r\n> สภาพภูมิอากาศในเขตอุทยานแห่งชาติ อุณหภูมิเฉลี่ยตลอดปีประมาณ 27 องศาเซลเซียส ในฤดูร้อนอากาศร้อนในตอนกลางวัน อุณหภูมิสูงสุดในเดือนเมษายน 38 องศาเซลเซียส ดู ฤดูหนาวอากาศเย็นสบาย อุณหภูมิต่ำสุดในเดือนธันวาคม 17 องศาเซลเซียส ในฤดูฝนมีฝนตกชุก ปริมาณน้ำฝนโดยเฉลี่ย 1,300 มิลลิเมตรต่อปี\r\n\r\n# พืชพรรณและสัตว์ป่า\r\n> ป่าดงดิบแล้ง ขึ้นอยู่ทั่วไปที่ระดับความสูงประมาณ 500เมตรขึ้นไป ชนิดไม้ที่สำคัญ ได้แก่ ตะเคียนทอง ตะเคียนหิน สมพง ยมหอม พยอม สมอพิเภก เป็นต้น\r\n\r\n> ป่าเบญจพรรณ (Mixed Deciduous Forest) คิดเป็น 13.33 % ของพื้นที่ทั้งหมดของอุทยานแห่งชาติ ซึ่งสภาพป่าส่วนใหญ่จะเป็นป่าเบญจพรรณผสมป่าดงดิบ ซึ่งคิดเป็น 35.60 % ของพื้นที่ทั้งหมดของอุทยานแห่งชาติ ชนิดไม้ที่สำคัญของป่าได้แก่ ประดู่ สัก ตะแบก มะค่าโมง และไผ่ชนิดต่างๆ\r\n\r\n> ป่าชนิดอื่นๆซึ่งประกอบด้วยป่าเต็งรัง (Dry Dipterocarp Forest) ซึ่งพบในระดับความสูงประมาณ 400 – 600 เมตร ชนิดไม้ที่สำคัญของป่าได้แก่ เต็ง รัง ยอป่า สมอพิเภก รกฟ้า และสมพง เป็นต้น ป่าไผ่ ซึ่งสังคมพืชที่ขึ้นอยู่ได้แก่ ไผ่ชนิดต่างๆซึ่งขึ้นกระจายเป็นหย่อมๆ นอกจากนี้ก็มีป่าหญ้า\r\n\r\n\r\n> สัตว์ป่า\r\n\r\n> สัตว์เลี้ยงลูกด้วยนมพบรวมทั้งหมด 92 ชนิด จาก 27 วงศ์ รายละเอียดแสดงดังตาราง 1 ในภาคผนวก ร้อยละ 4.35 หรือ 4 ชนิดของสัตว์เลี้ยงลูกด้วยนมที่สำรวจพบเป็นสัตว์ที่มีความชุกชุมระดับมาก ร้อยละ 81.58 หรือ 75 ชนิด เป็นสัตว์ที่มีความชุกชุมระดับปานกลาง ร้อยละ 14.13 หรือ 13 ชนิด เป็นสัตว์ที่มีความชุกชุมระดับน้อย ร้อยละ 8.70 หรือ 8 ชนิด ของสัตว์ที่สำรวจพบมีสถานภาพเป็นสัตว์ที่ใกล้จะสูญพันธุ์ (Endangered species) โดยพิจารณาจาก ประชากร ถิ่นที่อยู่อาศัย และปัจจัยคุกคาม ได้แก่ นากใหญ่ขนเรียบ (L.perspicillata) ชะมดเช็ด (V.malaccensis) แมวป่า (F.chaus) เสือลายเมฆ (N.nebulosa) เสือดาว เสือดำ (P.pardus) เสือโคร่ง (P.tigris) วัวแดง (B.javanica) และช้างป่า (E.maximus) ร้อยละ 3.26 หรือ 3 ชนิดของสัตว์ที่สำรวจพบมีสถานภาพที่ล่อแหลมต่อการสูญพันธุ์ (Vulnerable species) โดยพิจารณาจากประชากรถิ่นที่อยู่อาศัย และปัจจัยคุกคาม ได้แก่ หมาใน(C.alpinus) เสือไฟ(F.temmincki) และกระทิง(B.quarus) ในช่วงสำรวจพบรอยเท้าสัตว์กีบชนิดหนึ่งทางทิศใต้ น่าจะเป็นรอยเท้าควายป่าแต่ยังไม่ยืนยัน\r\n\r\n> นกพบทั้งหมด82 ชนิด ใน 27 วงศ์ รายละเอียดดังตารางที่ 2 ในภาคผนวก ร้อยละ 17.03 หรือ 14 ชนิด ของนกที่สำรวจพบมีระดับความชุกมาก ร้อยละ 80.49 หรือ 66 ชนิดที่มีระดับความชุกชุมปานกลาง และร้อยละ 2.44 หรือ 2 ชนิด มีระดับความชุกชุมน้อย ในจำนวนนกที่พบทั้งหมดไม่ปรากฏว่ามีนกชนิดใดที่มีสถานภาพล่อแหลมต่อการสูญพันธุ์หรือใกล้จะสูญพันธุ์(Valnerable or Endangered species) เมื่อพิจารณาจากประชากร ถิ่นที่อยู่อาศัย และปัจจัยคุกคาม\r\n\r\n> สัตว์สะเทินน้ำสะเทินบกพบทั้งหมด 26 ชนิด ใน 5 วงศ์ รายละเอียดแสดงไว้ในตารางที่ 3 ร้อยละ 23.08 หรือ 6 ชนิดของสัตว์ที่สำรวจพบมีระดับความชุกชุมมากร้อยละ 50.00 หรือ 13 ชนิด มีระดับความชุกชุมปานกลางและร้อยละ 26.92 หรือ 7 ชนิด มีระดับความชุกชุมน้อยร้อยละ 46.15 หรือ 12 ชนิดของสัตว์ที่สำรวจพบมีสถานภาพเป็นสัตว์ที่ใกล้จะสูญพันธุ์(Endangered species) โดยพิจารณาจากประชากร ถิ่นที่อยู่อาศัยและปัจจัยคุกคาม เช่น อึ่งกรายลายเลอะ(L.hasselti) เขียดหลังปุ่มที่ราบ(P.martensi) กบนา(R.rugulosa) ปาดเคราะธรรมดา(P.parvulus) ฯลฯ ร้อยละ 23.08 หรือ 6 ชนิดของสัตว์ที่สำรวจพบมีสถานภาพล่อแหลมต่อการสูญพันธุ์(Endangered species) โดยพิจารณาจากประชากร ถิ่นที่อยู่อาศัย และปัจจัยคุกคาม เช่น เขียดตะปาด(R.leucomystax) อึ่งน้ำเต้า(M.ornata) เขียดชะง่อนหิน(R.livida) กบหนอง(R.limnocharis)\r\n\r\n> สัตว์เลื้อยคลานพบทั้งหมด 35 ชนิดใน 11 วงศ์ รายละเอียดดังตารางที่ 4 ในภาคผนวก ร้อยละ 2.86 หรือ 1 ชนิดของสัตว์ที่สำรวจพบมีระดับความชุกชุมมาก ร้อยละ 68.57 หรือ 24 ชนิด มีระดับความชุกชุมปานกลาง และร้อยละ 28.57 หรือ 10 ชนิดมีระดับความชุกชุมน้อย ร้อยละ 31.43 หรือ 11 ชนิดของสัตว์ที่สำรวจพบมีสถานภาพเป็นสัตว์ที่ใกล้จะสูญพันธุ์(Endangered species) โดยพิจารณาจากประชากร ถิ่นที่อยู่อาศัย และปัจจัยคุกคาม เช่น เต่าหวาย(H.grandis) เต่าหกดำ(M.emys) กิ้งก่าบินคอแดง(D.blanfordi) แย้(L.belliana) ฯลฯ ร้อยละ 25.74 หรือ 9 ชนิดของสัตว์ที่สำรวจพบมีสถานภาพที่ล่อแหลมต่อการสูญพันธุ์(Vulnerable species) โดยพิจารณาจากประชากร ถิ่นที่อยู่อาศัย และปัจจัยคุกคาม เช่น เต่าเหลือง(I.elongata) จิ้งเหลนหางแบน(C.platyurus) กิ้งก่าหางแดง(C.platyurus) จิ้งเหลนหลากหลาย(M.maculania)\r\n\r\n> ปลาน้ำจืด จากการสำรวจตามลำคลองต่างๆพบปลาทั้งหมด 30 ชนิดใน 11 วงศ์ ปลาที่พบส่วนมากเป็นสมาชิกในวงศ์ปลาตะเพียน(Cypridae) เช่น ปลาซิวใบไผ่(D.regina) ปลาซิวควาย(R.trilineata) ปลาเวียน(T.tambroides)\r\n\r\n# การเดินทาง\r\n> รถยนต์\r\n\r\n> จากกรุงเทพฯ เดินทางโดยรถยนต์ถนนสายเอเซียผ่านจังหวัดนครสวรรค์ก่อนถึงตัวจังหวัดกำแพงเพชร ที่โค้งวิไล เลยหลักกิโลเมตรที่ 307 มานิดหน่อยพอถึงสะพานลอยให้เลี้ยวซ้ายตามถนนหมายเลข 1242 ผ่านอำเภอปางศิลาทอง จนไปถึงสามแยกเขาน้ำอุ่น เลี้ยวขวาตามถนนหมายเลข 1072 ถึงสี่แยกตลาดคลองลาน ขับรถเข้าไปอีก 4 กิโลเมตร ก็จะถึงที่ทำการอุทยานแห่งชาติคลองลาน หรือ จากกรุงเทพฯ เดินทางโดยรถยนต์ถนนสายเอเซียผ่านจังหวัดนครสวรรค์ก่อนถึงตัวจังหวัดกำแพงเพชรตรงหลักกิโลเมตรที่ 346 เลี้ยวซ้ายที่ตลาดบ้านคลองแม่ลายเข้าไปตามถนนสายคลอง แม่ลาย-อุ้มผาง ระยะทาง 46 กิโลเมตร ถึงบริเวณสี่แยกตลาดคลองลานจะมีทางแยกขวามือ เข้าไปอีก 4 กิโลเมตร ก็จะถึงที่ทำการอุทยานแห่งชาติคลองลาน ซึ่งอยู่ใกล้กับน้ำตกคลองลาน\r\n\r\n# แผนที่เส้นทาง\r\n> ![alt text](http://park.dnp.go.th/dnp/ptamapthumb/1044map240109_153118.jpg)\r\n\r\n> เส้นทางเข้าสู่อุทยานแห่งชาติคลองลาน\r\n\r\n> ![alt text](http://park.dnp.go.th/dnp/ptamapthumb/1044map180209_80624.gif)\r\n\r\n> แผ่นที่ตั้งอุทยานแห่งชาติคลองลาน\r\n\r\n> อำเภอคลองลาน จังหวัดกำแพงเพชร\r\n\r\n# ภาพทิวทัศน์\r\n\r\n> ![alt text](http://park.dnp.go.th/dnp/ptascenethumb/1044scene240109_140744.jpg)\r\n\r\n> น้ำตกคลองลาน\r\n\r\n> ![alt text](http://park.dnp.go.th/dnp/ptascenethumb/1044scene240109_140952.jpg)\r\n\r\n> น้ำตกคลองน้ำไหล\r\n\r\n> ![alt text](http://park.dnp.go.th/dnp/ptascenethumb/1044scene240109_141830.jpg)\r\n\r\n> น้ำตกเพชรจะขอ\r\n\r\n> ![alt text](http://park.dnp.go.th/dnp/ptascenethumb/1044scene240109_141404.jpg)\r\n\r\n> จุดชมวิวเขาหัวช้าง\r\n\r\n> ![alt text](http://park.dnp.go.th/dnp/ptascenethumb/1044scene240109_141729.jpg)\r\n\r\n> จุดชมวิวเขาหัวช้าง ....ดูพระอาทิทยืขึ้น พระอาทิตย์ตก\r\n\r\n> ![alt text](http://park.dnp.go.th/dnp/ptascenethumb/1044scene240109_142139.jpg)\r\n\r\n> คลองสวนหมาก\r\n\r\n> ![alt text](http://park.dnp.go.th/dnp/ptascenethumb/1044scene180209_80930.jpg)\r\n\r\n> ใบไม้หลากสี จุดชมวิวเขาหัวช้าง\r\n\r\n> ![alt text](http://park.dnp.go.th/dnp/ptascenethumb/1044scene180209_81020.jpg)\r\n\r\n> ความงดงามของผืนป่า\r\n\r\n> ![alt text](http://park.dnp.go.th/dnp/ptascenethumb/1044scene180311_143746.png)\r\n\r\n> ภาพทิวทัศน์ภายในอุทยานแห่งชาติคลองลาน\r\n\r\n# แผนที่ผังบริเวณ\r\n> ![alt text](http://park.dnp.go.th/dnp/ptaareathumb/1044area140611_103408.jpg)\r\n\r\n> ผังปัจจุบันอุทยานแห่งชาติคลองลาน\r\n\r\n> (บริเวณน้ำตกคลองลาน)\r\n\r\n# สิ่งอำนวยความสะดวก ที่พัก และสถานที่กางเต็นท์\r\n* ที่พัก - [คลองลาน 110 (ชาทอง)](http://park.dnp.go.th/visitor/accomodateshow.php?accomodateid=1446)\r\n* ที่พัก - [คลองลาน 115/1-4 (มะเนียงน้ำ)](http://park.dnp.go.th/visitor/accomodateshow.php?accomodateid=1448)\r\n* ที่พัก - [คลองลาน 101 (น้ำดัง)](http://park.dnp.go.th/visitor/accomodateshow.php?accomodateid=639)\r\n* ที่พัก - [คลองลาน 107 (จันทร์ผา)](http://park.dnp.go.th/visitor/accomodateshow.php?accomodateid=623)\r\n* ที่พัก - [คลองลาน 105 (อิงดอย)](http://park.dnp.go.th/visitor/accomodateshow.php?accomodateid=621)\r\n* ที่พัก - [คลองลาน 104 (ผาโอบ)](http://park.dnp.go.th/visitor/accomodateshow.php?accomodateid=620)\r\n* ที่พัก - [คลองลาน 103 (ม่านหมอก)](http://park.dnp.go.th/visitor/accomodateshow.php?accomodateid=617)\r\n* ที่พัก - [คลองลาน 102 (ลมโชย)](http://park.dnp.go.th/visitor/accomodateshow.php?accomodateid=616)\r\n* ที่พัก - [คลองลาน 108 (ฟ้ามุ่ย)](http://park.dnp.go.th/visitor/accomodateshow.php?accomodateid=1444)\r\n* ที่พัก - [คลองลาน 109 (สีสุก)](http://park.dnp.go.th/visitor/accomodateshow.php?accomodateid=1445)\r\n* ที่พัก - [คลองลาน 114/1-4 (เถาวัลย์เปียง)](http://park.dnp.go.th/visitor/accomodateshow.php?accomodateid=1447)\r\n\r\n', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@mail.com', '$2y$10$Zlvbkp7YyLBhleKcC0GtJeBOfSxSn7tJE3U51IiVsa1Z1ZBdcB.pC', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
