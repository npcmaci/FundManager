package com.example.demo;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.demo.entity.Product_information;
import com.example.demo.entity.Product_price;
import com.example.demo.mapper.PriceMapper;
import com.example.demo.mapper.ProductMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Map;

@SpringBootTest
class SpringbootApplicationTests {
	@Autowired
	PriceMapper PriceMapper;
	@Autowired
	ProductMapper ProductMapper;

	@Test
	void contextLoads() {
		//Product_price p=PriceMapper.selectById(2);
		QueryWrapper<Product_price> queryWrapper = new QueryWrapper<>();
		queryWrapper.select("unit_net_worth","date").eq("fund_code",1);
		List<Map<String, Object>> userList = PriceMapper.selectMaps(queryWrapper);
		userList.forEach(System.out::println);
	}

	@Test
	void tinformat(){
		QueryWrapper<Product_information> queryWrapper = new QueryWrapper<>();
		queryWrapper.select("fund_code", "fund_name" ,"subscription_status","redemption_status","handling_fee",
				"fund_type","fund_risk_level","fund_size","established","fund_rating","z0","z1","z2","z3","price").eq("fund_code",1);
		List<Product_information> ProductInformation = ProductMapper.selectList(queryWrapper);//可以使用or和and方法连接多个wapper
		ProductInformation.forEach(System.out::println);
	}
}
