package com.example.CRUD_application.service;
import java.util.List;
import com.example.CRUD_application.model.Employee;

public interface EmployeeService {
    Employee saveEmployee (Employee employee); // create
    List<Employee> getAllEmployees(); // read all
    Employee getEmployeeById(Long id); // read by id
    Employee updateEmployee(Employee employee, Long id); // update
    void deleteEmployee(Long id); // delete
}
