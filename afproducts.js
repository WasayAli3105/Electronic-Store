const products = [
    {
        "id": 1,
        "name":"Haier Tower Digital Air Fryer 11 Ltr",
        "price": "Rs.42,887",
        "image": "images/124.png",
        "description": "The Haier Tower Digital Air Fryer 11 Ltr features a spacious 11-liter capacity, ideal for cooking large meals or multiple dishes at once. Its digital touch screen interface allows for precise temperature and time control. The air fryer uses rapid air circulation technology to cook food evenly with little to no oil, promoting healthier meals. Additionally, it comes with multiple cooking presets for easy and convenient meal preparation."
    },
    {
        "id": 2,
        "name":"Haier Air Fryer HAF35B 3.5L Black",
        "price": "₨.18,000",
        "image": "images/125.png",
        "description": "The Haier Air Fryer HAF35B 3.5L in Black offers a compact 3.5-liter capacity, perfect for small families or individual meals. It features a user-friendly interface with adjustable temperature and timer settings for precise cooking. The air fryer utilizes rapid air circulation to ensure crispy, delicious results with minimal oil, promoting healthier eating."
    },
    {
        "id": 3,
        "name":"Haier EY201827 Air Fryer",
        "price": "₨.38,300",
        "image": "images/126.png",
        "description": "The Haier EY201827 Air Fryer combines a sleek design with a generous capacity, making it ideal for versatile cooking needs. It features an easy-to-use digital interface with multiple cooking presets for effortless meal preparation. Utilizing rapid air circulation technology, it ensures even cooking with minimal oil, promoting healthier eating habits."
    },
    {
        "id": 4,
        "name":"Haier GNE-5522 Air Fryer ",
        "price": "₨33,500",
        "image": "images/127.png",
        "description": "The Haier GNE-5522 Air Fryer boasts a sleek design and a large capacity, perfect for family-sized meals. Its intuitive digital controls and multiple cooking presets simplify meal preparation. Utilizing rapid air circulation, it ensures even cooking with minimal oil for healthier, crispy results."
    },
    {
        "id": 5,
        "name":"Dawlance Air Fryer DWAF-3013 3L",
        "price": "Rs.33,499",
        "image": "images/128.png",
        "description": " The Dawlance Air Fryer DWAF-3013 3L offers a compact design ideal for small kitchens and single servings. Featuring adjustable temperature and timer settings, it ensures precise cooking. Its rapid air circulation technology cooks food evenly with minimal oil, promoting healthier meals. "
    },
    {
        "id": 6,
        "name":"Dawlance Air Fryer DWAF 3013 ",
        "price":"Rs.33,600",
        "image": "images/129.png",
        "description": "The Dawlance Air Fryer DWAF 3013 features a compact 3-liter capacity, perfect for small meals and snacks. Its adjustable temperature and timer settings provide precise control for various recipes. The rapid air circulation technology ensures even cooking with minimal oil, promoting healthier eating. "
    },
    {
        "id": 7,
        "name":" Dawlance Air Fryer DWAF-3013 3L",
        "price": "Rs.24,999",
        "image": "images/130.png",
        "description": " The Dawlance Air Fryer DWAF-3013 3L offers a compact 3-liter capacity, ideal for small kitchens. It features adjustable temperature and timer settings for precise cooking. Rapid air circulation technology ensures healthier meals with minimal oil. "
    },
    {
        "id": 8,
        "name":"Dawlance XXL HFP90 11L Air Frye",
        "price":"Rs.65,000",
        "image": "images/131.png",
        "description": " The Dawlance XXL HFP90 11L Air Fryer features a large 11-liter capacity, perfect for family-sized meals. Its intuitive digital controls and multiple presets make cooking easy and convenient. Rapid air circulation technology ensures even cooking with minimal oil for healthier, crispy results."
    },
    {
        "id": 9,
        "name":" PEL  Air Fryer HD9200/90 ",
        "price": "Rs.25,000",
        "image": "images/132.png",
        "description": "The PEL Air Fryer HD9200/90 offers a sleek design with a user-friendly digital interface for easy operation. Its rapid air circulation technology cooks food evenly with minimal oil, promoting healthier meals. With adjustable temperature and timer settings, it provides precise control for a variety of recipes."
    },
    {
        "id": 10,
        "name":"PEL Air Fryer XXL HD-9650/91",
        "price": "Rs 120,399.00",
        "image": "images/133.png",
        "description": "The PEL Air Fryer XXL HD-9650/91 features a spacious design ideal for large families. Its advanced digital controls and multiple cooking presets ensure easy and versatile meal preparation. Utilizing rapid air circulation, it cooks food evenly with minimal oil for healthier results."
    },
    {
        "id": 11,
        "name":" PEL Air Fryer XXL 7.2L 1.4KG Black ",
        "price": "Rs.919.00 RM919.00",
        "image": "images/134.png",
        "description": "The PEL Air Fryer XXL 7.2L 1.4KG Black combines a generous capacity with sleek design, suitable for family-sized portions. It includes intuitive digital controls and various cooking presets for convenient meal preparation. Using rapid air circulation technology, it ensures even cooking with minimal oil, promoting healthier eating habits."
    },
    {
        "id": 12,
        "name":" Pel EY-201827 Easy Air Fryer 4.2Liters ",
        "price": "Rs.32,500",
        "image": "images/135.png",
        "description": "The Pel EY-201827 Easy Air Fryer 4.2 Liters combines a spacious capacity with a user-friendly design, ideal for cooking large meals. It features intuitive controls and multiple cooking presets for versatile meal options. Utilizing rapid air circulation, it cooks food evenly with little to no oil, promoting healthier cooking methods."
    },
    {
        "id": 13,
        "name":"Orient Air Fryer Berry 2400W Touch - RS-AF1001 ",
        "price": "Rs.24,999",
        "image": "images/136.png",
        "description": "The Orient Air Fryer Berry 2400W Touch - RS-AF1001 offers high power and touch control convenience for efficient cooking. Its sleek design and spacious capacity make it suitable for family meals. Utilizing rapid air circulation technology, it ensures even cooking with minimal oil, promoting healthier eating habits."
    },
    {
        "id": 14,
        "name":" orient Air Fryer, PARIS RHÔNE Air Fryers  ",
        "price": "35,999",
        "image": "images/137.png",
        "description": "The Orient Air Fryer Berry 2400W Touch - RS-AF1001 offers high power and touch control convenience for efficient cooking. Its sleek design and spacious capacity make it suitable for family meals. Utilizing rapid air circulation technology, it ensures even cooking with minimal oil, promoting healthier eating habits. "
    },
    {
        "id": 15,
        "name":"Orient IR FRYER Model EY111B",
        "price": "30,900",
        "image": "images/138.png",
        "description":" The Orient Air Fryer Model EY111B features a compact design with a user-friendly interface, suitable for smaller kitchens. It offers adjustable temperature and timer settings for precise cooking control. Utilizing rapid air circulation technology, it ensures even cooking with minimal oil, promoting healthier meal options."
    },
    {
        "id": 16,
        "name":"Orient Air Fryer Berry 2400W Touch - RS-AF1001 ",
        "price": "Rs. 24,999",
        "image": "images/139.png",
        "description": "The Orient Air Fryer Berry 2400W Touch - RS-AF1001 combines high power with touch-sensitive controls for efficient cooking. Its sleek design and spacious capacity make it ideal for preparing family-sized meals. Using rapid air circulation technology, it ensures even cooking with minimal oil, promoting healthier eating habits."
    },
    {
        "id": 17,
        "name":" Haier I-Master Series 5 Air Fryer, Black",
        "price": "₨.47,000",
        "image": "images/140.png",
        "description": " The Haier I-Master Series 5 Air Fryer in Black features a stylish design with advanced air frying capabilities. It offers a generous capacity suitable for family meals and includes intuitive digital controls for easy operation. Utilizing rapid air circulation technology, it cooks food evenly with minimal oil, promoting healthier cooking."
    },
    {
        "id": 18,
        "name":"DAWLANCE Air Fryer Black 4 Litres 1300W Plastic Body ",
        "price": " ₨.14,000.",
        "image": "images/141.png",
        "description": "The Dawlance Air Fryer Black 4 Litres 1300W with a plastic body offers a spacious cooking capacity and durable build. It features intuitive controls for easy operation and precise cooking adjustments. Using rapid air circulation technology, it ensures even cooking with minimal oil, promoting healthier meal options."
    },
    {
        "id": 19,
        "name":" Pel Air Fryer AF-888 3.5 Liter",
        "price": " ₨. 24,999",
        "image": "images/142.png",
        "description": " The Pel Air Fryer AF-888 3.5 Liter combines a compact design with ample capacity, ideal for small to medium-sized meals. It features user-friendly controls for temperature and time settings, ensuring precise cooking results. Utilizing rapid air circulation technology, it cooks food evenly and with less oil, promoting healthier eating habits."
    },
    {
        "id": 20,
        "name":" Orient Air Fryer Berry 2400W Touch - RS-AF1001",
        "price": " ₨. 24,999",
        "image": "images/143.png",
        "description": "The Orient Air Fryer Berry 2400W Touch - RS-AF1001 offers a sleek design with touch-sensitive controls for ease of use. It boasts a spacious capacity, making it suitable for preparing large family meals. Utilizing rapid air circulation technology, it ensures even cooking with minimal oil, promoting healthier cooking options."
    }

];
export default products;