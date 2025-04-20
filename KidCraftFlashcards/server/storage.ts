import { 
  type User, 
  type InsertUser, 
  type Product, 
  type ProductImage,
  type Blog, 
  type Contact, 
  type InsertContact 
} from "@shared/schema";

// Import the constants from a local copy since we can't directly import client-side code from server
const PRODUCTS = [
  {
    id: 1,
    category: "alphabet",
    name: "Alphabet Flash Cards",
    description: "These flash card can help your child learn about Alphabets & its facts. This Card Promote To Parents Who Are Looking For Help Teaching Their Children. Highly Entertaining And Effective For Both, Students As Well As Educators, The Best Way Of Learning Flash Cards For Kids.",
    amazonLink: "https://amzn.in/d/4I6RIy5",
    features: [
      "32 beautifully illustrated alphabet cards",
      "Upper and lowercase letters with related images",
      "Perfect for early reading and phonics practice",
      "Durable cards with rounded corners for little hands"
    ],
    images: [
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126148/alphabet_flash_card_01_hpf8ql.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126153/alphabet_flash_card_02_iy8rpg.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126147/alphabet_flash_card_03_aop9ek.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126150/alphabet_flash_card_04_bolkoj.jpg"
    ]
  },
  {
    id: 2,
    category: "birds",
    name: "Birds Flash Cards",
    description: "These flash card can help your child learn about Birds & its facts. This Card Promotes To Parents Who Are Looking For Help Teaching Their Children. Highly Entertaining And Effective For Both, Students As Well As Educators, The Best Way Of Learning Flash Cards For Kids.",
    amazonLink: "https://amzn.in/d/h9nQgmg",
    features: [
      "32 beautifully illustrated bird cards",
      "Fascinating facts about each bird species",
      "Perfect for nature study and bird identification",
      "Stunning photographs of birds from around the world"
    ],
    images: [
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126166/birds_card_01_ey7hsn.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126157/birds_card_02_wiuzqu.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126163/birds_card_03_n1vub3.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126159/birds_card_04_ey5luc.jpg"
    ]
  },
  {
    id: 3,
    category: "vegetables",
    name: "Vegetable Flash Cards",
    description: "These flash card can help your child learn about Vegetables & its facts. This Card Promote To Parents Who Are Looking For Help Teaching Their Children. Highly Entertaining And Effective For Both, Students As Well As Educators, The Best Way Of Learning Flash Cards For Kids.",
    amazonLink: "https://amzn.in/d/0dPYaT0",
    features: [
      "32 beautifully illustrated vegetable cards",
      "Detailed information about different vegetables",
      "Helps children learn about healthy eating habits",
      "Perfect for nutrition education and food recognition"
    ],
    images: [
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126189/vegetable_card_01_tjcje0.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126200/vegetable_card_02_mrmxwc.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126203/vegetable_card_03_yrqctt.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126194/vegetable_card_04_vqdwmz.jpg"
    ]
  },
  {
    id: 4,
    category: "animal",
    name: "Animal Flash Cards",
    description: "These flash card can help your child learn about Animals & its facts. This Card Promote To Parents Who Are Looking For Help Teaching Their Children. Highly Entertaining And Effective For Both, Students As Well As Educators, The Best Way Of Learning Flash Cards For Kids.",
    amazonLink: "https://amzn.in/d/035Hole",
    features: [
      "32 beautifully illustrated animal cards",
      "Fascinating facts about each animal species",
      "Learn about habitats and animal behaviors",
      "Perfect for early science education and nature studies"
    ],
    images: [
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126149/animal_card_01_isaedq.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126150/animal_card_02_gzzffr.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126155/animal_card_03_mgdhe6.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126153/animal_card_04_qdnnri.jpg"
    ]
  },
  {
    id: 5,
    category: "colors",
    name: "Colour and Shape Flash Cards",
    description: "These flash card can help your child learn about Colour & Shapes & its facts. This Card Promote To Parents Who Are Looking For Help Teaching Their Children. Highly Entertaining And Effective For Both, Students As Well As Educators, The Best Way Of Learning Flash Cards For Kids.",
    amazonLink: "https://amzn.in/d/bB8XF7p",
    features: [
      "32 beautifully illustrated color and shape cards",
      "Learn primary and secondary colors with examples",
      "Identify basic and complex geometric shapes",
      "Develops visual recognition and cognitive skills"
    ],
    images: [
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126166/colour_shape_card_01_rc9psk.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126173/colour_shape_card_02_z8xmqq.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126174/colour_shape_card_03_yvksyl.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126165/colour_shape_card_04_rhbwgz.jpg"
    ]
  },
  {
    id: 6,
    category: "fruit",
    name: "Fruit Flash Cards",
    description: "These flash card can help your child learn about Fruits & its facts. This Card Promote To Parents Who Are Looking For Help Teaching Their Children. Highly Entertaining And Effective For Both, Students As Well As Educators, The Best Way Of Learning Flash Cards For Kids.",
    amazonLink: "https://amzn.in/d/43O15DS",
    features: [
      "32 beautifully illustrated fruit cards",
      "Learn about different fruits from around the world",
      "Detailed information about nutritional benefits",
      "Perfect for teaching healthy food choices"
    ],
    images: [
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126182/fruit_flash_card_01_padxqp.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126184/fruit_flash_card_02_s4eosi.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126184/fruit_flash_card_03_y4sqgz.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126178/fruit_flash_card_04_mtnmsf.jpg"
    ]
  },
  {
    id: 7,
    category: "numbers",
    name: "Number Flash Cards",
    description: "These flash card can help your child learn about Numbers & its facts. This Card Promote To Parents Who Are Looking For Help Teaching Their Children. Highly Entertaining And Effective For Both, Students As Well As Educators, The Best Way Of Learning Flash Cards For Kids.",
    amazonLink: "https://amzn.in/d/gaLUatI",
    features: [
      "32 beautifully illustrated number cards",
      "Learn counting and basic math concepts",
      "Includes numbers 1-20 with corresponding objects",
      "Perfect for early number recognition and counting practice"
    ],
    images: [
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126203/numbers_flash_card_01_uq6tug.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126185/numbers_flash_card_02_ijnxey.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126182/numbers_flash_card_03_i7dlmi.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126191/numbers_flash_card_04_wn0yfq.jpg"
    ]
  },
  {
    id: 8,
    category: "combo",
    name: "7-PACK COMBO",
    description: "Complete collection of all KidCraft Flash Cards including Alphabet, Numbers, Animals, Birds, Fruits, Vegetables, and Colors & Shapes. This comprehensive set provides everything your child needs for early learning.",
    amazonLink: "https://amzn.in/d/fR5sawp",
    features: [
      "Complete 7-pack collection with all KidCraft flashcard sets",
      "224 cards covering 7 essential learning topics",
      "Save with bundle pricing compared to individual purchases",
      "Perfect gift for preschool and kindergarten children"
    ],
    images: [
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126165/combo_11_rrscox.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126166/combo1_bhg4au.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126165/combo_11_rrscox.jpg",
      "https://res.cloudinary.com/dutdrr57w/image/upload/f_webp/v1745126166/combo1_bhg4au.jpg"
    ]
  }
];

