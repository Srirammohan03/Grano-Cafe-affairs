// src/data/menuData.ts

import type { Category, NewMenuItem } from "../types/menu";

export const categories: Category[] = [
  { id: "all", label: "All" },

  { id: "breakfast", label: "Breakfast" },
  { id: "smoothies", label: "Smoothies" },
  { id: "soups", label: "Soups" },
  { id: "salads", label: "Salads" },

  { id: "gourmet-fries", label: "Gourmet Fries" },
  { id: "sandwiches-burger", label: "Sandwiches & Burger" },
  { id: "smokey-die-pizzas", label: "Smokey Die Pizzas" },
  { id: "pasta", label: "Pasta" },
  { id: "combo", label: "Combo" },

  { id: "veg-appetizers", label: "Veg - Appetizers" },
  { id: "nonveg-appetizers", label: "Non Veg - Appetizers" },

  { id: "main-on-your-plate", label: "Main On Your Plate" },

  { id: "coffee", label: "Coffee" },
  { id: "manual-brews", label: "Manual Brews" },
  { id: "cold-brews", label: "Cold Brews" },
  { id: "special-coffee", label: "Special Coffee" },

  { id: "iced-coffee", label: "Iced Coffee" },
  { id: "non-coffee", label: "Non Coffee" },
  { id: "fresh-juice", label: "Fresh Juice" },
  { id: "teas", label: "Teas" },
  { id: "slush", label: "Slush" },
  { id: "ice-tea", label: "Ice Tea" },
  { id: "mocktails", label: "Mocktails" },

  { id: "shakes", label: "Shakes" },
];

