<template>
    <vue-file-upload :multiple="true" :url="uploadApi" ref="vueFileUploader" v-bind:filters="filters" v-bind:events="cbEvents" v-bind:request-options="reqopts" v-on:onAdd="onAddItem"></vue-file-upload>
</template>
<script>
import VueFileUpload from "vue-file-upload";
export default {
    name: "uploadFile",
    data() {
        return {
            uploadApi:this.WebApi+"/api/articles/upload", 
            files: [],
            //文件过滤器，只能上传图片
            filters: [
                {
                    name: "imageFilter",
                    fn(file) {
                        var type =
                            "|" +
                            file.type.slice(file.type.lastIndexOf("/") + 1) +
                            "|";
                        return "|jpg|png|jpeg|bmp|gif|".indexOf(type) !== -1;
                    }
                }
            ],
            //回调函数绑定
            cbEvents: {
                onCompleteUpload: (file, response, status, header) => {
                    console.log(response);
                    this.clearAll(); //上传成功之后清除队列
                }
            },
            //xhr请求附带参数
            reqopts: {
                responseType: "json",
                emulateJSON:true,
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