const BLOG_POSTS = [
  {
    id: 1,
    title: "How Flashcards Support Early Childhood Learning",
    category: "Development",
    excerpt: "Discover the science behind flashcard learning and how it helps develop cognitive skills in young children.",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "5 Fun Games to Play with Educational Flashcards",
    category: "Activities",
    excerpt: "Turn learning into a game with these creative activities you can do with your KidCraft flashcards.",
    imageUrl: "https://images.unsplash.com/photo-1555877466-9c68a2bee4b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Creating an Effective Learning Routine for Your Child",
    category: "Parenting",
    excerpt: "Tips for parents on establishing daily learning practices that keep children engaged and excited.",
    imageUrl: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  }
];

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllProducts(): Promise<Product[]>;
  getProductById(id: number): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProductImages(productId: number): Promise<string[]>;
  getAllBlogs(): Promise<Blog[]>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private userCurrentId: number;
  private contactCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllProducts(): Promise<Product[]> {
    // Use the constants file data for products
    return PRODUCTS as unknown as Product[];
  }

  async getProductById(id: number): Promise<Product | undefined> {
    // Find product by ID in the constants
    return PRODUCTS.find(p => p.id === id) as unknown as Product;
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    // Find products by category in the constants
    return PRODUCTS.filter(p => p.category === category) as unknown as Product[];
  }

  async getProductImages(productId: number): Promise<string[]> {
    // Find product images from the constants
    const product = PRODUCTS.find(p => p.id === productId);
    return product ? product.images : [];
  }

  async getAllBlogs(): Promise<Blog[]> {
    // Use the constants file data for blogs
    return BLOG_POSTS as unknown as Blog[];
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactCurrentId++;
    const contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    } as unknown as Contact;
    
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();
