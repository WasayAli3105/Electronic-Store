const products = [
    {
        
        "id": 1,
        "name":"Haier Refrigerator HRF-622ICG Inverter Non Frost",
        "price": "₨282,000.00",
        "image": "images/55.png",
        "description": "The Haier Refrigerator HRF-622ICG is an inverter non-frost model designed for energy efficiency and optimal cooling. It features a spacious 622-liter capacity, ideal for large households. Its sleek design and advanced technology ensure consistent temperature control and freshness."
    },
    {
        "id": 2,
        "name":"HAIER REFRIGERATOR TWIN INVERTER ",
        "price": "Rs.136,999",
        "image": "images/56.png",
        "description": "The Haier Refrigerator Twin Inverter offers dual inverter technology for energy-efficient and quiet operation. It provides consistent cooling with optimized temperature control, preserving food freshness. Its modern design and spacious compartments make it a practical addition to any kitchen."
    },
    {
        "id": 3,
        "name":" Haier Hsu-18hfmac 1.5 Ton Heat & Cool Inverter Wall Mount",
        "price": "Rs.164,999",
        "image": "images/57.png",
        "description": " The Haier HSU-18HFMAC 1.5 Ton Heat & Cool Inverter Wall Mount AC provides efficient heating and cooling with inverter technology. It features a sleek design, quiet operation, and fast temperature adjustment. Ideal for year-round comfort in medium-sized rooms."
    },
    {
        "id": 4,
        "name":" Haier Hsu-18hfpaab 1.5 Ton Heat & Cool Inverter Wall Mount",
        "price": "Rs.169,999",
        "image": "images/58.png",
        "description": "The Haier HSU-18HFPAAB 1.5 Ton Heat & Cool Inverter Wall Mount AC offers energy-efficient heating and cooling with advanced inverter technology. It ensures rapid temperature adjustments and operates quietly. Perfect for maintaining comfort in medium-sized rooms throughout the year."
    },
    {
        "id": 5,
        "name":" Haier HDL-20MXP5 SOLO Series Microwave Oven",
        "price": "Rs. 15,599",
        "image": "images/59.png",
        "description": "The Haier HDL-20MXP5 SOLO Series Microwave Oven offers 20 liters of capacity, ideal for everyday cooking needs. It features easy-to-use controls and multiple power levels for versatile cooking options. Its compact design fits seamlessly into any kitchen space."
    },
    {
        "id": 6,
        "name":" Haier HIL2001MFPH 20 Litre Microwave Oven",
        "price":"Rs.22,000",
        "image": "images/60.png",
        "description": "The Haier HIL2001MFPH 20 Litre Microwave Oven is perfect for daily cooking, reheating, and defrosting tasks. It features a user-friendly interface with multiple power settings and pre-set menus. Its sleek and compact design fits well in any kitchen space. "
    },
    {
        "id": 7,
        "name":"Haier HWM-75-918 Washing Machine Fully Auto",
        "price": "₨.43,874",
        "image": "images/61.png",
        "description": "The Haier HWM-75-918 Fully Automatic Washing Machine offers a 7.5 kg capacity, perfect for medium-sized households. It features multiple wash programs and an efficient motor for thorough cleaning. Its sleek design and user-friendly controls provide convenience and ease of use."
    },
    {
        "id": 8,
        "name":" HAIER 7 Kg, Front Load Fully Automatic Washing Machine",
        "price": "Rs.35,000",
        "image": "images/62.png",
        "description": "The Haier 7 Kg Front Load Fully Automatic Washing Machine delivers efficient and gentle cleaning for medium-sized households. It features multiple wash programs, a high-speed spin cycle, and energy-efficient operation. Its sleek design and intuitive controls enhance user convenience.  "
    },
    {
        "id": 9,
        "name":" HAIER LE32K6600 32 INCH STANDARD LED TV",
        "price": "Rs.48,499",
        "image": "images/63.png",
        "description": "The Haier LE32K6600 32 Inch Standard LED TV offers clear and vibrant picture quality for an immersive viewing experience. It features multiple connectivity options, including HDMI and USB ports, for versatile media access. Its sleek and compact design fits well in any room."
    },
    {
        "id": 10,
        "name":" HAIER 40INCH SMART LED Tv LE-40K6600",
        "price":"Rs.68,999",
        "image": "images/64.png",
        "description": "The Haier 40 Inch Smart LED TV LE-40K6600 delivers crisp and vibrant visuals with smart functionality for streaming and browsing. It offers multiple connectivity options, including HDMI, USB, and Wi-Fi, for versatile entertainment. Its sleek design enhances any living space."
    },
    {
        "id": 11,
        "name":"Haier Air Fryer I-Master Series 5",
        "price": "Rs.22,000",
        "image": "images/65.png",
        "description": "The Haier Air Fryer I-Master Series 5 offers versatile cooking with rapid air technology, allowing for healthier frying with little to no oil. It features a sleek design with easy-to-use digital controls and a spacious cooking capacity suitable for various meals. Ideal for health-conscious individuals looking to enjoy crispy, delicious foods with less guilt."
    },
    {
        "id": 12, 
        "name":"HAIER HA-AF50D Digital Air Fryer",
        "price": "Rs.359,00",
        "image": "images/66.png",
        "description": "The Haier HA-AF50D Digital Air Fryer combines efficient air circulation technology for crispy results using minimal oil. Its digital controls and presets simplify cooking, while a compact design fits well in any kitchen space. Perfect for quick, healthier meals without compromising on taste or texture."
    },
    {
        "id": 13,
        "name":" Dawlance 8 CFT Top Mount Refrigerator 9160LF Chrome",
        "price": "Rs.74,000",
        "image": "images/67.png",
        "description": "The Dawlance 8 CFT Top Mount Refrigerator 9160LF Chrome offers ample storage space and energy efficiency suitable for small to medium-sized households. It features a sleek chrome finish, adjustable shelves, and a frost-free design for hassle-free maintenance. Ideal for those seeking reliable cooling performance with modern aesthetics."
    },
    {
        "id": 14,
        "name":" Dawlance Refrigerator French Door 900 GD INV",
        "price": "Rs.244,999",
        "image": "images/68.png",
        "description": "The Dawlance Refrigerator French Door 900 GD INV combines elegant French door design with inverter technology for energy efficiency and quiet operation. It offers spacious storage, customizable shelves, and advanced cooling features for optimal freshness. Perfect for larger families looking for a blend of style and functionality in their kitchen appliances."
    },
    
       
    {
        "id": 16,
        "name":"Dawlance AC 1.5 Ton Split Inverter DAC-Chrome 30 Transoxide",
        "price": "Rs.160,000.00",
        "image": "images/70.png",
        "description": "The Dawlance AC 1.5 Ton Split Inverter DAC-Chrome 30 Transoxide combines powerful cooling with energy-efficient inverter technology, ideal for medium-sized rooms. It features Transoxide technology for improved durability and corrosion resistance, along with a sleek chrome design. Perfect for maintaining comfortable indoor environments with enhanced reliability and aesthetic appeal."
    },
   
    {
        "id": 18,
        "name":" Dawlance Microwave Oven DW 142 HZP",
        "price": " ₨.44,000",
        "image": "images/71.png",
        "description": "The Dawlance Microwave Oven DW 142 HZP combines microwave cooking with grilling and baking functions, offering versatile meal preparation options. It features a spacious interior, multiple power levels, and a sleek design that complements modern kitchens. Ideal for users looking for a multifunctional appliance for efficient cooking and baking."
    },
    {
        "id": 19,
        "name":" Dawlance Washing Machine AWM DWT 1775 PL",
        "price": "₨.125,000.00",
        "image": "images/72.png",
        "description": "The Dawlance Washing Machine AWM DWT 1775 PL is a top-loading washer with a capacity suitable for medium-sized households, featuring multiple wash programs for various fabric types. It includes advanced features like a delay start option, fuzzy logic technology for efficient water usage, and a durable build for long-lasting performance. Ideal for users seeking reliable and versatile laundry solutions."
    },
    {
        "id": 20,
        "name":"Dawlance Washing Machine DWF 8120 GR Inverter",
        "price": "₨.132,000.00",
        "image": "images/73.png",
        "description": "The Dawlance Washing Machine DWF 8120 GR Inverter offers efficient washing with its inverter motor, reducing energy consumption and noise levels. It features multiple wash programs, a spacious drum, and a sleek, durable design. Ideal for households looking for reliable performance and energy savings in their laundry appliances."
    },
    {
        "id": 21,
        "name":" Dawlance 32-inch 32E3A Simple HD LED TV",
        "price": "₨ 40,000",
        "image": "images/74.png",
        "description": " The Dawlance 32-inch 32E3A Simple HD LED TV delivers crisp HD picture quality with vibrant colors and sharp detail. It features multiple connectivity options, including HDMI and USB ports, along with built-in speakers for immersive audio. Ideal for smaller living spaces or as a secondary TV for versatile entertainment options."
    },
    {
        "id": 22,
        "name":" Dawlance 55G3A , 4K UHD Smart LED TV",
        "price": " ₨.168,200",
        "image": "images/75.png",
        "description": "The Dawlance 55G3A 4K UHD Smart LED TV offers stunning picture clarity with its Ultra HD resolution and vivid colors, ideal for immersive viewing experiences. It includes smart features like built-in Wi-Fi, access to various apps, and multiple connectivity options for seamless entertainment. Perfect for users seeking high-quality visuals and smart functionality in their home entertainment setup."
    },
    {
        "id": 23,
        "name":" Dawlance Air Fryer DW-3013 3L",
        "price": "Ts.31,500",
        "image": "images/76.png",
        "description": "The Dawlance Air Fryer DW-3013 3L utilizes rapid air technology to cook crispy and delicious meals with minimal oil, promoting healthier eating habits. It features a 3-liter capacity, digital controls for precise cooking settings, and a compact design that fits well in any kitchen. Perfect for preparing a variety of dishes efficiently and with reduced fat intake."
    },
    {
        "id": 24,
        "name":"Dawlance Air Fryer DWAF 3013 3.0 Liters ",
        "price": "₨.33,000.",
        "image": "images/77.png",
        "description": "The Dawlance Air Fryer DWAF 3013 offers efficient cooking with rapid air circulation technology, achieving crispy results with little to no oil. It features a 3.0-liter capacity suitable for small to medium-sized meals, digital controls for precise cooking, and a compact design for easy storage. Ideal for health-conscious individuals looking to enjoy fried foods guilt-free."
    },
    {
        "id": 25,
        "name":"PEL PRGDI 145 INTELLO Series Refrigerator",
        "price": "₨.99,500",
        "image": "images/78.png",
        "description": "The PEL PRGDI 145 INTELLO Series Refrigerator offers advanced features like intelligent cooling technology and energy efficiency. It includes a spacious interior, adjustable shelves, and a sleek design suitable for modern kitchens. Ideal for users seeking smart refrigeration solutions with enhanced convenience and performance."
    },
    {
        "id": 26,
        "name":"PEL InverterOn Glass Door Refrigerator PRINVO 6450 ",
        "price": "₨.105,500",
        "image": "images/79.png",
        "description": "The PEL InverterOn Glass Door Refrigerator PRINVO 6450 combines stylish design with energy-efficient inverter technology for reliable cooling and reduced electricity consumption. It features a spacious interior, glass doors for easy visibility, and advanced cooling systems for optimal freshness. Ideal for households looking to add modern aesthetics and efficiency to their kitchen appliances."
    },
    {
        "id": 27,
        "name":"PEL 1 Ton Fit Black Inverter AC Heat and Cool",
        "price": "₨.94,999.00",
        "image": "images/80.png",
        "description": "The PEL 1 Ton Fit Black Inverter AC Heat and Cool combines efficient cooling and heating capabilities with its inverter technology, suitable for small to medium-sized rooms. It features a sleek black design, multiple operating modes, and a remote control for convenience. Ideal for maintaining comfortable temperatures year-round with energy-saving benefits."
    },
    {
        "id": 28,
        "name":"PEL Inverter AC 1.5 Ton 18K Fit T3  ",
        "price": "₨137,000.00",
        "image": "images/81.png",
        "description": "The PEL Inverter AC 1.5 Ton 18K Fit T3 offers efficient cooling with its inverter technology, designed for optimal performance even in high ambient temperatures (up to 50°C). It features a durable build, multiple cooling modes, and a sleek design for modern aesthetics. Ideal for medium-sized rooms, providing reliable cooling with energy-saving benefits."
    },
    {
        "id": 29,
        "name":"Pel Microwave Oven PMO-20 BH",
        "price": "Rs.20,499.00",
        "image": "images/82.png",
        "description": "The PEL Microwave Oven PMO-20 BH offers versatile cooking options with its multiple power levels and preset cooking programs. It features a spacious interior, easy-to-use controls, and a sleek design suitable for various kitchen settings. Ideal for users looking for efficient and reliable microwave cooking solutions."
    },
    {
        "id": 30,
        "name":"PEL Microwave PMO 38 Glamour 38 Liters",
        "price": "₨ .36,900",
        "image": "images/83.png",
        "description": "The PEL Microwave PMO 38 Glamour offers a generous 38-liter capacity, ideal for larger meals and families. It features multiple cooking functions, including grill and convection modes, along with a sleek design and intuitive controls for easy operation. Perfect for versatile cooking needs with enhanced capacity and functionality."
    },
    {
        "id": 31,
        "name":"PEL Smart Washing Machine Fully Auto",
        "price": "₨.77,500.",
        "image": "images/84.png",
        "description": "The PEL Smart Washing Machine Fully Auto combines advanced technology with efficient washing capabilities. It features automated functions for ease of use, multiple wash programs for different fabric types, and a sleek design that complements modern homes. Ideal for households looking for convenience and reliable performance in their laundry appliances."
    },
    {
        "id": 32,
        "name":"PEL Washing Machine PAWM 900 Top Load ",
        "price": "₨.73,999",
        "image": "images/85.png",
        "description": "The PEL Washing Machine PAWM 900 Top Load offers robust washing performance with its top-loading design, suitable for medium-sized households. It features multiple wash programs, a durable build, and straightforward controls for user convenience. Ideal for those seeking efficient and reliable laundry solutions."
    },
    {
        "id": 33,
        "name":"Pel Led 32 Inch",
        "price": "₨.85,000.",
        "image": "images/86.png",
        "description": "The PEL 32-inch LED TV offers crisp HD resolution with vibrant colors and a slim, modern design that complements any living space. It includes multiple connectivity options for external devices and built-in speakers for immersive audio. Ideal for smaller rooms or as a secondary TV for versatile entertainment."
    },
    {
        "id": 34,
        "name":" Pel Led 32 Inch",
        "price": "₨.65,000.",
        "image": "images/87.png",
        "description": "The PEL 32-inch LED TV offers crisp HD resolution with vibrant colors and a slim, modern design that complements any living space. It includes multiple connectivity options for external devices and built-in speakers for immersive audio. Ideal for smaller rooms or as a secondary TV for versatile entertainment."
    },
    {
        "id": 35,
        "name":"Pel Air Fryer HD9740 5.5 Liter ",
        "price": "₨.26,499",
        "image": "images/88.png",
        "description": "It seems there might be a confusion with the brand. PEL typically specializes in home appliances like refrigerators, washing machines, and air conditioners, but they do not manufacture air fryers. If you're looking for information on an air fryer, it might be from another brand. Let me know if you have any other queries or need information on PEL appliances!"
    },
    {
        "id": 36,
        "name":"Pel Air Fryer ",
        "price": "₨.20,000.",
        "image": "images/89.png",
        "description": "It appears there might have been confusion regarding PEL manufacturing air fryers. As of my last update, PEL primarily focuses on refrigerators, washing machines, and other home appliances. If you're specifically looking for an air fryer, I recommend exploring brands like Philips, Ninja, or Cosori, which offer a variety of models with different capacities and features tailored for healthier cooking."
    },
    {
        "id": 37,
        "name":"Orient Refrigerator Ice 350 Liters 13 Cubic Feet ",
        "price": "₨.100,000.",
        "image": "images/90.png",
        "description": "The Orient Refrigerator Ice with 350 liters (13 cubic feet) capacity offers ample storage space suitable for medium-sized households. It features a stylish design, energy-efficient operation, and adjustable shelves for flexible storage options. Ideal for users seeking reliable cooling performance and spacious storage in their kitchen."
    },
    {
        "id": 38,
        "name":"Orient Invoge OR-68635 GD ",
        "price": "₨.120,000.",
        "image": "images/91.png",
        "description": "The Orient Invoge OR-68635 GD is a refrigerator model that features a sleek design with a golden finish, offering a blend of aesthetics and functionality. It includes ample storage capacity, adjustable shelves, and energy-efficient operation. Ideal for households looking for a stylish and practical refrigeration solution."
    },
    {
        "id": 39,
        "name":"Air Conditioner Orient EVA-18G eComfort White-Inverter 1.5 Ton ",
        "price": "₨.198,00",
        "image": "images/92.png",
        "description": "The Orient EVA-18G eComfort White-Inverter 1.5 Ton air conditioner combines efficient cooling with energy-saving inverter technology. It features a sleek white design, rapid cooling capabilities, and low noise operation. Ideal for medium-sized rooms, providing comfort with reduced electricity consumption."
    },
    {
        "id": 40,
        "name":"Orient 2 Ton Split AC Pattern Series OS-24 MF-17 ",
        "price": "₨.124,570",
        "image": "images/93.png",
        "description": "The Orient 2 Ton Split AC, Pattern Series OS-24 MF-17, offers powerful cooling suitable for larger rooms or spaces. It features a stylish design with advanced air purification filters, energy-efficient operation, and multiple cooling modes for enhanced comfort. Ideal for those seeking effective cooling performance with modern design aesthetics."
    },
    {
        "id": 41,
        "name":" Orient Microwave Oven Panini/Macaroni 20M Solo White",
        "price": "₨.15,632",
        "image": "images/94.png",
        "description": "The Orient Microwave Oven Panini/Macaroni 20M Solo in White offers essential microwave functionalities with a compact design. It features easy-to-use controls, suitable for reheating and basic cooking tasks. Ideal for smaller kitchens or as a secondary microwave for quick meal preparations."
    },
    {
        "id": 42,
        "name":"Orient Microwave Oven Popcorn 20M Solo White",
        "price": "RS.26,000",
        "image": "images/95.png",
        "description": "The Orient Microwave Oven Popcorn 20M Solo in White is designed for simple and efficient popcorn preparation. It features a compact size, straightforward controls, and a stylish white finish. Ideal for quick and convenient popcorn snacks at home."
    },
    {
        "id": 43,
        "name":"Orient Washing Machine Twister 9050 - 8Kg",
        "price": "₨.39,990",
        "image": "images/96.png",
        "description": "The Orient Washing Machine Twister 9050 with an 8 kg capacity offers efficient washing with multiple programs and a durable build. It features a sleek design, user-friendly controls, and reliable performance suitable for medium-sized households. Ideal for those seeking effective laundry solutions with modern conveniences."
    },
    {
        "id": 44,
        "name":"Orient Washing Machine Twister 9050 - 8Kg  ",
        "price": "₨42,000",
        "image": "images/97.png",
        "description": "The Orient Washing Machine Twister 9050 with an 8 kg capacity combines efficiency with versatility, featuring multiple wash programs and a robust build. It boasts a modern design, user-friendly controls, and reliable performance, making it ideal for medium-sized households looking for effective laundry solutions."
    },
    {
        "id": 45,
        "name":"ORIENT 24″ HD LED 24G6511 ",
        "price": "₨.20,000.",
        "image": "images/98.png",
        "description": "The Orient 24″ HD LED 24G6511 TV offers clear HD resolution with vibrant colors and a sleek design suitable for smaller spaces. It includes multiple connectivity options and built-in speakers for enhanced audiovisual experiences. Ideal for compact rooms or as a secondary TV for versatile entertainment."
    },
    {
        "id": 46,
        "name":"Orient 32″  LED LE-32G6510",
        "price": "₨.22,499.",
        "image": "images/99.png",
        "description": "The Orient 32″ LED LE-32G6510 TV delivers crisp HD resolution with vibrant colors and a slim, modern design that fits well in any room. It features multiple connectivity options and built-in speakers for immersive sound. Ideal for enjoying movies, shows, and games with clear visuals and enhanced audio."
    },
    {
        "id": 47,
        "name":"Orient air fryer ",
        "price": "₨.18,000.",
        "image": "images/100.png",
        "description": "I apologize for the confusion earlier. Orient does not produce air fryers. For air fryers, consider brands like Philips, Ninja, or Cosori, which offer models with features such as rapid air technology, adjustable temperature settings, and various cooking capacities for healthier meals."
    },
    {
        "id": 48,
        "name":"OrientA Air Fryer ",
        "price": "₨.22,000.",
        "image": "images/101.png",
        "description": "I apologize for the confusion earlier. Orient does not produce air fryers. For air fryers, consider brands like Philips, Ninja, or Cosori, which offer models with features such as rapid air technology, adjustable temperature settings, and various cooking capacities for healthier meals."
    }

];
export default products;