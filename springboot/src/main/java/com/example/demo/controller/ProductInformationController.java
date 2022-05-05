package com.example.demo.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.demo.entity.Product_information;
import com.example.demo.mapper.ProductMapper;
import org.springframework.web.bind.annotation.*;
import com.example.demo.common.Result;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/Product_i")//请求路径
public class ProductInformationController {

    @Resource
    ProductMapper ProductMapper;

    @PostMapping
    public Result<?> save(@RequestBody Product_information p) { //RequestBody注解将json数据转化成java对象
        ProductMapper.insert(p);
        return Result.success();
    }
    @GetMapping
    public Result<?> findPage(@RequestParam(defaultValue = "1") Integer fondId) { //RequestBody注解将json数据转化成java对象
        QueryWrapper<Product_information> queryWrapper = new QueryWrapper<>();
        queryWrapper.select("fund_code", "fund_name" ,"subscription_status","redemption_status","handling_fee",
                "fund_type","fund_risk_level","fund_size","established","fund_rating","z0","z1","z2","z3","prcie").eq("fund_code",fondId);
        List<Product_information> ProductInformation = ProductMapper.selectList(queryWrapper);//可以使用or和and方法连接多个wapper
        System.out.println(ProductInformation);
        return Result.success(ProductInformation);
    }
}