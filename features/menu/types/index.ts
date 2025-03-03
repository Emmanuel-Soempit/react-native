interface Menu {
    id: number;
    name: string;
    items: number;
    categories: number
}

interface Category {
    id: number;
    name: string;
    items: number;
}

interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number,
    categoryId: number
    image: string
}
