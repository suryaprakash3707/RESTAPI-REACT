package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Laptop {


@Id
	@Column(name="PRODUCTID")
	private int product_id;
	
	@Column(name="BRAND")
	private String brand;
	
	@Column(name="MODEL")
	private String model ;
	
	@Column(name="RAM")
	private String ram;
	
	@Column(name="PROCESSOR")
	private String processor;
	
	@Column(name="ROM")
	private String rom;
	
	@Column(name="GRAPHICS_CARD")
	private String graphics_card;

	
	
	public int getProduct_id() {
		return product_id;
	}

	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getRam() {
		return ram;
	}

	public void setRam(String ram) {
		this.ram = ram;
	}

	public String getProcessor() {
		return processor;
	}

	public void setProcessor(String processor) {
		this.processor = processor;
	}

	public String getRom() {
		return rom;
	}

	public void setRom(String rom) {
		this.rom = rom;
	}

	public String getGraphics_card() {
		return graphics_card;
	}

	public void setGraphics_card(String graphics_card) {
		this.graphics_card = graphics_card;
	}
	
	public Laptop()
	{
		
	}
	public Laptop(int product_id, String brand, String model, String ram, String processor, String rom,
			String graphics_card) {
		super();
		this.product_id = product_id;
		this.brand = brand;
		this.model = model;
		this.ram = ram;
		this.processor = processor;
		this.rom = rom;
		this.graphics_card = graphics_card;
	}
	

}
