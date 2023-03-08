package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Laptop;
import com.example.demo.Service.LaptopService;
@CrossOrigin
@RestController
public class LaptopController {	
	
    @Autowired
    private LaptopService stuservice;
    
    @GetMapping("/get")
    public List<Laptop> getDetails()
    {
    	return stuservice.getAllDetails();
    }
   
    
    
    @PostMapping("/add")
    public Laptop addDetails(@RequestBody Laptop s)
    {
    	return stuservice.savedetails(s);
    	
    }
    @DeleteMapping("/del/{product_id}")
    public String delChild(@PathVariable int product_id) {
    	stuservice.deleteDepartmentById(product_id);
    	return "Deleted Successfully!!!";
    }
    
    @PutMapping("/update/{product_id}")
    public Laptop update(@PathVariable int product_id,@RequestBody Laptop s) {
    	return stuservice.update(product_id, s);
    	
    }
   
    
    
}