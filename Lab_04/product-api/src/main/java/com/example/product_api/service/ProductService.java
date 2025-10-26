package com.example.product_api.service;

import java.util.List;

import com.example.product_api.dto.ProductDTO;
import com.example.product_api.entity.Product;

public interface ProductService {

    List<ProductDTO> getAllProducts();
    List<ProductDTO> searchProductsByCategory(String category);
    Product addProduct(ProductDTO productDTO);
    void deleteProductByName(String name);

}
