package com.example.springpart.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.springpart.domain.user;
import com.example.springpart.mapper.userMapper;
import com.example.springpart.service.userService;
import org.springframework.stereotype.Service;

@Service
public class userServiceImpl extends ServiceImpl<userMapper,user> implements userService {
}
