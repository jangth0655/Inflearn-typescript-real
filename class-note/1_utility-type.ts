interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {}

type ShoppingItem = Pick<Product, "id" | "name" | "price">;
function displayProductDetail(shoppingItems: ShoppingItem) {}

// 특정 상품 정보를 업데이트(갱신)하는 함수
/* interface UpdateProduct { 
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
} */

type UpdateProduct = Partial<Product>;
function updateProductItem(productItem: UpdateProduct) {}

// Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

/* type UserProfileUpdate = {
  username: UserProfile["username"];
  email: UserProfile["email"];
  profilePhotoUrl: UserProfile["profilePhotoUrl"];
};  */

/* type UserProfileUpdate = {
  [p in "username" | "email" | "profilePhotoUrl"]?: UserProfile[p];
};

type UserProfileKeys = keyof UserProfile */

type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p];
};

// Partial 구현 모습
type Subset<T> = {
  [p in keyof T]?: T[p];
};
