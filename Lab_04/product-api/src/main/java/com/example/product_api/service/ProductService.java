package com.example.product_api.service;

import java.util.List;

import com.example.product_api.dto.ProductDTO;

public interface ProductService {

    List<ProductDTO> getAllProducts();
    List<ProductDTO> searchProductsByCategory(String category);
    ProductDTO addProduct(ProductDTO productDTO);
    void deleteProductByName(String name);

}
