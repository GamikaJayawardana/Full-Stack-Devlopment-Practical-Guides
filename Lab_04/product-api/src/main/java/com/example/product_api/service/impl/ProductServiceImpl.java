package com.example.product_api.service.impl;

import java.util.List;
import java.util.stream.Collectors; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.product_api.dto.ProductDTO;
import com.example.product_api.entity.Product;
import com.example.product_api.repository.ProductRepository;
import com.example.product_api.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Helper method to convert Entity to DTO
    private ProductDTO convertToDTO(Product product) {
        ProductDTO dto = new ProductDTO();
        dto.setProductName(product.getProductName());
        dto.setCategory(product.getCategory());
        dto.setPrice(product.getPrice());
        dto.setQuantity(product.getQuantity());
        return dto;
    }

    @Override
    public ProductDTO addProduct(ProductDTO productDTO) {
        
        Product product = new Product();
        product.setProductName(productDTO.getProductName());
        product.setCategory(productDTO.getCategory());
        product.setPrice(productDTO.getPrice());
        product.setQuantity(productDTO.getQuantity());

        Product savedProduct = productRepository.save(product);

        
        return convertToDTO(savedProduct);
    }

    @Override
    public List<ProductDTO> getAllProducts() {
        return productRepository.findAll()
                .stream()
                .map(this::convertToDTO) // Convert each product to a DTO
                .collect(Collectors.toList());
    }

    @Override
    public List<ProductDTO> searchProductsByCategory(String category) {
        return productRepository.findByCategoryIgnoreCase(category)
                .stream()
                .map(this::convertToDTO) 
                .collect(Collectors.toList());
    }

    @Override
    public void deleteProductByName(String name) {
        Product product = productRepository.findByProductNameIgnoreCase(name)
                .orElseThrow(() -> new RuntimeException("Product not found with name: " + name));
        productRepository.delete(product);
    }
}