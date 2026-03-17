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
    name: "Eggs Your Way-Omelette (Classic, masala, mushroom, cheese & stuffed veggi)",
    description:
      "Fluffy eggs cooked to perfection with your choice of fillings.",
    price: 265,
    categoryId: "breakfast",
    slug: "eggs-your-way-omelette",
  },
  {
    id: "bf2",
    name: "Shakshuka Chicken/Mutton/Egg",
    description:
      "Poached chicken in a spiced tomato and pepper sauce. with garlic bread",
    price: "295/345/245",
    categoryId: "breakfast",
    slug: "shakshuka",
  },
  {
    id: "bf3",
    name: "Scrambled Eggs",
    description:
      "Eggs With Toast And Salad",
    price: 265,
    categoryId: "breakfast",
    slug: "scrambled-eggs",
  },
  {
    id: "bf4",
    name: "Roasted Chicken Toast",
    description:
      "Sour Dough With Ranch Dressing Caramalized Onion & Chicken Almond Butter Toast",
    price: 265,
    categoryId: "breakfast",
    slug: "roasted-chicken-toast",
  },
  {
    id: "bf5",
    name: "French Toast",
    description:
      "Brioche Bread With Vanilla Flavoured Toast, Maple Syrup,& Fresh Fruits, Topped With Scoop Of Vanilla Cream",
    price: 345,
    categoryId: "breakfast",
    slug: "french-toast",
  },
  {
    id: "bf6",
    name: "Classic English Breakfast",
    description:
      "A Heartly Platter Of Eggs, Sausage, Baked Beans, Tomato confit & Toast, crafted For The Perfect Start To Your Day",
    price: 295,
    categoryId: "breakfast",
    slug: "classic-english-breakfast",
  },
  {
    id: "bf7",
    name: "Quinoa Upma With Coconut Chutney",
    description:
      "A Wholesome Twist On A Classic, This Quinoa Upma Is A Nutritious Medley Of Veggies, Spices, & Fluffy Quinoa",
    price: 395,
    categoryId: "breakfast",
    slug: "quinoa-upma",
  },

  {
    id: "bf8",
    name: "Mushroom Avacodo Toast",
    description:
      "Brown Bread With Mushroom & Seasoned Avacodo With Side Salad",
    price: 295,
    categoryId: "breakfast",
    slug: "mushroom-avocado-toast",
  },
  {
    id: "bf9",
    name: "Guacamole Avacodo On Toast",
    description:
      "Spicy Guacamole Avacodo On Multigrain Bread Breakfast Platter only on weekends Waffle",
    price: 395,
    categoryId: "breakfast",
    slug: "guacamole-avocado-toast",
  },
  //Smoothies
  {
    id: "sm1",
    name: "GREEN SMOOTHIE",
    description:
      "Fresh Banana, Palak, Coconut Milk, Mint, Basil Leaf, Parsley Leaf, Lemon Juice & Cinnamon Powder.",
    price: 375,
    categoryId: "smoothies",
    slug: "green-smoothie",
  },

  {
    id: "sm2",
    name: "BANANA CHOCOLATE",
    description:
      "Fresh Banana, Almond Milk, Dates, Cocoa Powder & Chocolate Almond Butter.",
    price: 375,
    categoryId: "smoothies",
    slug: "banana-chocolate",
  },
  //Salads
  {
    id: "sa1",
    name: "Mexican Salad Veg & Non-Veg",
    description:
      "A Vibrant Mix Of fresh Greens, Beans, Corn & Zesty Salsa, Bursting With Old Mexican Flavours",
    price: "325/395",
    categoryId: "salads",
    slug: "mexican-salad",
  },

  {
    id: "sa2",
    name: "Classic Caesar Salad Veg & Non-Veg",
    description:
      "Crispy Romaine Lettuce, Crunchy Croutons & Parmesan Cheese, Tossed In A Creamy Caesar Dressing",
    price: "325/395",
    categoryId: "salads",
    slug: "classic-caesar-salad",
  },
  // VEG
  {
    id: "va1",
    name: "Paprika Hummus Beiruti With Pita Bread",
    description:
      "Silky smooth paprika hummus served with warm fluffy pita bread.",
    price: 295,
    categoryId: "veg-appetizers",
    slug: "paprika-hummus-beiruti-pita",
  },
  {
    id: "va2",
    name: "Wok Tossed Chilli Basil Paneer",
    description:
      "Stir fried paneer with chilli, basil and aromatic Asian seasoning.",
    price: 375,
    categoryId: "veg-appetizers",
    slug: "wok-tossed-chilli-basil-paneer",
  },
  {
    id: "va3",
    name: "Crispy Fried Tender Broccoli",
    description:
      "Lightly battered broccoli fried till golden and crunchy.",
    price: 395,
    categoryId: "veg-appetizers",
    slug: "crispy-fried-tender-broccoli",
  },
  {
    id: "va4",
    name: "Plain Nachos With Sour Cream Mexican Salsa & Guacamole",
    description:
      "Crunchy nachos served with sour cream, salsa & guacamole.",
    price: 395,
    categoryId: "veg-appetizers",
    slug: "plain-nachos",
  },
  {
    id: "va5",
    name: "Mozzarella Cheese Sticks",
    description:
      "Crumb fried mozzarella sticks served with chilli mayo.",
    price: 395,
    categoryId: "veg-appetizers",
    slug: "mozzarella-cheese-sticks",
  },
  {
    id: "va6",
    name: "Jalapeno Cottage Cheese Ball",
    description:
      "Cottage cheese balls with spicy jalapeno kick.",
    price: 325,
    categoryId: "veg-appetizers",
    slug: "jalapeno-cottage-cheese-ball",
  },
  {
    id: "va7",
    name: "Mac & Cheese Fries/Balls",
    description:
      "Crispy golden balls filled with creamy mac & cheese.",
    price: 375,
    categoryId: "veg-appetizers",
    slug: "mac-cheese-fries-balls",
  },

  // NON-VEG (TOP SECTION)
  {
    id: "nva8",
    name: "Butter Milk Fried Chicken",
    description:
      "Juicy chicken marinated in buttermilk and fried crispy.",
    price: 525,
    categoryId: "nonveg-appetizers",
    slug: "buttermilk-fried-chicken",
  },
  {
    id: "nva9",
    name: "Fish & Chips",
    description:
      "Crispy fish served with golden fried french fries.",
    price: 495,
    categoryId: "nonveg-appetizers",
    slug: "fish-and-chips",
  },
  {
    id: "nva10",
    name: "Crispy Fried Prawns",
    description:
      "Golden fried prawns bursting with flavor.",
    price: 545,
    categoryId: "nonveg-appetizers",
    slug: "crispy-fried-prawns",
  },
  {
    id: "nva11",
    name: "Chicken Wings (BBQ / Peri Peri / Buffalo Wings)",
    description:
      "Juicy wings coated in flavorful glaze and fried crispy.",
    price: 395,
    categoryId: "nonveg-appetizers",
    slug: "chicken-wings",
  },

  // NON-VEG (BOTTOM SECTION)
  {
    id: "nva12",
    name: "Pepper Chicken Popcorn",
    description:
      "Bite-sized crispy chicken fried to juicy perfection.",
    price: 445,
    categoryId: "nonveg-appetizers",
    slug: "pepper-chicken-popcorn",
  },
  {
    id: "nva13",
    name: "Honey Chilli Garlic Prawns",
    description:
      "Prawns tossed in sweet spicy garlic glaze.",
    price: 545,
    categoryId: "nonveg-appetizers",
    slug: "honey-chilli-garlic-prawns",
  },
  {
    id: "nva14",
    name: "Honey Chilli Chicken",
    description:
      "Sweet and spicy crispy chicken.",
    price: 475,
    categoryId: "nonveg-appetizers",
    slug: "honey-chilli-chicken",
  },
  {
    id: "nva15",
    name: "Gun Powder Chicken",
    description:
      "Chicken tossed in fiery South Indian spice mix.",
    price: 495,
    categoryId: "nonveg-appetizers",
    slug: "gun-powder-chicken",
  },
  {
    id: "nva16",
    name: "Chicken Nachos With Sour Cream Mexican Salsa & Guacamole",
    description:
      "Loaded nachos topped with seasoned chicken.",
    price: 445,
    categoryId: "nonveg-appetizers",
    slug: "chicken-nachos",
  },
  {
    id: "nva17",
    name: "Chicken Burmese Parcel",
    description:
      "Tender chicken wrapped in pastry with Burmese spices.",
    price: 445,
    categoryId: "nonveg-appetizers",
    slug: "chicken-burmese-parcel",
  },
  {
    id: "nva18",
    name: "Jamaican Jerk Chicken",
    description:
      "Herb marinated oven roasted chicken.",
    price: 445,
    categoryId: "nonveg-appetizers",
    slug: "jamaican-jerk-chicken",
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


  //Gourmet Fries
  {
    id: "gf1",
    name: "Regular Fries",
    description: "Classic crispy golden fries.",
    price: 225,
    categoryId: "gourmet-fries",
    slug: "regular-fries"
  },

  {
    id: "gf2",
    name: "Chilli Cheese Fries / Chicken",
    description: "Crispy fries topped with spicy chilli sauce and melted cheese with optional chicken.",
    price: "275 / 325",
    categoryId: "gourmet-fries",
    slug: "chilli-cheese-fries"
  },

  {
    id: "gf3",
    name: "Peri Peri Fries",
    description: "Crispy fries tossed in spicy peri peri seasoning.",
    price: 245,
    categoryId: "gourmet-fries",
    slug: "peri-peri-fries"
  },


  //Sandwiches & Burger
  {
    id: "sb1",
    name: "Plain / Cheesy Garlic Bread",
    description:
      "Warm toasted garlic bread topped with melted cheese, delivering a perfect blend of savoury & cheesy goodness. Served with your choice of fillings.",
    price: "195 / 245",
    categoryId: "sandwiches-burger",
    slug: "plain-cheesy-garlic-bread",
  },

  {
    id: "sb2",
    name: "Cheese Chilli Toast",
    description:
      "Toasted bread topped with melted cheese and a mild chilli kick.",
    price: 245,
    categoryId: "sandwiches-burger",
    slug: "cheese-chilli-toast",
  },

  {
    id: "sb3",
    name: "Pull Chicken Sandwich",
    description:
      "Slow-cooked tender shredded chicken piled into soft bread with tangy sauce.",
    price: 375,
    categoryId: "sandwiches-burger",
    slug: "pull-chicken-sandwich",
  },

  {
    id: "sb4",
    name: "Crispy Fried Chicken Burger with Cheese",
    description:
      "Golden fried chicken fillet topped with cheese in a soft burger bun.",
    price: 445,
    categoryId: "sandwiches-burger",
    slug: "crispy-fried-chicken-burger-cheese",
  },

  {
    id: "sb5",
    name: "Chicken Cheese Sandwich",
    description:
      "Juicy chicken layered with melted cheese in a toasted sandwich.",
    price: 375,
    categoryId: "sandwiches-burger",
    slug: "chicken-cheese-sandwich",
  },

  {
    id: "sb6",
    name: "Bombay Masala Sandwich (Veg)",
    description:
      "Spiced mashed vegetables with chutney tucked into buttery grilled bread.",
    price: 345,
    categoryId: "sandwiches-burger",
    slug: "bombay-masala-sandwich",
  },

  {
    id: "sb7",
    name: "Special Lamb Burger",
    description:
      "Juicy lamb patty with caramelized onion & signature sauce in a soft gourmet bun.",
    price: 475,
    categoryId: "sandwiches-burger",
    slug: "special-lamb-burger",
  },

  {
    id: "sb8",
    name: "Healthy Beetroot & Sweet Potato Burger",
    description:
      "Wholesome beetroot and sweet potato patty served in a fresh bun.",
    price: 345,
    categoryId: "sandwiches-burger",
    slug: "beetroot-sweet-potato-burger",
  },

  {
    id: "sb9",
    name: "Buttermilk Fried Chicken Burger",
    description:
      "Juicy chicken marinated in buttermilk, fried to crispy perfection.",
    price: 445,
    categoryId: "sandwiches-burger",
    slug: "buttermilk-fried-chicken-burger",
  },
  // Smokey Die Pizzas (FIXED)

  {
    id: "pz1",
    name: "Margherita Pizza",
    description:
      "A timeless Margherita pizza with fresh mozzarella, basil & tomato sauce on a crispy crust.",
    price: "475 / 545",
    categoryId: "smokey-die-pizzas",
    slug: "margherita-pizza",
  },

  {
    id: "pz2",
    name: "Farm Fresh Pizza",
    description:
      "A vibrant pizza topped with seasonal veggies & melted cheese.",
    price: "475 / 545",
    categoryId: "smokey-die-pizzas",
    slug: "farm-fresh-pizza",
  },

  {
    id: "pz3",
    name: "Paneer Tikka Pizza",
    description:
      "Smoky paneer tikka, fresh veggies & molten cheese on a baked crust.",
    price: "475 / 545",
    categoryId: "smokey-die-pizzas",
    slug: "paneer-tikka-pizza",
  },

  {
    id: "pz4",
    name: "Mexican Pizza (Veg)",
    description:
      "Zesty Mexican style pizza loaded with salsa, beans, cheese & fresh toppings.",
    price: "475 / 545",
    categoryId: "smokey-die-pizzas",
    slug: "mexican-pizza-veg",
  },

  {
    id: "pz5",
    name: "BBQ Chicken Pizza",
    description:
      "Smoky BBQ chicken with melted cheese & savoury toppings.",
    price: "525 / 595",
    categoryId: "smokey-die-pizzas",
    slug: "bbq-chicken-pizza",
  },

  {
    id: "pz6",
    name: "Peri Peri Chicken Pizza",
    description:
      "Spicy peri peri chicken pizza with bold flavours and melted cheese.",
    price: "525 / 595",
    categoryId: "smokey-die-pizzas",
    slug: "peri-peri-chicken-pizza",
  },

  {
    id: "pz7",
    name: "Tandoori Corona Chicken Tikka Pizza",
    description:
      "Fusion pizza with smoky tandoori chicken tikka, rich cheese & aromatic spices.",
    price: "525 / 595",
    categoryId: "smokey-die-pizzas",
    slug: "tandoori-corona-chicken-tikka-pizza",
  },

  {
    id: "pz8",
    name: "Lamb Keema Pizza",
    description:
      "Pizza topped with spiced lamb keema & melted cheese.",
    price: 695,
    categoryId: "smokey-die-pizzas",
    slug: "lamb-keema-pizza",
  },
  //Pasta
  {
    id: "ps1",
    name: "Pasta (Choice of Pasta & Sauce)",
    description:
      "Choice of pasta: Penne, Spaghetti, Macaroni. Choice of sauce: Alfredo, Arrabbiata, Pesto, Aglio Olio.",
    price: "395 / 445",
    categoryId: "pasta",
    slug: "custom-pasta",
  },

  {
    id: "ps2",
    name: "Mac & Cheese Baked Pasta",
    description:
      "Creamy mac & cheese pasta baked to golden perfection with crispy top.",
    price: "395 / 445",
    categoryId: "pasta",
    slug: "mac-cheese-baked-pasta",
  },

  {
    id: "ps3",
    name: "Spaghetti Bolognese",
    description:
      "Rich, slow-cooked meat sauce tossed with al dente spaghetti.",
    price: 495,
    categoryId: "pasta",
    slug: "spaghetti-bolognese",
  },

  {
    id: "ps4",
    name: "Lasagna (Veg / Chicken / Lamb)",
    description:
      "Layered pasta sheets with vegetables or meat, rich tomato sauce & creamy cheese baked to perfection.",
    price: "495 / 545 / 595",
    categoryId: "pasta",
    slug: "lasagna",
  },

  {
    id: "ps5",
    name: "Spaghetti Chicken Carbonara",
    description:
      "Spaghetti tossed in creamy carbonara sauce with tender chicken & parmesan.",
    price: 445,
    categoryId: "pasta",
    slug: "spaghetti-chicken-carbonara",
  },

  // platters
  {
    id: "cb1",
    name: "Grano Special Veg Platter",
    description:
      "Chilli basil paneer, mozzarella cheese stick, mac & cheese ball, crispy fried tender broccoli.",
    price: 1099,
    categoryId: "combo",
    slug: "grano-special-veg-platter",
  },

  {
    id: "cb2",
    name: "Grano Special Non-veg Platter",
    description:
      "Buttermilk fried chicken, honey chilli chicken, BBQ chicken wings, honey garlic prawns.",
    price: 1499,
    categoryId: "combo",
    slug: "grano-special-nonveg-platter",
  },

  //Main On Your Plate
  {
    id: "mp1",
    name: "Morracan Paneer Steak",
    description:
      "Grilled paneer marinated in Moroccan spices, served with herbed rice.",
    price: 525,
    categoryId: "main-on-your-plate",
    slug: "morracan-paneer-steak",
  },

  {
    id: "mp2",
    name: "Cheesy Baked Vegetables",
    description:
      "Seasonal vegetables baked in a creamy cheesy sauce.",
    price: 525,
    categoryId: "main-on-your-plate",
    slug: "cheesy-baked-vegetables",
  },

  {
    id: "mp3",
    name: "Fried Rice",
    description:
      "Chilli garlic, burnt garlic or Thai basil style fried rice.",
    price: "425 / 475",
    categoryId: "main-on-your-plate",
    slug: "fried-rice",
  },

  {
    id: "mp4",
    name: "Grilled Fish With Lemon Capers Sauce",
    description:
      "Delicate fish drizzled with tangy lemon caper sauce.",
    price: 595,
    categoryId: "main-on-your-plate",
    slug: "grilled-fish-lemon-capers",
  },

  {
    id: "mp5",
    name: "Bok Choy & Broccoli Noodles (Gravy Combo Style)",
    description:
      "Stir fried noodles with crunchy bok choy & broccoli tossed in customised savoury gravy.",
    price: "425 / 475",
    categoryId: "main-on-your-plate",
    slug: "bok-choy-broccoli-noodles",
  },

  {
    id: "mp6",
    name: "Kung Pao Bowl (Paneer / Chicken)",
    description:
      "Zesty mix of paneer or chicken in spicy gravy served over rice.",
    price: "429 / 475",
    categoryId: "main-on-your-plate",
    slug: "kung-pao-bowl",
  },

  {
    id: "mp7",
    name: "Ramen Bowl With Soba Noodles",
    description:
      "Hearty broth with buckwheat noodles, fresh veggies and rich toppings.",
    price: "425 / 475",
    categoryId: "main-on-your-plate",
    slug: "ramen-bowl",
  },

  {
    id: "mp8",
    name: "Grilled Chicken Steak",
    description:
      "Served with choice of sauce (pepper garlic, creamy paprika, creamy cilantro).",
    price: 525,
    categoryId: "main-on-your-plate",
    slug: "grilled-chicken-steak",
  },

  {
    id: "mp9",
    name: "Mexican Bowl (Veg / Chicken)",
    description:
      "Mexican-style rice, beans, veggies and salsa in a vibrant bowl.",
    price: 525,
    categoryId: "main-on-your-plate",
    slug: "mexican-bowl",
  },

  // Coffee (UPDATED ONLY name + price)

  {
    id: "cf1",
    name: "Espresso",
    description: "Classic strong espresso shot.",
    price: 179,
    categoryId: "coffee",
    slug: "espresso",
  },

  {
    id: "cf2",
    name: "Americano (Hot / Cold)",
    description: "Espresso diluted with hot or cold water for a smooth coffee.",
    price: 199,
    categoryId: "coffee",
    slug: "americano",
  },

  {
    id: "cf3",
    name: "Long Black (Hot / Cold)",
    description: "Rich espresso poured over hot water for bold flavour.",
    price: 199,
    categoryId: "coffee",
    slug: "long-black",
  },

  {
    id: "cf4",
    name: "Flat White",
    description: "Velvety microfoam milk with espresso.",
    price: 249,
    categoryId: "coffee",
    slug: "flat-white",
  },

  {
    id: "cf5",
    name: "Cortado",
    description: "Equal parts espresso and warm milk.",
    price: 229,
    categoryId: "coffee",
    slug: "cortado",
  },

  {
    id: "cf6",
    name: "Cappuccino (Regular / Large)",
    description:
      "Classic cappuccino. Flavours available: Irish, Hazelnut, Caramel, Brown Butter (extra ₹80).",
    price: "249 / 289",
    categoryId: "coffee",
    slug: "cappuccino",
  },

  {
    id: "cf7",
    name: "Latte (Hot / Cold)",
    description: "Smooth espresso with steamed milk.",
    price: 249,
    categoryId: "coffee",
    slug: "latte",
  },

  {
    id: "cf8",
    name: "Mocha (Hot / Cold)",
    description: "Espresso with chocolate and milk.",
    price: 249,
    categoryId: "coffee",
    slug: "mocha",
  },

  {
    id: "cf9",
    name: "Spanish Latte (Hot / Cold)",
    description: "Sweet condensed milk latte.",
    price: 249,
    categoryId: "coffee",
    slug: "spanish-latte",
  },

  {
    id: "cf10",
    name: "South Indian Coffee",
    description: "Traditional South Indian filter coffee.",
    price: 170,
    categoryId: "coffee",
    slug: "south-indian-coffee",
  },
  // Manual Brews (UPDATED ONLY name + price)

  {
    id: "mb1",
    name: "V60 (Hot / Cold)",
    description: "Manual pour-over coffee brewed using V60 dripper.",
    price: 290,
    categoryId: "manual-brews",
    slug: "v60",
  },

  {
    id: "mb2",
    name: "Aero Press",
    description: "Smooth and rich coffee brewed using AeroPress.",
    price: 290,
    categoryId: "manual-brews",
    slug: "aero-press",
  },

  {
    id: "mb3",
    name: "French Press",
    description: "Classic immersion brew coffee with bold flavour.",
    price: 290,
    categoryId: "manual-brews",
    slug: "french-press",
  },

  {
    id: "mb4",
    name: "Siphon",
    description: "Vacuum brewed coffee with a clean and aromatic profile.",
    price: 270,
    categoryId: "manual-brews",
    slug: "siphon",
  },
  // Cold Brews

  {
    id: "cbw1",
    name: "OG Cold Brew",
    description: "Classic straight cold brew coffee served chilled.",
    price: 230,
    categoryId: "cold-brews",
    slug: "og-cold-brew",
  },

  {
    id: "cbw2",
    name: "Tangy Cold Brew",
    description: "Refreshing cold brew infused with hibiscus notes.",
    price: 290,
    categoryId: "cold-brews",
    slug: "tangy-cold-brew",
  },

  {
    id: "cbw3",
    name: "Cranberry Cold Brew",
    description: "Cold brew infused with bright citrus notes.",
    price: 270,
    categoryId: "cold-brews",
    slug: "cranberry-cold-brew",
  },

  {
    id: "cbw4",
    name: "Pink Grape Cold Brew",
    description: "Cold brew blended with fruit notes.",
    price: 270,
    categoryId: "cold-brews",
    slug: "pink-grape-cold-brew",
  },

  {
    id: "cbw5",
    name: "Caramel Hazelnut Cream Cold Brew",
    description: "Cold brew coffee with rich cream topping.",
    price: 270,
    categoryId: "cold-brews",
    slug: "caramel-hazelnut-cream-cold-brew",
  },

  {
    id: "cbw6",
    name: "Oreo Cream Cold Brew",
    description: "Cold brew with creamy cookie flavour.",
    price: 270,
    categoryId: "cold-brews",
    slug: "oreo-cream-cold-brew",
  },
  {
    id: "sc1",
    name: "Orange Iced Black",
    description: "Iced black coffee with refreshing orange notes.",
    price: 290,
    categoryId: "special-coffee",
    slug: "orange-iced-black",
  },

  {
    id: "sc2",
    name: "Cranberry Espresso",
    description: "Espresso infused with cranberry flavour.",
    price: 270,
    categoryId: "special-coffee",
    slug: "cranberry-espresso",
  },

  {
    id: "sc3",
    name: "Sunshine Espresso",
    description: "Refreshing espresso with citrus brightness.",
    price: 240,
    categoryId: "special-coffee",
    slug: "sunshine-espresso",
  },

  {
    id: "sc4",
    name: "Saffaron Latte (Hot / Cold)",
    description: "Latte infused with saffron flavour.",
    price: 279,
    categoryId: "special-coffee",
    slug: "saffaron-latte-hot-cold",
  },

  {
    id: "sc5",
    name: "Pistachio Latte (Hot / Cold)",
    description: "Latte infused with pistachio flavour.",
    price: 299,
    categoryId: "special-coffee",
    slug: "pistachio-latte-hot-cold",
  },

  {
    id: "sc6",
    name: "Rose Latte (Hot / Cold)",
    description: "Latte infused with rose flavour.",
    price: 279,
    categoryId: "special-coffee",
    slug: "rose-latte-hot-cold",
  },
  // iced coffee
  {
    id: "ic1",
    name: "Cold Coffee",
    description: "Classic chilled coffee served smooth and refreshing.",
    price: 290,
    categoryId: "iced-coffee",
    slug: "cold-coffee",
  },

  {
    id: "ic2",
    name: "Raspberry Biscoff Cold Coffee",
    description: "Cold coffee blended with raspberry and biscoff flavours.",
    price: 360,
    categoryId: "iced-coffee",
    slug: "raspberry-biscoff-cold-coffee",
  },

  {
    id: "ic3",
    name: "Brown Butter Iced Latte",
    description: "Iced latte infused with rich brown butter flavour.",
    price: 320,
    categoryId: "iced-coffee",
    slug: "brown-butter-iced-latte",
  },

  {
    id: "ic4",
    name: "Strawberry Cloud Latte",
    description: "Smooth iced latte with fruity strawberry notes.",
    price: 349,
    categoryId: "iced-coffee",
    slug: "strawberry-cloud-latte",
  },

  {
    id: "ic5",
    name: "Chocolate Frappe",
    description: "Classic iced latte with sweet vanilla flavour.",
    price: 349,
    categoryId: "iced-coffee",
    slug: "chocolate-frappe",
  },

  {
    id: "ic6",
    name: "Mocha Freeze",
    description: "Refreshing iced latte with caramel flavour.",
    price: 320,
    categoryId: "iced-coffee",
    slug: "mocha-freeze",
  },

  {
    id: "ic7",
    name: "Caramel Freeze",
    description: "Creamy blended iced chocolate coffee drink.",
    price: 320,
    categoryId: "iced-coffee",
    slug: "caramel-freeze",
  },

  {
    id: "ic8",
    name: "Mocha Biscoff Freeze",
    description: "Blended iced coffee with rich biscoff flavour.",
    price: 349,
    categoryId: "iced-coffee",
    slug: "mocha-biscoff-freeze",
  },
  {
    id: "nc1",
    name: "Dark Hot Chocolate (Hot & Cold)",
    description: "Rich dark chocolate drink served hot or cold.",
    price: 389,
    categoryId: "non-coffee",
    slug: "dark-hot-chocolate-hot-cold",
  },

  {
    id: "nc2",
    name: "White Hot Chocolate (Hot & Cold)",
    description: "Creamy white chocolate drink served hot or cold.",
    price: 389,
    categoryId: "non-coffee",
    slug: "white-hot-chocolate-hot-cold",
  },

  {
    id: "nc3",
    name: "Matcha Latte (Hot / Cold)",
    description: "Matcha blended with hot chocolate flavours.",
    price: 290,
    categoryId: "non-coffee",
    slug: "matcha-latte-hot-cold",
  },

  {
    id: "nc4",
    name: "Cranberry Matcha",
    description: "Hot latte infused with vanilla and caramel.",
    price: 290,
    categoryId: "non-coffee",
    slug: "cranberry-matcha",
  },
  //Fresh Juice
  {
    id: "fj1",
    name: "Orange",
    description: "Freshly squeezed orange juice served chilled.",
    price: 320,
    categoryId: "fresh-juice",
    slug: "orange",
  },

  {
    id: "fj2",
    name: "Watermelon",
    description: "Refreshing fresh watermelon juice.",
    price: 199,
    categoryId: "fresh-juice",
    slug: "watermelon",
  },
  // teas
  {
    id: "tp1",
    name: "Kashmiri Kahwa",
    description: "Aromatic lavender herbal tea.",
    price: 220,
    categoryId: "teas",
    slug: "kashmiri-kahwa",
  },

  {
    id: "tp2",
    name: "Chamomile",
    description: "Herbal blue pea flower tea.",
    price: 220,
    categoryId: "teas",
    slug: "chamomile",
  },

  {
    id: "tp3",
    name: "Habiscus",
    description: "Refreshing chamomile herbal infusion.",
    price: 220,
    categoryId: "teas",
    slug: "habiscus",
  },

  {
    id: "tp4",
    name: "Matcha",
    description: "Classic strong black tea.",
    price: 269,
    categoryId: "teas",
    slug: "matcha",
  },

  {
    id: "tp5",
    name: "Cascara",
    description: "Traditional Kashmiri saffron green tea.",
    price: 220,
    categoryId: "teas",
    slug: "cascara",
  },
  //Slush
  {
    id: "sl1",
    name: "Strawberry Matcha Breeze",
    description: "Refreshing peppermint and matcha blended slush.",
    price: 290,
    categoryId: "slush",
    slug: "strawberry-matcha-breeze",
  },

  {
    id: "sl2",
    name: "Blue Lagoon Slush",
    description: "Sweet strawberry and matcha slush blend.",
    price: 260,
    categoryId: "slush",
    slug: "blue-lagoon-slush",
  },
  //Ice Tea
  {
    id: "it1",
    name: "Orange Hibiscus Iced",
    description: "Refreshing iced tea infused with orange and hibiscus.",
    price: 299,
    categoryId: "ice-tea",
    slug: "orange-hibiscus-iced",
  },

  {
    id: "it2",
    name: "Lemon Ice Tea",
    description: "Iced tea infused with hibiscus and blue pea flowers.",
    price: 250,
    categoryId: "ice-tea",
    slug: "lemon-ice-tea",
  },

  {
    id: "it3",
    name: "Peach Ice Tea",
    description: "Classic lemon flavored iced tea.",
    price: 250,
    categoryId: "ice-tea",
    slug: "peach-ice-tea",
  },

  {
    id: "it4",
    name: "Strawberry Ice Tea",
    description: "Sweet and refreshing peach flavored iced tea.",
    price: 250,
    categoryId: "ice-tea",
    slug: "strawberry-ice-tea",
  },
  {
    id: "it5",
    name: "Passion Ice Tea",
    description: "Refreshing passion fruit flavored iced tea.",
    price: 250,
    categoryId: "ice-tea",
    slug: "passion-ice-tea",
  },
  //Mocktails
  {
    id: "mk1",
    name: "Strawberry Mojito",
    description: "Refreshing mocktail with matcha and green apple.",
    price: 289,
    categoryId: "mocktails",
    slug: "strawberry-mojito",
  },

  {
    id: "mk2",
    name: "Passion Fruit Mojito",
    description: "Mocktail blend of matcha, coconut and cookie flavor.",
    price: 289,
    categoryId: "mocktails",
    slug: "passion-fruit-mojito",
  },

  {
    id: "mk3",
    name: "Spiced Cucumber Mojito",
    description: "Berry flavored creamy mocktail.",
    price: 249,
    categoryId: "mocktails",
    slug: "spiced-cucumber-mojito",
  },

  {
    id: "mk4",
    name: "Classic Mojito",
    description: "Refreshing cucumber mojito with a hint of spice.",
    price: 249,
    categoryId: "mocktails",
    slug: "classic-mojito",
  },
  //Shakes
  {
    id: "sh1",
    name: "Brown Butter Shake",
    description: "Rich creamy shake with brown butter flavor.",
    price: 349,
    categoryId: "shakes",
    slug: "brown-butter-shake",
  },

  {
    id: "sh2",
    name: "Berry Shake",
    description: "Creamy mixed berry milkshake.",
    price: 389,
    categoryId: "shakes",
    slug: "berry-shake",
  },

  {
    id: "sh3",
    name: "Brownie Cold Chocolate",
    description: "Chocolate brownie shake with crunchy walnut.",
    price: 359,
    categoryId: "shakes",
    slug: "brownie-cold-chocolate",
  },

  {
    id: "sh4",
    name: "Oreo Shake",
    description: "Hazelnut flavored milkshake blended with cookie.",
    price: 349,
    categoryId: "shakes",
    slug: "oreo-shake",
  },

  {
    id: "sh5",
    name: "Nutella Shake",
    description: "Cold chocolate drink blended with brownie.",
    price: 349,
    categoryId: "shakes",
    slug: "nutella-shake",
  },
  //

];