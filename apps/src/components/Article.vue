<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb" style="background:none;padding-left:0rem;">
                <li class="breadcrumb-item">
                    <a href="#/">首页</a>
                </li>
                <li class="breadcrumb-item">
                    <a href="#/articles">文章</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">思维懒惰</li>
            </ol>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Article",
    data() {
        return {
            articleId: this.$router.params.id
        };
    }
};
</script>