export const menuItems: NewMenuItem[] = [

  // BREAKFAST

  {
    id: "bf1",
    name: "Eggs Your Way (Omelette)",
    description:
      "Classic, masala, mushroom, cheese & stuffed veggie omelette. Fluffy eggs cooked to perfection with your choice of fillings.",
    price: 245,
    categoryId: "breakfast",
    slug: "eggs-your-way-omelette",
  },

  {
    id: "bf2",
    name: "Scrambled Eggs",
    description:
      "Egg with toast, chives and cherry tomato with hash brown potato.",
    price: 245,
    categoryId: "breakfast",
    slug: "scrambled-eggs",
  },

  {
    id: "bf3",
    name: "Egg Benedict",
    description:
      "English muffin, poached egg, hollandaise, chicken.",
    price: 245,
    categoryId: "breakfast",
    slug: "egg-benedict",
  },

  {
    id: "bf4",
    name: "Fried Eggs",
    description:
      "Eggs with toast and salad.",
    price: 245,
    categoryId: "breakfast",
    slug: "fried-eggs",
  },

  {
    id: "bf5",
    name: "Poached Eggs",
    description:
      "Poached eggs with toast and tossed salad.",
    price: 245,
    categoryId: "breakfast",
    slug: "poached-eggs",
  },

  {
    id: "bf6",
    name: "Roasted Chicken Toast",
    description:
      "Sourdough with ranch dressing, caramelized onion & chicken almond butter toast.",
    price: 295,
    categoryId: "breakfast",
    slug: "roasted-chicken-toast",
  },

  {
    id: "bf7",
    name: "French Toast",
    description:
      "Brioche bread with vanilla flavoured toast, maple syrup & fresh fruits topped with scoop of vanilla cream.",
    price: 295,
    categoryId: "breakfast",
    slug: "french-toast",
  },

  {
    id: "bf8",
    name: "Dutch Baby Pancake",
    description:
      "Pancake with maple syrup, blueberry topping with scoop of vanilla ice cream.",
    price: 295,
    categoryId: "breakfast",
    slug: "dutch-baby-pancake",
  },

  {
    id: "bf9",
    name: "Classic English Breakfast",
    description:
      "A hearty platter of eggs, sausage, baked beans, tomato confit & toast.",
    price: 395,
    categoryId: "breakfast",
    slug: "classic-english-breakfast",
  },

  {
    id: "bf10",
    name: "Quinoa Upma With Coconut Chutney",
    description:
      "A wholesome twist on a classic quinoa upma with veggies and spices.",
    price: 275,
    categoryId: "breakfast",
    slug: "quinoa-upma",
  },

  {
    id: "bf11",
    name: "Grain Free Poha With Coconut Chutney",
    description:
      "Cauliflower poha tossed with roasted peanuts, sautéed onions, coriander & pomegranate seeds.",
    price: 275,
    categoryId: "breakfast",
    slug: "grain-free-poha",
  },

  {
    id: "bf12",
    name: "Crepes",
    description:
      "Caramelized strawberry crepes with seasonal fruits, cream cheese, Nutella & icing sugar.",
    price: 325,
    categoryId: "breakfast",
    slug: "crepes",
  },

  {
    id: "bf13",
    name: "Mushroom Avocado Toast",
    description:
      "Brown bread with mushroom & seasoned avocado served with side salad.",
    price: 395,
    categoryId: "breakfast",
    slug: "mushroom-avocado-toast",
  },

  {
    id: "bf14",
    name: "Guacamole Avocado On Toast",
    description:
      "Spicy guacamole avocado served on multigrain bread.",
    price: 395,
    categoryId: "breakfast",
    slug: "guacamole-avocado-toast",
  },

  {
    id: "bf15",
    name: "Bagels",
    description:
      "Bagels served with eggs, cream or chicken.",
    price: "195 / 245 / 295",
    categoryId: "breakfast",
    slug: "bagels",
  },
  //Smoothies
  {
  id: "sm1",
  name: "Green Smoothie",
  description:
    "Fresh banana, palak, coconut milk, mint, basil leaf, parsley leaf, lemon juice & cinnamon powder.",
  price: 345,
  categoryId: "smoothies",
  slug: "green-smoothie",
},

{
  id: "sm2",
  name: "Berryblast",
  description:
    "Mixed berries blueberry frozen, strawberry frozen, raspberry frozen with banana frozen & orange.",
  price: 395,
  categoryId: "smoothies",
  slug: "berryblast",
},

{
  id: "sm3",
  name: "Banana Chocolate",
  description:
    "Fresh banana, almond milk, dates, cocoa powder & chocolate almond butter.",
  price: 375,
  categoryId: "smoothies",
  slug: "banana-chocolate",
},

//Soups
{
  id: "sp1",
  name: "Wild Mushroom Creamy Paprika Soup",
  description:
    "A rich & velvety soup, brimming with wild mushroom & a hint of smoky paprika.",
  price: 195,
  categoryId: "soups",
  slug: "wild-mushroom-creamy-paprika-soup",
},

{
  id: "sp2",
  name: "Asian Slices Soba Noodles Soup With Sprouts",
  description:
    "A flavourful Asian-inspired soup with hearty soba noodles, fresh sprouts & savoury broth.",
  price: "295 / 395",
  categoryId: "soups",
  slug: "asian-slices-soba-noodles-soup",
},

//Salads
{
  id: "sa1",
  name: "Mexican Salad Veg & Non-Veg",
  description:
    "A vibrant mix of fresh greens, beans, corn & zesty salsa, bursting with old Mexican flavours.",
  price: "295 / 395",
  categoryId: "salads",
  slug: "mexican-salad",
},

{
  id: "sa2",
  name: "Classic Caesar Salad Veg & Non-Veg",
  description:
    "Crispy romaine lettuce, crunchy croutons & parmesan cheese tossed in a creamy Caesar dressing.",
  price: "295 / 445",
  categoryId: "salads",
  slug: "classic-caesar-salad",
},

{
  id: "sa3",
  name: "Watermelon & Feta Cheese Salad",
  description:
    "Refreshing watermelon cubes paired with creamy feta, fresh mint, super seeds & a drizzle of tangy dressing.",
  price: 335,
  categoryId: "salads",
  slug: "watermelon-feta-cheese-salad",
},
//Gourmet Fries
{
  id: "gf1",
  name: "Regular Fries",
  description: "Classic crispy golden fries.",
  price: 195,
  categoryId: "gourmet-fries",
  slug: "regular-fries"
},

{
  id: "gf2",
  name: "Chilli Cheese Fries / Chicken",
  description: "Crispy fries topped with spicy chilli sauce and melted cheese with optional chicken.",
  price: "225 / 245",
  categoryId: "gourmet-fries",
  slug: "chilli-cheese-fries"
},

{
  id: "gf3",
  name: "Peri Peri Fries",
  description: "Crispy fries tossed in spicy peri peri seasoning.",
  price: 215,
  categoryId: "gourmet-fries",
  slug: "peri-peri-fries"
},

{
  id: "gf4",
  name: "Potato Wedges / Peri Peri",
  description: "Golden potato wedges seasoned with peri peri spices.",
  price: "205 / 225",
  categoryId: "gourmet-fries",
  slug: "potato-wedges"
},

//Sandwiches & Burger
{
  id: "sb1",
  name: "Plain / Cheesy Garlic Bread",
  description:
    "Warm toasted garlic bread topped with melted cheese delivering a perfect blend of savoury and cheesy goodness. Served with your choice of fillings.",
  price: "145 / 195",
  categoryId: "sandwiches-burger",
  slug: "plain-cheesy-garlic-bread"
},

{
  id: "sb2",
  name: "Chilli Cheese Toast",
  description:
    "Crispy toasted bread topped with creamy melting cheese blend seasoned perfectly for a savoury snack.",
  price: 195,
  categoryId: "sandwiches-burger",
  slug: "chilli-cheese-toast"
},

{
  id: "sb3",
  name: "Panini Chicken Parmesan",
  description:
    "Grilled panini filled with tender chicken, melted parmesan and savoury marinara sauce.",
  price: 445,
  categoryId: "sandwiches-burger",
  slug: "panini-chicken-parmesan"
},

{
  id: "sb4",
  name: "Guacamole Grilled Cheese Toast",
  description:
    "Creamy guacamole and gooey melted cheese sandwiched between golden crispy toasted bread.",
  price: 395,
  categoryId: "sandwiches-burger",
  slug: "guacamole-grilled-cheese-toast"
},

{
  id: "sb5",
  name: "Chicken Tikka Sandwich",
  description:
    "Juicy chicken tikka layered with fresh veggies and creamy spread in perfectly toasted bread.",
  price: 395,
  categoryId: "sandwiches-burger",
  slug: "chicken-tikka-sandwich"
},

{
  id: "sb6",
  name: "Crispy Fried Veg Burger",
  description:
    "Crispy veggie patty with fresh lettuce and tangy mayo packed in a soft toasted bun.",
  price: 345,
  categoryId: "sandwiches-burger",
  slug: "crispy-fried-veg-burger"
},

{
  id: "sb7",
  name: "Big Daddy Cheese Burger (Double Deck)",
  description:
    "Towering double deck burger loaded with juicy patties, melted cheese and classic toppings.",
  price: 475,
  categoryId: "sandwiches-burger",
  slug: "big-daddy-cheese-burger"
},

{
  id: "sb8",
  name: "Crispy Fried Chicken Burger",
  description:
    "Crispy fried chicken with fresh lettuce and creamy mayo stacked in a soft toasted bun.",
  price: 395,
  categoryId: "sandwiches-burger",
  slug: "crispy-fried-chicken-burger"
},

{
  id: "sb9",
  name: "Special Lamb Burger",
  description:
    "Juicy lamb patty with caramelized onion and signature sauce in a soft gourmet bun.",
  price: 495,
  categoryId: "sandwiches-burger",
  slug: "special-lamb-burger"
},
//Smokey Die Pizzas
{
  id: "pz1",
  name: "Margherita Pizza",
  description:
    "A timeless Margherita pizza with fresh mozzarella, basil and a flavourful tomato sauce on a crispy thin crust.",
  price: 445,
  categoryId: "smokey-die-pizzas",
  slug: "margherita-pizza"
},

{
  id: "pz2",
  name: "Farm Fresh Pizza",
  description:
    "A vibrant farm fresh pizza topped with a medley of seasonal veggies and melted cheese on a crispy crust.",
  price: 495,
  categoryId: "smokey-die-pizzas",
  slug: "farm-fresh-pizza"
},

{
  id: "pz3",
  name: "Mexican Pizza",
  description:
    "A zesty Mexican pizza loaded with spicy salsa, seasoned meat, beans, cheese and fresh toppings on a crunchy crust.",
  price: 495,
  categoryId: "smokey-die-pizzas",
  slug: "mexican-pizza"
},

{
  id: "pz4",
  name: "Green Garden Veg Pizza",
  description:
    "A fresh vibrant garden green pizza topped with seasonal veggies and herbs drizzled with light olive oil dressing.",
  price: 545,
  categoryId: "smokey-die-pizzas",
  slug: "green-garden-veg-pizza"
},

{
  id: "pz5",
  name: "BBQ Chicken Pizza",
  description:
    "Smoky BBQ chicken with melted cheese and savoury toppings on a crispy pizza crust.",
  price: 575,
  categoryId: "smokey-die-pizzas",
  slug: "bbq-chicken-pizza"
},

{
  id: "pz6",
  name: "Chicken Pepperoni Pizza",
  description:
    "A flavourful pizza topped with tender chicken, spicy pepperoni, melted cheese and savoury seasoning.",
  price: 575,
  categoryId: "smokey-die-pizzas",
  slug: "chicken-pepperoni-pizza"
},

{
  id: "pz7",
  name: "Peri Peri Chicken Pizza",
  description:
    "A bold spicy pizza featuring tender peri peri chicken, melted cheese and a tangy kick of seasoning.",
  price: 575,
  categoryId: "smokey-die-pizzas",
  slug: "peri-peri-chicken-pizza"
},

{
  id: "pz8",
  name: "Tandoori Corona Chicken Tikka Pizza",
  description:
    "A fusion pizza featuring smoky tandoori chicken tikka, rich cheese and aromatic spices.",
  price: 595,
  categoryId: "smokey-die-pizzas",
  slug: "tandoori-corona-chicken-tikka-pizza"
},

{
  id: "pz9",
  name: "Lamb Keema Pizza",
  description:
    "A savoury pizza topped with spiced lamb keema, melted cheese and aromatic seasonings.",
  price: 675,
  categoryId: "smokey-die-pizzas",
  slug: "lamb-keema-pizza"
},
//Pasta
{
  id: "ps1",
  name: "Mac & Cheese Baked Pasta",
  description:
    "Creamy mac & cheese pasta baked to golden perfection with crispy top.",
  price: "375 / 445",
  categoryId: "pasta",
  slug: "mac-cheese-baked-pasta",
},

{
  id: "ps2",
  name: "Penne Creamy Alfredo",
  description:
    "Penne pasta coated in a rich velvety creamy white sauce for a comforting delight.",
  price: "375 / 425",
  categoryId: "pasta",
  slug: "penne-creamy-alfredo",
},

{
  id: "ps3",
  name: "Penne Arrabbiata",
  description:
    "Penne pasta in a fiery tangy arrabbiata sauce made with tomatoes, garlic & red chilli flakes.",
  price: "375 / 425",
  categoryId: "pasta",
  slug: "penne-arrabbiata",
},

{
  id: "ps4",
  name: "Spaghetti Chicken Carbonara",
  description:
    "Spaghetti tossed in creamy carbonara sauce with tender chicken and parmesan.",
  price: "375 / 425",
  categoryId: "pasta",
  slug: "spaghetti-chicken-carbonara",
},

{
  id: "ps5",
  name: "Spaghetti Aglio Olio Pepperoncini",
  description:
    "Spaghetti tossed in fragrant olive oil, garlic & pepperoncini sauce finished with a hint of chilli.",
  price: "375 / 425",
  categoryId: "pasta",
  slug: "spaghetti-aglio-olio-pepperoncini",
},

{
  id: "ps6",
  name: "Spaghetti Porcini Mushroom Cream",
  description:
    "Spaghetti in a rich creamy sauce with earthy porcini mushroom for a luxurious flavor.",
  price: "375 / 425",
  categoryId: "pasta",
  slug: "spaghetti-porcini-mushroom-cream",
},

{
  id: "ps7",
  name: "Zoodles Pasta In Rosey Sauce",
  description:
    "A healthy twist on pasta with zucchini noodles in a rich creamy pink sauce.",
  price: "375 / 425",
  categoryId: "pasta",
  slug: "zoodles-pasta-rosey-sauce",
},
//Combo
{
  id: "cb1",
  name: "Meze Platter - Veg",
  description:
    "Italian & Asian. Any four items from veg starters.",
  price: "1095",
  categoryId: "combo",
  slug: "meze-platter-veg",
},

{
  id: "cb2",
  name: "Meze Platter - Non Veg",
  description:
    "Italian & Asian. Any four items from non-veg starters.",
  price: "1695",
  categoryId: "combo",
  slug: "meze-platter-non-veg",
},
//Veg Appetizers
{
  id: "va1",
  name: "Tandoor Crunchy Quesadillas Paneer",
  description:
    "Grilled quesadilla filled with spiced tandoori paneer & crunchy veggies, served golden and crisp.",
  price: 375,
  categoryId: "veg-appetizers",
  slug: "tandoor-crunchy-quesadillas-paneer"
},

{
  id: "va2",
  name: "Buttermilk Fried Paneer",
  description:
    "Soft paneer steak marinated with secret spices and buttermilk, coated and fried to crispy golden perfection.",
  price: 395,
  categoryId: "veg-appetizers",
  slug: "buttermilk-fried-paneer"
},

{
  id: "va3",
  name: "Crispy Lotus Stem With Red Chilli",
  description:
    "Crunchy lotus stem tossed in a bold and spicy red chilli glaze for a flavourful kick.",
  price: 375,
  categoryId: "veg-appetizers",
  slug: "crispy-lotus-stem-red-chilli"
},

{
  id: "va4",
  name: "Paprika Hummus Beiruti With Pita Bread",
  description:
    "Silky smooth paprika hummus beiruti paired with warm fluffy pita bread for a classic Middle Eastern delight.",
  price: 295,
  categoryId: "veg-appetizers",
  slug: "paprika-hummus-beiruti-pita"
},

{
  id: "va5",
  name: "Wok-Tossed Chilli Paneer",
  description:
    "Soft paneer cubes wok tossed in spicy chilli sauce with vibrant peppers and aromatic spices.",
  price: 375,
  categoryId: "veg-appetizers",
  slug: "wok-tossed-chilli-paneer"
},

{
  id: "va6",
  name: "Dragon Chilli Mushroom",
  description:
    "Fiery mushroom tossed in bold dragon chilli sauce packed with spice and flavour.",
  price: 375,
  categoryId: "veg-appetizers",
  slug: "dragon-chilli-mushroom"
},

{
  id: "va7",
  name: "Mexican Tacos Veg",
  description:
    "Crunchy taco shell filled with seasoned veggies topped with zesty salsa and fresh garnishes.",
  price: 345,
  categoryId: "veg-appetizers",
  slug: "mexican-tacos-veg"
},

{
  id: "va8",
  name: "Cuite Formage Nachos",
  description:
    "Crispy nachos topped with melted cheese, jalapenos and savoury toppings for a delightful snack.",
  price: 395,
  categoryId: "veg-appetizers",
  slug: "cuite-formage-nachos"
},

{
  id: "va9",
  name: "Creamy Spinach Dip",
  description:
    "Creamy cheese dip served with paprika flavoured crispy pita chips.",
  price: 375,
  categoryId: "veg-appetizers",
  slug: "creamy-spinach-dip"
},

{
  id: "va10",
  name: "Plain Nachos With Sour Cream, Mexican Salsa & Guacamole",
  description:
    "Crunchy nachos served with creamy sour cream, tangy Mexican salsa and fresh guacamole.",
  price: 395,
  categoryId: "veg-appetizers",
  slug: "plain-nachos-sour-cream-salsa-guacamole"
},

{
  id: "va11",
  name: "Gun Powder Paneer",
  description:
    "Paneer cubes coated in smoky gun powder spices offering a bold aromatic taste.",
  price: 395,
  categoryId: "veg-appetizers",
  slug: "gun-powder-paneer"
},

{
  id: "va12",
  name: "Cheese Dips Platter - Broccoli, Spinach, Vegetables, Button Mushroom",
  description:
    "A creamy cheesy dip platter featuring broccoli, spinach, mushrooms and vegetables served with flavoured breads and sauces.",
  price: 445,
  categoryId: "veg-appetizers",
  slug: "cheese-dips-platter"
},

{
  id: "va13",
  name: "Mozzarella Cheese Sticks",
  description:
    "Crumb fried mozzarella finger sticks served with chilli mayo.",
  price: 335,
  categoryId: "veg-appetizers",
  slug: "mozzarella-cheese-sticks"
},

{
  id: "va14",
  name: "Jalapeno Cottage Cheese Ball",
  description:
    "Creamy cottage cheese balls with a spicy jalapeno kick perfect for dipping and snacking.",
  price: 295,
  categoryId: "veg-appetizers",
  slug: "jalapeno-cottage-cheese-ball"
},
//Non Veg Appetizers
{
  id: "nva1",
  name: "Tandoor Crunchy Chicken Quesadillas",
  description:
    "Grilled quesadilla packed with spiced tandoori chicken and crunchy veggies, served golden.",
  price: 445,
  categoryId: "nonveg-appetizers",
  slug: "tandoor-crunchy-chicken-quesadillas",
},

{
  id: "nva2",
  name: "Buttermilk Fried Chicken",
  description:
    "Juicy chicken marinated with secret spices and buttermilk, coated and fried to golden crispy perfection.",
  price: 495,
  categoryId: "nonveg-appetizers",
  slug: "buttermilk-fried-chicken",
},

{
  id: "nva3",
  name: "Soya Chilli Fish",
  description:
    "Tender fish chunks tossed in a spicy soy-chilli sauce infused with bold tangy flavors.",
  price: 445,
  categoryId: "nonveg-appetizers",
  slug: "soya-chilli-fish",
},

{
  id: "nva4",
  name: "Deep Fried Fish Fingers",
  description:
    "Golden crisp fish fingers served with a tangy dipping sauce.",
  price: 475,
  categoryId: "nonveg-appetizers",
  slug: "deep-fried-fish-fingers",
},

{
  id: "nva5",
  name: "Crispy Fried Prawns",
  description:
    "Crunchy golden fried prawns paired with a zesty dipping sauce.",
  price: 495,
  categoryId: "nonveg-appetizers",
  slug: "crispy-fried-prawns",
},

{
  id: "nva6",
  name: "Hot Pepper Basil Chicken",
  description:
    "Spicy aromatic chicken stir fried with pepper and fresh basil.",
  price: 445,
  categoryId: "nonveg-appetizers",
  slug: "hot-pepper-basil-chicken",
},

{
  id: "nva7",
  name: "BBQ Chicken Wings",
  description:
    "Juicy chicken wings coated in smoky tangy BBQ sauce.",
  price: 375,
  categoryId: "nonveg-appetizers",
  slug: "bbq-chicken-wings",
},

{
  id: "nva8",
  name: "Buffalo Chicken Wings",
  description:
    "Tender juicy chicken wings coated in bold spicy sauce for a fiery flavor.",
  price: 395,
  categoryId: "nonveg-appetizers",
  slug: "buffalo-chicken-wings",
},

{
  id: "nva9",
  name: "Peri Peri Chicken Wings",
  description:
    "Spicy zesty peri-peri chicken wings packed with bold fiery flavors.",
  price: 375,
  categoryId: "nonveg-appetizers",
  slug: "peri-peri-chicken-wings",
},

{
  id: "nva10",
  name: "Drums Of Heaven",
  description:
    "Crispy chicken lollipops tossed in tangy spicy Indo-Chinese sauce.",
  price: 375,
  categoryId: "nonveg-appetizers",
  slug: "drums-of-heaven",
},

{
  id: "nva11",
  name: "Honey Chilli Chicken",
  description:
    "Sweet and spicy honey chilli chicken with a crispy flavorful coating.",
  price: 475,
  categoryId: "nonveg-appetizers",
  slug: "honey-chilli-chicken",
},

{
  id: "nva12",
  name: "Kung Pao Prawns",
  description:
    "Stir fried prawns with peanuts, veggies and savory spicy kung pao sauce.",
  price: 475,
  categoryId: "nonveg-appetizers",
  slug: "kung-pao-prawns",
},

{
  id: "nva13",
  name: "Gun Powder Chicken",
  description:
    "Succulent chicken coated in a fiery blend of South Indian gun powder spices.",
  price: 495,
  categoryId: "nonveg-appetizers",
  slug: "gun-powder-chicken",
},

{
  id: "nva14",
  name: "Mexican Tacos Chicken",
  description:
    "Soft tacos filled with seasoned chicken, fresh veggies and zesty Mexican toppings.",
  price: 445,
  categoryId: "nonveg-appetizers",
  slug: "mexican-tacos-chicken",
},

{
  id: "nva15",
  name: "Chicken Nachos With Sour Cream, Mexican Salsa & Guacamole",
  description:
    "Crunchy nachos topped with seasoned chicken served with sour cream, Mexican salsa and fresh guacamole.",
  price: 445,
  categoryId: "nonveg-appetizers",
  slug: "chicken-nachos",
},

{
  id: "nva16",
  name: "Chicken Tigania With Pita Bread",
  description:
    "Savory Greek-style chicken sauteed with herbs served with warm pita bread.",
  price: 445,
  categoryId: "nonveg-appetizers",
  slug: "chicken-tigania-pita-bread",
},

{
  id: "nva17",
  name: "Jamaican Jerk Chicken",
  description:
    "Italian herbs chicken marination oven roast.",
  price: 475,
  categoryId: "nonveg-appetizers",
  slug: "jamaican-jerk-chicken",
},

{
  id: "nva18",
  name: "Teriyaki Chicken",
  description:
    "Tender chicken bites tossed with bell peppers and onions coated in flavorful teriyaki glaze.",
  price: 475,
  categoryId: "nonveg-appetizers",
  slug: "teriyaki-chicken",
},

{
  id: "nva19",
  name: "Special Crunchy Fried Prawns",
  description:
    "Crispy golden prawns marinated in homemade mustard sauce coated in seasoned crumb fried batter.",
  price: 525,
  categoryId: "nonveg-appetizers",
  slug: "special-crunchy-fried-prawns",
},
//Main On Your Plate
{
  id: "mp1",
  name: "Sauteed Mushroom In Lemon Sauce",
  description:
    "Tender sauteed mushroom tossed in a zesty lemon sauce served with creamy mashed potatoes, quinoa, roasted sweet potato or herbed rice.",
  price: 495,
  categoryId: "main-on-your-plate",
  slug: "sauteed-mushroom-lemon-sauce"
},

{
  id: "mp2",
  name: "Cottage Cheese In Spicy Paprika Sauce / BBQ Sauce",
  description:
    "Soft cottage cheese steak simmered in rich spicy paprika sauce or smokey BBQ sauce.",
  price: 525,
  categoryId: "main-on-your-plate",
  slug: "cottage-cheese-paprika-bbq"
},

{
  id: "mp3",
  name: "Roasted Exotic Vegetables With Buffalo Mozzarella Cheese",
  description:
    "Oven roasted exotic vegetables topped with buffalo mozzarella cheese.",
  price: 475,
  categoryId: "main-on-your-plate",
  slug: "roasted-exotic-vegetables-buffalo-mozzarella"
},

{
  id: "mp4",
  name: "Baked Stuffed Chicken With Chicken Sausage / Sauteed Button Mushroom",
  description:
    "Juicy baked chicken stuffed with savoury chicken sausage or tender button mushroom.",
  price: 525,
  categoryId: "main-on-your-plate",
  slug: "baked-stuffed-chicken"
},

{
  id: "mp5",
  name: "Roasted Vegetables In Chicken",
  description:
    "Tender roasted vegetables wrapped in succulent chicken seasoned to perfection.",
  price: 525,
  categoryId: "main-on-your-plate",
  slug: "roasted-vegetables-chicken"
},

{
  id: "mp6",
  name: "Spicy BBQ Chicken Cheese Fillet",
  description:
    "Juicy chicken fillet smothered in spicy BBQ sauce topped with melted cheese.",
  price: 525,
  categoryId: "main-on-your-plate",
  slug: "spicy-bbq-chicken-cheese-fillet"
},

{
  id: "mp7",
  name: "Poached Fish With Lemon Capers Sauce",
  description:
    "Delicate poached fish drizzled with tangy lemon capers sauce.",
  price: 575,
  categoryId: "main-on-your-plate",
  slug: "poached-fish-lemon-capers"
},

{
  id: "mp8",
  name: "Fish & Chips With Tartar Sauce",
  description:
    "Crispy golden fish and chips served with creamy tangy tartar sauce.",
  price: 545,
  categoryId: "main-on-your-plate",
  slug: "fish-chips-tartar"
},

{
  id: "mp9",
  name: "Bok Choy & Broccoli Noodles With Gravy Combo Style (Paneer / Chicken / Sea Food)",
  description:
    "Stir fried noodles with bok choy and broccoli tossed in customised savoury gravy sauce.",
  price: "345 / 395 / 445",
  categoryId: "main-on-your-plate",
  slug: "bok-choy-broccoli-noodles"
},

{
  id: "mp10",
  name: "Kung Pao Bowl (Paneer & Chicken)",
  description:
    "Zesty mix of paneer or chicken in spicy gravy served over rice.",
  price: "335 / 445",
  categoryId: "main-on-your-plate",
  slug: "kung-pao-bowl"
},

{
  id: "mp11",
  name: "Special Chicken Cannelloni",
  description:
    "Tender cannelloni filled with creamy chicken and spinach baked in rich tomato sauce topped with cheese.",
  price: 525,
  categoryId: "main-on-your-plate",
  slug: "special-chicken-cannelloni"
},

{
  id: "mp12",
  name: "Veg Lasagna",
  description:
    "Layers of vegetables, creamy sauce and cheese baked together.",
  price: 475,
  categoryId: "main-on-your-plate",
  slug: "veg-lasagna"
},

{
  id: "mp13",
  name: "Chicken Lasagna",
  description:
    "Layers of chicken, tomato sauce and cheese baked to perfection.",
  price: 525,
  categoryId: "main-on-your-plate",
  slug: "chicken-lasagna"
},

{
  id: "mp14",
  name: "Lamb Lasagna",
  description:
    "Layers of lamb, rich sauce and cheese baked until golden.",
  price: 595,
  categoryId: "main-on-your-plate",
  slug: "lamb-lasagna"
},

{
  id: "mp15",
  name: "Ramen Bowl With Soba Noodles (Veg / Non Veg)",
  description:
    "Hearty ramen bowl with flavorful broth, fresh veggies and soba noodles.",
  price: "395 / 445",
  categoryId: "main-on-your-plate",
  slug: "ramen-bowl-soba-noodles"
},

{
  id: "mp16",
  name: "Fried Rice With Gravy Combo Style (Paneer / Chicken / Sea Food)",
  description:
    "Wok tossed fried rice with exotic flavours, veggies and choice of protein served with gravy.",
  price: "345 / 395 / 445",
  categoryId: "main-on-your-plate",
  slug: "fried-rice-gravy-combo"
},
{
  id: "mp17",
  name: "Grilled Chicken Steak",
  description:
    "Chicken marinated with Dijon mustard served with grilled vegetables and mushroom sauce with herb rice or mashed potato.",
  price: 525,
  categoryId: "main-on-your-plate",
  slug: "grilled-chicken-steak",
},

{
  id: "mp18",
  name: "Mexican Bowl Chicken",
  description:
    "Flavorful Mexican rice infused with peri-peri spices served with beans and corn tossed in tangy peri-peri sauce topped with grilled chicken.",
  price: 525,
  categoryId: "main-on-your-plate",
  slug: "mexican-bowl-chicken",
},
//Coffee
{
  id: "cf1",
  name: "Espresso",
  description: "Classic strong espresso shot.",
  price: 160,
  categoryId: "coffee",
  slug: "espresso",
},

{
  id: "cf2",
  name: "Americano (Hot / Cold)",
  description: "Espresso diluted with hot or cold water for a smooth coffee.",
  price: 180,
  categoryId: "coffee",
  slug: "americano",
},

{
  id: "cf3",
  name: "Long Black (Hot / Cold)",
  description: "Rich espresso poured over hot water for bold flavour.",
  price: 180,
  categoryId: "coffee",
  slug: "long-black",
},

{
  id: "cf4",
  name: "Aerocano",
  description: "Aerated espresso drink with smooth creamy texture.",
  price: 190,
  categoryId: "coffee",
  slug: "aerocano",
},

{
  id: "cf5",
  name: "Flat White",
  description: "Velvety microfoam milk with espresso.",
  price: 230,
  categoryId: "coffee",
  slug: "flat-white",
},

{
  id: "cf6",
  name: "Cortado",
  description: "Equal parts espresso and warm milk.",
  price: 210,
  categoryId: "coffee",
  slug: "cortado",
},

{
  id: "cf7",
  name: "Cappuccino (Regular / Large)",
  description:
    "Classic cappuccino. Flavours available: Irish, Hazelnut, Caramel, Brown Butter (extra ₹60).",
  price: "230 / 260",
  categoryId: "coffee",
  slug: "cappuccino",
},

{
  id: "cf8",
  name: "Latte (Hot / Cold)",
  description: "Smooth espresso with steamed milk.",
  price: 230,
  categoryId: "coffee",
  slug: "latte",
},

{
  id: "cf9",
  name: "Mocha (Hot / Cold)",
  description: "Espresso with chocolate and milk.",
  price: 270,
  categoryId: "coffee",
  slug: "mocha",
},

{
  id: "cf10",
  name: "Spanish Latte (Hot / Cold)",
  description: "Sweet condensed milk latte.",
  price: 270,
  categoryId: "coffee",
  slug: "spanish-latte",
},

{
  id: "cf11",
  name: "Vietnamese Coffee (Hot / Cold)",
  description: "Strong Vietnamese style coffee with condensed milk.",
  price: 270,
  categoryId: "coffee",
  slug: "vietnamese-coffee",
},

{
  id: "cf12",
  name: "South Indian Coffee",
  description: "Traditional South Indian filter coffee.",
  price: 145,
  categoryId: "coffee",
  slug: "south-indian-coffee",
},
//Manual Brews
{
  id: "mb1",
  name: "V60 (Hot / Cold)",
  description: "Manual pour-over coffee brewed using V60 dripper.",
  price: 270,
  categoryId: "manual-brews",
  slug: "v60",
},

{
  id: "mb2",
  name: "Aero Press",
  description: "Smooth and rich coffee brewed using AeroPress.",
  price: 270,
  categoryId: "manual-brews",
  slug: "aero-press",
},

{
  id: "mb3",
  name: "French Press",
  description: "Classic immersion brew coffee with bold flavour.",
  price: 270,
  categoryId: "manual-brews",
  slug: "french-press",
},
//Cold Brew
{
  id: "cbw1",
  name: "Straight Up Cold Brew",
  description: "Classic straight cold brew coffee served chilled.",
  price: 210,
  categoryId: "cold-brews",
  slug: "straight-up-cold-brew",
},

{
  id: "cbw2",
  name: "Hibiscus Cold Brew",
  description: "Refreshing cold brew infused with hibiscus notes.",
  price: 250,
  categoryId: "cold-brews",
  slug: "hibiscus-cold-brew",
},

{
  id: "cbw3",
  name: "Orange Cold Brew",
  description: "Cold brew infused with bright citrus orange flavour.",
  price: 270,
  categoryId: "cold-brews",
  slug: "orange-cold-brew",
},

{
  id: "cbw4",
  name: "Cranberry Cold Brew",
  description: "Cold brew blended with tart cranberry flavour.",
  price: 250,
  categoryId: "cold-brews",
  slug: "cranberry-cold-brew",
},

{
  id: "cbw5",
  name: "Green Apple Cold Brew",
  description: "Cold brew coffee with crisp green apple flavour.",
  price: 390,
  categoryId: "cold-brews",
  slug: "green-apple-cold-brew",
},

{
  id: "cbw6",
  name: "Pink Grape Cold Brew",
  description: "Refreshing cold brew with pink grape notes.",
  price: 250,
  categoryId: "cold-brews",
  slug: "pink-grape-cold-brew",
},

{
  id: "cbw7",
  name: "Honey Cinnamon Cold Brew",
  description: "Cold brew infused with honey sweetness and cinnamon spice.",
  price: 270,
  categoryId: "cold-brews",
  slug: "honey-cinnamon-cold-brew",
},

{
  id: "cbw8",
  name: "Caramel Hazelnut Cream Cold Brew",
  description: "Smooth cold brew topped with caramel hazelnut cream.",
  price: 250,
  categoryId: "cold-brews",
  slug: "caramel-hazelnut-cream-cold-brew",
},

{
  id: "cbw9",
  name: "Orange Vietnamese Shakerato",
  description: "Vietnamese style shaken coffee with citrus orange flavour.",
  price: 270,
  categoryId: "cold-brews",
  slug: "orange-vietnamese-shakerato",
},

{
  id: "cbw10",
  name: "Cookie Cream Cold Brew",
  description: "Cold brew blended with cookie cream flavour.",
  price: 250,
  categoryId: "cold-brews",
  slug: "cookie-cream-cold-brew",
},
//Special Coffee
{
  id: "sc1",
  name: "Orange Latte (Hot)",
  description: "Hot latte infused with orange flavour.",
  price: 280,
  categoryId: "special-coffee",
  slug: "orange-latte",
},

{
  id: "sc2",
  name: "Orange Iced Black",
  description: "Iced black coffee with refreshing orange notes.",
  price: 270,
  categoryId: "special-coffee",
  slug: "orange-iced-black",
},

{
  id: "sc3",
  name: "Tonic Espresso",
  description: "Espresso served with tonic water for a refreshing drink.",
  price: 230,
  categoryId: "special-coffee",
  slug: "tonic-espresso",
},

{
  id: "sc4",
  name: "Cranberry Espresso",
  description: "Espresso infused with cranberry flavour.",
  price: 250,
  categoryId: "special-coffee",
  slug: "cranberry-espresso",
},

{
  id: "sc5",
  name: "Guava Espresso",
  description: "Espresso blended with tropical guava flavour.",
  price: 250,
  categoryId: "special-coffee",
  slug: "guava-espresso",
},

{
  id: "sc6",
  name: "Litchi Espresso",
  description: "Espresso infused with sweet litchi flavour.",
  price: 250,
  categoryId: "special-coffee",
  slug: "litchi-espresso",
},
//Iced Coffee
{
  id: "ic1",
  name: "Cold Coffee",
  description: "Classic chilled coffee served smooth and refreshing.",
  price: 270,
  categoryId: "iced-coffee",
  slug: "cold-coffee",
},

{
  id: "ic2",
  name: "Raspberry Biscoff Cold Coffee",
  description: "Cold coffee blended with raspberry and biscoff flavours.",
  price: 345,
  categoryId: "iced-coffee",
  slug: "raspberry-biscoff-cold-coffee",
},

{
  id: "ic3",
  name: "Brown Butter Iced Latte",
  description: "Iced latte infused with rich brown butter flavour.",
  price: 270,
  categoryId: "iced-coffee",
  slug: "brown-butter-iced-latte",
},

{
  id: "ic4",
  name: "Hazelnut Ice Latte",
  description: "Smooth iced latte with hazelnut flavour.",
  price: 270,
  categoryId: "iced-coffee",
  slug: "hazelnut-ice-latte",
},

{
  id: "ic5",
  name: "Vanilla Ice Latte",
  description: "Classic iced latte with sweet vanilla flavour.",
  price: 270,
  categoryId: "iced-coffee",
  slug: "vanilla-ice-latte",
},

{
  id: "ic6",
  name: "Caramel Ice Latte",
  description: "Refreshing iced latte with caramel flavour.",
  price: 270,
  categoryId: "iced-coffee",
  slug: "caramel-ice-latte",
},

{
  id: "ic7",
  name: "Chocolate Frappe",
  description: "Creamy blended iced chocolate coffee drink.",
  price: 320,
  categoryId: "iced-coffee",
  slug: "chocolate-frappe",
},

{
  id: "ic8",
  name: "Biscoff Frappe",
  description: "Blended iced coffee with rich biscoff flavour.",
  price: 320,
  categoryId: "iced-coffee",
  slug: "biscoff-frappe",
},

{
  id: "ic9",
  name: "Mocha Freeze",
  description: "Iced mocha coffee blended with chocolate.",
  price: 290,
  categoryId: "iced-coffee",
  slug: "mocha-freeze",
},

{
  id: "ic10",
  name: "Caramel Freeze",
  description: "Blended iced coffee with caramel flavour.",
  price: 290,
  categoryId: "iced-coffee",
  slug: "caramel-freeze",
},

{
  id: "ic11",
  name: "Mocha Biscoff Freeze",
  description: "Rich mocha coffee blended with biscoff flavour.",
  price: 320,
  categoryId: "iced-coffee",
  slug: "mocha-biscoff-freeze",
},
//Non-Coffee
{
  id: "nc1",
  name: "Dark Hot Chocolate (Hot / Cold)",
  description: "Rich dark chocolate drink served hot or cold.",
  price: 350,
  categoryId: "non-coffee",
  slug: "dark-hot-chocolate",
},

{
  id: "nc2",
  name: "White Hot Chocolate (Hot / Cold)",
  description: "Creamy white chocolate drink served hot or cold.",
  price: 350,
  categoryId: "non-coffee",
  slug: "white-hot-chocolate",
},

{
  id: "nc3",
  name: "Hot Chocolate Matcha (White / Dark)",
  description: "Matcha blended with hot chocolate flavours.",
  price: 380,
  categoryId: "non-coffee",
  slug: "hot-chocolate-matcha",
},

{
  id: "nc4",
  name: "Vanilla Caramel Latte (Hot)",
  description: "Hot latte infused with vanilla and caramel.",
  price: 250,
  categoryId: "non-coffee",
  slug: "vanilla-caramel-latte",
},

{
  id: "nc5",
  name: "Hazelnut Mocha Latte (Hot)",
  description: "Hot latte blended with hazelnut and mocha flavours.",
  price: 250,
  categoryId: "non-coffee",
  slug: "hazelnut-mocha-latte",
},

{
  id: "nc6",
  name: "Matcha Latte (Hot / Cold)",
  description: "Smooth matcha green tea latte served hot or cold.",
  price: 270,
  categoryId: "non-coffee",
  slug: "matcha-latte",
},
//Fresh Juice
{
  id: "fj1",
  name: "Cold Orange",
  description: "Freshly squeezed orange juice served chilled.",
  price: 270,
  categoryId: "fresh-juice",
  slug: "cold-orange-juice",
},

{
  id: "fj2",
  name: "Watermelon",
  description: "Refreshing fresh watermelon juice.",
  price: 190,
  categoryId: "fresh-juice",
  slug: "watermelon-juice",
},

{
  id: "fj3",
  name: "Pomegranate",
  description: "Fresh pomegranate juice rich in flavor.",
  price: 290,
  categoryId: "fresh-juice",
  slug: "pomegranate-juice",
},
//Teas
{
  id: "tp1",
  name: "Lavender Tea",
  description: "Aromatic lavender herbal tea.",
  price: 190,
  categoryId: "teas",
  slug: "lavender-tea",
},

{
  id: "tp2",
  name: "Blue Pea Tea",
  description: "Herbal blue pea flower tea.",
  price: 190,
  categoryId: "teas",
  slug: "blue-pea-tea",
},

{
  id: "tp3",
  name: "Chamomile Tea",
  description: "Relaxing chamomile herbal infusion.",
  price: 190,
  categoryId: "teas",
  slug: "chamomile-tea",
},

{
  id: "tp4",
  name: "Black Tea",
  description: "Classic strong black tea.",
  price: 190,
  categoryId: "teas",
  slug: "black-tea",
},

{
  id: "tp5",
  name: "Kashmiri Kahwa",
  description: "Traditional Kashmiri saffron green tea.",
  price: 190,
  categoryId: "teas",
  slug: "kashmiri-kahwa",
},

{
  id: "tp6",
  name: "Hibiscus Tea",
  description: "Tangy hibiscus herbal tea.",
  price: 190,
  categoryId: "teas",
  slug: "hibiscus-tea",
},

{
  id: "tp7",
  name: "Matcha Tea",
  description: "Premium Japanese matcha green tea.",
  price: 220,
  categoryId: "teas",
  slug: "matcha-tea",
},
//Slush
{
  id: "sl1",
  name: "Peppermint Matcha Breeze",
  description: "Refreshing peppermint and matcha blended slush.",
  price: 290,
  categoryId: "slush",
  slug: "peppermint-matcha-breeze",
},

{
  id: "sl2",
  name: "Strawberry Matcha Breeze",
  description: "Sweet strawberry and matcha slush blend.",
  price: 320,
  categoryId: "slush",
  slug: "strawberry-matcha-breeze",
},

{
  id: "sl3",
  name: "Blue Pea Peppermint Breeze",
  description: "Blue pea and peppermint refreshing slush.",
  price: 320,
  categoryId: "slush",
  slug: "blue-pea-peppermint-breeze",
},

{
  id: "sl4",
  name: "Blue Lagoon Slush",
  description: "Cool blue lagoon flavored refreshing slush.",
  price: 250,
  categoryId: "slush",
  slug: "blue-lagoon-slush",
},
//Ice Tea
{
  id: "it1",
  name: "Orange Hibiscus Iced",
  description: "Refreshing iced tea infused with orange and hibiscus.",
  price: 300,
  categoryId: "ice-tea",
  slug: "orange-hibiscus-iced-tea",
},

{
  id: "it2",
  name: "Hibiscus Bluepea Iced",
  description: "Iced tea infused with hibiscus and blue pea flowers.",
  price: 300,
  categoryId: "ice-tea",
  slug: "hibiscus-bluepea-iced-tea",
},

{
  id: "it3",
  name: "Lemon Ice Tea",
  description: "Classic lemon flavored iced tea.",
  price: 250,
  categoryId: "ice-tea",
  slug: "lemon-ice-tea",
},

{
  id: "it4",
  name: "Peach Ice Tea",
  description: "Sweet and refreshing peach flavored iced tea.",
  price: 250,
  categoryId: "ice-tea",
  slug: "peach-ice-tea",
},
//Mocktails
{
  id: "mk1",
  name: "Matcha Green Apple",
  description: "Refreshing mocktail with matcha and green apple.",
  price: 320,
  categoryId: "mocktails",
  slug: "matcha-green-apple",
},

{
  id: "mk2",
  name: "Matcha Coco Cookie",
  description: "Mocktail blend of matcha, coconut and cookie flavor.",
  price: 305,
  categoryId: "mocktails",
  slug: "matcha-coco-cookie",
},

{
  id: "mk3",
  name: "Berry White Russian",
  description: "Berry flavored creamy mocktail.",
  price: 290,
  categoryId: "mocktails",
  slug: "berry-white-russian",
},

{
  id: "mk4",
  name: "Spiced Cucumber Mojito",
  description: "Refreshing cucumber mojito with a hint of spice.",
  price: 290,
  categoryId: "mocktails",
  slug: "spiced-cucumber-mojito",
},

{
  id: "mk5",
  name: "Peach Snowball",
  description: "Sweet peach flavored refreshing mocktail.",
  price: 320,
  categoryId: "mocktails",
  slug: "peach-snowball",
},

{
  id: "mk6",
  name: "Black Magic",
  description: "Dark berry citrus mocktail with bold flavor.",
  price: 290,
  categoryId: "mocktails",
  slug: "black-magic",
},
//Shakes
{
  id: "sh1",
  name: "Brownbutter Shake",
  description: "Rich creamy shake with brown butter flavor.",
  price: 320,
  categoryId: "shakes",
  slug: "brownbutter-shake",
},

{
  id: "sh2",
  name: "Berry Shake",
  description: "Creamy mixed berry milkshake.",
  price: 350,
  categoryId: "shakes",
  slug: "berry-shake",
},

{
  id: "sh3",
  name: "Walnut Brownie Shake",
  description: "Chocolate brownie shake with crunchy walnut.",
  price: 350,
  categoryId: "shakes",
  slug: "walnut-brownie-shake",
},

{
  id: "sh4",
  name: "Hazelnut Cookie Shake",
  description: "Hazelnut flavored milkshake blended with cookie.",
  price: 350,
  categoryId: "shakes",
  slug: "hazelnut-cookie-shake",
},

{
  id: "sh5",
  name: "Brownie Cold Chocolate",
  description: "Cold chocolate drink blended with brownie.",
  price: 320,
  categoryId: "shakes",
  slug: "brownie-cold-chocolate",
},

{
  id: "sh6",
  name: "Oreo Shake",
  description: "Classic Oreo biscuit milkshake.",
  price: 320,
  categoryId: "shakes",
  slug: "oreo-shake",
},

{
  id: "sh7",
  name: "Nutella Shake",
  description: "Rich creamy milkshake made with Nutella.",
  price: 320,
  categoryId: "shakes",
  slug: "nutella-shake",
},
//

];