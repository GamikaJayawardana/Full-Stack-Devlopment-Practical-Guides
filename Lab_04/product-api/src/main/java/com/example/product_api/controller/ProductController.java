package com.example.product_api.controller;

import com.example.product_api.dto.ProductDTO;
import com.example.product_api.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    public ResponseEntity<ProductDTO> addProduct(@Valid @RequestBody ProductDTO productDTO) {
        ProductDTO newProductDTO = productService.addProduct(productDTO);
        return new ResponseEntity<>(newProductDTO, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<ProductDTO>> getAllProducts() {
        List<ProductDTO> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<ProductDTO>> getProductsByCategory(@PathVariable String category) {
        List<ProductDTO> products = productService.searchProductsByCategory(category);
        return ResponseEntity.ok(products);
    }

    @DeleteMapping("/{name}")
    public ResponseEntity<String> deleteProductByName(@PathVariable String name) {
        try {
            productService.deleteProductByName(name);
            return ResponseEntity.ok("Product '" + name + "' deleted successfully.");
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
}