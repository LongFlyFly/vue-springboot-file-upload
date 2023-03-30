<template>
  <div>
    <div style="width: 30%; text-align: center; margin-left: 35%">
      <h3>模拟注册</h3>
      <el-upload
        style="margin-top: 50px"
        class="upload-demo"
        ref="upload"
        :on-preview="handlePictureCardPreview"
        action="http://localhost:8081/api/uploads"
        :on-success="handleSuccess"
        :on-remove="handleRemove"
        list-type="picture-card"
        :file-list="fileList"
        :on-exceed="handleExceed"
        :auto-upload="false"
        :multiple="false"
        :limit="1"
        :before-upload="beforeAvatarUpload"
        accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF,.doc,.docx"

      >
       <i class="el-icon-plus"></i>
      </el-upload>
        <h6>上传的文件，大小在2M内</h6>
        <el-input
        v-model="username"
        style="width: 200px; margin-top: 50px"
        placeholder="your username"
      >
      </el-input
      ><br />
      <el-button
        style="margin-top: 10px"
        type="primary"
        @click="submitUpload"
        >{{ status }}</el-button
      >
    </div>
  </div>
</template>

<script>
import testapi from "../request/api";
export default {
  data() {
    return {
      fileList: [],
      username: "",
      imgsrc: "",
      status: "提交到服务器",
      filepath: "",
    };
  },
  created() {},
  methods: {
    beforeAvatarUpload(file) {
      // 自己限制类型
        const fileSuffix = file.name.substring(file.name.lastIndexOf(".") + 1);
        const whiteList = ["pdf", "doc", "docx", "xls", "xlsx","jpg"];
        if (whiteList.indexOf(fileSuffix) === -1) {
          this.$message.error('上传文件只能是 pdf、doc、docx、xls、xlsx、jpg格式');
          return false;
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error('上传文件大小不能超过 2MB');
          return false;
        }

        // 仅仅上传图片用法
        //  const isJPG = file.type === "image/jpeg";
        //   const isLt2M = file.size / 1024 / 1024 < 0.5;
        //   if (!isJPG) {
        //     this.$Message.error("上传头像图片只能是 JPG 格式!");
        //   }
        //   if (!isLt2M) {
        //     this.$Message.error("上传头像图片大小不能超过 0.5MB!");
        //   }
        //   return isJPG && isLt2M;
    },
    handleRemove(file) {
      console.log(file);
      testapi.deleteimage(this.filepath).then((res) => {
        console.log(res);
      });
      this.status = "提交到服务器";
    },
    submitUpload() {
      if (this.username.trim() == "") {
        this.$Message.error("用户名为空");
        return;
      }
      this.$refs.upload.submit();
    },
    handleExceed() {
      this.$Message.error("您已经选择了图片");
    },
    handleSuccess(res) {
      console.log(res);
      this.filepath = res;
      testapi.register(this.username, this.filepath).then((res) => {
        console.log(res);
      });
      this.status = "提交成功";
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>