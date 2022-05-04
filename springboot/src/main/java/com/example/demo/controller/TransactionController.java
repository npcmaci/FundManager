package com.example.demo.controller;


import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.common.Result;
import com.example.demo.entity.Transaction;
import com.example.demo.mapper.TransactionMapper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@CrossOrigin
@RequestMapping("/Transaction")
public class TransactionController {
    @Resource
    TransactionMapper transactionMapper;
    @PostMapping
    public Result<?> save(@RequestBody Transaction transaction) {
        transactionMapper.insert(transaction);
        return Result.success();
    }
    @DeleteMapping("/{id}")
    public Result<?> update(@PathVariable String id) {
        transactionMapper.deleteById(id);
        return Result.success();
    }
    @GetMapping
    public Result<?> findPage(@RequestParam(defaultValue = "1") Integer pageNum,
                              @RequestParam(defaultValue = "10") Integer pageSize,
                              @RequestParam(defaultValue = "") String search) {
        Page<Transaction> transactionPage = transactionMapper.selectPage(new Page<>(pageNum, pageSize), Wrappers.<Transaction>lambdaQuery().eq(Transaction::getTransactionId, search).or().like(Transaction::getUserName, search));

        return  Result.success(transactionPage);
    }



}
