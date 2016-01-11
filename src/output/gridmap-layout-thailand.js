// Define module using Universal Module Definition pattern
// https://github.com/umdjs/umd/blob/master/returnExports.js
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // Support AMD. Register as an anonymous module.
    define([], factory);
  }
  else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory();
  }
  else {
    // No AMD. Set module as a global variable
    root.gridmapLayoutThailand = factory();
  }
}(this, function () {
  return [
  {
    "x": 2,
    "y": 0,
    "enName": "ChiangRai",
    "enAbbr": "CRI",
    "thName": "เชียงราย",
    "thAbbr": "ชร"
  },
  {
    "x": 0,
    "y": 1,
    "enName": "MaeHongSon",
    "enAbbr": "MSN",
    "thName": "แม่ฮ่องสอน",
    "thAbbr": "มส"
  },
  {
    "x": 1,
    "y": 1,
    "enName": "ChiangMai",
    "enAbbr": "CMI",
    "thName": "เชียงใหม่",
    "thAbbr": "ชม"
  },
  {
    "x": 2,
    "y": 1,
    "enName": "Phayao",
    "enAbbr": "PYO",
    "thName": "พะเยา",
    "thAbbr": "พย"
  },
  {
    "x": 3,
    "y": 1,
    "enName": "Nan",
    "enAbbr": "NAN",
    "thName": "น่าน",
    "thAbbr": "นน"
  },
  {
    "x": 0,
    "y": 2,
    "enName": "Lamphun",
    "enAbbr": "LPN",
    "thName": "ลำพูน",
    "thAbbr": "ลพ"
  },
  {
    "x": 1,
    "y": 2,
    "enName": "Lampang",
    "enAbbr": "LPG",
    "thName": "ลำปาง",
    "thAbbr": "ลป"
  },
  {
    "x": 2,
    "y": 2,
    "enName": "Phrae",
    "enAbbr": "PRE",
    "thName": "แพร่",
    "thAbbr": "พร"
  },
  {
    "x": 3,
    "y": 2,
    "enName": "Uttaradit",
    "enAbbr": "UTT",
    "thName": "อุตรดิตถ์",
    "thAbbr": "อต"
  },
  {
    "x": 0,
    "y": 3,
    "enName": "Tak",
    "enAbbr": "TAK",
    "thName": "ตาก",
    "thAbbr": "ตก"
  },
  {
    "x": 1,
    "y": 3,
    "enName": "Sukhothai",
    "enAbbr": "STI",
    "thName": "สุโขทัย",
    "thAbbr": "สท"
  },
  {
    "x": 2,
    "y": 3,
    "enName": "Phitsanulok",
    "enAbbr": "PLK",
    "thName": "พิษณุโลก",
    "thAbbr": "พล"
  },
  {
    "x": 1,
    "y": 4,
    "enName": "KamphaengPhet",
    "enAbbr": "KPT",
    "thName": "กำแพงเพชร",
    "thAbbr": "กพ"
  },
  {
    "x": 2,
    "y": 4,
    "enName": "Phichit",
    "enAbbr": "PCT",
    "thName": "พิจิตร",
    "thAbbr": "พจ"
  },
  {
    "x": 3,
    "y": 4,
    "enName": "Loei",
    "enAbbr": "LEI",
    "thName": "เลย",
    "thAbbr": "ลย"
  },
  {
    "x": 4,
    "y": 4,
    "enName": "NongKhai",
    "enAbbr": "NKI",
    "thName": "หนองคาย",
    "thAbbr": "นค"
  },
  {
    "x": 5,
    "y": 4,
    "enName": "BeungKan",
    "enAbbr": "BKN",
    "thName": "บึงกาฬ",
    "thAbbr": "บก"
  },
  {
    "x": 6,
    "y": 4,
    "enName": "SakonNakhon",
    "enAbbr": "SNK",
    "thName": "สกลนคร",
    "thAbbr": "สน"
  },
  {
    "x": 7,
    "y": 4,
    "enName": "NakhonPhanom",
    "enAbbr": "NPM",
    "thName": "นครพนม",
    "thAbbr": "นพ"
  },
  {
    "x": 1,
    "y": 5,
    "enName": "UthaiThani",
    "enAbbr": "UTI",
    "thName": "อุทัยธานี",
    "thAbbr": "อน"
  },
  {
    "x": 2,
    "y": 5,
    "enName": "NakhonSawan",
    "enAbbr": "NSN",
    "thName": "นครสวรรค์",
    "thAbbr": "นว"
  },
  {
    "x": 3,
    "y": 5,
    "enName": "Phetchabun",
    "enAbbr": "PNB",
    "thName": "เพชรบูรณ์",
    "thAbbr": "พช"
  },
  {
    "x": 4,
    "y": 5,
    "enName": "NongBuaLamPhu",
    "enAbbr": "NBP",
    "thName": "หนองบัวลำภู",
    "thAbbr": "นภ"
  },
  {
    "x": 5,
    "y": 5,
    "enName": "UdonThani",
    "enAbbr": "UDN",
    "thName": "อุดรธานี",
    "thAbbr": "อด"
  },
  {
    "x": 6,
    "y": 5,
    "enName": "Kalasin",
    "enAbbr": "KSN",
    "thName": "กาฬสินธุ์",
    "thAbbr": "กส"
  },
  {
    "x": 7,
    "y": 5,
    "enName": "Mukdahan",
    "enAbbr": "MDH",
    "thName": "มุกดาหาร",
    "thAbbr": "มห"
  },
  {
    "x": 1,
    "y": 6,
    "enName": "ChaiNat",
    "enAbbr": "CNT",
    "thName": "ชัยนาท",
    "thAbbr": "ชน"
  },
  {
    "x": 2,
    "y": 6,
    "enName": "SingBuri",
    "enAbbr": "SBR",
    "thName": "สิงห์บุรี",
    "thAbbr": "สห"
  },
  {
    "x": 3,
    "y": 6,
    "enName": "LopBuri",
    "enAbbr": "LRI",
    "thName": "ลพบุรี",
    "thAbbr": "ลบ"
  },
  {
    "x": 4,
    "y": 6,
    "enName": "Chaiyaphum",
    "enAbbr": "CPM",
    "thName": "ชัยภูมิ",
    "thAbbr": "ชย"
  },
  {
    "x": 5,
    "y": 6,
    "enName": "KhonKaen",
    "enAbbr": "KKN",
    "thName": "ขอนแก่น",
    "thAbbr": "ขก"
  },
  {
    "x": 6,
    "y": 6,
    "enName": "MahaSarakham",
    "enAbbr": "MKM",
    "thName": "มหาสารคาม",
    "thAbbr": "มค"
  },
  {
    "x": 7,
    "y": 6,
    "enName": "RoiEt",
    "enAbbr": "RET",
    "thName": "ร้อยเอ็ด",
    "thAbbr": "รอ"
  },
  {
    "x": 8,
    "y": 6,
    "enName": "Yasothon",
    "enAbbr": "YST",
    "thName": "ยโสธร",
    "thAbbr": "ยส"
  },
  {
    "x": 9,
    "y": 6,
    "enName": "AmnatCharoen",
    "enAbbr": "ACR",
    "thName": "อำนาจเจริญ",
    "thAbbr": "อจ"
  },
  {
    "x": 1,
    "y": 7,
    "enName": "SuphanBuri",
    "enAbbr": "SPB",
    "thName": "สุพรรณบุรี",
    "thAbbr": "สพ"
  },
  {
    "x": 2,
    "y": 7,
    "enName": "AngThong",
    "enAbbr": "ATG",
    "thName": "อ่างทอง",
    "thAbbr": "อท"
  },
  {
    "x": 3,
    "y": 7,
    "enName": "PhraNakhonSiAyutthaya",
    "enAbbr": "AYA",
    "thName": "พระนครศรีอยุธยา",
    "thAbbr": "อย"
  },
  {
    "x": 4,
    "y": 7,
    "enName": "Saraburi",
    "enAbbr": "SRI",
    "thName": "สระบุรี",
    "thAbbr": "สบ"
  },
  {
    "x": 5,
    "y": 7,
    "enName": "NakhonRatchasima",
    "enAbbr": "NMA",
    "thName": "นครราชสีมา",
    "thAbbr": "นม"
  },
  {
    "x": 6,
    "y": 7,
    "enName": "BuriRam",
    "enAbbr": "BRM",
    "thName": "บุรีรัมย์",
    "thAbbr": "บร"
  },
  {
    "x": 7,
    "y": 7,
    "enName": "Surin",
    "enAbbr": "SRN",
    "thName": "สุรินทร์",
    "thAbbr": "สร"
  },
  {
    "x": 8,
    "y": 7,
    "enName": "SiSaKet",
    "enAbbr": "SSK",
    "thName": "ศรีสะเกษ",
    "thAbbr": "ศก"
  },
  {
    "x": 9,
    "y": 7,
    "enName": "UbonRatchathani",
    "enAbbr": "UBN",
    "thName": "อุบลราชธานี",
    "thAbbr": "อบ"
  },
  {
    "x": 1,
    "y": 8,
    "enName": "Kanchanaburi",
    "enAbbr": "KRI",
    "thName": "กาญจนบุรี",
    "thAbbr": "กจ"
  },
  {
    "x": 2,
    "y": 8,
    "enName": "Nonthaburi",
    "enAbbr": "NBI",
    "thName": "นนทบุรี",
    "thAbbr": "นบ"
  },
  {
    "x": 3,
    "y": 8,
    "enName": "PathumThani",
    "enAbbr": "PTE",
    "thName": "ปทุมธานี",
    "thAbbr": "ปท"
  },
  {
    "x": 4,
    "y": 8,
    "enName": "NakhonNayok",
    "enAbbr": "NYK",
    "thName": "นครนายก",
    "thAbbr": "นย"
  },
  {
    "x": 5,
    "y": 8,
    "enName": "PrachinBuri",
    "enAbbr": "PRI",
    "thName": "ปราจีนบุรี",
    "thAbbr": "ปจ"
  },
  {
    "x": 1,
    "y": 9,
    "enName": "Ratchaburi",
    "enAbbr": "RBR",
    "thName": "ราชบุรี",
    "thAbbr": "รบ"
  },
  {
    "x": 2,
    "y": 9,
    "enName": "NakhonPathom",
    "enAbbr": "NPT",
    "thName": "นครปฐม",
    "thAbbr": "นฐ"
  },
  {
    "x": 3,
    "y": 9,
    "enName": "Bangkok",
    "enAbbr": "BKK",
    "thName": "กรุงเทพมหานคร",
    "thAbbr": "กทม"
  },
  {
    "x": 4,
    "y": 9,
    "enName": "ChonBuri",
    "enAbbr": "CBI",
    "thName": "ชลบุรี",
    "thAbbr": "ชบ"
  },
  {
    "x": 5,
    "y": 9,
    "enName": "Chachoengsao",
    "enAbbr": "CCO",
    "thName": "ฉะเชิงเทรา",
    "thAbbr": "ฉช"
  },
  {
    "x": 6,
    "y": 9,
    "enName": "SaKaeo",
    "enAbbr": "SKW",
    "thName": "สระแก้ว",
    "thAbbr": "สก"
  },
  {
    "x": 1,
    "y": 10,
    "enName": "Phetchaburi",
    "enAbbr": "PBI",
    "thName": "เพชรบุรี",
    "thAbbr": "พบ"
  },
  {
    "x": 2,
    "y": 10,
    "enName": "SamutSongkhram",
    "enAbbr": "SKM",
    "thName": "สมุทรสงคราม",
    "thAbbr": "สส"
  },
  {
    "x": 3,
    "y": 10,
    "enName": "SamutSakhon",
    "enAbbr": "SKN",
    "thName": "สมุทรสาคร",
    "thAbbr": "สค"
  },
  {
    "x": 4,
    "y": 10,
    "enName": "SamutPrakan",
    "enAbbr": "SPK",
    "thName": "สมุทรปราการ",
    "thAbbr": "สป"
  },
  {
    "x": 5,
    "y": 10,
    "enName": "Rayong",
    "enAbbr": "RYG",
    "thName": "ระยอง",
    "thAbbr": "รย"
  },
  {
    "x": 6,
    "y": 10,
    "enName": "Chanthaburi",
    "enAbbr": "CTI",
    "thName": "จันทบุรี",
    "thAbbr": "จบ"
  },
  {
    "x": 1,
    "y": 11,
    "enName": "PrachuapKhiriKhan",
    "enAbbr": "PKN",
    "thName": "ประจวบคีรีขันธ์",
    "thAbbr": "ปข"
  },
  {
    "x": 6,
    "y": 11,
    "enName": "Trat",
    "enAbbr": "TRT",
    "thName": "ตราด",
    "thAbbr": "ตร"
  },
  {
    "x": 0,
    "y": 12,
    "enName": "Ranong",
    "enAbbr": "RNG",
    "thName": "ระนอง",
    "thAbbr": "รน"
  },
  {
    "x": 1,
    "y": 12,
    "enName": "Chumphon",
    "enAbbr": "CPN",
    "thName": "ชุมพร",
    "thAbbr": "ชพ"
  },
  {
    "x": 0,
    "y": 13,
    "enName": "Phang-nga",
    "enAbbr": "PNA",
    "thName": "พังงา",
    "thAbbr": "พง"
  },
  {
    "x": 1,
    "y": 13,
    "enName": "SuratThani",
    "enAbbr": "SNI",
    "thName": "สุราษฎร์ธานี",
    "thAbbr": "สฎ"
  },
  {
    "x": 0,
    "y": 14,
    "enName": "Phuket",
    "enAbbr": "PKT",
    "thName": "ภูเก็ต",
    "thAbbr": "ภก"
  },
  {
    "x": 1,
    "y": 14,
    "enName": "Krabi",
    "enAbbr": "KBI",
    "thName": "กระบี่",
    "thAbbr": "กบ"
  },
  {
    "x": 2,
    "y": 14,
    "enName": "NakhonSiThammarat",
    "enAbbr": "NRT",
    "thName": "นครศรีธรรมราช",
    "thAbbr": "นศ"
  },
  {
    "x": 2,
    "y": 15,
    "enName": "Trang",
    "enAbbr": "TRG",
    "thName": "ตรัง",
    "thAbbr": "ตง"
  },
  {
    "x": 3,
    "y": 15,
    "enName": "Phatthalung",
    "enAbbr": "PLG",
    "thName": "พัทลุง",
    "thAbbr": "พท"
  },
  {
    "x": 3,
    "y": 16,
    "enName": "Satun",
    "enAbbr": "STN",
    "thName": "สตูล",
    "thAbbr": "สต"
  },
  {
    "x": 4,
    "y": 16,
    "enName": "Songkhla",
    "enAbbr": "SKA",
    "thName": "สงขลา",
    "thAbbr": "สข"
  },
  {
    "x": 5,
    "y": 16,
    "enName": "Pattani",
    "enAbbr": "PTN",
    "thName": "ปัตตานี",
    "thAbbr": "ปน"
  },
  {
    "x": 5,
    "y": 17,
    "enName": "Yala",
    "enAbbr": "YLA",
    "thName": "ยะลา",
    "thAbbr": "ยล"
  },
  {
    "x": 6,
    "y": 17,
    "enName": "Narathiwat",
    "enAbbr": "NWT",
    "thName": "นราธิวาส",
    "thAbbr": "นธ"
  }
];
}));