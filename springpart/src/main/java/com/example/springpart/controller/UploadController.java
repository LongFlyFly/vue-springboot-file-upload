package com.example.springpart.controller;

import com.example.springpart.domain.files;
import com.example.springpart.domain.user;
import com.example.springpart.service.fileService;
import com.example.springpart.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.Random;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class UploadController {

    @Autowired
    userService userService;
    @Autowired
    fileService fileService;


    String str = "D://images/";
    @RequestMapping("/uploads")
    public String FileUploads(HttpServletRequest request, MultipartFile file) {
        String originalname = file.getOriginalFilename();
        // 获取后缀
        String newName = originalname.substring(originalname.lastIndexOf("."));
        // 捕获后缀非jpg的文件
//        if (!".jpg".equals(newName)){
//            return "error";
//        }
        newName = String.valueOf(new Random().nextInt(50)) + newName;
        File newFile = new File(str, newName);
        if (!newFile.getParentFile().exists()) {
            newFile.getParentFile().mkdir();
        }
        try {
            file.transferTo(newFile);
            // save new upload file to database
            files newfile = new files();
            newfile.setFilename(newName);
            newfile.setCreatetime(String.valueOf(new Date()));
            fileService.save(newfile);


        } catch (IllegalStateException | IOException exception) {
            exception.printStackTrace();
        }
        return str + newName;
    }

    @PostMapping("/delete")
    public String deleteimage(@RequestParam("url") String url){
        String pathfile = url;
        System.out.println(url);
        String filename = pathfile.split("/")[pathfile.split("/").length-1];
        File file = new File(pathfile);
        if(file.exists()){
            file.delete();
        }
        return "delete OK";
    }

    @PostMapping("/register")
    public String register(@RequestParam("username") String username,@RequestParam("filename") String filename){
        // save new user
        user user = new user();
        user.setAvatar(filename);
        user.setUsername(username);
        userService.save(user);
        return "register OK";
    }

}
