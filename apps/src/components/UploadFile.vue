<template>
    <vue-file-upload :multiple="true" :url="uploadApi" ref="vueFileUploader" v-bind:filters="filters" v-bind:events="cbEvents" v-bind:request-options="reqopts" v-on:onAdd="onAddItem"></vue-file-upload>
</template>
<script>
import VueFileUpload from "vue-file-upload";
export default {
    name: "uploadFile",
    data() {
        return {
            uploadApi:this.WebApi+"/api/uploadarticleimg", 
            files: [],
            //文件过滤器，只能上传图片
            filters: [
                {
                    name: "imageFilter",
                    fn(file) {
                        var size=file.size;
                        if(size > 1024 * 1024 * 2 ){
                            alert("请上传2M内的图片")
                            return false;
                        }
                        var type =
                            "|" +
                            file.type.slice(file.type.lastIndexOf("/") + 1) +
                            "|";
                        if("|jpg|png|jpeg|bmp|gif|".indexOf(type) === -1){
                            alert("图片格式要求为:jpg|jpeg|png|bmp|gif");
                            return false;
                        }
                        return true;
                    }
                }
            ],
            //回调函数绑定
            cbEvents: {
                onCompleteUpload: (file, response, status, header) => {
                    this.$emit("uploadSuccess", response); //将返回结果传递给父组件
                }
            },
            //xhr请求附带参数
            reqopts: {
                responseType: "json",
                withCredentials:true
            }
        };
    },
    mounted() {},
    methods: {
        onStatus(file) {
            if (file.isSuccess) {
                return "上传成功";
            } else if (file.isError) {
                return "上传失败";
            } else if (file.isUploading) {
                return "正在上传";
            } else {
                return "待上传";
            }
        },
        onAddItem(files) {
            //添加图片
            this.files = files;
            this.uploadAll(); //添加完成之后立即开始上传
        },
        uploadItem(file) {
            //单个文件上传
            file.upload();
        },
        uploadAll() {
            //上传所有文件
            this.$refs.vueFileUploader.uploadAll();
        },
        clearAll() {
            //清空所有文件
            this.$refs.vueFileUploader.clearAll();
        }
    },
    components: {
        VueFileUpload
    }
};
</script>