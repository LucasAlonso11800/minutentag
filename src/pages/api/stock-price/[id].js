import products from "@/data/products";
import stockPrice from "@/data/stock-price";

export default function handler(req, res) {
    const product = products.find((p) => p.id == parseInt(req.query.id));

    product.slug = `${product.id}-${product.brand.toLowerCase().split(' ').join('-')}`;
    
    product.skus = product.skus.map((sku) => {
        const skuData = stockPrice[parseInt(sku.code)]; 
        return {
            ...sku,
            stock: skuData.stock,
            price: (skuData.price / 100).toFixed(2)
        }
    });
    
    res.status(200).json({ product: product })
  }
  