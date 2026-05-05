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
  desc?: { zh: string; en: string };
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
      en: "All paninis come with fries. Swap for salad or fruit. Add $30 for ciabatta bread.",
    },
    items: [
      { zh: "剝皮辣椒雞", en: "Chili pepper chicken", price: 105, popular: true, desc: { zh: "台式剝皮辣椒搭配嫩雞，微辣回甘，起司牽絲", en: "Taiwanese pickled chili with tender chicken, mild heat, stretchy melted cheese" } },
      { zh: "青醬菌菇煎蛋", en: "Pesto mushroom & fried egg", price: 95, desc: { zh: "自製羅勒青醬配香煎蘑菇與太陽蛋", en: "House-made basil pesto with sautéed mushrooms & sunny-side egg" } },
      { zh: "花生煎蛋", en: "Peanut butter chicken & egg", price: 115, desc: { zh: "顆粒花生醬搭配嫩雞與煎蛋，鹹甜交織", en: "Chunky peanut butter with chicken & fried egg, sweet-savory combo" } },
      { zh: "莫扎瑞拉羅勒番茄", en: "Mozzarella, basil & tomato", price: 85, desc: { zh: "經典義式三重奏，新鮮番茄配融化莫扎瑞拉", en: "Classic Italian trio — fresh tomato with melted mozzarella" } },
      { zh: "義式香料炒菌菇", en: "Italian herb mushroom", price: 85, desc: { zh: "多種菇類以義式香料翻炒，素食者最愛", en: "Mixed mushrooms sautéed with Italian herbs, vegetarian favorite" } },
      { zh: "羅勒煎蛋", en: "Basil & fried egg", price: 80, desc: { zh: "清爽羅勒搭配香煎太陽蛋，簡單美味", en: "Fresh basil with sunny-side egg, simple & satisfying" } },
      { zh: "夏威夷", en: "Hawaiian ham & pineapple", price: 85, desc: { zh: "火腿配鳳梨的經典組合，酸甜開胃", en: "Classic ham & pineapple combo, tangy & refreshing" } },
      { zh: "馬鈴薯煎蛋", en: "Potato & fried egg", price: 90, desc: { zh: "綿密馬鈴薯泥搭配煎蛋，飽足感十足", en: "Creamy mashed potato with fried egg, hearty & filling" } },
      { zh: "香煎培根花生蛋", en: "Bacon & egg with peanut sauce", price: 100, desc: { zh: "酥脆培根配花生醬與煎蛋，層次豐富", en: "Crispy bacon with peanut sauce & egg, rich layers of flavor" } },
      { zh: "蜜地瓜火腿蛋", en: "Ham & egg with honey sweet potato", price: 100, desc: { zh: "蜜漬地瓜搭配火腿與煎蛋，甜鹹平衡", en: "Honey-glazed sweet potato with ham & egg, balanced sweet-savory" } },
      { zh: "招牌烤肉（辣）", en: "Signature BBQ pork (spicy)", price: 105, popular: true, desc: { zh: "自調辣味烤肉醬，搭配爽脆生菜，微辣帶甜", en: "House-made spicy BBQ sauce with crisp lettuce, sweet heat finish" } },
      { zh: "泰式打拋豬（辣）", en: "Thai basil pork (spicy)", price: 95, desc: { zh: "道地泰式打拋醬炒豬肉，九層塔香氣濃郁", en: "Authentic Thai stir-fried pork with holy basil, aromatic & spicy" } },
      { zh: "羅勒雞肉", en: "Basil chicken", price: 105, desc: { zh: "嫩雞胸搭配新鮮羅勒與起司，清香不膩", en: "Tender chicken breast with fresh basil & cheese, light & fragrant" } },
      { zh: "蜂蜜芥末", en: "Honey mustard chicken", price: 105, desc: { zh: "蜂蜜芥末醬搭配雞肉，酸甜帶勁", en: "Honey mustard glazed chicken, tangy-sweet with a kick" } },
      { zh: "莎莎", en: "House-made salsa chicken", price: 105, desc: { zh: "自製新鮮莎莎醬配雞肉，清爽開胃", en: "Fresh house-made salsa with chicken, bright & appetizing" } },
      { zh: "洋蔥雞柳", en: "Caramelized onion chicken", price: 105, desc: { zh: "焦糖化洋蔥搭配嫩煎雞柳，甜香四溢", en: "Caramelized onions with pan-seared chicken strips, sweet aroma" } },
      { zh: "經典牛肉", en: "Classic beef", price: 115, popular: true, desc: { zh: "嫩煎牛肉片配洋蔥與特調醬汁，份量十足", en: "Tender sliced beef with onions & special sauce, generous portion" } },
      { zh: "嘉年華派對", en: "Carnival party", price: 145, popular: true, desc: { zh: "全店最豐盛！牛肉、培根、起司、蔬菜一次滿足", en: "Our most loaded! Beef, bacon, cheese & veggies all in one" } },
      { zh: "洋蔥鮪魚", en: "Tuna & caramelized onion", price: 90, desc: { zh: "鮪魚沙拉搭配焦糖洋蔥，海味與甜香的完美結合", en: "Tuna salad with caramelized onion, perfect sea-meets-sweet pairing" } },
    ],
  },
  {
    id: "panini-sweet",
    zh: "甜味帕里尼",
    en: "Sweet Panini",
    items: [
      { zh: "香蕉榛果巧克力", en: "Banana & hazelnut chocolate", price: 60, desc: { zh: "Nutella 榛果醬搭配新鮮香蕉片，甜蜜療癒", en: "Nutella spread with fresh banana slices, sweet & comforting" } },
      { zh: "草莓蛋起司", en: "Strawberry jam, cheese & egg", price: 60, desc: { zh: "草莓果醬配起司與煎蛋，酸甜鹹的驚喜組合", en: "Strawberry jam with cheese & egg, a sweet-savory surprise" } },
      { zh: "玉米煉乳蛋起司", en: "Corn & egg with condensed milk", price: 65, desc: { zh: "甜玉米粒搭配煉乳、起司與煎蛋", en: "Sweet corn kernels with condensed milk, cheese & fried egg" } },
      { zh: "煉乳地瓜", en: "Sweet potato with condensed milk", price: 50, desc: { zh: "綿密地瓜泥淋上香甜煉乳", en: "Creamy sweet potato mash drizzled with condensed milk" } },
      { zh: "煉乳雙起司", en: "Double cheese with condensed milk", price: 55, desc: { zh: "雙重起司融化搭配煉乳，濃郁奶香", en: "Double melted cheese with condensed milk, rich & creamy" } },
      { zh: "草莓花生香蕉", en: "Strawberry, peanut butter & banana", price: 55, desc: { zh: "草莓醬、花生醬與香蕉的三重奏", en: "Triple combo of strawberry jam, peanut butter & banana" } },
      { zh: "蔓越莓堅果", en: "Cranberry & mixed nuts", price: 55, desc: { zh: "酸甜蔓越莓搭配烤堅果，口感豐富", en: "Tart cranberries with toasted nuts, crunchy & fruity" } },
      { zh: "煉乳芋泥", en: "Taro paste with condensed milk", price: 55, desc: { zh: "手工芋泥搭配煉乳，綿密香甜", en: "Hand-mashed taro with condensed milk, silky & sweet" } },
      { zh: "肉鬆芋泥", en: "Taro paste with pork floss", price: 60, desc: { zh: "芋泥搭配鹹香肉鬆，台式經典甜鹹味", en: "Taro paste with savory pork floss, classic Taiwanese sweet-salty" } },
      { zh: "煉乳芋泥蛋", en: "Taro paste, egg & condensed milk", price: 60, desc: { zh: "芋泥加煎蛋與煉乳，飽足又療癒", en: "Taro paste with fried egg & condensed milk, filling & comforting" } },
    ],
  },
  {
    id: "sandwich-burger",
    zh: "輕食三明治、堡類",
    en: "Sandwich & Burger",
    items: [
      { zh: "蛋沙拉三明治", en: "Egg salad sandwich", price: 55, desc: { zh: "經典蛋沙拉夾入柔軟吐司，輕食首選", en: "Classic egg salad in soft bread, a light & easy choice" } },
      { zh: "乳酪起司堅果貝果", en: "Cream cheese & nut bagel", price: 90, desc: { zh: "Q彈貝果搭配奶油起司與烤堅果", en: "Chewy bagel with cream cheese & toasted nuts" } },
      { zh: "顆粒花生醬培根三明治", en: "Chunky peanut butter & bacon sandwich", price: 80, desc: { zh: "顆粒花生醬配酥脆培根，美式經典", en: "Chunky peanut butter with crispy bacon, American classic" } },
      { zh: "花生牛肉堡", en: "Beef burger with peanut butter & egg", price: 85, desc: { zh: "牛肉排搭配花生醬與煎蛋，濃郁多汁", en: "Beef patty with peanut butter & fried egg, rich & juicy" } },
      { zh: "卡啦漢堡", en: "Crispy fried chicken burger", price: 80, desc: { zh: "酥炸雞排搭配生菜與醬料", en: "Crispy fried chicken cutlet with lettuce & sauce" } },
      { zh: "花枝蝦條堡", en: "Squid & shrimp patty burger", price: 75, desc: { zh: "花枝蝦排酥炸後夾入漢堡，海味十足", en: "Deep-fried squid & shrimp patty in a bun, full of seafood flavor" } },
      { zh: "香煎醬油雞柳堡", en: "Soy-glazed chicken fillet burger", price: 85, desc: { zh: "醬油醃漬雞柳煎至焦香，台式風味", en: "Soy-marinated chicken fillet pan-seared to perfection, Taiwanese style" } },
      { zh: "煎蛋起司貝果", en: "Fried egg & cheese bagel", price: 85, desc: { zh: "Q彈貝果夾煎蛋與融化起司，簡單滿足", en: "Chewy bagel with fried egg & melted cheese, simple satisfaction" } },
    ],
  },
  {
    id: "salad",
    zh: "高纖沙拉",
    en: "Fresh Salad",
    items: [
      { zh: "季節時蔬沙拉", en: "Seasonal veggie salad", price: 120, desc: { zh: "當季新鮮蔬菜搭配特調油醋醬", en: "Fresh seasonal greens with house vinaigrette dressing" } },
      { zh: "雞肉凱撒沙拉", en: "Chicken Caesar salad", price: 130, desc: { zh: "嫩煎雞肉搭配羅馬生菜與凱撒醬", en: "Pan-seared chicken with romaine lettuce & Caesar dressing" } },
      { zh: "葡萄酒醋雞肉沙拉", en: "Balsamic vinegar chicken salad", price: 130, desc: { zh: "義式巴薩米克醋搭配嫩雞與綜合蔬菜", en: "Italian balsamic vinegar with tender chicken & mixed greens" } },
    ],
  },
  {
    id: "brunch-combo",
    zh: "早午餐拼盤",
    en: "Brunch Combo",
    items: [
      { zh: "每日主廚", en: "Daily chef's special", price: 120, limited: true, desc: { zh: "主廚每日創意搭配，數量有限售完為止", en: "Chef's daily creation, limited quantity until sold out" } },
      { zh: "季節性料理", en: "Seasonal chef's special", price: 150, limited: true, desc: { zh: "依季節食材變換的限定料理", en: "Seasonal ingredients crafted into a limited-time dish" } },
      { zh: "法國吐司佐蜂蜜餐", en: "Honey french toast combo", price: 170, desc: { zh: "厚切法式吐司淋蜂蜜，附沙拉、煎蛋與飲品", en: "Thick-cut French toast with honey, includes salad, egg & drink" } },
      { zh: "檸檬蛋黃果醬厚片", en: "Lemon curd toast combo", price: 170, desc: { zh: "自製檸檬蛋黃醬厚片，附沙拉、煎蛋與飲品", en: "House-made lemon curd on thick toast, includes salad, egg & drink" } },
      { zh: "帶骨德式香腸餐", en: "German sausage on a bone stick combo", price: 170, desc: { zh: "帶骨德式香腸搭配吐司、沙拉與飲品", en: "Bone-in German sausage with toast, salad & drink" } },
      { zh: "香煎雞腿排餐", en: "Pan-fried chicken thigh steak combo", price: 235, popular: true, desc: { zh: "去骨雞腿排煎至金黃，搭配沙拉、吐司、煎蛋與飲品", en: "Boneless chicken thigh seared golden, with salad, toast, egg & drink" } },
    ],
  },
  {
    id: "tortilla",
    zh: "墨西哥捲餅",
    en: "Tortilla Wraps",
    items: [
      { zh: "煎雞腿肉", en: "Pan-fried chicken thigh wrap", price: 235, desc: { zh: "去骨雞腿肉搭配新鮮蔬菜與醬料，捲入軟Q餅皮", en: "Boneless chicken thigh with fresh veggies & sauce in a soft tortilla" } },
      { zh: "脆脆卡啦", en: "Crispy fried chicken wrap", price: 170, desc: { zh: "酥炸雞排搭配生菜與醬料，外酥內嫩", en: "Crispy fried chicken with lettuce & sauce, crunchy outside, tender inside" } },
      { zh: "花枝蝦條", en: "Squid & shrimp wrap", price: 165, desc: { zh: "酥炸花枝蝦條搭配新鮮蔬菜", en: "Fried squid & shrimp sticks with fresh vegetables" } },
      { zh: "辣味烤肉", en: "Spicy BBQ pork wrap", price: 160, desc: { zh: "辣味烤肉醬搭配爽脆蔬菜，微辣過癮", en: "Spicy BBQ pork with crisp veggies, satisfying heat" } },
    ],
  },
  {
    id: "lunch-special",
    zh: "午餐精選",
    en: "Lunch Special",
    note: {
      zh: "午餐精選均附麵條，可選擇不同醬料搭配。",
      en: "All lunch specials come with pasta. Pick your sauce below.",
    },
    subGroups: [
      {
        zh: "茄汁番茄",
        en: "Tomato Sauce",
        items: [
          { zh: "時蔬", en: "Seasonal vegetables", price: 155 },
          { zh: "雞肉", en: "Chicken", price: 165 },
          { zh: "德式香腸", en: "German sausage", price: 165 },
          { zh: "蛤蜊", en: "Fresh clams", price: 165 },
        ],
      },
      {
        zh: "奶油白醬",
        en: "Creamy White Sauce",
        items: [
          { zh: "時蔬", en: "Seasonal vegetables", price: 155 },
          { zh: "雞肉", en: "Chicken", price: 165 },
          { zh: "德式香腸", en: "German sausage", price: 165 },
          { zh: "蛤蜊", en: "Fresh clams", price: 165 },
        ],
      },
      {
        zh: "自製青醬",
        en: "House-made Pesto",
        items: [
          { zh: "野菇", en: "Wild mushrooms", price: 160 },
          { zh: "時蔬", en: "Seasonal vegetables", price: 160 },
          { zh: "蛤蜊", en: "Fresh clams", price: 170 },
          { zh: "雞肉", en: "Chicken", price: 170 },
        ],
      },
      {
        zh: "獨家粉紅醬",
        en: "House Rosé Sauce",
        items: [
          { zh: "野菇", en: "Wild mushrooms", price: 160 },
          { zh: "時蔬", en: "Seasonal vegetables", price: 160 },
          { zh: "雞肉", en: "Chicken", price: 165 },
          { zh: "辣味烤肉", en: "Spicy BBQ pork", price: 165 },
          { zh: "蛤蜊", en: "Fresh clams", price: 165 },
          { zh: "德式香腸", en: "German sausage", price: 165 },
        ],
      },
      {
        zh: "清炒白酒",
        en: "White Wine Sauté",
        items: [
          { zh: "白酒香蒜培根", en: "Garlic bacon in white wine", price: 150 },
          { zh: "白酒香蒜蛤蜊", en: "Garlic clams in white wine", price: 170 },
          { zh: "橄欖油清炒時蔬", en: "Olive oil sautéed vegetables", price: 155 },
          { zh: "檸檬培根奶油蛋黃", en: "Lemon carbonara with bacon", price: 160 },
          { zh: "辣味雞肉（含菇類）", en: "Spicy chicken with mushrooms", price: 160 },
        ],
      },
    ],
  },
  {
    id: "appetizers",
    zh: "開胃點",
    en: "Appetizers",
    items: [
      { zh: "每日湯品", en: "Daily soup", price: 60, desc: { zh: "每日手作暖湯，口味依當日食材變換", en: "Daily handmade warm soup, flavor changes with seasonal ingredients" } },
      { zh: "黃金脆薯", en: "Golden fries", price: 60, desc: { zh: "炸至金黃酥脆的薯條", en: "Deep-fried to golden perfection" } },
      { zh: "每日甜湯", en: "Daily sweet soup", price: 45, desc: { zh: "每日手作甜湯，暖心甜品", en: "Daily handmade sweet soup, a warm dessert treat" } },
      { zh: "花枝蝦條（3入）", en: "Squid & shrimp sticks (3 pcs)", price: 50, desc: { zh: "酥炸花枝蝦條，外酥內Q彈", en: "Deep-fried squid & shrimp sticks, crispy outside, bouncy inside" } },
      { zh: "檸香雞柳條（3入）", en: "Lemon chicken strips (3 pcs)", price: 50, desc: { zh: "檸檬調味雞柳酥炸，清爽不膩", en: "Lemon-seasoned chicken strips, fried light & refreshing" } },
      { zh: "蜂蜜玉米片優格", en: "Honey granola yogurt", price: 65, desc: { zh: "蜂蜜玉米脆片搭配濃郁優格", en: "Honey granola flakes over creamy yogurt" } },
      { zh: "水果優格", en: "Fresh fruit yogurt", price: 70, desc: { zh: "當季新鮮水果搭配優格", en: "Seasonal fresh fruit with creamy yogurt" } },
      { zh: "黑糖堅果優格", en: "Brown sugar & nut yogurt", price: 75, desc: { zh: "手炒黑糖堅果搭配優格，香脆甜蜜", en: "Caramelized brown sugar nuts over yogurt, crunchy & sweet" } },
      { zh: "墨西哥起司餅佐莎莎醬", en: "Cheese quesadilla with salsa", price: 85, desc: { zh: "酥烤起司餅搭配自製莎莎醬", en: "Crispy cheese quesadilla with house-made salsa" } },
      { zh: "墨西哥雞肉烘餅", en: "Chicken quesadilla", price: 160, desc: { zh: "雞肉與起司烘烤至金黃，份量十足", en: "Chicken & cheese baked golden, generous portion" } },
    ],
  },
  {
    id: "side-dish",
    zh: "單品加點",
    en: "Side Dish",
    items: [
      { zh: "太陽蛋", en: "Sunny-side egg", price: 15, desc: { zh: "煎至半熟的太陽蛋", en: "Fried egg with runny yolk" } },
      { zh: "薯餅", en: "Hash brown", price: 25, desc: { zh: "酥脆金黃薯餅", en: "Crispy golden hash brown patty" } },
      { zh: "德式香腸", en: "German sausage", price: 40, desc: { zh: "煎至表皮微焦的德式香腸", en: "Pan-seared German sausage with crispy skin" } },
      { zh: "鮮奶厚片", en: "Milk toast (thick cut)", price: 50, desc: { zh: "厚切吐司烤至金黃，奶香濃郁", en: "Thick-cut toast toasted golden, rich milk flavor" } },
      { zh: "檸檬蛋黃厚片", en: "Lemon curd toast (thick cut)", price: 55, desc: { zh: "自製檸檬蛋黃醬塗抹厚片吐司", en: "House-made lemon curd spread on thick toast" } },
      { zh: "發酵奶油奶酥厚片", en: "Butter crumble toast (thick cut)", price: 60, desc: { zh: "發酵奶油製成的奶酥，烤至酥脆", en: "Fermented butter crumble baked until crispy" } },
      { zh: "法國吐司佐蜂蜜", en: "French toast with honey", price: 55, desc: { zh: "蛋液浸泡後煎至金黃，淋上蜂蜜", en: "Egg-soaked bread pan-fried golden, drizzled with honey" } },
      { zh: "帶骨香腸", en: "Sausage on a stick", price: 55, desc: { zh: "帶骨香腸煎烤，方便手拿享用", en: "Bone-in sausage grilled, easy to eat by hand" } },
      { zh: "橄欖油燴菜", en: "Olive oil braised vegetables", price: 50, desc: { zh: "時令蔬菜以橄欖油慢燉", en: "Seasonal veggies slow-braised in olive oil" } },
      { zh: "卡啦雞肉", en: "Crispy fried chicken", price: 50, desc: { zh: "酥炸雞肉塊，外酥內嫩多汁", en: "Crispy fried chicken pieces, juicy inside" } },
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
  { src: "/gallery/IMG_2024.jpg", zh: "Amigos 店面外觀，木質門面溫馨迎客", en: "Amigos café exterior with cozy wooden facade" },
  { src: "/gallery/IMG_2022.jpg", zh: "熱烤三明治配融化起司與番茄，搭配新鮮沙拉", en: "Grilled sandwich with melted cheese & tomato, served with fresh salad" },
  { src: "/gallery/IMG_2023.jpg", zh: "烤三明治三角切片，搭配清爽小沙拉", en: "Toasted sandwich triangles with melted cheese & side salad" },
  { src: "/gallery/IMG_2025.jpg", zh: "多款三明治與漢堡拼盤，朋友聚餐必點", en: "Assorted sandwiches & burgers — perfect for sharing" },
  { src: "/gallery/IMG_2026.jpg", zh: "帕里尼搭配金黃酥脆薯條", en: "Grilled panini served with crispy French fries" },
  { src: "/gallery/IMG_2027.jpg", zh: "早午餐套餐：薯條、拿鐵、冰飲、煎蛋吐司與香腸", en: "Brunch set with fries, latte, iced drink, eggs, toast & sausage" },
  { src: "/gallery/IMG_2028.jpg", zh: "法式吐司早餐盤配煎蛋、沙拉與咖啡", en: "French toast platter with fried egg, salad & coffee" },
  { src: "/gallery/IMG_2029.jpg", zh: "奶油義大利麵配德式香腸，後方搭配三明治與沙拉", en: "Creamy pasta with sausages, sandwich & salad in background" },
  { src: "/gallery/IMG_2030.jpg", zh: "Amigos 街角外觀，木質裝潢與街景", en: "Corner view of Amigos with wooden panels & street scene" },
  { src: "/gallery/IMG_2031.jpg", zh: "墨西哥捲餅配薯條、湯品與沾醬", en: "Wraps with fries, soup & dipping sauces" },
  { src: "/gallery/IMG_2032.jpg", zh: "煎雞腿排早餐盤配煎蛋、吐司、蔬菜與義大利麵", en: "Grilled chicken breakfast plate with egg, toast, veggies & pasta" },
  { src: "/gallery/IMG_2033.jpg", zh: "俯拍滿桌美食：三明治、薯條、沙拉與飲品", en: "Top view of a full table spread — sandwiches, fries, salads & drinks" },
  { src: "/gallery/IMG_2034.jpg", zh: "墨西哥捲餅配薯條與新鮮沙拉，附番茄醬與莎莎醬", en: "Wraps with fries, fresh salad, ketchup & salsa" },
  { src: "/gallery/IMG_2035.jpg", zh: "豐盛全餐：義大利麵、早餐盤、吐司、飲品與甜點", en: "Full meal spread — pasta, breakfast plate, toast, drinks & dessert" },
  { src: "/gallery/IMG_2036.jpg", zh: "法式吐司撒糖粉，配煎蛋、沙拉與咖啡", en: "French toast with powdered sugar, fried egg, salad & coffee" },
  { src: "/gallery/IMG_2037.jpg", zh: "Amigos 招牌近拍，街景與機車", en: "Close-up of Amigos sign with street view" },
  { src: "/gallery/IMG_2038.jpg", zh: "簡約溫馨的店內空間，木質桌椅與柔和燈光", en: "Minimalist café interior with wooden tables & soft lighting" },
  { src: "/gallery/IMG_2039.jpg", zh: "甜味帕里尼：融化起司與香蕉內餡", en: "Sweet panini with melted cheese & banana filling" },
  { src: "/gallery/IMG_2040.jpg", zh: "安靜的用餐角落，木質裝潢與自然採光", en: "Quiet dining corner with wooden decor & natural light" },
  { src: "/gallery/IMG_2041.jpg", zh: "墨西哥起司餅切片拼盤，搭配莎莎醬", en: "Quesadilla slices arranged with salsa dip" },
  { src: "/gallery/IMG_2042.jpg", zh: "帕里尼配薯條，搭配冰咖啡", en: "Grilled panini with fries, served with a tall iced coffee" },
  { src: "/gallery/IMG_2043.jpg", zh: "套餐組合：帕里尼、薯條、雞肉沙拉、香腸與拉花拿鐵", en: "Meal set with panini, fries, chicken salad, sausages & latte art" },
];

export const CATERING_PACKAGES = [
  {
    id: "meeting",
    zh: "會議餐盒",
    en: "Meeting Box",
    descZh: "10 份起訂，含帕里尼 + 沙拉 + 飲品，適合公司會議與小型聚會。",
    descEn: "Minimum 10 boxes. Each includes a panini, salad, and drink. Great for meetings and small get-togethers.",
  },
  {
    id: "party",
    zh: "派對餐盒",
    en: "Party Platter",
    descZh: "20 人份起，帕里尼切片拼盤搭配多款配菜，適合部門聚餐與慶祝。",
    descEn: "Minimum 20 people. Sliced panini platters with assorted sides — ideal for team celebrations.",
  },
];
