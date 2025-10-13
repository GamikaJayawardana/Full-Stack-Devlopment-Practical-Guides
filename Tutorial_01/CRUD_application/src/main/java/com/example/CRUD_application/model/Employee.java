package com.example.CRUD_application.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity //specifies that the class is an entity and is mapped to a database table
@AllArgsConstructor //generates a constructor with 1 parameter for each field in your class
@NoArgsConstructor //generates a no-argument constructor
@Data //generates getters and setters for all fields
@Table(name = "employees")
public class Employee {
    @Id //primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto-increment
    private Long id; 
    @Column(name = "first_name", nullable = false) //column name in the database
    private String firstName;
    @Column(name = "last_name", nullable = false) //column name in the database
    private String lastName;
    @Column(name = "email", nullable = false, unique = true) //column name in the database
    private String email;

}
