import { getXataClient, ProductsRecord } from "@/xata";
import { BrandsRecord } from "@/xata";
import { CategoriesRecord } from "@/xata";
import { SubcategoriesRecord } from "@/xata";
import { CustomersRecord } from "@/xata";
import { DiscountsRecord } from "@/xata";
import { CartsRecord } from "@/xata";
import { CartItemsRecord } from "@/xata";
import { OrdersRecord } from "@/xata";

// Define base types for relations
type BrandRelation = {
  xata_id: string;
  name: string | null;
  brandUrl: string | null;
  slug: string | null;
};

type CategoryRelation = {
  xata_id: string;
  name: string | null;
  slug: string | null;
};

type SubcategoryRelation = {
  xata_id: string;
  title: string | null;
  slug: string | null;
};

type CustomerRelation = {
  xata_id: string;
  name: string | null;
  email: string | null;
  address: string | null;
  phone: string | null;
};

type DiscountRelation = {
  xata_id: string;
  code: string | null;
  percentage: number | null;
  isActive: boolean | null;
};

// Products
export type ProductWithRelations = {
  xata_id: string;
  title: string | null;
  description: string | null;
  basePrice: number | null;
  stock: number | null;
  imageUrl: string | null;
  brand: BrandRelation | null;
  category: CategoryRelation | null;
  subcategory: SubcategoryRelation | null;
};

export async function getAllProducts(): Promise<ProductWithRelations[]> {
  const result = await getXataClient()
    .db.products.select(["*", "brand.*", "category.*", "subcategory.*"])
    .getAll();
  return result as unknown as ProductWithRelations[];
}

export async function getProductById(
  id: string
): Promise<ProductWithRelations | null> {
  const product = await getXataClient().db.products.read(id, [
    "*",
    "brand.*",
    "category.*",
    "subcategory.*",
  ]);
  return product as unknown as ProductWithRelations | null;
}

export async function createProduct(
  data: Omit<ProductsRecord, "id">
): Promise<ProductWithRelations> {
  const product = await getXataClient().db.products.create(data, [
    "*",
    "brand.*",
    "category.*",
    "subcategory.*",
  ]);
  return product as unknown as ProductWithRelations;
}

export async function updateProduct(
  id: string,
  data: Partial<ProductsRecord>
): Promise<ProductWithRelations> {
  const product = await getXataClient().db.products.update(id, data, [
    "*",
    "brand.*",
    "category.*",
    "subcategory.*",
  ]);
  return product as unknown as ProductWithRelations;
}

export async function deleteProduct(id: string): Promise<void> {
  await getXataClient().db.products.delete(id);
}

// Categories
export type CategoryWithRelations = {
  xata_id: string;
  name: string | null;
  slug: string | null;
};

export async function getAllCategories(): Promise<CategoryWithRelations[]> {
  const result = await getXataClient().db.categories.select(["*"]).getAll();
  return result as unknown as CategoryWithRelations[];
}

export async function getCategoryById(
  id: string
): Promise<CategoryWithRelations | null> {
  const category = await getXataClient().db.categories.read(id, ["*"]);
  return category as unknown as CategoryWithRelations | null;
}

export async function createCategory(
  data: Omit<CategoriesRecord, "id">
): Promise<CategoryWithRelations> {
  const category = await getXataClient().db.categories.create(data, ["*"]);
  return category as unknown as CategoryWithRelations;
}

export async function updateCategory(
  id: string,
  data: Partial<CategoriesRecord>
): Promise<CategoryWithRelations> {
  const category = await getXataClient().db.categories.update(id, data, ["*"]);
  return category as unknown as CategoryWithRelations;
}

export async function deleteCategory(id: string): Promise<void> {
  await getXataClient().db.categories.delete(id);
}

// Subcategories
export type SubcategoryWithRelations = {
  xata_id: string;
  title: string | null;
  slug: string | null;
  category: CategoryRelation | null;
};

export async function getAllSubcategories(): Promise<
  SubcategoryWithRelations[]
> {
  const result = await getXataClient()
    .db.subcategories.select(["*", "category.*"])
    .getAll();
  return result as unknown as SubcategoryWithRelations[];
}

export async function getSubcategoryById(
  id: string
): Promise<SubcategoryWithRelations | null> {
  const subcategory = await getXataClient().db.subcategories.read(id, [
    "*",
    "category.*",
  ]);
  return subcategory as unknown as SubcategoryWithRelations | null;
}

export async function createSubcategory(
  data: Omit<SubcategoriesRecord, "id">
): Promise<SubcategoryWithRelations> {
  const subcategory = await getXataClient().db.subcategories.create(data, [
    "*",
    "category.*",
  ]);
  return subcategory as unknown as SubcategoryWithRelations;
}

export async function updateSubcategory(
  id: string,
  data: Partial<SubcategoriesRecord>
): Promise<SubcategoryWithRelations> {
  const subcategory = await getXataClient().db.subcategories.update(id, data, [
    "*",
    "category.*",
  ]);
  return subcategory as unknown as SubcategoryWithRelations;
}

