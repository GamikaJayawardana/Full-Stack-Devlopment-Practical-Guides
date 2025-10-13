package com.example.CRUD_application.service.impl;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.CRUD_application.model.Employee;
import com.example.CRUD_application.repository.EmployeeRepository;
import com.example.CRUD_application.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

   @Autowired
   private EmployeeRepository employeeRepository;
    
    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee getEmployeeById(Long id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        if(employee.isPresent()) {
            return employee.get();
        } else {
            throw new RuntimeException("Employee not found with id: " + id);
        }
    }

    @Override
    public Employee updateEmployee(Employee employee, Long id) {
        Employee exitingEmployee = employeeRepository.findById(id).orElseThrow(
            () -> new RuntimeException("Employee not found with id: " + id)
        );
        exitingEmployee.setFirstName(employee.getFirstName());
        exitingEmployee.setLastName(employee.getLastName());
        exitingEmployee.setEmail(employee.getEmail());
        employeeRepository.save(exitingEmployee);
        return exitingEmployee;
        
    }


    @Override
    public void deleteEmployee(Long id) {
        employeeRepository.findById(id).orElseThrow(
            () -> new RuntimeException("Employee not found with id: " + id)
        );
        employeeRepository.deleteById(id);
    }
}
