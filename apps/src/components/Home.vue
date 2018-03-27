<template>
    <div class="row">
        <div class="col-sm-2">
            <ul class="list-group">
                <li class="list-group-item">今日焦点</li>
                <li class="list-group-item">为你推荐</li>
                <li class="list-group-item">最新内容</li>
            </ul>
            <ul class="list-group" style="margin-top:10px;">
                <li class="list-group-item d-flex justify-content-between align-items-center disabled">
                    技术频道
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    区块链
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    人工智能
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    前端
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    后端
                </li>
            </ul>
        </div>
        <div class="col-sm-7">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active" style="border-radius:10px;">
                        <img class="d-block w-100" style="height:220px;border-radius:10px;" src="../assets/images/aspdemo.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item" style="border-radius:10px;">
                        <img class="d-block w-100" style="height:220px;border-radius:10px;" src="../assets/images/es6demo.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item" style="border-radius:10px;">
                        <img class="d-block w-100" style="height:220px;border-radius:10px;" src="../assets/images/jsdemo.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item" style="border-radius:10px;">
                        <img class="d-block w-100" style="height:220px;border-radius:10px;" src="../assets/images/fulldemo.jpg" alt="Second slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div class="card bg-light mb-3 " style="margin-top:10px;">
                <div class="card-header">话题: IT互联网</div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-9">
                            <h5 class="card-title">以太坊标准令牌系列之同质化令牌ERC20</h5>
                            <p class="card-text">众所周知，以太坊在现阶段最大的应用就是令牌发行，而在以太坊中有很多类型的令牌，最著名的当属ERC20了，但是对于其他几种令牌类型，可能还有一些朋友不知道，所以最近规划了一个系列，就是以太坊标准令牌系列。</p>
                        </div>
                        <div class="col-sm-3">
                            <img class="d-block w-100" src="../assets/images/ethdemo.jpg">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card bg-light mb-3 " style="margin-top:10px;">
                <div class="card-header">话题: IT互联网</div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-9">
                            <h5 class="card-title">以太坊标准令牌系列之同质化令牌ERC20</h5>
                            <p class="card-text">众所周知，以太坊在现阶段最大的应用就是令牌发行，而在以太坊中有很多类型的令牌，最著名的当属ERC20了，但是对于其他几种令牌类型，可能还有一些朋友不知道，所以最近规划了一个系列，就是以太坊标准令牌系列。</p>
                        </div>
                        <div class="col-sm-3">
                            <img class="d-block w-100" src="../assets/images/ethdemo.jpg">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card bg-light mb-3 " style="margin-top:10px;">
                <div class="card-header">话题: IT互联网</div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-9">
                            <h5 class="card-title">以太坊标准令牌系列之同质化令牌ERC20</h5>
                            <p class="card-text">众所周知，以太坊在现阶段最大的应用就是令牌发行，而在以太坊中有很多类型的令牌，最著名的当属ERC20了，但是对于其他几种令牌类型，可能还有一些朋友不知道，所以最近规划了一个系列，就是以太坊标准令牌系列。</p>
                        </div>
                        <div class="col-sm-3">
                            <img class="d-block w-100" src="../assets/images/ethdemo.jpg">
                        </div>
                    </div>
                </div>
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">首页</span>
                        </a>
                    </li>
                    <li class="page-item active">
                        <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">尾页</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="col-sm-3">
            <a href="#/article/create" class="btn btn-primary btn-lg btn-block">
                <i class="ion ion-edit"></i> 发表文章</a>
            <button type="button" class="btn btn-secondary btn-lg btn-block">
                <i class="ion ion-help-circled"></i> 提问题</button>
            <ul class="list-group" style="margin-top:10px;">
                <li class="list-group-item disabled">最新活动</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
  name: "Home"
};
</script>