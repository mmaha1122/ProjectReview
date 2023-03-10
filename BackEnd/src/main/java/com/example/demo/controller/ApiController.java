package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Detail;
import com.example.demo.modeldto.Detaildto;
import com.example.demo.service.ApiService;
@CrossOrigin
@RestController
@RequestMapping("/h")
public class ApiController {
	@Autowired
	ApiService service;
	
	@PostMapping("/detail")
	public String saveDetail(@RequestBody Detaildto detaildto) {
		String id=service.addDetails(detaildto);
		return id;
	}
	@GetMapping("/get")
	public List<Detail>get(){
		return service.getDetail();
	}
	@PutMapping("/put")
	public String update(@RequestBody Detail detail) {
		return service.updateDetail(detail);
	}
	@DeleteMapping("/del")
	public String delete(@RequestParam int id) {
		return service.deleteById(id);
	}
	
	
}
