package com.example.CRUD_application.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.CRUD_application.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    
    // crud methods are provided by JpaRepository
}
