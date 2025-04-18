// get products
// const products: Product[] = await xata.db.products.getAll();

// فیلتر کردن (مثلاً محصولات یک دسته‌بندی):
//  const filteredProducts = await xata.db.products
//   .filter({ category: "آرایش چشم" })
//   .getMany();



// جستجوی متن کامل (Full-Text Search):
// const results = await xata.db.products.search("رژ لب");


// صفحه‌بندی (Pagination):
// const { records, meta } = await xata.db.products
//   .select(["name", "price"])
//   .getPaginated({
//     pagination: { size: 10, offset: 20 }
//   });


// Create
// ب. ایجاد داده (Create)
// const newProduct = await xata.db.products.create({
//   name: "رژ لب قرمز",
//   price: 29.99,
//   category: "آرایش لب",
//   image: "/images/lipstick.jpg"
// });


// چند رکورد به صورت گروهی:
// const batchResults = await xata.db.products.createMany([
//   { name: "سایه چشم", price: 15.99 },
//   { name: "خط چشم", price: 12.50 }
// ]);


// Update
// تک رکورد (با id):
// const updatedProduct = await xata.db.products.update("rec_123", {
//   price: 34.99 // آپدیت قیمت
// });

// آپدیت با فیلتر:
// const { records } = await xata.db.products
//   .filter({ category: "آرایش لب" })
//   .update({ discount: 10 }); // اعمال تخفیف 10% به همه محصولات دسته


// Delete
// تک رکورد:
// await xata.db.products.delete("rec_123");

// حذف با فیلتر:
// await xata.db.products
//   .filter({ price: { $lt: 5 } }) // حذف محصولات ارزان‌تر از 5 دلار
//   .delete();