package com.example.springpart.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.springpart.domain.files;
import com.example.springpart.mapper.filesMapper;
import com.example.springpart.service.fileService;
import org.springframework.stereotype.Service;

@Service
public class fileServiceImpl extends ServiceImpl<filesMapper, files> implements fileService {
}
