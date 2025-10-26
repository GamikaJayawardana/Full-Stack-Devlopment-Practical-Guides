package com.example.product_api.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class ProductDTO {

    @NotBlank(message = "Product name cannot be empty")
    private String productName;

    @NotBlank(message = "Category cannot be empty")
    private String category;

    @Min(value = 1, message = "Price must be positive")
    private Double price;

    @Min(value = 1, message = "Quantity must be positive")
    private int quantity;
}
