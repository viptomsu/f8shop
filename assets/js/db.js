const places1 = [
   'Hà Nội', 'Ho Chi Minh city', 'Hải Phòng', 'Đà Nẵng', 'Cần Thơ', 'An Giang', 'Bà Rịa - Vũng Tàu', 'Bạc Liêu', 'Bắc Giang', 'Bắc Kạn', 'Bắc Ninh', 'Bến Tre', 'Bình Dương', 'Bình Định', 'Bình Phước', 'Bình Thuận', 'Cao Bằng', 'Cà Mau', ' Đắk Lắk', 'Đắk Nông', 'Điện Biên', 'Đồng Nai', 'Đồng Tháp', 'Gia Lai', 'Hà Giang', 'Hà Nam', 'Hà Tĩnh', 'Hải Dương', ' Hậu Giang', 'Hòa Bình', 'Hưng Yên', 'Khánh Hòa', 'Kiên Giang', 'Kon Tum', 'Lai Châu', 'Lào Cai', 'Lạng Sơn', 'Lâm Đồng', 'Long An', 'Nam Định', 'Nghệ An', 'Ninh Bình', 'Ninh Thuận', 'Phú Thọ', 'Phú Yên', 'Quảng Bình', 'Quảng Nam', 'Quảng Ngãi', 'Quảng Ninh', 'Quảng Trị', 'Sóc Trăng', 'Sơn La', 'Tây Ninh', 'Thanh Hóa', 'Thái Bình', 'Thái Nguyên', 'Huế', 'Tiền Giang', 'Trà Vinh', 'Tuyên Quang', 'Vĩnh Long', 'Vĩnh Phúc', 'Yên Bái'
];

export const places = [
   'Ha Noi', 'Ho Chi Minh city', 'Hai Phong', 'Da Nang', 'Can Tho', 'An Giang', 'Ba Ria - Vung Tau', 'Bac Lieu', 'Bac Giang', 'Bac Kan', 'Bac Ninh', 'Ben Tre', 'Binh Duong', 'Binh Dinh', 'Binh Phuoc', 'Binh Thuan', 'Cao Bang', 'Ca Mau', ' Dak Lak', 'Dak Nong', 'Dien Bien', 'Dong Nai', 'Dong Thap', 'Gia Lai', 'Ha Giang', 'Ha Nam', 'Ha Tinh', 'Hai Duong', ' Hau Giang', 'Hoa Binh', 'Hung Yen', 'Khanh Hoa', 'Kien Giang', 'Kon Tum', 'Lai Chau', 'Lao Cai', 'Lang Son', 'Lam Dong', 'Long An', 'Nam Dinh', 'Nghe An', 'Ninh Binh', 'Ninh Thuan', 'Phu Tho', 'Phu Yen', 'Quang Binh', 'Quang Nam', 'Quang Ngai', 'Quang Ninh', 'Quang Tri', 'Soc Trang', 'Son La', 'Tay Ninh', 'Thanh Hoa', 'Thai Binh', 'Thai Nguyen', 'Hue', 'Tien Giang', 'Tra Vinh', 'Tuyen Quang', 'Vinh Long', 'Vinh Phuc', 'Yen Bai'
];

