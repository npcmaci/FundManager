package com.example.demo.controller;

import com.example.demo.common.Result;
import com.example.demo.entity.User;
import com.example.demo.mapper.UserMapper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;


@RestController
@RequestMapping("/user")//请求路径
public class UserController {
    @Resource
    UserMapper userMapper;
    @PostMapping
    public Result<?> save(@RequestBody User user) { //RequestBody注解将json数据转化成java对象
        userMapper.insert(user);
        return Result.success();
    }
}
