package com.example.demo.controller;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.common.Result;
import com.example.demo.entity.User;
import com.example.demo.mapper.UserMapper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;


@RestController
@CrossOrigin
@RequestMapping("/user")//请求路径
public class UserController {
    @Resource
    UserMapper userMapper;
    @PostMapping
    public Result<?> save(@RequestBody User user) { //RequestBody注解将json数据转化成java对象
        userMapper.insert(user);
        return Result.success();
    }

    @GetMapping
    public Result<?> findPage(@RequestParam(defaultValue = "1") Integer pageNum,
                              @RequestParam(defaultValue = "10") Integer pageSize,
                              @RequestParam(defaultValue = "") String search) { //RequestBody注解将json数据转化成java对象
        Page<User> userPage = userMapper.selectPage(new Page<>(pageNum, pageSize), Wrappers.<User>lambdaQuery().eq(User::getUserId, search).or().like(User::getUserName, search));//可以使用or和and方法连接多个wapper

        return Result.success(userPage);
    }
}
