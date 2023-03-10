package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Detail{
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	private String name;
	private int age;
	private String department;
	private String block;
	private String status;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getBlock() {
		return block;
	}
	public void setBlock(String block) {
		this.block = block;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Detail(String name,int age,String department,String block,String status) {
		super();
		this.name=name;
		this.age=age;
		this.department=department;
		this.block=block;
		this.status=status;
	}
	public Detail() {
		super();
	}
	
	@Override
	public String toString() {
		return "Detail [id=" + id + ", name=" + name + ", age=" + age + ", department=" + department + ", block="
				+ block + ", status=" + status + "]";
	}
	
	
}
