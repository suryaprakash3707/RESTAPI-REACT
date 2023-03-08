package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.demo.Entity.Laptop;
//import com.example.demo.Entity.Student;
import com.example.demo.Repository.LaptopRepository;

@Service
public class LaptopService {
     @Autowired     
     private LaptopRepository stu;
     
     public Laptop savedetails(Laptop s)
     {
    	 return stu.save(s);
     }
     

    	 public List<Laptop> getAllDetails()
         {
        	 List<Laptop> arr = new ArrayList<>();
        	 arr=stu.findAll();
        	 return arr;   
        	 }
         

     
     public void deleteDepartmentById(int product_id)
     {
    	 stu.deleteById(product_id);
     }
    public Laptop update(int product_id,Laptop s){
    	return stu.saveAndFlush(s);
     }
    
    

}