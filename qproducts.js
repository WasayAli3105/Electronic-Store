const products = [
    {
        "id": 1,
        "name":" PEL Life Pro Refrigerator ",
        "price": " Rs.70,900.00 ",
        "image": "images/102.png",
        "description": "Food friendly cabinet that gives you ample space.Purest Copper Inside Condenser prevents rust and enhances cooling performance.An advanced feature that makes ice instantly in just 25 minutes. Rapid cooling designed especially for Pakistan's environment."
    },
    {
        "id": 2,
        "name":"PEL Glass Door Refrigerator Room Series",
        "price": "55,900.00",
        "image": "images/103.png",
        "description": "Food friendly cabinet that gives you ample space.Purest Copper Inside Condenser prevents rust and enhances cooling performance.An advanced feature that makes ice instantly in just 25 minutes. Rapid cooling designed especially for Pakistan's environment."
    },
    {
        "id": 3,
        "name":" PEL InverterOn Refrigerator PRINVO VCM",
        "price": "100,900.00",
        "image": "images/104.png",
        "description": "Food friendly cabinet that gives you ample space.Purest Copper Inside Condenser prevents rust and enhances cooling performance.An advanced feature that makes ice instantly in just 25 minutes. Rapid cooling designed especially for Pakistan's environment. "
    },
    {
        "id": 4,
        "name":"PEL Glass Door Refrigerator Room Series ",
        "price": "Rs.55,900.00",
        "image": "images/105.png",
        "description": "Food friendly cabinet that gives you ample space.Purest Copper Inside Condenser prevents rust and enhances cooling performance.An advanced feature that makes ice instantly in just 25 minutes. Rapid cooling designed especially for Pakistan's environment."
    },
    {
        "id": 5,
        "name":" PEL InverterOn Jumbo Black Wifi ) Air Conditioner ",
        "price":"Rs.183,900.00 ",
        "image": "images/106.png",
        "description": "This advanced technology feature guarantees optimum performance and high energy savings.It starts the Air Conditioner eve no 140Volts that giving an excellent energy saving experience.Outstanding Efficiency & Electricity Savings. It has a 4D Air Flow for homogeneous cooling across the room."
    },
    {
        "id": 6,
        "name":" PEL InverterOn Turbo DC Ultimate T3  Air Conditioner",
        "price":"Rs 176,900.00 ",
        "image": "images/107.png",
        "description": "This advanced technology feature guarantees optimum performance and high energy savings.It starts the Air Conditioner even on 155 Volts that gives excellent energy saving experience.Outstanding Efficiency & Electricity Savings.Flexible Electricity Consumption.3 Stages Air Filtration.Automatically Cleans the AC & Eliminates Moisture. "
    },
    {
        "id": 7,
        "name":" PEL PINV-12K Airy Series ",
        "price": "Rs 124,999 ",
        "image": "images/108.png",
        "description": "This advanced technology feature guarantees optimum performance and high energy savings.It starts the Air Conditioner even on 155 Volts that gives excellent energy saving experience.Outstanding Efficiency & Electricity Savings.Flexible Electricity Consumption.3 Stages Air Filtration.Automatically Cleans the AC & Eliminates Moisture. "
    },
    {
        "id": 8,
        "name":"PEL PINV-12K Jumbo DC Classic Series",
        "price": "Rs 146,499. ",
        "image": "images/109.png",
        "description": "This advanced technology feature guarantees optimum performance and high energy savings.It starts the Air Conditioner even on 155 Volts that gives excellent energy saving experience.Outstanding Efficiency & Electricity Savings.Flexible Electricity Consumption.3 Stages Air Filtration.Automatically Cleans the AC & Eliminates Moisture.  "
    },
    {
        "id": 9,
        "name":" PEL Convection Microwave Oven ",
        "price": "Rs.43,900.00 ",
        "image": "images/110.png",
        "description": "A technology allowing uniform heating that maintains the nutritional value and assures microbiological safety.Enables you to grill meat and vegetables which works just like any other rotisserie giving you perfect cooking in less time.A portable pizza cooking surface that makes preparing pizza in the microwave easy and absolutely hassle free."
    },
    {
        "id": 10,
        "name":" PEL Microwave Oven PMO 38 BG GLAMOUR",
        "price":"Rs.41,999.00",
        "image": "images/111.png",
        "description": "Capacitive buttons that ensures convenience and ease of use.Gives convenience of setting power levels for variety of cooking.Enables you to grill meat and vegetables which works just like any other rotisserie giving you perfect cooking in less time.Unique censor technology allows you to select appropriate weight, temperature settings and time to cook your required meal.Automatically adjusts weights and power level for speedy defrosting.The only Microwave in Pakistan which offers 2 years magnetron warranty."
    },
    {
        "id": 11,
        "name":"PEL PMO Desire Series Microwave Oven 26 Liter ",
        "price": "Rs.32,499",
        "image": "images/112.png",
        "description": "Capacitive buttons that ensures convenience and ease of use.Gives convenience of setting power levels for variety of cooking.Enables you to grill meat and vegetables which works just like any other rotisserie giving you perfect cooking in less time.Unique censor technology allows you to select appropriate weight, temperature settings and time to cook your required meal.Automatically adjusts weights and power level for speedy defrosting.The only Microwave in Pakistan which offers 2 years magnetron warranty."
    },
    {
        "id": 12,
        "name":"PEL Glamour Microwave Oven 30 Ltr",
        "price": "Rs.37,900.00",
        "image": "images/113.png",
        "description": "Capacitive buttons that ensures convenience and ease of use.Gives convenience of setting power levels for variety of cooking.Enables you to grill meat and vegetables which works just like any other rotisserie giving you perfect cooking in less time.Unique censor technology allows you to select appropriate weight, temperature settings and time to cook your required meal.Automatically adjusts weights and power level for speedy defrosting.The only Microwave in Pakistan which offers 2 years magnetron warranty." },
    {
        "id": 13,
        "name":" PEL Washing Machine P-1250",
        "price": "₨26,999",
        "image": "images/114.png",
        "description": "Rust proof body gives strength to machine.Reduces the direct load on motor, eventually increases its life.Wider pulsator removes stains more efficiently.Prevents rats from entering, which ensures wiring is not damaged. "
    },
    {
        "id": 14,
        "name":" PEL Washing Machine Semi Auto",
        "price": "Rs.28,500.00",
        "image": "images/115.png",
        "description": "Rust proof body gives strength to machine.Reduces the direct load on motor, eventually increases its life.Wider pulsator removes stains more efficiently.Prevents rats from entering, which ensures wiring is not damaged."
    },
    
    {
        "id": 16,
        "name":"PEL Smart Washing Machine Fully Auto",
        "price": "Rs.77,500.00",
        "image": "images/117.png",
        "description": "Exclusively designed for Pakistani consumers.The wash continues from where it was stopped.Automatically calculates and starts washing cycles.Automatically detects optimal washing for clothes."
    },
    
    {
        "id": 18,
        "name":"PEL UHD 50 Smart Google Bezel-less (4K) LED Tv ",
        "price": " Rs.115,900.00",
        "image": "images/119.png",
        "description": "you can hook up a flash drive, pen drive, or an external hard drive and watch movies, play songs, or even read books.Immerse yourself in a surreal experience amped by Dolby Digital 3.1 integration.See what the whole world is watching from the most popular Entertainment shows and TV Shows.Connect your computer to the PEL BEZELLESS TV and enjoy a whole new computing experience.The ultimate connectivity for all your home entertainment needs, HDMI 2.0 enables ultra-smooth rendering for all your high quality videos and audio content."
    },
    {
        "id": 19,
        "name":" PEL HD 32 Smart Google Bezel-less LED TV",
        "price": "Rs.53,900.00",
        "image": "images/120.png",
        "description": "you can hook up a flash drive, pen drive, or an external hard drive and watch movies, play songs, or even read books.Immerse yourself in a surreal experience amped by Dolby Digital 3.1 integration.See what the whole world is watching from the most popular Entertainment shows and TV Shows.Connect your computer to the PEL BEZELLESS TV and enjoy a whole new computing experience. The ultimate connectivity for all your home entertainment needs, HDMI 2.0 enables ultra-smooth rendering for all your high quality videos and audio content."
    },
    {
        "id": 20,
        "name":"PEL UHD 55 Smart Google Bezel-less (4K) LED TV ",
        "price": "Rs.135,900.00",
        "image": "images/121.png",
        "description": "you can hook up a flash drive, pen drive, or an external hard drive and watch movies, play songs, or even read books.Immerse yourself in a surreal experience amped by Dolby Digital 3.1 integration.See what the whole world is watching from the most popular Entertainment shows and TV Shows.Connect your computer to the PEL BEZELLESS TV and enjoy a whole new computing experience.The ultimate connectivity for all your home entertainment needs, HDMI 2.0 enables ultra-smooth rendering for all your high quality videos and audio content."
    }

];
export default products;