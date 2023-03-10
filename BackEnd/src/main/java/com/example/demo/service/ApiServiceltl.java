package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Detail;
import com.example.demo.modeldto.Detaildto;
import com.example.demo.repository.DetailRepo;

@Service
public class ApiServiceltl implements ApiService{
	@Autowired
	private DetailRepo detailrepo;
	public String addDetails(Detaildto detaildto)
	{
		Detail detail=new Detail(
				detaildto.getName(),
				detaildto.getAge(),
				detaildto.getDepartment(),
				detaildto.getBlock(),
				detaildto.getStatus()
				
				);
		detailrepo.save(detail);
		return detail.getName();
				
	}
	public List<Detail>getDetail(){
		return detailrepo.findAll();
	}
	public String updateDetail(Detail detail) {
		detailrepo.save(detail);
		return "Order Updated ";
	}
	public String deleteById(int id) {
		detailrepo.deleteById(id);
		return "deleted";
	}
}
