import { IProduct } from "../models/products.model";

export const PRODUCTS: IProduct[] = [
    {
        id: '1',
        name: 'Macbook Pro',
        description: 'Macbook Pro com a melhor tecnologia do mercado',
        price: 17.499,
        date: '05/05/2010',
        tags: ['Tecnologia'],
        imgs: ['/assets/macbookpro.jpg']
    },
    {
        id: '2',
        name: 'Macbook Air 256GB 2020',
        description: 'Macbook Air com a melhor rapidez e fluidez',
        price: 10.499,
        date: '14/06/2010',
        tags: ['Tecnologia', 'Interface'],
        imgs: ['/assets/macbookair.jpg']
    },
    {
        id: '3',
        name: 'Macbook Air 512GB 2021',
        description: 'Macbook Air com a melhor rapidez e fluidez e trazendo muita inovação',
        price: 13.499,
        date: '14/06/2015',
        tags: ['Tecnologia', 'Interface'],
        imgs: ['/assets/macbookair2.jpg']
    },
    {
        id: '4',
        name: 'Macbook Pro 2019',
        description: 'Macbook Air com a melhor rapidez e fluidez e trazendo muita inovação',
        price: 12.499,
        date: '10/10/2015',
        tags: ['Tecnologia', 'Interface'],
        imgs: ['/assets/macbookair3.jpg']
    },
]