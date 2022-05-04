package com.example.demo.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.common.Result;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entity.Product_price;
import com.example.demo.mapper.PriceMapper;
import javax.annotation.Resource;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/Pp")//请求路径
public class ProductPriceController {
    @Resource
    PriceMapper PriceMapper;

    @PostMapping
    public Result<?> save(@RequestBody Product_price p) { //RequestBody注解将json数据转化成java对象
        PriceMapper.insert(p);
        return Result.success();
    }

    @GetMapping
    public Result<?> findPage(@RequestParam(defaultValue = "1") Integer pageNum,
                              @RequestParam(defaultValue = "10") Integer pageSize,
                              @RequestParam(defaultValue = "") String search) { //RequestBody注解将json数据转化成java对象
        QueryWrapper<Product_price> queryWrapper = new QueryWrapper<>();
        queryWrapper.select("fund_code","unit_net_worth","date").eq("fund_code",pageNum);
        List<Product_price> PricePage = PriceMapper.selectList(queryWrapper);//可以使用or和and方法连接多个wapper
        System.out.println(PricePage);
        return Result.success(PricePage);
    }
}
