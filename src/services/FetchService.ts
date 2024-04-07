import axios from 'axios';

const SERVER_URI = 'https://dummyjson.com';

export async function fetchProducts() {
  const res = await axios.get(SERVER_URI + '/products?limit=100');
  return res.data?.products;
}

export async function fetchProductsByCategory(category: String) {
  const res = await axios.get(SERVER_URI + `/products/category/${category}`);
  return res.data?.products;;
}

export async function fetchProductById(id: string) {
  const res = await axios.get(SERVER_URI + `/products/${id}`);
  return res.data;
}

export async function fetchCategories() {
  const res = await axios.get(SERVER_URI + '/products/categories');
  return res.data;
}

export async function fetchProfile(token: string) {
  const res = await axios.get(SERVER_URI + '/auth/me', {
  headers: {
    'Authorization': `Bearer ${token}`,
  }
});
  return res.data;
}

export async function login({username, password}: {username:string, password: string}) {
  const res = await axios.post(SERVER_URI + '/auth/login',{
    username,
    password
  });
  return res.data;
}