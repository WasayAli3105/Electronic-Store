const products = [
    {
        "id": 1,
        "name":"HMN-32100EGB Haier Microwave Oven 32Ltr Black",
        "price": "Rs39,999 ",
        "image": "images/144.png",
        "description": " The Haier HMN-32100EGB is a stylish 32-liter black microwave oven designed for versatile cooking. It features multiple power levels, auto-cook menus, and a programmable timer for precise cooking control. The digital display and sleek design make it a modern addition to any kitchen. Safety features include a child lock and overheat protection."
    },
    {
        "id": 2,
        "name":"Haier HGL-30100 Solo Microwave Oven 30L",
        "price": "Rs.45,999",
        "image": "images/145.png",
        "description": "The Haier HGL-30100 is a 30-liter solo microwave oven, ideal for basic microwave cooking needs. This model features multiple power levels, a digital control panel, and a sleek design for modern kitchens. It is equipped with essential functions such as reheating, defrosting, and cooking various dishes efficiently. The microwave's compact size and user-friendly interface make it a practical choice for everyday use."
    },
    {
        "id": 3,
        "name":"Haier Microwave Oven HMN-20MXP5",
        "price": "₨.23,000",
        "image": "images/146.png",
        "description": "The Haier HMN-20MXP5 is a compact 20-liter microwave oven designed for efficient and convenient cooking. It features multiple power levels to cater to various cooking needs, and a user-friendly interface for easy operation. The microwave includes essential functions like reheating, defrosting, and cooking, making it ideal for everyday use. Its compact size and modern design make it a suitable addition to any kitchen."
    },
    {
        "id": 4,
        "name":" HMN-25500ESI Conventional Air Fryer Oven 25L",
        "price": "Rs. 58,999",
        "image": "images/147.png",
        "description": "The Haier HMN-25500ESI is a versatile 25-liter conventional air fryer oven, ideal for small to medium-sized families. It combines air frying, baking, grilling, and roasting in one appliance, offering healthier cooking with little to no oil. The sleek stainless steel design features adjustable temperature settings and a transparent door for easy monitoring. Perfect for enjoying crispy and delicious meals with convenience and efficiency."
    },
    {
        "id": 5,
        "name":"DW 374 Champagne Heating Microwave Oven ",
        "price": "Rs 31,800.00 ",
        "image": "images/148.png",
        "description": " The DW 374 Champagne Heating Microwave Oven combines style and functionality with its elegant champagne finish. This microwave offers versatile heating options, including defrosting, reheating, and cooking various dishes. It features multiple power levels for precise cooking control and a digital display for easy operation. Its sleek design and user-friendly interface make it a practical and attractive addition to any kitchen."
    },
    {
        "id": 6,
        "name":"DW 210 S Heating Microwave Oven ",
        "price":"Rs 19,998.00 ",
        "image": "images/149.png",
        "description": "The DW 210 S Heating Microwave Oven is a versatile and efficient appliance designed for everyday cooking needs. It features multiple power levels for precise control and offers functions such as reheating, defrosting, and cooking. The compact and sleek design ensures it fits well in any kitchen space, while the user-friendly interface and digital display make operation simple and convenient. Perfect for quick and easy meal preparation."
    },
    {
        "id": 7,
        "name":"DW 115 CHZP Baking Microwave Oven ",
        "price": "Rs 44,999.00 ",
        "image": "images/150.png",
        "description": " The DW 115 CHZP Baking Microwave Oven is a multifunctional appliance designed for versatile cooking. It combines microwave and baking functions, allowing you to bake, reheat, and defrost with ease. The oven features multiple power levels for precise cooking control and a digital display for easy operation. Its compact and sleek design fits well in any kitchen, making it a practical choice for various cooking needs."
    },
    {
        "id": 8,
        "name":" MWO DW 560 Inverter Air Fryer Microwave Oven",
        "price":"Rs.76,101.00",
        "image": "images/151.png",
        "description": "The MWO DW 560 Inverter Air Fryer Microwave Oven is a high-performance appliance that combines microwave, air fryer, and inverter technology for versatile cooking. Its inverter technology ensures even and efficient cooking, while the air fryer function allows you to prepare crispy and healthy meals with little to no oil. The microwave features multiple power levels, a digital display, and a user-friendly interface. With its sleek design and advanced capabilities, it is a perfect addition to any modern kitchen. "
    },
    {
        "id": 9,
        "name":"Pel PMO-38BG Glamour Microwave Oven",
        "price": "Rs36,500 ",
        "image": "images/152.png",
        "description": "The Pel PMO-38BG Glamour Microwave Oven is a model of microwave oven manufactured by Pel, a company known for its home appliances. It's designed to provide basic microwave cooking functions with a stylish design, often featuring multiple power levels, a timer, and various cooking presets for convenience. "
    },
    {
        "id": 10,
        "name":"PEL PMO Desire Series Microwave Oven 26 Liter |",
        "price": "Rs32,499 ",
        "image": "images/153.png",
        "description": "The PEL PMO Desire Series Microwave Oven, with a capacity of 26 liters, is a model designed to offer versatile cooking options with a mid-sized capacity suitable for most household needs. It typically features multiple power levels, cooking presets for different types of food, a digital control panel for easy operation, and a timer function."
    },
    {
        "id": 11,
        "name":" PEL Glamour Microwave Oven 30 Ltr",
        "price": "Rs.37,000",
        "image": "images/154.png",
        "description": "The PEL Glamour Microwave Oven with a capacity of 30 liters is a spacious model designed to cater to larger cooking needs. It likely includes features such as multiple power levels, cooking presets for different dishes, a digital display for easy monitoring, and a timer function for precise cooking control. This size is suitable for families or individuals who frequently cook or reheat larger quantities of food."
    },
    {
        "id": 12,
        "name":" PEL Silver Line Microwave Oven Manual",
        "price": "Rs.25,900.00",
        "image": "images/155.png",
        "description": "The manual typically starts with an introduction to the microwave oven, including safety precautions and guidelines for safe use.It outlines the features of the microwave oven, such as its capacity (e.g., liters), power output, dimensions, and weight.The manual explains the functions of the control panel, including buttons for power levels, cooking presets, timer settings, and defrost options. "
    },
    {
        "id": 13,
        "name":" Panini 20M Solo White ",
        "price": "Rs.22,000",
        "image": "images/156.png",
        "description": "The PEL Panini 20M Solo White microwave oven is a compact and versatile kitchen appliance designed to meet everyday cooking needs.Typically around 20 liters, suitable for smaller to medium-sized meals and dishes.Offers multiple power settings to adjust cooking intensity according to different food types. "
    },
    {
        "id": 14,
        "name":" Macaroni 20M Solo B",
        "price": "22,000",
        "image": "images/157.png",
        "description": " Macaroni 20M Solo B as it doesn't correspond to a known model or product type, especially in the context of microwave ovekitchen appliances. Around 20 liters, suitable for smaller to medium-sized cooking tasks.Multiple power settings to adjust cooking intensity for different types of food"
    },
    {
        "id": 15,
        "name":" Roast 23D Solo Black",
        "price": "Rs.32,500",
        "image": "images/158.png",
        "description": "The PEL Roast 23D Solo Black microwave oven features a 23-liter capacity, suitable for medium-sized meals. It includes multiple power levels and a digital control panel for easy operation. This sleek black model offers efficient defrosting and standard microwave cooking modes, complemented by a timer for precise cooking control."
    },
    {
        "id": 16,
        "name": "Macaroni 20M Solo White",
        "price": "Rs. 22,000",
        "image": "images/159.png",
        "description": "Macaroni 20M Solo B as it doesn't correspond to a known model or product type, especially in the context of microwave ovekitchen appliances. Around 20 liters, suitable for smaller to medium-sized cooking tasks.Multiple power settings to adjust cooking intensity for different types of food."
    },
    {
        "id": 17,
        "name":"Haier HGL-25MXP8",
        "price": "Rs.30,999",
        "image": "images/160.png",
        "description": "Solo Microwave Oven 25L With Official Warranty."
    },
    {
        "id": 18,
        "name":"PEL Chef Digital",
        "price": "Rs.34,900",
        "image": "images/161.png",
        "description": "Rated Input Power (Microwave)1400 W Rated Output Power (Microwave)900."
    },
    {
        "id": 19,
        "name":"Kabab 20D Solo Black",
        "price": "Rs.27,500",
        "image": "images/162.png",
        "description": "With our Kabab 20M Solo, we have perfected the art of combining power efficiency.."
    },
    {
        "id": 20,
        "name":"Muffin 30D Grill Black",
        "price": "Rs.43,700",
        "image": "images/163.png",
        "description": "With our Muffin 30D Grill Black, we have perfected the art of combining power.."
    }

];
export default products;