export const ASSETS = {
  interior: "/food4.png",
  food1: "/food1.png",
  food2: "/food2.png",
  food3: "/food3.png",
  food4: "/food4.png",
  panini1: "/panini1.png",
  panini2: "/panini2.png",
  panini3: "/panini3.png",
  panini4: "/panini4.png",
};

export const HERO_SLIDES = [
  { src: "/panini1.png", alt: "Signature panini with melted cheese" },
  { src: "/panini2.png", alt: "Fresh pressed Italian panini" },
  { src: "/panini3.png", alt: "Panini with premium ingredients" },
  { src: "/panini4.png", alt: "Amigos hot-pressed panini" },
];

export type MenuItem = {
  zh: string;
  en: string;
  price: number;
  limited?: boolean;
  popular?: boolean;
};

export type MenuSubGroup = {
  zh: string;
  en: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  zh: string;
  en: string;
  note?: { zh: string; en: string };
  items?: MenuItem[];
  subGroups?: MenuSubGroup[];
};

export const FULL_MENU: MenuCategory[] = [
  {
    id: "panini-savoury",
    zh: "帕里尼義式熱烤三明治",
    en: "Savoury Panini",
    note: {
      zh: "帕里尼均附薯條，可更換為沙拉或水果。可加 $30 換巧巴達麵包。",
      en: "All paninis served with fries. Swap for salad or fruit. +$30 for ciabatta.",
    },
    items: [
      { zh: "剝皮辣椒雞", en: "Peeled chili pepper chicken", price: 105, popular: true },
      { zh: "青醬菌菇煎蛋", en: "Pesto mushroom & egg", price: 95 },
      { zh: "花生煎蛋", en: "Peanut butter chicken & egg", price: 115 },
      { zh: "莫扎瑞拉羅勒番茄", en: "Cheesy basil & tomato", price: 85 },
      { zh: "義式香料炒菌菇", en: "Italian seasoned mushrooms", price: 85 },
      { zh: "羅勒煎蛋", en: "Pan-fried egg with basil", price: 80 },
      { zh: "夏威夷", en: "Hawaiian", price: 85 },
      { zh: "馬鈴薯煎蛋", en: "Potato egg", price: 90 },
      { zh: "香煎培根花生蛋", en: "Bacon egg with peanut sauce", price: 100 },
      { zh: "蜜地瓜火腿蛋", en: "Ham & egg with smashed sweet potato", price: 100 },
      { zh: "招牌烤肉（辣）", en: "Spicy barbecue pork", price: 105, popular: true },
      { zh: "泰式打拋豬（辣）", en: "Thai basil chili pork", price: 95 },
      { zh: "羅勒雞肉", en: "Basil Chicken", price: 105 },
      { zh: "蜂蜜芥末", en: "Honey mustard", price: 105 },
      { zh: "莎莎", en: "Home-made salsa", price: 105 },
      { zh: "洋蔥雞柳", en: "Onion chicken fillet", price: 105 },
      { zh: "經典牛肉", en: "Classic beef", price: 115, popular: true },
      { zh: "嘉年華派對", en: "Carnival party", price: 145, popular: true },
      { zh: "洋蔥鮪魚", en: "Tuna with onion", price: 90 },
    ],
  },
  {
    id: "panini-sweet",
    zh: "甜味帕里尼",
    en: "Sweet Panini",
    items: [
      { zh: "香蕉榛果巧克力", en: "Choco banana", price: 60 },
      { zh: "草莓蛋起司", en: "Strawberry jam & cheese egg", price: 60 },
      { zh: "玉米煉乳蛋起司", en: "Egg & corn with condensed milk", price: 65 },
      { zh: "煉乳地瓜", en: "Milky sweet potato", price: 50 },
      { zh: "煉乳雙起司", en: "Sweet cheese joy", price: 55 },
      { zh: "草莓花生香蕉", en: "Pinky browny banana", price: 55 },
      { zh: "蔓越莓堅果", en: "Cranberry nuts", price: 55 },
      { zh: "煉乳芋泥", en: "Sweet taro", price: 55 },
      { zh: "肉鬆芋泥", en: "Cheesy taro with meat floss", price: 60 },
      { zh: "煉乳芋泥蛋", en: "Milky taro & egg", price: 60 },
    ],
  },
  {
    id: "sandwich-burger",
    zh: "輕食三明治、堡類",
    en: "Sandwich & Burger",
    items: [
      { zh: "蛋沙拉三明治", en: "Egg salad sandwich", price: 55 },
      { zh: "乳酪起司堅果貝果", en: "Cheesy nuts bagel", price: 90 },
      { zh: "顆粒花生醬培根三明治", en: "Chunky peanut butter bacon sandwich", price: 80 },
      { zh: "花生牛肉堡", en: "Beef & egg burger with peanut butter", price: 85 },
      { zh: "卡啦漢堡", en: "Crunchy chicken burger", price: 80 },
      { zh: "花枝蝦條堡", en: "Crunchy squid & shrimp burger", price: 75 },
      { zh: "香煎醬油雞柳堡", en: "Pan-fried Chicken burger", price: 85 },
      { zh: "煎蛋起司貝果", en: "Cheesy egg bagel", price: 85 },
    ],
  },
  {
    id: "salad",
    zh: "高纖沙拉",
    en: "Fresh Salad",
    items: [
      { zh: "季節時蔬沙拉", en: "Seasonal veggie salad", price: 120 },
      { zh: "雞肉凱撒沙拉", en: "Chicken Caesar salad", price: 130 },
      { zh: "葡萄酒醋雞肉沙拉", en: "Balsamic vinegar chicken salad", price: 130 },
    ],
  },
  {
    id: "brunch-combo",
    zh: "早午餐拼盤",
    en: "Brunch Combo",
    items: [
      { zh: "每日主廚", en: "Daily chef's special", price: 120, limited: true },
      { zh: "季節性料理", en: "Seasonal chef's special", price: 150, limited: true },
      { zh: "法國吐司佐蜂蜜餐", en: "Honey french toast combo", price: 170 },
      { zh: "檸檬蛋黃果醬厚片", en: "Lemon curd toast combo", price: 170 },
      { zh: "帶骨德式香腸餐", en: "German sausage on a bone stick combo", price: 170 },
      { zh: "香煎雞腿排餐", en: "Pan-fried chicken thigh steak combo", price: 235, popular: true },
    ],
  },
  {
    id: "tortilla",
    zh: "墨西哥捲餅",
    en: "Tortilla Wraps",
    items: [
      { zh: "煎雞腿肉", en: "Pan-fried chicken thigh", price: 235 },
      { zh: "脆脆卡啦", en: "Crunchy chicken", price: 170 },
      { zh: "花枝蝦條", en: "Squid & shrimp delight", price: 165 },
      { zh: "辣味烤肉", en: "Spicy BBQ pork", price: 160 },
    ],
  },
  {
    id: "lunch-special",
    zh: "午餐精選",
    en: "Lunch Special",
    note: {
      zh: "午餐精選均附麵條，可選擇不同醬料搭配。",
      en: "All lunch specials served with pasta. Choose your sauce.",
    },
    subGroups: [
      {
        zh: "茄汁番茄",
        en: "Tomato Sauce",
        items: [
          { zh: "時蔬", en: "Vegetable delight", price: 155 },
          { zh: "雞肉", en: "Chicken", price: 165 },
          { zh: "德式香腸", en: "German sausage", price: 165 },
          { zh: "蛤蜊", en: "Fresh clams", price: 165 },
        ],
      },
      {
        zh: "奶油白醬",
        en: "Creamy White Sauce",
        items: [
          { zh: "時蔬", en: "Vegetable delight", price: 155 },
          { zh: "雞肉", en: "Chicken", price: 165 },
          { zh: "德式香腸", en: "German sausage", price: 165 },
          { zh: "蛤蜊", en: "Fresh clams", price: 165 },
        ],
      },
      {
        zh: "自製青醬",
        en: "Home-made Pesto Sauce",
        items: [
          { zh: "野菇", en: "Mushrooms", price: 160 },
          { zh: "時蔬", en: "Vegetable delight", price: 160 },
          { zh: "蛤蜊", en: "Fresh clams", price: 170 },
          { zh: "雞肉", en: "Chicken", price: 170 },
        ],
      },
      {
        zh: "獨家粉紅醬",
        en: "Special Creamy Pink Sauce",
        items: [
          { zh: "野菇", en: "Mushrooms", price: 160 },
          { zh: "時蔬", en: "Vegetable delight", price: 160 },
          { zh: "雞肉", en: "Chicken", price: 165 },
          { zh: "辣味烤肉", en: "Spicy BBQ pork", price: 165 },
          { zh: "蛤蜊", en: "Fresh clams", price: 165 },
          { zh: "德式香腸", en: "German sausage", price: 165 },
        ],
      },
      {
        zh: "清炒白酒",
        en: "Lightly Sautéed",
        items: [
          { zh: "白酒香蒜培根", en: "Bacon with garlic & white wine", price: 150 },
          { zh: "白酒香蒜蛤蜊", en: "Clams with garlic & white wine", price: 170 },
          { zh: "橄欖油清炒時蔬", en: "Fresh veggies with olive oil", price: 155 },
          { zh: "檸檬培根奶油蛋黃", en: "Creamy yolky bacon", price: 160 },
          { zh: "辣味雞肉（含菇類）", en: "Spicy chicken (mushrooms included)", price: 160 },
        ],
      },
    ],
  },
  {
    id: "appetizers",
    zh: "開胃點",
    en: "Appetizers",
    items: [
      { zh: "每日湯品", en: "Daily soup", price: 60 },
      { zh: "黃金脆薯", en: "Golden french fries", price: 60 },
      { zh: "每日甜湯", en: "Daily sweet soup", price: 45 },
      { zh: "花枝蝦條（3入）", en: "Squid & shrimp finger (3 pieces)", price: 50 },
      { zh: "檸香雞柳條（3入）", en: "Lemon chicken finger (3 pieces)", price: 50 },
      { zh: "蜂蜜玉米片優格", en: "Honey cereal yogurt", price: 65 },
      { zh: "水果優格", en: "Fruit yogurt", price: 70 },
      { zh: "黑糖堅果優格", en: "Brown sugar nuts yogurt", price: 75 },
      { zh: "墨西哥起司餅佐莎莎醬", en: "Tortilla with home-made salsa", price: 85 },
      { zh: "墨西哥雞肉烘餅", en: "Chicken tortilla", price: 160 },
    ],
  },
  {
    id: "side-dish",
    zh: "單品加點",
    en: "Side Dish",
    items: [
      { zh: "太陽蛋", en: "Egg", price: 15 },
      { zh: "薯餅", en: "Hashbrown", price: 25 },
      { zh: "德式香腸", en: "German sausage", price: 40 },
      { zh: "鮮奶厚片", en: "Thick cut toast", price: 50 },
      { zh: "檸檬蛋黃厚片", en: "Lemon curd thick cut toast", price: 55 },
      { zh: "發酵奶油奶酥厚片", en: "Crispy butter toast", price: 60 },
      { zh: "法國吐司佐蜂蜜", en: "French toast with honey", price: 55 },
      { zh: "帶骨香腸", en: "Sausage on a bone stick", price: 55 },
      { zh: "橄欖油燴菜", en: "Olive oil sautéed veggies", price: 50 },
      { zh: "卡啦雞肉", en: "Crunchy chicken", price: 50 },
    ],
  },
  {
    id: "new-drinks",
    zh: "新飲品",
    en: "NEW Amigos Special",
    items: [
      { zh: "奶蓋海鹽紅（冰）", en: "Seasalt black tea macchiato (iced)", price: 60 },
      { zh: "奶蓋海鹽紅（熱）", en: "Seasalt black tea macchiato (hot)", price: 55 },
      { zh: "奶蓋海鹽綠（冰）", en: "Seasalt green tea macchiato (iced)", price: 60 },
      { zh: "奶蓋海鹽綠（熱）", en: "Seasalt green tea macchiato (hot)", price: 55 },
      { zh: "氣泡水", en: "Fizzy water", price: 80 },
    ],
  },
  {
    id: "coffee",
    zh: "咖啡",
    en: "Coffee",
    items: [
      { zh: "西西里檸檬咖啡（冰）", en: "Sicily lemon coffee (iced)", price: 85 },
      { zh: "美式黑咖啡（冰）", en: "Americano (iced)", price: 70 },
      { zh: "美式黑咖啡（熱）", en: "Americano (hot)", price: 70 },
      { zh: "原味拿鐵（冰）", en: "Latte (iced)", price: 95 },
      { zh: "原味拿鐵（熱）", en: "Latte (hot)", price: 95 },
      { zh: "焦糖瑪奇朵（冰）", en: "Caramel macchiato (iced)", price: 105 },
      { zh: "焦糖瑪奇朵（熱）", en: "Caramel macchiato (hot)", price: 105 },
      { zh: "香草拿鐵（冰）", en: "Vanilla latte (iced)", price: 100 },
      { zh: "香草拿鐵（熱）", en: "Vanilla latte (hot)", price: 100 },
      { zh: "焦糖拿鐵（冰）", en: "Caramel latte (iced)", price: 100 },
      { zh: "焦糖拿鐵（熱）", en: "Caramel latte (hot)", price: 100 },
      { zh: "香草冰淇淋咖啡（冰）", en: "Vanilla ice cream coffee (iced)", price: 105 },
      { zh: "黑糖拿鐵（冰）", en: "Brown sugar latte (iced)", price: 100 },
      { zh: "黑糖拿鐵（熱）", en: "Brown sugar latte (hot)", price: 100 },
    ],
  },
  {
    id: "tea",
    zh: "茶品",
    en: "Tea",
    items: [
      { zh: "紅茶（小杯冰）", en: "Black tea (small iced)", price: 30 },
      { zh: "紅茶（大杯冰）", en: "Black tea (large iced)", price: 35 },
      { zh: "紅茶（熱）", en: "Black tea (hot)", price: 30 },
      { zh: "綠茶（小杯冰）", en: "Green tea (small iced)", price: 30 },
      { zh: "綠茶（大杯冰）", en: "Green tea (large iced)", price: 35 },
      { zh: "綠茶（熱）", en: "Green tea (hot)", price: 30 },
      { zh: "唐寧早餐茶（小杯冰）", en: "Twinings breakfast tea (small iced)", price: 50 },
      { zh: "唐寧早餐茶（大杯冰）", en: "Twinings breakfast tea (large iced)", price: 55 },
      { zh: "唐寧早餐茶（熱）", en: "Twinings breakfast tea (hot)", price: 50 },
      { zh: "唐寧伯爵茶（小杯冰）", en: "Twinings earl grey tea (small iced)", price: 50 },
      { zh: "唐寧伯爵茶（大杯冰）", en: "Twinings earl grey tea (large iced)", price: 55 },
      { zh: "唐寧伯爵茶（熱）", en: "Twinings earl grey tea (hot)", price: 50 },
      { zh: "冰淇淋紅茶（小杯冰）", en: "Vanilla ice cream black tea (small iced)", price: 55 },
      { zh: "冰淇淋紅茶（大杯冰）", en: "Vanilla ice cream black tea (large iced)", price: 60 },
      { zh: "柚子茶（小杯冰）", en: "Pomelo tea (small iced)", price: 45 },
      { zh: "柚子茶（大杯冰）", en: "Pomelo tea (large iced)", price: 50 },
      { zh: "柚子茶（熱）", en: "Pomelo tea (hot)", price: 45 },
    ],
  },
  {
    id: "milk",
    zh: "牛奶類",
    en: "Milk",
    items: [
      { zh: "紅茶牛奶（小杯冰）", en: "Milky black tea (small iced)", price: 45 },
      { zh: "紅茶牛奶（大杯冰）", en: "Milky black tea (large iced)", price: 50 },
      { zh: "紅茶牛奶（熱）", en: "Milky black tea (hot)", price: 45 },
      { zh: "綠茶牛奶（小杯冰）", en: "Milky green tea (small iced)", price: 45 },
      { zh: "綠茶牛奶（大杯冰）", en: "Milky green tea (large iced)", price: 50 },
      { zh: "綠茶牛奶（熱）", en: "Milky green tea (hot)", price: 45 },
      { zh: "新鮮牛奶（小杯冰）", en: "Fresh milk (small iced)", price: 60 },
      { zh: "新鮮牛奶（熱）", en: "Fresh milk (hot)", price: 60 },
      { zh: "黑糖牛奶（小杯冰）", en: "Brown sugar milk (small iced)", price: 65 },
      { zh: "黑糖牛奶（熱）", en: "Brown sugar milk (hot)", price: 65 },
      { zh: "唐寧伯爵牛奶（小杯冰）", en: "Milky Twinings Earl Grey (small iced)", price: 65 },
      { zh: "唐寧伯爵牛奶（大杯冰）", en: "Milky Twinings Earl Grey (large iced)", price: 70 },
      { zh: "唐寧伯爵牛奶（熱）", en: "Milky Twinings Earl Grey (hot)", price: 65 },
    ],
  },
  {
    id: "juice",
    zh: "新鮮果汁",
    en: "Fresh Juice",
    items: [
      { zh: "新鮮蜂蜜檸檬汁（小杯冰）", en: "Fresh honey lemonade (small iced)", price: 50 },
      { zh: "新鮮蜂蜜檸檬汁（大杯冰）", en: "Fresh honey lemonade (large iced)", price: 55 },
    ],
  },
];

