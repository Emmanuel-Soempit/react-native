import { Restaurant } from "@/features/restaurant/types"
import { DashboardSummaryType } from "@/types"

export const dashboardSummaryData: { type: DashboardSummaryType, value: number }[] = [
    {
        type: 'restaurant',
        value: 12
    },
    {
        type: 'menu',
        value: 50
    },
    {
        type: 'item',
        value: 131
    },
    {
        type: 'category',
        value: 90
    }
]

export const restaurants: Restaurant[] = [
    {
        id: 1,
        name: "Tasty Bites",
        image: "https://example.com/tasty-bites.jpg",
        logo: "https://example.com/tasty-bites-logo.png",
        address: "123 Main St, Cityville, ST 12345",
        currency: "USD",
        contact: "+1 (555) 123-4567",
        desctiption: "A cozy restaurant offering a variety of international cuisines."
    },
    {
        id: 2,
        name: "Sushi Haven",
        image: "https://example.com/sushi-haven.jpg",
        logo: "https://example.com/sushi-haven-logo.png",
        address: "456 Ocean Ave, Beachtown, ST 67890",
        currency: "USD",
        contact: "+1 (555) 987-6543",
        desctiption: "Fresh and authentic Japanese sushi in a modern setting."
    },
    {
        id: 3,
        name: "Pasta Paradise",
        image: "https://example.com/pasta-paradise.jpg",
        logo: "https://example.com/pasta-paradise-logo.png",
        address: "789 Olive St, Little Italy, ST 54321",
        currency: "EUR",
        contact: "+39 06 1234 5678",
        desctiption: "Authentic Italian pasta dishes made with love and tradition."
    },
    {
        id: 4,
        name: "Spice Route",
        image: "https://example.com/spice-route.jpg",
        logo: "https://example.com/spice-route-logo.png",
        address: "101 Curry Lane, Spiceville, ST 13579",
        currency: "INR",
        contact: "+91 98765 43210",
        desctiption: "A journey through the flavors of India with our aromatic dishes."
    },
    {
        id: 5,
        name: "Green Leaf Vegan",
        image: "https://example.com/green-leaf.jpg",
        logo: "https://example.com/green-leaf-logo.png",
        address: "202 Veggie Blvd, Eco City, ST 24680",
        currency: "USD",
        contact: "+1 (555) 246-8135",
        desctiption: "Delicious and creative plant-based dishes for health-conscious diners."
    }]

export const currencies = [{ label: "Naira", value: "N" }, { label: "Dollars", value: "$" },]

export const categories = [{ label: "Drinks", value: '1' }, { label: "Appatizers", value: '2' }, { label: "Dessers", value: '3' }]


export const dummyMenus: Menu[] = [
    { id: 1, name: "Breakfast Menu", items: 15, categories: 3 },
    { id: 2, name: "Lunch Specials", items: 20, categories: 4 },
    { id: 3, name: "Dinner Delights", items: 25, categories: 5 },
    { id: 4, name: "Weekend Brunch", items: 18, categories: 3 },
    { id: 5, name: "Dessert Selection", items: 12, categories: 2 },
];


export const dummyCategories: Category[] = [
    { id: 1, name: "Appetizers", items: 8 },
    { id: 2, name: "Main Courses", items: 12 },
    { id: 3, name: "Desserts", items: 6 },
    { id: 4, name: "Beverages", items: 10 },
    { id: 5, name: "Sides", items: 5 }
];

export const dummyMenuItems: MenuItem[] = [
    {
        id: 1,
        name: "Caesar Salad",
        description: "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan cheese",
        price: 8.99,
        categoryId: 1,
        image: "https://example.com/images/caesar-salad.jpg"
    },
    {
        id: 2,
        name: "Mozzarella Sticks",
        description: "Crispy breaded mozzarella sticks served with marinara sauce",
        price: 6.99,
        categoryId: 1,
        image: "https://example.com/images/mozzarella-sticks.jpg"
    },
    {
        id: 3,
        name: "Grilled Salmon",
        description: "Fresh Atlantic salmon fillet grilled to perfection, served with seasonal vegetables",
        price: 18.99,
        categoryId: 2,
        image: "https://example.com/images/grilled-salmon.jpg"
    },
    {
        id: 4,
        name: "Beef Tenderloin Steak",
        description: "8oz beef tenderloin steak cooked to your liking, served with mashed potatoes",
        price: 24.99,
        categoryId: 2,
        image: "https://example.com/images/beef-tenderloin.jpg"
    },
    {
        id: 5,
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey center, served with vanilla ice cream",
        price: 7.99,
        categoryId: 3,
        image: "https://example.com/images/chocolate-lava-cake.jpg"
    },
    {
        id: 6,
        name: "New York Cheesecake",
        description: "Classic New York style cheesecake with a graham cracker crust",
        price: 6.99,
        categoryId: 3,
        image: "https://example.com/images/new-york-cheesecake.jpg"
    },
    {
        id: 7,
        name: "Iced Tea",
        description: "Freshly brewed iced tea, sweetened or unsweetened",
        price: 2.99,
        categoryId: 4,
        image: "https://example.com/images/iced-tea.jpg"
    },
    {
        id: 8,
        name: "Cappuccino",
        description: "Espresso topped with steamed milk and a layer of foam",
        price: 3.99,
        categoryId: 4,
        image: "https://example.com/images/cappuccino.jpg"
    },
    {
        id: 9,
        name: "Garlic Bread",
        description: "Toasted baguette slices with garlic butter and herbs",
        price: 4.99,
        categoryId: 5,
        image: "https://example.com/images/garlic-bread.jpg"
    },
    {
        id: 10,
        name: "Sweet Potato Fries",
        description: "Crispy sweet potato fries served with chipotle aioli",
        price: 5.99,
        categoryId: 5,
        image: "https://example.com/images/sweet-potato-fries.jpg"
    }
];