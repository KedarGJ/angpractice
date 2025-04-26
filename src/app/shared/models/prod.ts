export interface Iprod{
    _id: string;
  title: string;
  category: string;
  subcategory: string;
  total_price: string;
  
  images: string[];
  tags: string[];
  
  product_description: string[];
  product_details: string | null;
  
  rating: number;
  reviews_count: number;
  return_policy: string | null;
  
  product_specifications: Array<{
    _id: string;
    specification_name: string;
    specification_value: string;
  }> | null;
}