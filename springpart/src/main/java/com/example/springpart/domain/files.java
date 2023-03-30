package com.example.springpart.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

@TableName("files")
public class files {
    @TableId(value = "id",type = IdType.AUTO)
    private String id;
    private String filename;
    private String createtime;

    @Override
    public String toString() {
        return "files{" +
                "id='" + id + '\'' +
                ", filename='" + filename + '\'' +
                ", createtime='" + createtime + '\'' +
                '}';
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getCreatetime() {
        return createtime;
    }

    public void setCreatetime(String createtime) {
        this.createtime = createtime;
    }
}
