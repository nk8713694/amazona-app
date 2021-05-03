import bcrypt from 'bcryptjs';
const data={
    users: [
        {
          name: 'Nitish',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    products:[
        {
            _id:'1',
            name:'Nike slim shirts',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:120,
            brand:'Nike',
            rating:3,
            numReviews:10,
            description:'a high quality product',
            countInStock: 10,
        },
        {
            _id:'2',
            name:'adidas slim shirts',
            category:'Shirts',
            image:'/images/p2.jpg',
            price:120,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'a high quality product',
            countInStock: 20,
        },
        {
            _id:'3',
            name:' boomba freee slim shirts',
            category:'Shirts',
            image:'/images/p3.jpg',
            price:120,
            brand:'Nike',
            rating:4.8,
            numReviews:17,
            description:'a high quality product',
            countInStock: 0,
        }
        ,
        {
            _id:'4',
            name:'Nike slim pants',
            category:'Pants',
            image:'/images/p4.jpg',
            price:158,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'a high quality product',
            countInStock: 15,
        }
        ,
        {
            _id:'5',
            name:'Nike slim shirts',
            category:'Pants',
            image:'/images/p5.jpg',
            price:60,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'a high quality product',
            countInStock: 5,
        }
        ,
        {
            _id:'6',
            name:'adids slim shirts',
            category:'Shirts',
            image:'/images/p6.jpg',
            price:120,
            brand:'Nike',
            rating:4.5,
            numReviews:15,
            description:'a high quality product',
            countInStock: 12,
        }
    ]
}


export default data;