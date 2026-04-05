const products = [
    {
        "id": 1,
        "name":"Haier Refrigerator HRF-306 TPR",
        "price": "₨60,500.00",
        "image": "images/213.png",
        "description": " The Haier Refrigerator HRF-306 TPR is a compact and efficient refrigerator designed for modern living spaces. It features a sleek design with a total capacity of X liters, offering ample storage for groceries and beverages. Equipped with advanced cooling technology, it ensures uniform cooling throughout, keeping your food fresh for longer. Its energy-efficient operation makes it an ideal choice for households looking to save on electricity bills"
    },
    {
        "id": 2,
        "name":"Haier Refrigerator HRF-306 EBS/EBD",
        "price": "Rs.79,000.00",
        "image": "images/214.png",
        "description": "The Haier Refrigerator HRF-306 EBS/EBD combines style with functionality, featuring a spacious interior with X liters capacity. Its elegant design complements any kitchen decor while offering ample storage for all your food items. Equipped with innovative cooling technology, it maintains optimal temperature levels for freshness. The refrigerator also includes energy-saving features, making it an efficient choice for environmentally conscious consumers."
    },
    {
        "id": 3,
        "name":"Haier Refrigerator HRF-622IBG INVERTER",
        "price": "₨.325,000.00",
        "image": "images/215.png",
        "description": "The Haier Refrigerator HRF-622IBG with INVERTER technology offers a spacious and energy-efficient cooling solution for your kitchen. With a capacity of X liters, it provides ample space for storing various groceries and beverages. Its INVERTER compressor ensures precise temperature control and reduced energy consumption, making it environmentally friendly and cost-effective. The refrigerator's sleek design and advanced features make it a stylish addition to any modern home."
    },
    {
        "id": 4,
        "name":" Haier Refrigerator HRF-622ICG INVERTER",
        "price": "₨.325,000.00",
        "image": "images/216.png",
        "description": "The Haier Refrigerator HRF-622IG with INVERTER technology offers a spacious and energy-efficient cooling solution for your kitchen. With a capacity of X liters, it provides ample space for storing various groceries and beverages. Its INVERTER compressor ensures precise temperature control and reduced energy consumption, making it environmentally friendly and cost-effective. The refrigerator's sleek design and advanced features make it a stylish addition to any modern home."
    },
    {
        "id": 5,
        "name":"Dawlance Refrigerator 9191WB Avante Plus ",
        "price": "Rs1.14,99",
        "image": "images/217.png",
        "description": " The Dawlance Refrigerator 9191WB Avante Plus is a premium refrigerator known for its spacious design and advanced cooling technology. With a generous capacity of X liters, it provides ample storage for all your food items. The Avante Plus series is equipped with features like rapid cooling and energy efficiency, ensuring your food stays fresh while minimizing electricity consumption. Its sleek exterior design adds a touch of elegance to your kitchen, making it a popular choice among households looking for reliability and style. "
    },
    {
        "id": 6,
        "name":"Dawlance Refrigerator Inverter 9178 Avante Ruby Red ",
        "price":"Rs107,000",
        "image": "images/218.png",
        "description": " The Dawlance Refrigerator Inverter 9178 Avante in Ruby Red combines style with efficiency. With a capacity of X liters, it offers ample storage space for your groceries. Featuring inverter technology, it ensures precise temperature control and energy efficiency, reducing electricity costs. The refrigerator's sleek Ruby Red finish adds a modern touch to any kitchen, making it both a functional and aesthetically pleasing choice for homes seeking performance and design."
    },
    {
        "id": 7,
        "name":"Dawlance 91999LF Avante+ IoT | 20 CFT Inverter Refrigerator  ",
        "price": "95,000",
        "image": "images/219.png",
        "description": " The Dawlance 91999LF Avante+ IoT | 20 CFT Inverter Refrigerator is a cutting-edge appliance that combines smart features with energy efficiency. With a spacious 20 cubic feet capacity, it offers ample storage for all your food items. The IoT capability allows you to control and monitor the refrigerator remotely via your smartphone, enhancing convenience. "
    },
    {
        "id": 8,
        "name":" Dawlance 9140WB Chrome Pro Refrigerator ",
        "price":"Rs.67,000",
        "image": "images/220.png",
        "description": "The Dawlance 9140WB Chrome Pro Refrigerator is a robust appliance known for its reliability and stylish design. With a spacious capacity of X liters, it provides ample storage for your groceries. The Chrome Pro series is equipped with advanced cooling technology, ensuring efficient and uniform cooling throughout the refrigerator. Its sleek chrome finish adds a touch of elegance to any kitchen, making it a popular choice for households seeking both performance and aesthetic appeal. "
    },
    {
        "id": 9,
        "name":" PEL Life Pro Refrigerator",
        "price": "Rs.70,900",
        "image": "images/221.png",
        "description": "The PEL Life Pro Refrigerator is designed to cater to modern lifestyles with efficiency and style. Featuring a generous capacity suitable for various storage needs, it ensures ample space for groceries and beverages. Known for its reliable cooling performance, this refrigerator incorporates advanced technology to maintain optimal temperatures while minimizing energy consumption."
    },
    {
        "id": 10,
        "name":"Pel Prinvo 22250 Inverter on Curved Glass Door Refrigerator |",
        "price": "Rs.100,000",
        "image": "images/222.png",
        "description": "The PEL Prinvo 22250 Inverter with Curved Glass Door Refrigerator combines elegance with functionality. Its curved glass door adds a stylish touch to any kitchen while showcasing your food items. Equipped with inverter technology, it ensures efficient cooling and reduced energy consumption."
    },
    {
        "id": 11,
        "name":" PEL REFRIGRATOR PR-6450 (INV) VCM",
        "price": "Rs.97,000",
        "image": "images/223.png",
        "description": "The PEL Refrigerator PR-6450 (INV) VCM combines innovation with style. Featuring inverter technology, it offers efficient cooling and energy savings. With a sleek VCM (Vinyl Coated Metal) finish, it adds a touch of sophistication to your kitchen decor. This model provides ample storage capacity and reliable performance, making it a practical choice for modern homes seeking both functionality and aesthetic appeal."
    },
    {
        "id": 12,
        "name":" Pel Refrigerator PRGD-6450 Prism Glass Door – 16Cft",
        "price": "Rs.87,500",
        "image": "images/224.png",
        "description": "The Pel Refrigerator PRGD-6450 with Prism Glass Door offers a blend of modern style and functionality. With a capacity of 16 cubic feet, it provides ample storage space for your groceries. The prism glass door not only enhances the refrigerator's aesthetics but also adds a contemporary touch to your kitchen. This model features efficient cooling technology to keep your food fresh and includes practical features for convenient storage organization. Ideal for households looking to upgrade their kitchen with a stylish and efficient refrigerator option. "
    },
    {
        "id": 13,
        "name":" Orient Refrigerator LVO VCM 380 Liter ",
        "price": "Rs101,000",
        "image": "images/225.png",
        "description": "The Orient Refrigerator LVO VCM with a capacity of 380 liters is designed for both efficiency and elegance. Its VCM (Vinyl Coated Metal) finish not only enhances durability but also adds a sleek, modern look to your kitchen. Featuring advanced cooling technology, it ensures uniform cooling across all compartments, keeping your food fresh for longer."
    },
    {
        "id": 14,
        "name":" Orient Energy Efficient Series Crystal 410",
        "price": "95,000",
        "image": "images/226.png",
        "description": "The Orient Energy Efficient Series Crystal 410 is a high-capacity refrigerator designed to save energy while offering ample storage space. With its sleek design and Crystal finish, it adds a touch of sophistication to any kitchen. This model features advanced cooling technology for efficient and uniform cooling, ensuring your food stays fresh for longer periods. "
    },
    {
        "id": 15,
        "name":" Orient Glass Door Refrigerator Diamond 500 Liters 16 Cubic Feet",
        "price": "Rs121,000",
        "image": "images/227.png",
        "description": "The Orient Glass Door Refrigerator Diamond with 500 liters (16 cubic feet) capacity combines spacious storage with a stylish design. Featuring a glass door that showcases your food items, it adds a modern aesthetic to your kitchen. This refrigerator is equipped with advanced cooling technology for efficient and uniform cooling, maintaining freshness effectively."
    },
    {
        "id": 16,
        "name":"Orient Refrigerator Diamond 500 Liters ",
        "price": "Rs. 89,999",
        "image": "images/228.png",
        "description": "The Orient Refrigerator Diamond with 500 liters capacity combines generous storage with reliable performance. Designed for modern homes, it features advanced cooling technology to ensure efficient and uniform cooling throughout the refrigerator. Its spacious interior accommodates a variety of groceries and beverages, making it ideal for large families or avid cooks. With a sleek design and practical features, this model offers both functionality and style to enhance any kitchen space."
    },
    {
        "id": 17,
        "name":"HAIER E-STAR REFRIGERATOR NON INVERTER Model HRF-216EBS",
        "price": "₨.63,900",
        "image": "images/229.png",
        "description": " "
    },
    {
        "id": 18,
        "name":" DAWLANCE REFRIGERATOR WB CHROME 9191 FH ",
        "price": " ₨74,000.00",
        "image": "images/230.png",
        "description": "Vitamin Fresh Technology, 5 Way cooling + 30% faster cooling, Optimised Fan with Deodorising Filter, Side Illumination LED, Low voltage technology, A+ Energy Rating, 438 LTR / 15.4 CFT, 2020 Latest series, Direct Cool / R600A Gas, Unit Dimension (W’D’H): 660x653x1628 mm. Cooling type Direct Cool, Refrigerant R600A, Handle Type Built-In, Shelf Type Wire Shelves, Ice Tray Yes, Shelf Type Wire Shelves, Egg Tray Yes, Capacity 439"
    },
    {
        "id": 19,
        "name":"PEL Prinvo-6350 Inverter on Curved Glass Door Refrigerator",
        "price": " ₨. 107,000",
        "image": "images/231.png",
        "description": " PEL contributes in your lives every day, by providing you not just appliances for a better lifestyle, but with Power products like transformers, switch gears and energy meters. We are the pioneers of electrical manufacturing in Pakistan and we are here to make a difference in your lives whether it is through taking care of your home, your lifestyle, making your day to day activities easier or by helping you save energy."
    },
    {
        "id": 20,
        "name":" Flare GD 380 Ltr Radiant Lilac",
        "price": " ₨. 98,300",
        "image": "images/232.png",
        "description": "Orient Flare Series Glass Door Inverter Refrigerator are elegantly designed to take the aesthetic value of your interior up by a notch.It keeps food super fresh and ensures top performance with built-in features such as Humidity Controller, Direct Cool Technology and Powerful Roll Bond Evaporator that guarantees  40% fastest cooling, making Ice in just 18 mins."
    }

];
export default products;