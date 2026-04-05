const products = [
    {
        "id": 1,
        "name":"Haier HW 105-B14959S8U1 Automatic Front Load Washing Machine (10 kg)",
        "price": "₨210,000",
        "image": "images/164.png",
        "description": "The Haier HW 105-B14959S8U1 is a front-load washing machine with a capacity of 10 kg. It's designed to be automatic, offering convenience in washing larger loads of laundry"
    },
    {
        "id": 2,
        "name":"Haier 80-1269X Automatic Washing Machine Wash and Spin (8 kg) White",
        "price": "₨63,000",
        "image": "images/165.png",
        "description": "The Haier 80-1269X is an automatic washing machine with both washing and spinning capabilities.  It has a washing capacity of 8 kg, suitable for medium-sized households.This model is designed as a top-load washing machine.It comes in a classic white color.Includes automatic washing and spinning functions, making laundry tasks easier and more efficient."
    },
    {
        "id": 3,
        "name":"Haier HWM90-1708S5 9 kg Automatic Washing Machine",
        "price": "₨76,000",
        "image": "images/166.png",
        "description": "The Haier HWM90-1708S5 is a 9 kg capacity automatic washing machine known for its efficient performance and user-friendly features. It offers multiple wash programs to suit various fabric types and cleaning needs. Its sleek design and durable build make it a reliable choice for larger households. Ideal for those seeking convenience without compromising on washing quality."
    },
    {
        "id": 4,
        "name":"Haier HW80-BP12929S3 Fully Automatic Front Load Washing Machine (8 kg) ",
        "price": "₨155,000",
        "image": "images/167.png",
        "description": "The Haier HW80-BP12929S3 is a fully automatic front-load washing machine with a capacity of 8 kg. It's designed to provide efficient and convenient washing for medium-sized loads."
    },
    {
        "id": 5,
        "name":"DAWLANCE 11KG AUTOMATIC TOP LOAD WASHING MACHINE ",
        "price": "104,000 ",
        "image": "images/168.png",
        "description": " The Dawlance 11kg automatic top-load washing machine combines generous capacity with convenience. It features multiple wash programs tailored for different fabric types and stains. Designed for ease of use with a durable build, it offers efficient washing performance ideal for larger families and heavy-duty laundry needs. "
    },
    {
        "id": 6,
        "name":"DAWLANCE FULL AUTOMATIC TOP LOAD DWT 260 ES (8 KG) ",
        "price":"130,000",
        "image": "images/169.png",
        "description": "The Dawlance DWT 260 ES is a full-automatic top-load washing machine with an 8 kg capacity. It's equipped with multiple wash programs for various fabric types and stains, ensuring efficient cleaning. Designed for ease of use and durability, it's a suitable choice for medium-sized households seeking reliable washing performance. "
    },
    {
        "id": 7,
        "name":" Dawlance DW T 270 C LVS+  12KG Automatic Washing Machine",
        "price": "Rs105,900",
        "image": "images/170.png",
        "description": " The Dawlance DW T 270 C LVS+ is a 12 kg capacity automatic washing machine known for its Large Vortex System (LVS+), which enhances washing efficiency and saves energy. It features multiple wash programs tailored for different fabrics and stains, ensuring thorough cleaning. Designed for larger loads and durability, it's an ideal choice for households with heavy-duty laundry needs. "
    },
    {
        "id": 8,
        "name":" Dawlance – Washing Machine – 9 Kg Automatic Top Load",
        "price":"Rs52,500",
        "image": "images/171.png",
        "description": " The Dawlance 9 kg automatic top-load washing machine combines a generous capacity with convenient automatic operation. It features multiple wash programs designed for various fabric types and cleaning needs. Ideal for medium to large-sized households, it offers efficient washing performance with ease of use."
    },
    {
        "id": 9,
        "name":" PEL Washing Machine P-1250 ",
        "price": "Rs.70,900",
        "image": "images/172.png",
        "description": "The PEL Washing Machine P-1250 is a top-load model known for its efficiency and convenience:Typically around 8 to 9 kg, suitable for medium-sized households. Offers multiple wash programs for different fabric types.User-friendly with a durable builde: Provides reliable cleaning performance for everyday laundry needs."
    },
    {
        "id": 10,
        "name":"PEL AUTOMATIC TOP LOAD WASHING MACHINE Model PAWM-1100 GREY METALLIC",
        "price": "Rs.92,000",
        "image": "images/173.png",
        "description": "Generous capacity suitable for medium to large loads. Includes multiple wash programs for versatile cleaning options. Modern grey metallic finish adds aesthetic appeal to any laundry space. Offers efficient washing and durability for everyday use"
    },
    {
        "id": 11,
        "name":" PEL PWMS 1250 Washing Machine (12.5kg) ",
        "price": "Rs.30,900",
        "image": "images/174.png",
        "description": "The PEL PWMS 1250 Washing Machine, with a capacity of 12.5 kg, is designed for heavy-duty laundry tasks:Large capacity suitable for handling bulky loads or larger families' laundry needs. Equipped with multiple wash programs for various fabric types and stains. Designed to provide efficient washing performance while conserving energy. Built to withstand frequent use and offer reliable performance over time."
    },
    {
        "id": 12,
        "name":" Pel Top Load 9 KG PAWM 900 Automatic Washing Machine",
        "price": "Rs.87,500",
        "image": "images/175.png",
        "description": "The Pel PAWM 900 is a top-load automatic washing machine with a 9 kg capacity: Ideal for medium-sized households, accommodating larger loads. Offers convenience with automatic washing programs. Compact and efficient, suitable for various laundry spaces. Provides reliable cleaning performance with multiple wash settings."
    },
    {
        "id": 13,
        "name":"Orient Twister 1050 9 Kg Metallic Silver Washing Machine ",
        "price": "Rs57,500",
        "image": "images/176.png",
        "description": "Suitable for medium to large-sized loads, accommodating various laundry needs.Features a sleek metallic silver exterior, adding a modern touch to any laundry space. Offers multiple wash programs for different fabric types and stains, ensuring thorough cleaning. Designed to deliver reliable washing performance with energy efficiency in mind."
    },
    {
        "id": 14,
        "name":" Washing Machine ",
        "price": "55,000",
        "image": "images/177.png",
        "description": "Suitable for medium to large-sized loads, accommodating various laundry needs.Features a sleek metallic silver exterior, adding a modern touch to any laundry space. Offers multiple wash programs for different fabric types and stains, ensuring thorough cleaning. Designed to deliver reliable washing performance with energy efficiency in mind. "
    },
    {
        "id": 15,
        "name":"Orient Washing Machine Twister 9050 - 8Kg",
        "price": "39,990",
        "image": "images/178.png",
        "description":" Suitable for medium to large-sized loads, accommodating various laundry needs.Features a sleek metallic silver exterior, adding a modern touch to any laundry space. Offers multiple wash programs for different fabric types and stains, ensuring thorough cleaning. Designed to deliver reliable washing performance with energy efficiency in mind."
    },
    {
        "id": 16,
        "name":"Edison Automatic Top Load Washing Machine Silver Glass Door 9kg ",
        "price": "Rs. 59,999",
        "image": "images/179.png",
        "description": "Suitable for medium to large-sized loads, accommodating various laundry needs.Features a sleek metallic silver exterior, adding a modern touch to any laundry space. Offers multiple wash programs for different fabric types and stains, ensuring thorough cleaning. Designed to deliver reliable washing performance with energy efficiency in mind."
    },
    {
        "id": 17,
        "name":" Haier HWM 90-1789 Automatic Washing Machine (9 kg) BG Gre",
        "price": "₨80,000",
        "image": "images/180.png",
        "description": " The Haier 80-1269X is an automatic washing machine with both washing and spinning capabilities.  It has a washing capacity of 8 kg, suitable for medium-sized households.This model is designed as a top-load washing machine.It comes in a classic white color.Includes automatic washing and spinning functions, making laundry tasks easier and more efficient."
    },
    {
        "id": 18,
        "name":"DAWLANCE Automatic Washing Machine DWT 260",
        "price": " ₨44,000.",
        "image": "images/181.png",
        "description": "he Dawlance 11kg automatic top-load washing machine combines generous capacity with convenience. It features multiple wash programs tailored for different fabric types and stains. Designed for ease of use with a durable build, it offers efficient washing performance ideal for larger families and heavy-duty laundry needs."
    },
    {
        "id": 19,
        "name":" Dawlance Single Tub Washing Machine 8KG - Model DW 6100-W",
        "price": " ₨. 33,999",
        "image": "images/182.png",
        "description": " The Pel PAWM 900 is a top-load automatic washing machine with a 9 kg capacity: Ideal for medium-sized households, accommodating larger loads. Offers convenience with automatic washing programs. Compact and efficient, suitable for various laundry spaces. Provides reliable cleaning performance with multiple wash settings."
    },
    {
        "id": 20,
        "name":" Dawlance 8550 CB FL Twin Tub Washing Machine",
        "price": " ₨. 29,999",
        "image": "images/183.png",
        "description": "Suitable for medium to large-sized loads, accommodating various laundry needs.Features a sleek metallic silver exterior, adding a modern touch to any laundry space. Offers multiple wash programs for different fabric types and stains, ensuring thorough cleaning. Designed to deliver reliable washing performance with energy efficiency in mind."
    }

];
export default products;