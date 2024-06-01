type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
};

export const products: Product[] = [
    {
        id: 1,
        name: 'Football',
        description: 'Description 1',
        price: 10,
        image: 'https://images.unsplash.com/photo-1516567727245-ad8c68f3ec93?q=80&w=449&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Balls',
    },
    {
        id: 2,
        name: 'Tennisball',
        description: 'Description 2',
        price: 20,
        image: 'https://images.unsplash.com/photo-1510697963685-53101e615777?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Balls',
    },
    {
        id: 3,
        name: 'Football Barcelona',
        description: 'This is a football from the famous football club barcelona',
        price: 30,
        image: 'https://images.unsplash.com/photo-1571354188019-9a5038b88457?q=80&w=432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Balls',
    },
    {
        id: 4,
        name: 'Basketball',
        description: 'Description 4',
        price: 40,
        image: 'https://images.unsplash.com/photo-1511316853582-7c4138ceef87?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Balls',
    },
    {
        id: 5,
        name: 'Baseball',
        description: 'Description 5',
        price: 50,
        image: 'https://plus.unsplash.com/premium_photo-1675820937109-3096e0336b12?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Balls',
    },
    {
        id: 6,
        name: 'Tennis Racket',
        description: 'Description 6',
        price: 60,
        image: 'https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Gadgets',
    },
];

