const products = [
    {
        "id": 1,
        "name":" LD01 LOUNGE CHAIR",
        "price": 200,
        "image": "images/35.png",
        "description": "Orient LVO Series Metallic Door Refrigerators come in classic and elegant colors that hold the potential of uplifting your interior. LVO (Low Voltage Operation) revolutionary technology helps refrigerator to perform on Low Voltages automatically leaving no use for a stabilizer."
    },
    {
        "id": 2,
        "name":" Marvel GD INV 380 Ltr Blaze Grey",
        "price": "Rs.105,300",
        "image": "images/36.png",
        "description": "Orient Marvel Series Glass Door Inverter Refrigerators can light up any kitchen with their exquisite designs and eye catching color schemes. Top performance and aesthetic value make them the most desired refrigerators in the market ."
    },
    {
        "id": 3,
        "name":" Marvel GD 225 Ltr Blaze Red",
        "price": "Rs.75,300",
        "image": "images/37.png",
        "description": "Orient Marvel Series Glass Door Refrigerators can light up any kitchen with their exquisite designs and eye catching color schemes. Top performance and aesthetic value make them the most desired refrigerators in the market. "
    },
    {
        "id": 4,
        "name":" LVO VCM 380 Ltr Vine Red",
        "price": "Rs.90,800",
        "image": "images/38.png",
        "description": "Orient LVO Series Metallic Door Refrigerators come in classic and elegant colors that hold the potential of uplifting your interior. LVO (Low Voltage Operation) revolutionary technology helps refrigerator to perform on Low Voltages automatically leaving no use for a stabilizer."
    },
    {
        "id": 5,
        "name":" 1 Ton Ultron EVA eC",
        "price": "Rs.141,000",
        "image": "images/39.png",
        "description": "Orient T3 IoT DC Inverter EVA Series Air-conditioners are equipped with T3 Tropicalized Inverter technology to ensure best cooling performance even at an ambient temperature of 60 degree celsius"
    },
    {
        "id": 6,
        "name":" 1 Ton SUPREME DC Inverter",
        "price":"Rs.119,000",
        "image": "images/40.png",
        "description": "Need an air conditioner that cools quicker, faster and wider than ever before? Orient presents the all-new Supreme Heat and Cool DC Inverter AC whose exceptional design is tailor-made for greater efficiency and dynamic cooling. "
    },
    {
        "id": 7,
        "name":" 1 Ton ORBIT DC Inverter",
        "price": "Rs.118,000",
        "image": "images/41.png",
        "description": "Orbit is a monster from the Planet Series. With Catechin filters, instant cooling & heating are features of the air conditioner. "
    },
    {
        "id": 8,
        "name":" 1 Ton Ultron DIVINE eComfort DC Inverter",
        "price": "Rs.139,000",
        "image": "images/42.png",
        "description": "Get the fastest and most efficient cooling of your life with Divine Inverter air conditioner that is energy efficient to an extreme and offers 4D Air Throw and an indoor unit that is bigger than most! The Gold Fin evaporator and condenser ensure rust-free operation for the longest time possible and smart features like WIFI and others contribute to the smart lifestyle we all crave!  "
    },
    {
        "id": 9,
        "name":" Pizza 34D Grill Black",
        "price": "Rs.48,000",
        "image": "images/43.png",
        "description": "With our Pizza 34D Grill Black, we have perfected the art of combining power efficiency with microwave cooking. Pizza is just great with the usual microwave features but saves up on energy to keep a tight check on your electricity bills."
    },
    {
        "id": 10,
        "name":" Roast 23D Solo Black",
        "price":"Rs.32,500",
        "image": "images/44.png",
        "description": "With our Roast 23D Solo Black We Have perfected the art of combining power efficiency with microwave cooking. Roast is just great with the usual microwave features but saves up on energy to keep a tight check on your electricity bills."
    },
    {
        "id": 11,
        "name":" Panini 20M Solo Black",
        "price": "Rs.22,000",
        "image": "images/45.png",
        "description": "With our Panini 20M Solo, we have perfected the art of combining power efficiency with microwave cooking. Panini is just great with the usual microwave features but saves up on energy to keep a tight check on your electricity bills."
    },
    {
        "id": 12,
        "name":" Macaroni 20M Solo W...",
        "price": "Rs.22,000",
        "image": "images/46.png",
        "description": "With our Macaroni 20M Solo White, we have perfected the art of combining power efficiency with microwave cooking. Macaroni is just great with the usual microwave features but saves up on energy to keep a tight check on your electricity bills."
    },
    {
        "id": 13,
        "name":" Twister 9050 8 Kg Metallic Grey Washing Machine",
        "price": "Rs.46,393",
        "image": "images/47.png",
        "description": "Orient Twister Series washing machine is loaded with useful features and heavy-duty specifications. This fully automatic washing machine offers a one-touch operation for super wash. Its Gflex technology gives you a better washing capacity"
    },
    {
        "id": 14,
        "name":" Twister 1050 9 Kg Metallic Silver Washing Machine",
        "price": "TRs.54,966",
        "image": "images/48.png",
        "description": "Orient Twister Series washing machine is loaded with useful features and heavy-duty specifications. This fully automatic washing machine offers a one-touch operation for super wash. Its Gflex technology gives you a better washing capacity"
    },
    {
        "id": 15,
        "name":" ORIENT AUTOMATIC TOP LOAD Auto 6.5 kg Super Grey",
        "price": "Rs.55,000",
        "image": "images/49.png",
        "description": "Orient gives you magic filter, adjustable leg, and air drying which means that Orient Auto 6 Super Grey Washing Machine could be your durable, customized and highly functioning laundry partner! With the proper power supply and the 6.5 rated washing capacity and 6.5 Rated Spinning Capacity."
    },
    {
        "id": 16,
        "name":"ORIENT AUTOMATIC TOP LOAD Auto 8 Kg Super Grey",
        "price": "Rs.43,000",
        "image": "images/50.png",
        "description": "Orient gives you magic filter, adjustable leg, and air drying which means that Orient Auto 8 Super Grey Washing Machine could be your durable, customized and highly functioning laundry partner! With the proper power supply and the 8 rated washing capacity and 8 Rated Spinning Capacity."
    },
    {
        "id": 17,
        "name":" Orient 39″ LED Prism 39 HD Black",
        "price": "₨ 43,000",
        "image": "images/51.png",
        "description": " Prism 39 HD LED TV allows seamless and powerful audio, powered by Dolby to give you the theatrical experience of your life. The dynamic and exceptional picture quality paired with multiple connectivity options equips you with a brilliant TV experience. With durable construction and stylish design, the appliance is anyones wild dream."
    },
    {
        "id": 18,
        "name":" Orient 55″ 4K UHD LED TV UHD-55M7000",
        "price": " ₨74,000.00",
        "image": "images/52.png",
        "description": "Designed for pure, unapologetic entertainment, this TV brings together all the qualities you deem necessary for a cinematic experience  Ultra High Definition 4K resolution, Multi Color System, DTS Studio Surround Sound and multiple connectivity options (HDMI and USB support) so you can truly turn your living room into a movie theater. This LED comes in a Champaign Gold Metallic Body so even while it blends in, it stands out."
    },
    {
        "id": 19,
        "name":" Orient  40L6981 FULL HD LED TV",
        "price": "Ts.33,199",
        "image": "images/53.png",
        "description": "Orient LED  TVs intend to make your leisure time full of fun and entertainment. Its high screen resolution with sharp and vivid colors make viewing more exciting. Watch a movie or experience the thrill of sports, Orient LED  TVs will give you the taste of entertainment you desire."
    },
    {
        "id": 20,
        "name":"Orient LED TV ",
        "price": "₨72,600.00",
        "image": "images/54.png",
        "description": "Orient LED TVs intend to make your leisure time full of fun and entertainment. Its high screen resolution with sharp and vivid colors make viewing more exciting. Watch a movie or experience the thrill of sports, Orient LED TVs will give you the taste of entertainment you desire."
    }

];
export default products;