const products = [
   {
      id: 1,
      name: '2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) - Space Gray',
      price: 1600,
      sold: 1000,
      quantity: 200,
      type: 3,
      desc: `Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance
      Get more done with up to 20 hours of battery life, the longest ever in a Mac
      8-core CPU delivers up to 2.8x faster performance to fly through workflows quicker than ever
      8-core GPU with up to 5x faster graphics for graphics-intensive apps and games
      16-core Neural Engine for advanced machine learning
      8GB of unified memory so everything you do is fast and fluid
      Superfast SSD storage launches apps and opens files in an instant`,
      category: 6,
      brand: 'Apple',
      images: ['https://macone.vn/wp-content/uploads/2020/05/macbookpro2020-grey.jpeg', 'https://www.horsehairandlinen.com/images/thumbs/0000024_apple-macbook-pro-13-inch_550.jpeg', 'https://m.media-amazon.com/images/I/71iGJlR9S5L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/81zKcC5wJ6L._AC_SL1500_.jpg']
   },
   {
      id: 2,
      name: '【Same Day Delivery|MS Office】ASUS TUF Gaming FX506HM-RTX3060 | 15.6 144Hz | RTX3060(95W) | i7-11800H | 16GB/1TB | 2Y',
      price: 2298.00,
      desc: `*Gaming Model may take 1 more day if upgrade option are purchased. 
      *Super Sale(11.11, BlackFriday) may take 1~2 more day to deliver. 
      
      Brand	ASUS
      Colour	Eclipse Grey
      Display	15.6" 144Hz Full HD 1920x1080 Display
      Processor      Intel®️ Core™️ i7-11800H Processor 2.3 GHz (24M Cache, up to 4.6 GHz, 8 Cores) | FX506HM-RTX3060
      Memory	16GB DDR4 3200
      Storage	PCIEG3x2 NVME 1TB M.2 SSD
      Graphics Card	NVIDIA® GeForce RTX™ 3060 Laptop GPU,With Dynamic Boost up to 1630MHz at 90W (95W with Dynamic Boost),
      VRAM	6GB GDDR6
      Wireless Network	802.11 AX
      Operating System	Windows 10 Home (64-bit)
      USB Port(s)	1x USB2.0, 1x USB3.1 Type A (Gen1), 1x USB3.1 Type C (Gen 1)
      HDMI Port(s)	1 x HDMI
      Web Camera	HD Web Camera
      Weight	2.3 kgs
      Dimension (cm)	35.9 x 25.6 x 2.28 ~ 2.43 cm
      Warranty	2 Years International Warranty`,
      sold: 42,
      quantity: 100,
      type: 3,
      category: 6,
      brand: 'ASUS',
      images: ['https://cf.shopee.sg/file/2a8408c7230cdd36d1401cd2b1f2e181', 'https://cf.shopee.sg/file/3196a99f93770f18e457ad9ab674ae0d', 'https://m.media-amazon.com/images/I/71iGJlR9S5L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/81zKcC5wJ6L._AC_SL1500_.jpg']
   },
   {
      id: 3,
      name: 'Lenovo Chromebook Flex 3 11" Laptop, 11.6-Inch HD (1366 x 768) IPS Display, MediaTek MT8173C Processor, 4GB LPDDR3, 64 GB eMMC, Chrome OS, 82HG0006US, Blizzard White',
      price: 318.99,
      salePrice: 209.00,
      sold: 1500,
      quantity: 500,
      type: 2,
      desc: `THE ENTERTAINMENT GOES WHERE YOU GO: With its compact 8.7” screen, slim design and sturdy metal frame, Galaxy Tab A7 Lite is perfectly sized for entertainment on the go.
      STURDY FRAME FOR LASTING PROTECTION: Galaxy Tab A7 Lite features an upgraded metal frame that helps protect against everyday hiccups.
      TWO MONTHS OF AD-FREE VIDEO FUN: Keep everyone in the family entertained with two months of free YouTube Premium¹ for hours and hours of ad-free fun.
      PERFORMANCE THAT WON'T LET YOU DOWN: Comes with fast speed and plenty of storage for multiple users.
      ONE POWER-FULL DEVICE: Binge away with a long battery life and plenty of power to keep up with the content you love — and then some — with fast charging to help you juice up quickly on the go.
      PUT YOUR DEVICES TO WORK FOR YOU: Satisfy your appetite for entertainment in new ways with connectivity across your Galaxy devices. A dynamic interface lets you treat all your devices as one.
      PROTECT FROM FUMBLES: Galaxy Tab A7 Lite Book Cover² offers your tablet worry-free protection from the occasional ding or fumble by accident-prone family members.`,
      category: 6,
      brand: 'Lenovo',
      images: ['https://m.media-amazon.com/images/I/611DJR7V1sL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71-XssjjN4L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/713TuQfao+L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/717bfuC7XJL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/81KpKYMr4oL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/61n30VtPW4L._AC_SL1500_.jpg']
   },
   {
      id: 4,
      name: 'Samsung Tab A7 Lite 8.7" Gray 32GB (SM-T220NZAAXAR)',
      price: 159.99 ,
      salePrice: 119.00,
      sold: 1500,
      quantity: 500,
      type: 2,
      desc: `THE ENTERTAINMENT GOES WHERE YOU GO: With its compact 8.7” screen, slim design and sturdy metal frame, Galaxy Tab A7 Lite is perfectly sized for entertainment on the go.
      STURDY FRAME FOR LASTING PROTECTION: Galaxy Tab A7 Lite features an upgraded metal frame that helps protect against everyday hiccups.
      TWO MONTHS OF AD-FREE VIDEO FUN: Keep everyone in the family entertained with two months of free YouTube Premium¹ for hours and hours of ad-free fun.
      PERFORMANCE THAT WON'T LET YOU DOWN: Comes with fast speed and plenty of storage for multiple users.
      ONE POWER-FULL DEVICE: Binge away with a long battery life and plenty of power to keep up with the content you love — and then some — with fast charging to help you juice up quickly on the go.
      PUT YOUR DEVICES TO WORK FOR YOU: Satisfy your appetite for entertainment in new ways with connectivity across your Galaxy devices. A dynamic interface lets you treat all your devices as one.
      PROTECT FROM FUMBLES: Galaxy Tab A7 Lite Book Cover² offers your tablet worry-free protection from the occasional ding or fumble by accident-prone family members.`,
      category: 1,
      brand: 'Samsung',
      images: ['https://m.media-amazon.com/images/I/819hAP4xoGS._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71GletxnoxS._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/61NNGEyxSiS._AC_SL1080_.jpg', 'https://m.media-amazon.com/images/I/61pc55XziYS._AC_SL1080_.jpg', 'https://m.media-amazon.com/images/I/51c8Kqfch9S._AC_SL1080_.jpg', 'https://m.media-amazon.com/images/I/610KVs8ZEoS._AC_SL1080_.jpg']
   },
   {
      id: 5,
      name: 'Samsung Galaxy Tab S6 Lite 10.4" - S Pen Included',
      price: 349.99 ,
      salePrice: 314.99,
      sold: 1500,
      quantity: 500,
      type: 2,
      desc: `S PEN INCLUDED: The included S Pen makes it easier than ever to write notes and personalize photos and videos, all without needing to charge. The S Pen attaches magnetically right to your tablet and is always ready to go.
      SLIM METAL DESIGN: Take this sleek, lightweight tablet anywhere. Its slim design slips right into your bag and comes in your choice of stylish colors.
      ENTERTAINMENT READY: A vivid, crystal clear display draws you into content while dual speakers with sound by AKG supply spacious Dolby Atmos surround sound. With discovery powered by Spotify, setting a personal soundtrack to your waking moments has never been easier.
      LONG-LASTING BATTERY: A long-lasting battery lets you stream for up to 12 hours¹ on a single charge. The fast-charging USB-C port allows you to quickly get back to where you left off when you need to recharge.
      ONE UI CONNECTIVITY: Sync up multiple devices and double down on your todos with Galaxy Tab S6 Lite. Use it as a hotspot and create share-ready content all at once.
      DEX EXPERIENCE: Get more done each day by turning your Galaxy devices into an expanded desktop workstation. Send multiple windows to the devices of your choice and control them all from your Galaxy Tab S6 Lite like a boss.²
      ¹Battery power consumption depends on usage patterns. Results may vary. ²DeX will be available on R OS or above.`,
      category: 1,
      brand: 'Samsung',
      images: ['https://m.media-amazon.com/images/I/61+R1-L894L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/51Y0vWELEXL._AC_SL1440_.jpg', 'https://m.media-amazon.com/images/I/615tqxPH4DL._AC_SL1000_.jpg', 'https://m.media-amazon.com/images/I/51WAgL2YEML._AC_SL1000_.jpg', 'https://m.media-amazon.com/images/I/51TQHL22HkL._AC_SL1000_.jpg', 'https://m.media-amazon.com/images/I/61zibTcXenL._AC_SL1000_.jpg', 'https://m.media-amazon.com/images/I/61iTOYj2cTL._AC_SL1500_.jpg']
   },
   {
      id: 6,
      name: 'CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-11400F 2.6GHz, 8GB DDR4, GeForce RTX 2060 6GB, 500GB NVMe SSD, WiFi Ready & Win 11 Home (GXiVR8060A11)',
      price: 1014.99,
      sold: 400,
      quantity: 200,
      type: 1,
      desc: `System: Intel Core i5-11400F 2.6GHz 6-Core | Intel B560 Chipset | 8GB DDR4 | 500GB PCI-E NVMe SSD | Genuine Windows 11 Home 64-bit
      Graphics: NVIDIA GeForce RTX 2060 6GB Video Card | 1x HDMI | 1x DisplayPort
      Connectivity: 6 x USB 3.1 | 2 x USB 2.0 | 1x RJ-45 Network Ethernet 10/100/1000 | 802.11AC Wi-Fi | Audio: 7.1 Channel | Keyboard and mouse
      Special feature: Tempered Glass Side Case Panel | Custom RGB Case Lighting | 7 Colors RGB Gaming Mouse
      1 year parts & labor | Free lifetime tech support`,
      category: 0,
      brand: 'CYBERPOWERPC',
      images: ['https://m.media-amazon.com/images/I/81Wx7hw9vwL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/81giVj9a6PL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/91QSuJF2ZGL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/81paN5-VwGL._AC_SL1500_.jpg']
   },
   {
      id: 7,
      name: 'SkyTech Shiva Gaming PC Desktop',
      price: 1699.99,
      sold: 1500,
      quantity: 500,
      type: 4,
      desc: `✔ AMD Ryzen 5 5600X 6-Core 3.7 GHz (4.6 GHz Turbo) CPU Processor | 1TB SSD
      ✔ GeForce RTX 3060 Ti GDDR6 8GB Graphics Card (Brand May Varies) | 16GB DDR4 3200MHz Gaming Memory | Windows 10 Home 64-bit
      ✔ 802.11AC | No Bloatware | Graphic output options include 1 x HDMI, and 1 x Display Port Guranteed, Additional Ports may vary | USB Ports Including 2.0, 3.0, and 3.2 Gen1 Ports | HD Audio and Mic | Free Gaming Keyboard and Mouse
      ✔ 3 x RGB Fans | Powered by 80 Plus Gold Certified 600 Watt Power Supply | In Win 101 mATX Mid-Tower Gaming Case with Tempered Glass – White | 1 Year Warranty on Parts and Labor | Lifetime Free Technical Support | Assembled in the USA
      ✔ This powerful gaming PC is capable of running all your favorite games such as Call of Duty Warzone, Fornite, Escape from Tarkov, Grand Theft Auto V, World of Warcraft, League of Legends, Apex Legends, Roblox, PLAYERUNKNOWN’s Battlegrounds, Overwatch, Counter-Strike: Global Offensive, Battlefield V, Minecraft, The Division 2, and more at High to Ultra settings, crisp 1440p QHD resolution and smooth 60+ FPS game play.`,
      category: 0,
      brand: 'SkyTech',
      images: ['https://m.media-amazon.com/images/I/81u6yFQH9jL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/81mN5NpRZaL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/91DATAvd2eL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/91XpE2JDlRL._AC_SL1500_.jpg']
   },
   {
      id: 8,
      name: 'SkyTech Chronos Mini Gaming Computer PC Desktop',
      price: 949.99,
      sold: 200,
      quantity: 150,
      type: 1,
      desc: `✔ Intel Core i3-10100F 4-Core 3.6 GHz (4.3 GHz Turbo) CPU Processor | 500GB Solid State Drive
      ✔ NVIDIA GeForce GTX 1650 4GB Video Card | 8GB Gaming Memory DDR4 3200 with Heat Spreader | Windows 10 Home 64-bit
      ✔ 802.11AC | No Bloatware | Graphic output options include 1 x HDMI, and 1 x Display Port Guaranteed, Additional Ports may vary | USB Ports Including 2.0, 3.0, and 3.2 Gen1 Ports | HD Audio and Mic | Free Gaming Keyboard and Mouse
      3 x ARGB Dual RING Fans for Maximum Air Flow | Powered by 80 Plus Certified 550 Watt Power Supply | Skytech Chronos Mini, Black Edition w/ Front Mesh Gaming Case | 1 Year Warranty on Parts and Labor | Lifetime Free Technical Support | Assembled in the USA
      ✔ This powerful gaming PC is capable of running all your favorite games such as Call of Duty Warzone, Fornite, Escape from Tarkov, Grand Theft Auto V, World of Warcraft, League of Legends, Apex Legends, Roblox, PLAYERUNKNOWN’s Battlegrounds, Overwatch, Counter-Strike: Global Offensive, Battlefield V, Minecraft, The Division 2, and more at High to Ultra settings, crisp 1080p FHD resolution and smooth 60+ FPS game play.`,
      category: 0,
      brand: 'SkyTech',
      images: ['https://m.media-amazon.com/images/I/91rIiWcvS7L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/91ThzcwgSRL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/91-MDgvfgyL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/A1rNR1GxwVL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/91vEQIifTXL._AC_SL1500_.jpg']
   },
   {
      id: 9,
      name: 'HP Pavilion Desktop PC, AMD Ryzen 7 5700G, 16 GB RAM, 512 GB SSD, Windows 11 Pro, Wi-Fi 5 & Bluetooth Connectivity',
      price: 794.49,
      sold: 100,
      quantity: 20,
      type: 1,
      desc: `PROVEN-PERFORMANCE – Made for the modern family, the HP Pavilion Desktop PC brings the latest technology and reliability from a trusted brand that protects what matters to you most.
      DURABLE AND STYLISH – Ditch the dull black box with a polished silver PC that not only perfectly fits in any space, but is built to last with 230 quality tests to its name (1)
      AMD PROCESSOR AND GRAPHICS – Whether you are playing the latest games, designing the next skyscraper, or crunching scientific data, handle it all with the powerful AMD Ryzen 5700G desktop processor (2) and AMD Radeon Graphics (3)
      MEMORY AND STORAGE – With 16 GB of RAM, everything from multitasking to playing games gets a performance boost (4); plus, with 512 GB of PCIe NVMe M.2 Solid State Drive storage, you’ll get up to 10x faster performance than a traditional hard drive (5) (6)
      USB PORTS – Quickly and easily connect your devices and external storage drives with 9 front-facing USB ports; your desktop computer’s ports include 4 SuperSpeed USB Type-A, 1 SuperSpeed USB Type-C (7), and 4 USB 2.0 Type-A (8)
      WINDOWS 11 PRO AND WARRANTY – From a rejuvenated Start menu to new ways to connect, the Windows 11 Pro OS is the place to think, express, and create in a natural way (9). Start every day with confidence with a 1-year limited warranty to protect your purchase
      CONSISTENT WIRELESS EXPERIENCE – Stay connected to all your wireless accessories with the reliable Wi-Fi 5 (1x1) & Bluetooth (802.11a/b/g/n/ac) combo (10) (11). Work without interruption or spotty connectivity with an MU-MIMO-supported computer tower`,
      category: 0,
      brand: 'HP',
      images: ['https://m.media-amazon.com/images/I/71ennRNnj5L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71uxbEa0zkL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71pMZ8edHyL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/81ZH9fF6hEL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71bODM9NJzL._AC_SL1500_.jpg']
   },
   {
      id: 10,
      name: 'ASUS Laptop L510 Ultra Thin Laptop, 15.6” FHD Display, Intel Celeron N4020 Processor, 4GB RAM, 128GB Storage',
      price: 269.00,
      sold: 400,
      quantity: 200,
      type: 1,
      desc: `★[FREE KIDS APPS & GAMES] - Pritom Kids Tablet comes with a safe and funny iWawa Kid's software free pre-installed apps for Kids learning & playing, free kids app in the kids store, you can download different apps from the Google Play store. An ideal gift for birthday, Christmas, holiday season for kids or yourself. NOTE: For better experience, PLEASE charge the kids tablet for 1 hour when using in the first time. PRITOM kids tablet's OS has updated to ANDROID 10.0, better than android 9 Pie.
      ★[BEST KID-FRIENDLY COMPANION] - Pritom kid tablet is a modern tablet designed for kids to focus on building a safe children's entertainment environment. It has security controls (APPs and network filters); Content management (APPs recommendation and classification, multimedia, etc.); Behavioral restrictions (child locks, spending limits, game time limits, preference data analysis); Theme and user settings, et. It's easy to operate and enough for kids to watch movies, play games, listen to music
      ★[FANTASTIC EXPERIENCE] - The kids edition tablet has a built-in high-performance quad-core processor and Android 10.0 OS, 1024x600 IPS HD display, Wifi, Bluetooth, dual camera, touch screen, 1GB RAM and 16GB ROM. You can expand the storage to 32 GB of SD cards for storing photos, music and videos with additional micro SD card extensions. A more stable Wifi module and a durable battery give you a better experience. You will get a powerful all-in-one device. PRITOM Kids Tablet will provide you
      ★[GREAT FOR KIDS] -Kids can have their own private playground and the child-friendly Interface makes it easy to use. Kids can access to educational and entertaining apps and websites without any undue risk.Everything in PRITOM TABLET is suitable for your child's age and skill level. So they always play and learn at the highest level.Effective games and apps are designed to provide innovative digital educational content for kids ages 2-12, learning animals, learning clothes, learning fruit, typin
      ★[WELL-DESIGNED KID-PROOF CASE] - Pritom k7 Kid-Proof Case is made of a lightweight, durable, kid-friendly, impact-resistant soft silicone material that protects the tablet from scratches, dirt and bumps, drops, dust, etc. The soft material provides soft and smooth touch experience. The case has stand function, so kids don't need to hold the tablet all the time while learning, watching and playing games. let the kids fondle admiring.`,
      category: 6,
      brand: 'ASUS',
      images: ['https://m.media-amazon.com/images/I/71ehzrGUO7L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71+qrXP--vL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/81Ygs+kFq0L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/81ETSyJywFL._AC_SL1500_.jpg']
   },
   {
      id: 11,
      name: 'Pritom 7 inch Kids Tablet, Quad Core Android 10, 16GB, WiFi, Bluetooth, Dual Camera, Educationl, Games,Parental Control, Kids Software Pre-Installed with Kids-Tablet Case',
      price: 69.95,
      sold: 6000,
      quantity: 0,
      type: 4,
      desc: `Efficient Intel Celeron N4020 Processor (4M Cache, up to 2.8 GHz)
      15.6” FHD (1920x1080) Display
      128GB eMMC Flash Storage and 4GB DDR4 RAM
      Comes with Windows 10 in S mode and a FREE upgrade to Windows 11 (when available1)
      Slim and Portable: 0.72” thin and weighs only 3.59 lbs (battery included)`,
      category: 1,
      brand: 'Pritom',
      images: ['https://m.media-amazon.com/images/I/812GDYFnx7L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/615b-Ce6WNL._AC_SL1000_.jpg', 'https://m.media-amazon.com/images/I/71NIo+IuSmL._AC_SL1000_.jpg', 'https://m.media-amazon.com/images/I/61HTnwRLUDL._AC_SL1000_.jpg', 'https://m.media-amazon.com/images/I/61uNbtDMOwL._AC_SL1000_.jpg']
   },
   {
      id: 12,
      name: 'SanDisk 128GB microSDXC Card, Licensed for Nintendo Switch - SDSQXAO-128G-GNCZN',
      price: 34.99,
      salePrice: 20.99,
      sold: 160000,
      quantity: 5000,
      type: 4,
      desc: `Incredible speeds in a microSD card officially licensed for the Nintendo Switch and Nintendo Switch Lite systems
      Spend less time waiting and more time playing with read speeds up to 100 MB/s and write speeds up to 90MB/s
      Instantly add up to 128GB (1GB=1,000,000,000 bytes. Actual user storage less.)
      Store your downloaded games, screenshots and video captures in 1 place so you can travel light.`,
      category: 7,
      brand: 'SanDisk',
      images: ['https://m.media-amazon.com/images/I/810o-i5jpiL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/61DzVD49AfL._AC_SL1000_.jpg']
   },
   {
      id: 13,
      name: 'SAMSUNG EVO Select Plus Micro SD Memory Card + Adapter, 256GB microSDXC 130MB/s Full HD & 4K UHD, UHS-I, U3, A2, V30, Expanded Storage for Phone, Gaming, Tablet, MB-ME256KA/AM',
      price: 39.99,
      salePrice: 26.99,
      sold: 210000,
      quantity: 6000,
      type: 5,
      desc: `All The Space You Need: Store tons of media on your phone, load games or download more apps on your tablet at top-notch speed, making transfers seamless and reliable
      Fast and Smooth: With superfast U3, class 10 rated transfer speeds of up to 130MB/s¹,²and UHS-I Interface³ big apps load and run smoothly, while 4K video remains sharp with A2, V30, and USH-I Interface
      Expand and Store Big: Find your perfect fit from 64GB, 128GB, 256GB and 512GB; Select the best capacity for all your memories
      You’re Fully Protected: EVO Select Plus provides reliable storage and takes on life’s adventures with water⁴, temperature⁵, X-ray⁶, ⁷magnet, drop⁸, and wears⁹ out protection; Backed by a 10-year limited warranty; Proofs are for the microSD card and do not include the adaptor
      World’s #1 Flash Memory Card: Performance and reliability you can count on from the world’s number one flash memory brand; All firmware and components are produced in-house*`,
      category: 7,
      brand: 'Samsung',
      images: ['https://m.media-amazon.com/images/I/71k7rwYeETL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71AiWVcdS1L._AC_SL1500_.jpg']
   },
   {
      id: 14,
      name: 'MK270 Wireless Keyboard and Mouse Combo',
      price: 29.99,
      sold: 60000,
      quantity: 1000,
      type: 1,
      desc: `Reliable Plug and Play: The USB receiver provides a reliable wireless connection up to 33 ft (1), so you can forget about drop-outs and delays and you can take it wherever you use your computer
      Type in Comfort: The design of this keyboard creates a comfortable typing experience thanks to the low-profile, quiet keys and standard layout with full-size F-keys, number pad, and arrow keys
      Durable and Resilient: This full-size wireless keyboard features a spill-resistant design (2), durable keys and sturdy tilt legs with adjustable height
      Long Battery Life: MK270 combo features a 36-month keyboard and 12-month mouse battery life (3), along with on/off switches allowing you to go months without the hassle of changing batteries
      Easy to Use: This wireless keyboard and mouse combo features 8 multimedia hotkeys for instant access to the Internet, email, play/pause, and volume so you can easily check out your favorite sites
      Comfortable Mouse: This compact wireless mouse is designed to be equally comfortable for both left- and right-handed users, plus its smooth cursor control allows easy navigation on most surfaces
      Favorite Wireless Combo: MK270 brings together familiar typing, wireless freedom, and long battery life; no wonder this is the world's top-selling combo(4)
      Upgrade to Logitech MK540 Combo: Experience increased comfort with the MK540 combo, featuring scooped keys, palm rest, full-size mouse with soft rubber grips, and customizable shortcuts
      `,
      category: 2,
      brand: 'Logitech',
      images: ['https://m.media-amazon.com/images/I/61pUul1oDlL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71uyjnDANeL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71ot6CNUr4L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/618Z+7Tmm0L._AC_SL1500_.jpg']
   },
   {
      id: 15,
      name: 'BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs',
      price: 23.15,
      sold: 80000,
      quantity: 0,
      type: 7,
      desc: `【Multi-Platform Compatible】Support PlayStation 4, New Xbox One, PC, Nintendo 3DS, Laptop, PSP, Tablet, iPad, Computer, Mobile Phone. Please note you need an extra Microsoft Adapter (Not Included) when connect with an old version Xbox One controller.
      【Surrounding Stereo Subwoofer】Clear sound operating strong brass, splendid ambient noise isolation and high precision 40mm magnetic neodymium driver, acoustic positioning precision enhance the sensitivity of the speaker unit, bringing you vivid sound field, sound clarity, shock feeling sound. Perfect for various games like Halo 5 Guardians, Metal Gear Solid, Call of Duty, Star Wars Battlefront, Overwatch, World of Warcraft Legion, etc.
      【Noise Isolating Microphone】Headset integrated onmi-directional microphone can transmits high quality communication with its premium noise-concellng feature, can pick up sounds with great sensitivity and remove the noise, which enables you clearly deliver or receive messages while you are in a game. Long flexible mic design very convenient to adjust angle of the microphone.
      【Great Humanized Design】Superior comfortable and good air permeability protein over-ear pads, muti-points headbeam, acord with human body engineering specification can reduce hearing impairment and heat sweat.Skin friendly leather material for a longer period of wearing. Glaring LED lights desigend on the earcups to highlight game atmosphere.
      【Effortlessly Volume Control】High tensile strength, anti-winding braided USB cable with rotary volume controller and key microphone mute effectively prevents the 49-inches long cable from twining and allows you to control the volume easily and mute the mic as effortless volume control one key mute.`,
      category: 2,
      brand: 'BENGOO',
      images: ['https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg', 'https://m.media-amazon.com/images/I/71z2WmHMtZL._AC_SL1000_.jpg', 'https://m.media-amazon.com/images/I/71UAwQgt-cL._AC_SL1000_.jpg', 'https://m.media-amazon.com/images/I/71Ie8vokMuL._AC_SL1000_.jpg', 'https://m.media-amazon.com/images/I/71pnikzdKkL._AC_SL1000_.jpg']
   },
   {
      id: 16,
      name: 'Turtle Beach Stealth 600 Gen 2 Wireless Gaming Headset for Xbox Series X & Xbox Series S, Xbox One & Windows 10 PCs',
      price: 99.95,
      salePrice: 89.95,
      sold: 25000,
      quantity: 2000,
      type: 4,
      desc: `POWERFUL, AMPLIFIED AUDIO - Refined ear cup acoustics and expertly tuned 50mm speakers are powerfully driven to give you accurate, immersive audio
      GEN 2 FLIP-TO-MUTE MIC - A larger, high-sensitivity, high-performance mic enhances chat clarity and seamlessly integrates into the headset when muted
      SUPERHUMAN HEARING - Turtle Beach exclusive Superhuman Hearing sound setting lets you hear subtle, game-changing sounds so you can live up to 20% longer and win more. *Data from Turtle Beach Superhuman Hearing study conducted by Real Industry, May 2021
      SURROUND SOUND READY FOR XBOX - Optimized to deliver immersive surround sound with Windows Sonic, Dolby Atmos and DTS Headphone: X; *Dolby Atmos and DTS:X: may require additional purchases, app downloads, and supported hardware
      MIC MONITORING - Hear your own voice while you chat with friends so you’re aware of your own volume and don’t have to shout
      GLASSES-FRIENDLY - Our exclusive, patented ProSpecs comfort-driven design removes pressure on your glasses while you play
      15-HOUR BATTERY LIFE - Always be ready to play with up to 15-hours of gaming per charge using the included USB-C charging cable`,
      category: 2,
      brand: '	Turtle Beach',
      images: ['https://m.media-amazon.com/images/I/61iHiW114KL._SL1200_.jpg', 'https://m.media-amazon.com/images/I/81Lth4SBVuL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/81OC5L6UgsL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/71ryT8UDqgL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/71IHSqyxnML._SL1500_.jpg']
   },
   {
      id: 17,
      name: 'Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11 Programmable Buttons, On-Board Memory, PC / Mac',
      price: 29.95,
      sold: 28000,
      quantity: 2000,
      type: 1,
      desc: `Hero 25K sensor through a software update from G HUB, this upgrade is free to all players: Our most advanced, with 1:1 tracking, 400-plus ips, and 100 - 25,600 max dpi sensitivity plus zero smoothing, filtering, or acceleration
      11 customizable buttons and onboard memory: Assign custom commands to the buttons and save up to five ready to play profiles directly to the mouse
      Adjustable weight system: Arrange up to five removable 3.6 grams weights inside the mouse for personalized weight and balance tuning
      Programmable RGB Lighting and Lightsync technology: Customize lighting from nearly 16.8 million colors to match your team's colors, sport your own or sync colors with other Logitech G gear
      Mechanical switch button tensioning: Metal spring tensioning system and pivot hinges are built into left and right gaming mouse buttons for a crisp, clean click feel with rapid click feedback
      1 year hardware limited warranty`,
      category: 2,
      brand: 'Logitech',
      images: ['https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71vVHdmqMKL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71BYvNUoumL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/61Z49vScNSL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/61-JHDTxPrL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71GbJuV3WnL._AC_SL1500_.jpg']
   },
   {
      id: 18,
      name: 'Razer DeathAdder Essential Gaming Mouse: 6400 DPI Optical Sensor - 5 Programmable Buttons - Mechanical Switches - Rubber Side Grips - Classic Black',
      price: 49.99,
      salePrice: 19.99,
      sold: 12000,
      quantity: 1000,
      type: 1,
      desc: `High-Precision 6,400 DPI Optical Sensor: Offers on-the-fly sensitivity adjustment through dedicated DPI buttons (reprogrammable) for gaming and creative work
      Durable Mechanical Switches: Supports up to 10 million clicks, backed by a 2 year warranty
      Ridged, Rubberized Scroll Wheel for Maximum Accuracy: Small, tactile bumps increases grip and allows for more controlled scrolling in high-stakes gaming situations
      5 Programmable Buttons: Allows for button remapping and assignment of complex macro functions through Razer Synapse`,
      category: 2,
      brand: 'Razer',
      images: ['https://m.media-amazon.com/images/I/71RZiWPcj8L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71FQnud76aL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/61At9EHfd2L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/61X0kOEm24L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71WHaAZswpL._AC_SL1500_.jpg']
   },
   {
      id: 19,
      name: 'HP X3000 Wireless Mouse, Black (H2C22AA#ABL)',
      price: 12.49,
      sold: 12500,
      quantity: 500,
      type: 7,
      desc: `Stylish, attractive design: The sleek and modern x3000 adds an instant touch oftrend-setting style for laptop, desktop and netbook PCs
      Nano receiver: takes up less USB space & Conveniently stores inside the mouse
      Scroll wheel zips you through the web and documents with speed & ease
      Contoured shape promotes all-day comfort
      Works with Windows XP, Vista, 7, 8, and 10
      One-year - worldwide parts-and-labor limited warranty
      12-Month Battery life
      Note : In case of Wireless mouse, the USB receiver will be provided inside or along with the mouse`,
      category: 2,
      brand: 'HP',
      images: ['https://m.media-amazon.com/images/I/71uaQ4PNf1L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/81Zk53h7DmL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/81rO5rJZdtL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71aO1e9AJnL._AC_SL1500_.jpg']
   },
   {
      id: 20,
      name: 'Everlasting Comfort Mouse Pad with Wrist Support - Includes Keyboard Wrist Rest - Ergonomic Memory Foam Desk Cushion for Carpal Tunnel - Computer, Laptop, Typing and Gaming Accessories',
      price: 29.95,
      sold: 300,
      quantity: 200,
      type: 1,
      desc: ``,
      category: 2,
      brand: 'Everlasting Comfort',
      images: ['https://m.media-amazon.com/images/I/71BZDE-aCaL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71D+kKUBCkS._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/61sXxLTZ1XL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71GX8Kb5SZL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/61g2hLGdn9L._AC_SL1500_.jpg']
   },
   {
      id: 21,
      name: 'NETGEAR Wi-Fi Range Extender EX6120 - Coverage Up to 1500 Sq Ft and 25 Devices with AC1200 Dual Band Wireless Signal Booster & Repeater (Up to 1200Mbps Speed), and Compact Wall Plug Design',
      price: 59.99,
      salePrice: 39.99,
      sold: 95000,
      quantity: 8000,
      type: 1,
      desc: `Extends WiFi range coverage up to 1500 sq ft, and connects up to 25 devices such as laptops, smartphones, speakers, IP cameras, tablets, IoT devices, and more
      Provides up to 1200 Mbps WiFi speed using dual band and patented FastLane (TM) technology for video streaming and casual gaming
      Works with any wireless router or cable modem with Wi-Fi.
      Simply plug in game consoles, streaming players, or other nearby wired devices using the Ethernet port for maximum speed
      Supports WEP and WPA/WPA2 wireless security protocols. NOTE : Refer to the PDF attached below in Technical Specification for Installation and Troubleshooting Steps`,
      category: 3,
      brand: 'NETGEAR',
      images: ['https://m.media-amazon.com/images/I/51FZjlbaySL._AC_SL1350_.jpg', 'https://m.media-amazon.com/images/I/619oJYZLrML._AC_SL1200_.jpg', 'https://m.media-amazon.com/images/I/61K5ISth49L._AC_SL1200_.jpg', 'https://m.media-amazon.com/images/I/61hIAfoxdUL._AC_SL1200_.jpg', 'https://m.media-amazon.com/images/I/61XpRZ9fPiL._AC_SL1200_.jpg']
   },
   {
      id: 22,
      name: 'TP-Link AC1750 Smart WiFi Router (Archer A7) -Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control, QoS',
      price: 79.99,
      salePrice: 49.99,
      sold: 60000,
      quantity: 3500,
      type: 2,
      desc: `JD Power Award ---Highest in customer satisfaction for wireless routers 2017 and 2019
      Router for wireless internet, works with Alexa, compatible with all Wi-Fi devices, 802.11ac and older
      Dual band router upgrades to 1750 Mbps high speed internet(450mbps for 2.4GHz, 1300Mbps for 5GHz), reducing buffering and ideal for 4K streaming
      3 external antennas for long range Wi-Fi. System Requirements-Internet Explorer 11, Firefox 12.0, Chrome 20.0, Safari 4.0, or other JavaScript-enabled browser. Cable or DSL Modem (if needed)
      Gigabit Router with 4 Gigabit LAN ports, fast access to multiple connected wired devices, Ideal as a gaming router
      Integrated USB port acts as a media Server, easily share your USB drive content
      TP-Link tether app easily set up and remotely manage your home network
      Works with all internet service providers, such as AT&T, Verizon, Xfinity, Spectrum, RCN, Cox, CenturyLink, Frontier, etc.( a modem is required for most internet service providers)`,
      category: 3,
      brand: 'TP-Link',
      images: ['https://m.media-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg', 'https://m.media-amazon.com/images/I/61PigjKeFqL._AC_SL1267_.jpg', 'https://m.media-amazon.com/images/I/71qQePTWx7L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71OeDrZlySL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71dsveFSf6L._AC_SL1500_.jpg']
   },
   {
      id: 23,
      name: 'TP-Link Deco Mesh WiFi System (Deco S4) – Up to 5,500 Sq.ft. Coverage, Replaces WiFi Router and Extender, Gigabit Ports, Works with Alexa, 3-pack',
      price: 149.99,
      salePrice: 129.99,
      sold: 16800,
      quantity: 500,
      type: 3,
      desc: `A New Way to WiFi: Deco Mesh technology gives you a better WiFi experience in all directions with faster WiFi speeds and strong WiFi signal to cover your whole home.
      Bettern Coverage than traditional WiFi routers: Deco S4 three units work seamlessly to create a WiFi mesh network that can cover homes up to 5, 500 square feet. No dead zone anymore.
      Seamless and Stable WiFi Mesh: Rather than wifi range extender that need multiple network names and passwords, Deco S4 allows you to enjoy seamless roaming throughout the house, with a single network name and password.
      Incredibly fast AC1200 speeds makes the deco capable of providing connectivity for up to 100 devices.
      With advanced Deco Mesh Technology, units work together to form a unified network with a single network name.  Devices automatically switch between Decos as you move through your home for the fastest possible speeds
      Robust Parental Controls:  Limit online time and block inappropriate websites according to unique profiles created for each family member. Easy to keep your children safe while they’re online.
      Setup is a breeze with the Deco app available on your Android or iOS device. Turn on or off guest WiFi with Alexa voice commands.
      Each Deco S4 has 2 Gigabit Ethernet ports(6 in total for a 3-pack) and supports Wired Ethernet Backhaul for better speeds. Any of them can work as a Wi-Fi Router. Works with all internet service providers, such as AT&T, Verizon, Xfinity, Spectrum, RCN, Cox, CenturyLink, Frontier, etc.( a modem is required for most internet service providers)`,
      category: 3,
      brand: 'TP-Link',
      images: ['https://m.media-amazon.com/images/I/614CaSPw+BS._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71LHqeXQN9S._AC_SL1499_.jpg', 'https://m.media-amazon.com/images/I/71JyXQgu57L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71gV1malxGL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71+hmpsRuqL._AC_SL1500_.jpg']
   },
   {
      id: 24,
      name: 'Cleaning Gel Universal Dust Cleaner for PC Keyboard Cleaning Car Detailing Laptop Dusting Home and Office Electronics Cleaning Kit Computer Dust Remover from ColorCoral 160G',
      price: 5.99,
      sold: 40000,
      quantity: 1000,
      type: 1,
      desc: `【Universal Fit】ColorCoral cleaning gel, simple and convenient cleaning kits for PC/laptop keyboard 💻 and other rugged surface, such as the car vent 🚖, camera 📷, printer 📹, telephone 📠, calculator, Instrument 🎺, speaker 🔈, air conditioner, TV 📺 and other appliances.
      【Safe Cleaning Gel】This universal dust cleaner is made of biodegradable gel, no sticky to hands, smells sweet with lemon🍋 fragrance, no stimulation to skin👌.
      【Easy Dust Cleaning】Make sure your hands are dry and clean, 👉 take a piece of the cleaning gel, 👉knead it into a ball, press the cleaning gel slowly into the keyboard, car vent and rugged surface and then pull out, the dust would be carried away with the cleaning gel.
      【Reusable】The keyboard cleaning gel could be used repeatedly till the color turn to dark 🌚 or it become sticky, then you have to replace the gel with a new one 🌝. After cleaning, please stock the cleaning gel in cool place. (📌Don’t wash the gel in water.)
      【In the package】1* universal cleaning gel, we provide the cleaning gel with 💯100% money back guarantee, if you find the package broken, the cleaning gel dirty, or any other quality issues, please contact us through message 📩, we promise you a free replacement and a full refund.
      `,
      category: 4,
      brand: 'ColorCoral',
      images: ['https://m.media-amazon.com/images/I/714s4ksW5GL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/61sxvt5vv8L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71zw-FnwEkL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71NuXB0o3TL._AC_SL1500_.jpg']
   },
   {
      id: 25,
      name: 'Keyboard Cleaner, Dust Cleaning Gel with 5 Keyboard Cleaning Kit, Universal Car Cleaning Gel for Car Vent, Detailing Cleaning Gel Putty for Car Dash, Printers, Calculators, Speakers',
      price: 5.99,
      sold: 500,
      quantity: 240,
      type: 1,
      desc: `【Universal Cleaning Gel】Universal cleaning gel very suitable for Auto interior cleaning and household, simple and convenient to use, leaving no residue. It can picking up dust/dirt from your keyboard, car vent, car interiors and the areas hard to reach, so perfect use as keyboard cleaner, car cleaning gel and dust cleaning gel. You also can use it clean mouse, calculator, camera, printer, car detailing, dashboard, air conditioner & furniture and more, especially the dead corner and gap.
      【Safe Material】This dust cleaning gel is made of high quality biodegradable gel material, it is friendly to the environment, non-irritating to the skin, non-sticky and smells with light fragrance. (PLEASE NOTE : The cleaning gel is not edible, please keep them away from babies and pets)
      【5 Keyboard Cleaning kit】1*keys puller: Quickly pull out the keys on the keyboard for deep cleaning; 1*hard brush: Remove stubborn stains; 1*soft brush: Great to remove dust off sensitive keyboard parts; 1*Rubber blower: used to remove dust; 1*Wiping Cloth: cleaning keyboard surface stains & digital camera lens, computer screen, telescope lens.
      【Easy to Use】Keep the palm dry before use, take a piece of the keyboard cleaning gel, knead it into a ball, press the cleaning gel slowly into the keyboard, car vent and other rugged surface, roll or press slightly for about 3-5 seconds and then pull up slowly, the dust would be carried away with the gel.
      【Durable & Reusable】This keyboard cleaning putty could be used again and again till the color turn to dark, then you have to replace the gel with a new one. Please put the gel into the box after use and store it in a cool dry place. Use period after opening is around 3 months; Unopened expiration date is around 2 years.(PLEASE NOTE : The cleaning gel can not be cleaned. Do not wash it in water.)`,
      category: 4,
      brand: 'Fesciory',
      images: ['https://m.media-amazon.com/images/I/812yTvcjUHL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/81gRXACWxrL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71ZfNFXg4ES._AC_SL1000_.jpg', 'https://m.media-amazon.com/images/I/81Z9oD7+FwL._AC_SL1500_.jpg']
   },
   {
      id: 26,
      name: 'ColorCoral Vacuum Dust Cleaner Rechargeable Computer Vacuum Keyboard Cleaner for Keyboard Dusting Portable Mini Vacuum Cleaner for Car Interior Detailing Home and Office Dust Cleaning',
      price: 27.99,
      sold: 300,
      quantity: 120,
      type: 2,
      desc: `🌀 Universal fit. ColorCoral computer vacuum cleaner was designed to remove dust, hair and crumbs from your desk, carpet, sofa, computer and your mechanical keyboard.
      🌀 Strong suction power, the vacuum keyboard cleaner has 60W power, it could easily pick up the crumbs, beans and even screws. High suction power makes your dust cleaning job more efficiently.
      🌀Washable durable HEPA filter. The high quality HEPA filter in the vacuum cleaner could be washed with running water. When your vacuum filter gets stuffed, just uninstall and clean the HEPA filter. Please make sure the HEPA filter is dry and properly fitted before turning on the vacuum cleaner.
      🌀 Cordless Design, with the inner 2000mAh battery, you could take this vacuum dust cleaner to your car, you bed room, your office and any place you need. The battery needs 6 hours to be fully charged, please use the recommended charger: 5V-1A to charge the vacuum cleaner or connect it directly to your computer with the USB charging cord. Please note the charging adapter is not included in the package.
      🌀 ColorCoral provide two nozzles for this portable vacuum cleaner. You could use the flat nozzle for general dusting, and use the brush nozzle for rugged surface dusting such as: mechanical keyboard and computer mainboard.`,
      category: 4,
      brand: 'ColorCoral',
      images: ['https://m.media-amazon.com/images/I/61ujc9LVMBL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71ndXvoO8UL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71fMETNdXdL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71KPejK1rsL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/61H5ZbfFbwL._AC_SL1500_.jpg']
   },
   {
      id: 27,
      name: 'AFMAT Cordless Air Duster, Air Keyboard Cleaner, Compressed Air Can Duster, Spray Canned Air Duster for Computers, Rechargeable Blower for Keyboard Cleaning, 6000mAh, 10W Fast Charging',
      price: 58.42,
      sold: 1500,
      quantity: 340,
      type: 2,
      desc: `【Powerful Cordless Air Duster】Our AFMAT air duster is proud of its capacity to produce a powerful thrust of air at almost 10 level strong gale (28m/s) for deep cleaning of the microscopic dust, such as printed circuit boards to computers, electronic instruments, medical devices, which can not be cleaned by your traditional wiper or duster. Its motor allows the maximum rotating speed to reach up to 33000 RPM.
      【Rechargeable Electric Air Duster】 Built-in large 6000mAh lithium batteries allow this duster to run nearly 30 minutes continously. Its compatibility of getting charged via the USB-port makes it so easy to charge. (If you lost the charging cord, just use your Android cellphone's) With a reduced charging time of around 3 hours, its usability can be highly increased. Compared to common gas duster, this electric air duster is highly reusable with its rechargeable function.
      【Alternative to Compressed Air】We all have the responsibility to save gas and water. To achieve this goal, we made this highly environment-friendly device as it allows more than 5000 times of use, resulting in saving a lot of energy. This mini duster is such a scientific device which keeps cleanliness hand in hand with eco-friendliness.
      【Handy Design & Simple Operation】 The air duster is structured with an extended full-palm gripping design and withdrawable nozzle keeping the handhold clear to let users grip it at their comfort. The operation is so simple and there are 2 ways to run the duster. One is to long hold the switch and the other is to press the switch twice.`,
      category: 4,
      brand: 'AFMAT',
      images: ['https://m.media-amazon.com/images/I/51yuCwlcL2L._AC_SL1000_.jpg', 'https://m.media-amazon.com/images/I/71mVXcHFbUL._AC_SL1000_.jpg', 'https://m.media-amazon.com/images/I/61FBQFKNqcL._AC_SL1000_.jpg', 'https://m.media-amazon.com/images/I/61uBu7rQNxL._AC_SL1000_.jpg', 'https://m.media-amazon.com/images/I/61al2PX5THL._AC_SL1000_.jpg']
   },
   {
      id: 28,
      name: 'Sceptre Curved 27" Gaming Monitor up to 165Hz DisplayPort 144Hz HDMI Edge-Less AMD FreeSync Premium, Build-in Speakers Machine Black 2021 (C275B-1858RN)',
      price: 239.97,
      salePrice: 199.97,
      sold: 3540,
      quantity: 260,
      type: 2,
      desc: `Monitor Design - Our Slim 1800R Curved FHD (1920 x 1080) display provides a immersive picture
      Display Performance - A 165hz refresh rate and a 3ms response time will improve clarity on your picture during fast action scenes. AMD FreeSync Premium compatibility will make your picture even smoother.
      Picture Quality - 95% sRGB Color Gamut and 16.7 Million Color Depth will show all of your content with clarity and color accuracy
      Ports - 2 HDMI, 1 DP, and 3.5mm Audio In/Out allow you to connect whatever devices you need`,
      category: 5,
      brand: 'Sceptre',
      images: ['https://m.media-amazon.com/images/I/61oVczVkrkL._AC_SL1189_.jpg', 'https://m.media-amazon.com/images/I/715ubidyuzL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/61PlJo8MUpL._AC_SL1375_.jpg', 'https://m.media-amazon.com/images/I/61CjbRqVncL._AC_SL1080_.jpg']
   },
   {
      id: 29,
      name: 'SAMSUNG 23.5” CF396 Curved Computer Monitor, AMD FreeSync for Advanced Gaming, 4ms Response Time, Wide Viewing Angle, Ultra Slim Design, LC24F396FHNXZA, Black',
      price: 189.99,
      salePrice: 169.99,
      sold: 8100,
      quantity: 460,
      type: 1,
      desc: `Immersive Viewing Experience: The 1800R curvature of the screen lets you enjoy big, bold and stunning panoramic views while you work or play at home or the office
      Super Slim Design: Make a stylish statement with its ultra-slim and sleek profile; Monitor measures less than 0.5 inch thick and the simple circular stand adds a modern look to your space
      Advanced Gaming w/ AMD FreeSync: This technology allows users to enjoy smooth images, even during the fastest moving scenes; It minimizes input latency, dramatically reduces image tearing and stutter
      Fast 4ms Response Time: With its 4ms response rate, you'll see the fastest on-screen motion clearly and smoothly with less blur, judder, and ghosting, allowing players to experience their games at the highest level
      Eye Saver Mode: Optimize your viewing comfort by reducing blue light emissions and flickers at the touch of a button; Read documents, play games, watch movies and edit photos for longer periods without worrying about eye strain or fatigue
      Brilliant Picture Quality: Experience vibrant, vivid colors with Samsung's Active Crystal Color technology; The excellent 3000:1 contrast ratio delivers deep blacks and bright whites so you can see clearly even in the darkest or brightest scenes
      Eco-Saving Plus: This feature reduces screen brightness to save power, plus the screen brightness automatically transitions fluidly—reducing energy use even more
      Connectivity technology: HDMI`,
      category: 5,
      brand: 'Samsung',
      images: ['https://m.media-amazon.com/images/I/91ubktnbNVL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/81fdPSv2CDL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/91RLPTjVeaL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71VyDtO1TCL._AC_SL1500_.jpg']
   },
   {
      id: 30,
      name: 'Razer Gigantus v2 Cloth Gaming Mouse Pad (Medium): Thick, High-Density Foam - Non-Slip Base - Classic Black',
      price: 9.99,
      sold: 5340,
      quantity: 384,
      type: 4,
      desc: `Ultra-Large Area for Low-Sensitivity Playstyles: Designed to never run out of mouse space during high-leverage gaming, reducing the need to lift and reposition mice
      Optimized Gaming Surface: Features a micro-textured surface for precise pixel-tracking—calibrated for all mouse sensors—with a surface coating for both fast and controlled playstyles
      Non-Slip Rubber Base: Made of natural-foam rubber for keeping the Gigantus mouse mat in place
      Size: Medium`,
      category: 2,
      brand: 'Razer',
      images: ['https://m.media-amazon.com/images/I/81DbiUd5-7L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/81NLgh-2QfL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/61rFGUpbU3L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71TSDtF+JBL._AC_SL1500_.jpg']
   },
   {
      id: 31,
      name: 'SAMSUNG 970 EVO Plus SSD 2TB - M.2 NVMe Interface Internal Solid State Drive with V-NAND Technology (MZ-V7S2T0B/AM)',
      price: 499.99,
      salePrice: 299.99,
      sold: 31000,
      quantity: 484,
      type: 4,
      desc: `Make sure this fits by entering your model number.
      INNOVATIVE V-NAND TECHNOLOGY: Powered by Samsung V-NAND Technology, the 970 EVO Plus SSD’s NVMe interface (PCIe Gen 3.0 x4 NVMe 1.3) offers enhanced bandwidth, low latency, and power efficiency ideal for tech enthusiasts, high end gamers, and 4K & 3D content designers
      BREAKTHROUGH READ WRITE SPEEDS: Sequential read and write performance levels of up to 3,500MB s and 3,300MB s, respectively; Random Read (4KB, QD32): Up to 600,000 IOPS Random Read
      PERFORMANCE OPTIMIZATION AND DATA SECURITY: Seamless cloning and file transfers with Samsung Magician Software, the ideal SSD management solution for performance optimization and data security with automatic firmware updates
      SUPERIOR HEAT DISSIPATION: Samsung’s Dynamic Thermal Guard automatically monitors and maintains optimal operating temperatures to minimize performance drops
      5-YEAR LIMITED WARRANTY: 5-year limited warranty or 600 TBW (Terabytes Written)
      Note: Model: MZ-V7S2T0 on packaging is the model number and Item model number provided MZ-V7S2T0B AM is technically the item code which shows country of intended sale`,
      category: 7,
      brand: 'Samsung',
      images: ['https://m.media-amazon.com/images/I/813bvfaxuAL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/81HKVugDtRL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/41Xs7PMZLpL._AC_.jpg', 'https://m.media-amazon.com/images/I/41q3UHp1TeL._AC_.jpg', 'https://m.media-amazon.com/images/I/41cUfgtV+HL._AC_.jpg']
   },
   {
      id: 32,
      name: 'SanDisk 128GB Cruzer USB 2.0 Flash Drive - SDCZ36-128G-B35',
      price: 14.99,
      sold: 47000,
      quantity: 584,
      type: 6,
      desc: `Take it all with you on reliable USB flash drives
      Transfer with confidence when moving images and other files from PC to PC or other consumer electronic devices
      Ideal for video - the easy way to store, share and play your favorite video files
      Available in capacities up to 256GB [1GB = 1 billion bytes - Some capacity not available for data storage]`,
      category: 7,
      brand: 'SanDisk',
      images: ['https://m.media-amazon.com/images/I/61-zDI+hqyL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/61QiNJf4WDL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/61Ro93dZD4L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/81GcG1pXrbL._AC_SL1500_.jpg']
   }
]

export default products