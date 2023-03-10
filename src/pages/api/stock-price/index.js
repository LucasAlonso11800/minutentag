import products from "@/data/products";
import stockPrice from "@/data/stock-price";

export default function handler(req, res) {
    const response = products.reduce((acc, product) => {
        const formatted = product;
        
        formatted.slug = `${product.id}-${product.brand.toLowerCase().split(' ').join('-')}`;
        
        formatted.skus = formatted.skus.map((sku) => {
            const skuData = stockPrice[parseInt(sku.code)]; 
            return {
                ...sku,
                stock: skuData.stock,
                price: (skuData.price / 100).toFixed(2)
            }
        });
        
        return [...acc, formatted]
    }, []);
    res.status(200).json({ products: response })
  }
  