export async function deleteSubcategory(id: string): Promise<void> {
  await getXataClient().db.subcategories.delete(id);
}

// Brands
export type BrandWithRelations = {
  xata_id: string;
  name: string | null;
  brandUrl: string | null;
  slug: string | null;
};

export async function getAllBrands(): Promise<BrandWithRelations[]> {
  const result = await getXataClient().db.brands.select(["*"]).getAll();

  return result as unknown as BrandWithRelations[];
}

export async function getBrandById(
  id: string
): Promise<BrandWithRelations | null> {
  const brand = await getXataClient().db.brands.read(id, ["*"]);
  return brand as unknown as BrandWithRelations | null;
}

export async function createBrand(
  data: Omit<BrandsRecord, "id">
): Promise<BrandWithRelations> {
  const brand = await getXataClient().db.brands.create(data, ["*"]);
  return brand as unknown as BrandWithRelations;
}

export async function updateBrand(
  id: string,
  data: Partial<BrandsRecord>
): Promise<BrandWithRelations> {
  const brand = await getXataClient().db.brands.update(id, data, ["*"]);
  return brand as unknown as BrandWithRelations;
}

export async function deleteBrand(id: string): Promise<void> {
  await getXataClient().db.brands.delete(id);
}

// Customers
export type CustomerWithRelations = {
  xata_id: string;
  name: string | null;
  email: string | null;
  address: string | null;
  phone: string | null;
};

export async function getAllCustomers(): Promise<CustomerWithRelations[]> {
  const result = await getXataClient().db.customers.select(["*"]).getAll();
  return result as unknown as CustomerWithRelations[];
}

export async function getCustomerById(
  id: string
): Promise<CustomerWithRelations | null> {
  const customer = await getXataClient().db.customers.read(id, ["*"]);
  return customer as unknown as CustomerWithRelations | null;
}

export async function createCustomer(
  data: Omit<CustomersRecord, "id">
): Promise<CustomerWithRelations> {
  const customer = await getXataClient().db.customers.create(data, ["*"]);
  return customer as unknown as CustomerWithRelations;
}

export async function updateCustomer(
  id: string,
  data: Partial<CustomersRecord>
): Promise<CustomerWithRelations> {
  const customer = await getXataClient().db.customers.update(id, data, ["*"]);
  return customer as unknown as CustomerWithRelations;
}

export async function deleteCustomer(id: string): Promise<void> {
  await getXataClient().db.customers.delete(id);
}

// Discounts
export type DiscountWithRelations = {
  xata_id: string;
  code: string | null;
  percentage: number | null;
  isActive: boolean | null;
  minOrderAmount: number | null;
  expiresAt: Date | null;
};

export async function getAllDiscounts(): Promise<DiscountWithRelations[]> {
  const result = await getXataClient().db.discounts.select(["*"]).getAll();
  return result as unknown as DiscountWithRelations[];
}

export async function getDiscountById(
  id: string
): Promise<DiscountWithRelations | null> {
  const discount = await getXataClient().db.discounts.read(id, ["*"]);
  return discount as unknown as DiscountWithRelations | null;
}

export async function getDiscountByCode(
  code: string
): Promise<DiscountWithRelations | null> {
  const discount = await getXataClient()
    .db.discounts.filter({ code })
    .getFirst();
  return discount as unknown as DiscountWithRelations | null;
}

export async function createDiscount(
  data: Omit<DiscountsRecord, "id">
): Promise<DiscountWithRelations> {
  const discount = await getXataClient().db.discounts.create(data, ["*"]);
  return discount as unknown as DiscountWithRelations;
}

export async function updateDiscount(
  id: string,
  data: Partial<DiscountsRecord>
): Promise<DiscountWithRelations> {
  const discount = await getXataClient().db.discounts.update(id, data, ["*"]);
  return discount as unknown as DiscountWithRelations;
}

export async function deleteDiscount(id: string): Promise<void> {
  await getXataClient().db.discounts.delete(id);
}

// Carts
export type CartWithRelations = {
  xata_id: string;
  status: string | null;
  customer: CustomerRelation | null;
};

export async function getAllCarts(): Promise<CartWithRelations[]> {
  const result = await getXataClient()
    .db.carts.select(["*", "customer.*"])
    .getAll();
  return result as unknown as CartWithRelations[];
}

export async function getCartById(
  id: string
): Promise<CartWithRelations | null> {
  const cart = await getXataClient().db.carts.read(id, ["*", "customer.*"]);
  return cart as unknown as CartWithRelations | null;
}

export async function createCart(
  data: Omit<CartsRecord, "id">
): Promise<CartWithRelations> {
  const cart = await getXataClient().db.carts.create(data, ["*", "customer.*"]);
  return cart as unknown as CartWithRelations;
}

export async function updateCart(
  id: string,
  data: Partial<CartsRecord>
): Promise<CartWithRelations> {
  const cart = await getXataClient().db.carts.update(id, data, [
    "*",
    "customer.*",
  ]);
  return cart as unknown as CartWithRelations;
}