/* ─── Gallery slideshow images (Google Business Profile photos) ─── */
export type GalleryImage = {
  src: string;
  zh: string;
  en: string;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/gallery/IMG_2022.jpg", zh: "Amigos 店內實拍", en: "Amigos in-store photo" },
  { src: "/gallery/IMG_2023.jpg", zh: "招牌帕里尼", en: "Signature panini" },
  { src: "/gallery/IMG_2024.jpg", zh: "新鮮現做料理", en: "Freshly prepared dishes" },
  { src: "/gallery/IMG_2025.jpg", zh: "美味早午餐", en: "Delicious brunch" },
  { src: "/gallery/IMG_2026.jpg", zh: "精緻擺盤", en: "Beautiful plating" },
  { src: "/gallery/IMG_2027.jpg", zh: "溫馨用餐空間", en: "Cozy dining space" },
  { src: "/gallery/IMG_2028.jpg", zh: "人氣餐點", en: "Popular dishes" },
  { src: "/gallery/IMG_2029.jpg", zh: "手作醬料搭配", en: "House-made sauce pairing" },
  { src: "/gallery/IMG_2030.jpg", zh: "朋友聚餐首選", en: "Perfect for friends" },
  { src: "/gallery/IMG_2031.jpg", zh: "每日新鮮食材", en: "Daily fresh ingredients" },
  { src: "/gallery/IMG_2032.jpg", zh: "經典口味", en: "Classic flavors" },
  { src: "/gallery/IMG_2033.jpg", zh: "屏東在地十年", en: "10 years in Pingtung" },
  { src: "/gallery/IMG_2034.jpg", zh: "酥脆金黃外皮", en: "Golden crispy crust" },
  { src: "/gallery/IMG_2035.jpg", zh: "滿滿餡料", en: "Overflowing fillings" },
  { src: "/gallery/IMG_2036.jpg", zh: "輕食沙拉", en: "Fresh salad" },
  { src: "/gallery/IMG_2037.jpg", zh: "咖啡與飲品", en: "Coffee & drinks" },
  { src: "/gallery/IMG_2038.jpg", zh: "義式風味", en: "Italian flavors" },
  { src: "/gallery/IMG_2039.jpg", zh: "週末早午餐", en: "Weekend brunch" },
  { src: "/gallery/IMG_2040.jpg", zh: "團體訂餐", en: "Group orders" },
  { src: "/gallery/IMG_2041.jpg", zh: "用心料理每一份", en: "Made with care" },
  { src: "/gallery/IMG_2042.jpg", zh: "香脆外皮", en: "Crunchy paninis" },
  { src: "/gallery/IMG_2043.jpg", zh: "讓聚餐更開心", en: "Make every gathering meaningful" },
];

export const CATERING_PACKAGES = [
  {
    id: "meeting",
    zh: "會議餐盒",
    en: "Meeting Box",
    descZh: "10 份起訂，含帕里尼 + 沙拉 + 飲品，適合公司會議與小型聚會。",
    descEn: "Min. 10 boxes. Panini + salad + drink per box. Perfect for meetings and small gatherings.",
  },
  {
    id: "party",
    zh: "派對餐盒",
    en: "Party Platter",
    descZh: "20 人份起，帕里尼切片拼盤搭配多款配菜，適合部門聚餐與慶祝。",
    descEn: "Min. 20 pax. Sliced panini platters with sides. Great for team celebrations.",
  },
];
