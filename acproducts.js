const products = [
    {
        "id": 1,
        "name":"Haier 18HFPAA Inverter AC 1.5 TON Wifi (Black,Golden,Silver)",
        "price": "Rs175,000",
        "image": "images/184.png",
        "description": " The Haier 18HFPAA is a notable model known for its features and design.1.5 Ton, suitable for medium-sized rooms or areas. Offers energy efficiency by adjusting compressor speed based on cooling needs, which helps in saving electricity.Available in Black, Golden, and Silver, providing options to match various room decors Allows remote control and monitoring via a smartphone app, enabling users to adjust settings from anywhere with internet access."
    },
    {
        "id": 2,
        "name":"Haier HSU-18HJUV-DC (G) Inverter Air Conditioner",
        "price": "Rs200,300",
        "image": "images/185.png",
        "description": "The Haier HSU-18HJUV-DC (G) is another model known for its efficiency and features.Overall, the Haier HSU-18HJUV-DC (G) inverter air conditioner combines advanced technology with user-friendly features, making it a popular choice for those seeking efficient and reliable cooling solutions."
    },
    {
        "id": 3,
        "name":"Haier 18 Energycool 1.5 Ton Inverter Air Conditione",
        "price": "₨.80,000",
        "image": "images/186.png",
        "description": "The Haier 18 Energycool 1.5 Ton Inverter Air Conditioner combines efficient cooling with advanced features. It features inverter technology for energy savings and quiet operation. Designed for medium-sized rooms, it offers rapid cooling and is equipped with user-friendly functions like sleep mode and timer settings. Its sleek design complements modern interiors, making it a popular choice for residential cooling needs"
    },
    {
        "id": 4,
        "name":"Haier Dc Inverter Ac 18-HFP AA ",
        "price": "₨.165,000",
        "image": "images/187.png",
        "description": "The Haier DC Inverter AC 18-HFP AA is a high-efficiency cooling solution. It utilizes inverter technology for energy savings and quieter operation. Designed for optimal comfort in medium-sized rooms, it includes features like turbo cooling and remote Wi-Fi control capability. Its sleek design and multiple color options make it suitable for modern home environments."
    },
    {
        "id": 5,
        "name":"Dawlance Inverter AC 1.5 Ton Enercon 30",
        "price": "Rs152,999 ",
        "image": "images/188.png",
        "description": " The Dawlance Inverter AC 1.5 Ton Enercon 30 offers efficient cooling with energy-saving benefits. It features Enercon technology for optimized power consumption. Designed for medium-sized rooms, it includes rapid cooling capabilities and a user-friendly interface for convenience. Its modern design enhances room aesthetics while providing reliable cooling performance "
    },
    {
        "id": 6,
        "name":"Dawlance Excel 1.5 Ton Silver Inverter Split AC ",
        "price":"Rs137,000",
        "image": "images/189.png",
        "description": "The Dawlance Excel 1.5 Ton Silver Inverter Split AC combines sleek design with efficient cooling. It features inverter technology for energy savings and quiet operation. Suitable for medium-sized rooms, it offers rapid cooling and user-friendly functions like timer settings. Its silver finish enhances modern room aesthetics, making it a stylish choice for cooling needs. "
    },
    {
        "id": 7,
        "name":"Dawlance Air Conditioner (1 Ton)  ",
        "price": "75,000",
        "image": "images/200.png",
        "description": "  The Dawlance 1 Ton Air Conditioner provides effective cooling for small to medium-sized rooms. Known for its reliability, it offers simple operation and straightforward cooling features. Designed with energy efficiency in mind, it helps reduce electricity consumption while maintaining comfort. Its compact size and ease of installation make it a practical choice for residential use."
    },
    {
        "id": 8,
        "name":"Dawlance 1.5 Ton Inverter Air Conditioner ",
        "price":"Rs.67,000",
        "image": "images/201.png",
        "description": " The Dawlance 1.5 Ton Inverter Air Conditioner delivers efficient cooling with advanced technology. It utilizes inverter technology to save energy and ensure quiet operation. Designed for medium-sized rooms, it features rapid cooling capabilities and convenient functions like timer settings and sleep mode. Its modern design and reliable performance make it a popular choice for cooling homes effectively."
    },
    {
        "id": 9,
        "name":" PEL InverterOn Jumbo Black Wifi (H&C) Air Conditioner",
        "price": "Rs.183,900.00",
        "image": "images/202.png",
        "description": "The PEL InverterOn Jumbo Black Wifi (H&C) Air Conditioner is a powerful cooling solution with smart features. It offers both heating and cooling functions for year-round comfort. With Wi-Fi connectivity, it allows remote control via a smartphone app, while its jumbo size ensures effective cooling for larger spaces. Its sleek black design enhances room aesthetics, combining style with functionality."
    },
    {
        "id": 10,
        "name":"PEL InverterOn Jumbo DC Classic ( H&C) Air Conditioner",
        "price": "Rs.183,900.00",
        "image": "images/203.png",
        "description": "The PEL InverterOn Jumbo DC Classic (H&C) Air Conditioner provides efficient cooling and heating capabilities. It utilizes DC inverter technology for energy savings and quiet operation. Designed for larger spaces, it offers reliable performance with rapid cooling and heating functions. Its classic design and robust features make it suitable for homes and offices seeking effective climate control."
    },
    {
        "id": 11,
        "name":" PEL DC INVERTER AC INVERTERON AIRY 1TON",
        "price": "Rs.124,900",
        "image": "images/204.png",
        "description": "The PEL DC Inverter AC InverterOn Airy 1 Ton combines compact design with efficient cooling. It features DC inverter technology for energy savings and quieter operation. Ideal for small to medium-sized rooms, it offers rapid cooling and heating capabilities for year-round comfort. Its sleek appearance and user-friendly controls make it a convenient choice for residential cooling needs."
    },
    {
        "id": 12,
        "name":" Pel Jumbo DC Prime 18K T3 1.5-Ton Inverter Heat and Cool WiFi Smart AC",
        "price": "Rs.184,500",
        "image": "images/205.png",
        "description": "The PEL Jumbo DC Prime 18K T3 1.5-Ton Inverter Heat and Cool WiFi Smart AC is a versatile solution for all seasons. It features inverter technology for energy efficiency and quiet operation. With WiFi connectivity, it allows remote control via a smartphone app. Designed for medium to large rooms, it provides efficient cooling and heating with a sleek, modern design."
    },
    {
        "id": 13,
        "name":" Orient EVA-12G eComfort Series Inverter 1 Ton AC ",
        "price": "Rs138,999",
        "image": "images/206.png",
        "description": "The Orient EVA-18G Ultron eComfort Series Inverter 1.5 Ton AC provides powerful and efficient cooling. It incorporates inverter technology for energy efficiency and reduced noise levels. Ideal for medium to large rooms, it offers rapid cooling and heating capabilities. Its sleek design and smart features enhance convenience and aesthetics in any living space."
    },
    {
        "id": 14,
        "name":" Orient EVA-18G Ultron eComfort Series Inverter 1.5 Ton AC",
        "price": "179,999",
        "image": "images/207.png",
        "description": " The Orient EVA-18G Ultron eComfort Series Inverter 1.5 Ton AC provides powerful and efficient cooling. It incorporates inverter technology for energy efficiency and reduced noise levels. Ideal for medium to large rooms, it offers rapid cooling and heating capabilities. Its sleek design and smart features enhance convenience and aesthetics in any living space."
    },
    {
        "id": 15,
        "name":"Orient Divine-18G Ultron eComfort Series Inverter 1.5 Ton AC",
        "price": "Rs169,000",
        "image": "images/208.png",
        "description": "The Orient Divine-18G Ultron eComfort Series Inverter 1.5 Ton AC combines elegance with efficient cooling performance. Featuring inverter technology, it ensures energy efficiency and quiet operation. Designed for medium to large rooms, it offers rapid cooling and heating capabilities. Its stylish design and advanced features make it a sophisticated choice for modern living spaces."
    },
    {
        "id": 16,
        "name":"Orient 18G Mega T3 Ulron Series Inverter AC 1.5 Ton ",
        "price": "Rs. 169,999",
        "image": "images/209.png",
        "description": "The Orient 18G Mega T3 Ultron Series Inverter AC 1.5 Ton delivers powerful and energy-efficient cooling. It features T3 compressor technology for reliable performance even in high ambient temperatures. Ideal for medium to large rooms, it offers rapid cooling and heating functions. Its sleek design and advanced features enhance comfort and aesthetics in residential settings.."
    },
    {
        "id": 17,
        "name":" Haier 1.5 Ton Air Conditioner HSU-18HFC Inverter Heat And Cool",
        "price": "₨.142,000",
        "image": "images/210.png",
        "description": "This Haier HSU-18HF 1.5 Ton inverter air conditioner features an elegant design and a powerful turbo cooling system that will keep you cool and comfortable during the summer months. With its sleep mode, A-PAM technology, and R410/R32 coolant, this Haier 1.5 Ton HSU-18HF air conditioner is also one of the top-of-the-line models out there.It has a powerful heating feature along with an efficient compressor. The Haier HSU-18HF 1.5 Ton AC is your perfect choice. It not only heats the air in the summer but also eliminates air pollution and smog. Find the best Haier HSU-18HF 1.5 Ton Inverter AC price in Pakistan only at shandaarbuy.com!"
    },
    {
        "id": 18,
        "name":" Dawlance 1.5 Ton Inverter Air Conditioner Mega Flex 30",
        "price": " ₨178,999",
        "image": "images/211.png",
        "description": "The Dawlance 1.5 Ton Inverter Air Conditioner Mega Flex 30 is designed for optimal cooling efficiency and comfort. It features inverter technology for energy savings and quiet operation. Ideal for medium to large rooms, it offers rapid cooling and heating capabilities. Its sleek design and reliable performance make it a popular choice for residential cooling solutions."
    },
    {
        "id": 19,
        "name":" PEL Inverter AC 1.5 Ton 18K Fit  ",
        "price": " ₨. 137,000",
        "image": "images/212.png",
        "description":  "The PEL Inverter AC 1.5 Ton 18K Fit offers efficient cooling with modern features. It utilizes inverter technology for energy savings and quieter operation. Suitable for medium-sized rooms, it provides rapid cooling and heating capabilities. Its compact design and user-friendly controls make it a convenient choice for residential cooling needs."
    },
    {
        "id": 20,
        "name":" Orient Supreme DC Inverter AC - 1.5 Ton Price",
        "price": " ₨. 105,500",
        "image": "images/213.png",
        "description": "The Orient Supreme 1.5 Ton Inverter air conditioner is a premium air conditioner that features the R410 refrigerant and turbo cooling capabilities to make sure that your room stays cool. It couples the powerful features with an excellent design which ensures maximum comfort and aesthetics."
    }

];
export default products;