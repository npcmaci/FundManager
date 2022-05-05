package com.example.demo.controller;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.common.Result;
import com.example.demo.entity.Product_information;
import com.example.demo.mapper.ProductMapper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@CrossOrigin
@RequestMapping("/Maci")//请求路径
public class MaciController {

    @Resource
    ProductMapper productMapper;

    @PostMapping
    public Result<?> save(@RequestBody Product_information p) { //RequestBody注解将json数据转化成java对象
        productMapper.insert(p);
        return Result.success();
    }
    @DeleteMapping("/{id}")
    public Result<?> update(@PathVariable String id) {
        productMapper.deleteById(id);
        return Result.success();
    }

    @GetMapping
    public Result<?> findPage(@RequestParam(defaultValue = "1") Integer pageNum,
                              @RequestParam(defaultValue = "10") Integer pageSize,
                              @RequestParam(defaultValue = "") String search) { //RequestBody注解将json数据转化成java对象
        Page<Product_information> userPage = productMapper.selectPage(new Page<>(pageNum, pageSize), Wrappers.<Product_information>lambdaQuery().eq(Product_information::getFundCode, search).or().like(Product_information::getFundName, search));//可以使用or和and方法连接多个wapper

        return Result.success(userPage);
    }
}
