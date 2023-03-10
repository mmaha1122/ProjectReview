package com.example.demo.service;

import java.util.List;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Detail;
import com.example.demo.modeldto.Detaildto;
@EnableJpaRepositories
@Repository
public interface ApiService{

	String addDetails(Detaildto detaildto);

	List<Detail> getDetail();

	String updateDetail(Detail detail);

	String deleteById(int id);

}