export async function deleteCart(id: string): Promise<void> {
  await getXataClient().db.carts.delete(id);
}

// Cart Items
export type CartItemWithRelations = {
  xata_id: string;
  quantity: number | null;
  product: ProductWithRelations | null;
  cart: CartWithRelations | null;
};

export async function getCartItems(
  cartId: string
): Promise<CartItemWithRelations[]> {
  const result = await getXataClient()
    .db.cart_items.filter({ cart: cartId })
    .select([
      "*",
      "product.*",
      "cart.*",
      "product.brand.*",
      "product.category.*",
      "product.subcategory.*",
    ])
    .getAll();
  return result as unknown as CartItemWithRelations[];
}

export async function addToCart(
  data: Omit<CartItemsRecord, "id">
): Promise<CartItemWithRelations> {
  const item = await getXataClient().db.cart_items.create(data, [
    "*",
    "product.*",
    "cart.*",
  ]);
  return item as unknown as CartItemWithRelations;
}

export async function updateCartItem(
  id: string,
  quantity: number
): Promise<CartItemWithRelations> {
  const item = await getXataClient().db.cart_items.update(id, { quantity }, [
    "*",
    "product.*",
  ]);
  return item as unknown as CartItemWithRelations;
}

export async function removeFromCart(id: string): Promise<void> {
  await getXataClient().db.cart_items.delete(id);
}

// Orders
export type OrderWithRelations = {
  xata_id: string;
  status: string | null;
  payment_status: string | null;
  subtotal: number | null;
  total: number | null;
  discountAmount: number | null;
  items: any | null; // Adjust this type based on your items structure
  customer: CustomerRelation | null;
  discount: DiscountRelation | null;
};

export async function getAllOrders(): Promise<OrderWithRelations[]> {
  const result = await getXataClient()
    .db.orders.select(["*", "customer.*", "discount.*"])
    .getAll();
  return result as unknown as OrderWithRelations[];
}

export async function getOrderById(
  id: string
): Promise<OrderWithRelations | null> {
  const order = await getXataClient().db.orders.read(id, [
    "*",
    "customer.*",
    "discount.*",
  ]);
  return order as unknown as OrderWithRelations | null;
}

export async function getCustomerOrders(
  customerId: string
): Promise<OrderWithRelations[]> {
  const result = await getXataClient()
    .db.orders.filter({ customer: customerId })
    .select(["*", "customer.*", "discount.*"])
    .getAll();
  return result as unknown as OrderWithRelations[];
}

export async function createOrder(
  data: Omit<OrdersRecord, "id">
): Promise<OrderWithRelations> {
  const order = await getXataClient().db.orders.create(data, [
    "*",
    "customer.*",
    "discount.*",
  ]);
  return order as unknown as OrderWithRelations;
}

export async function updateOrder(
  id: string,
  data: Partial<OrdersRecord>
): Promise<OrderWithRelations> {
  const order = await getXataClient().db.orders.update(id, data, [
    "*",
    "customer.*",
    "discount.*",
  ]);
  return order as unknown as OrderWithRelations;
}

export async function deleteOrder(id: string): Promise<void> {
  await getXataClient().db.orders.delete(id);
}

// testimonials

// Get featuredTestimonials

export async function getFeaturedTestimonials() {
  try {
    return await getXataClient().db.testimonials
      .filter('is_featured', true)
      .select(['*', 'product-id.*'])
      .getAll();
  } catch (error) {
    console.error('Error getting featured testimonials:', error);
    throw error;
  }
}

// Get all testimonials with pagination
export async function getAllTestimonials(pageSize = 20, pageOffset = 0) {
  try {
    return await getXataClient().db.testimonials
      .select(['*', 'product-id.*'])
      .getPaginated({
        pagination: {
          size: pageSize,
          offset: pageOffset
        }
      });
  } catch (error) {
    console.error('Error getting testimonials:', error);
    throw error;
  }
}

// Get a testimonial by ID
export async function getTestimonial(id:string) {
  try {
    return await getXataClient().db.testimonials.read(id);
  } catch (error) {
    console.error('Error getting testimonial:', error);
    throw error;
  }
}

// Create a new testimonial
export async function createTestimonial(testimonialData:{}) {
  try {
    return await getXataClient().db.testimonials.create(testimonialData);
  } catch (error) {
    console.error('Error creating testimonial:', error);
    throw error;
  }
}


// Delete a testimonial
export async function deleteTestimonial(id: string) {
  try {
    return await getXataClient().db.testimonials.delete(id);
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    throw error;
  }
}

// Update a testimonial
export async function updateTestimonial(id: string, updates:{}) {
  try {
    return await getXataClient().db.testimonials.update(id, updates);
  } catch (error) {
    console.error('Error updating testimonial:', error);
    throw error;
  }
}

// Get testimonials by product ID
export async function getTestimonialsByProduct(productId:string) {
  try {
    return await getXataClient().db.testimonials
      .filter('product-id', productId)
      .select(['*', 'product-id.*'])
      .getAll();
  } catch (error) {
    console.error('Error getting testimonials by product:', error);
    throw error;
  }
}

