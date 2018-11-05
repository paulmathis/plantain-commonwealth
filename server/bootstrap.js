const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

mongoose.set('debug', true);
mongoose.connect(`mongodb://${dbUser}:${dbPass}@ds237979.mlab.com:37979/plantain-commonwealth`);

// const Product = require('./models/ProductModel');
// const Category = require('./models/CategoryModel');
// const CategoryGroup = require('./models/CategoryGroupModel');

// const men = new CategoryGroup({
//   name: 'Men',
// });

// const tShirt = new Category({
//   name: 'T-Shirt',
//   category_group: men._id,
// });

// const greenShirt = new Product({
//   name: 'Green T-Shirt',
//   price: 19.99,
//   sizes: ['xs', 's', 'm', 'l', 'xl'],
//   img: '/assets/products/t-shirts/green-t-shirt.jpg',
//   category: tShirt._id,
// });

// tShirt.products.push(greenShirt._id);
// men.categories.push(tShirt._id);

// console.log(tShirt);
// men.save((err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   tShirt.save((err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     greenShirt.save((error) => {
//       if (error) {
//         console.log(error);
//         return;
//       }
//     });
//   });
// });

// CategoryGroup.findOne({ name: 'Men' })
//   .populate({
//     path: 'categories',
//     populate: { path: 'products' },
//   })
//   .exec((err, cg) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(cg.categories[0].products);
//   });
