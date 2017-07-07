<template>
  <div id="my">
  	<h1 class="my-h1">账 号</h1>
  	<div class="head">
  		<div class="tx">上传头像</div>
	  	<div class="name">
	  		<p class="p1">vampire</p>
				<span class="p2">lv:2</span>
	  	</div>
	  	<span class="qd">签到</span>
	  	<div class="clearfix"></div>
  	</div>
	  
	  <ul class='zl'>
	  	<li>
	  		<p class='up'>动态(2)</p>
	  		<!--<p class="down">0</p>-->
	  	</li>
	  	
	  	<li>
	  		<p class='up'>关注(5)</p>
	  		<!--<p class="down">2</p>-->
	  	</li>
	  	
	  	<li>
	  		<p class='up'>粉丝(9)</p>
	  		<!--<p class="down">8</p>-->
	  	</li>
	  	
	  	<li>
	  		<p class='up'>我的资料</p>
	  	</li>
	  	<div class="clearfix"></div>
	  </ul>
		
		
		<ul class="message">
			<li v-for="item in arr">
				<span>
					<img :src="item.src"/>
				</span>
				<p>{{item.t}}</p>
			</li>
		</ul>
	
	
  </div>
</template>

<script>
	var arr=[
					{src:"http://localhost:8080/src/img/icon/1.png",t:"我的消息"},
					{src:"http://localhost:8080/src/img/icon/2.png",t:"会员中心"},
					{src:"http://localhost:8080/src/img/icon/3.png",t:"商城"},
					{src:"http://localhost:8080/src/img/icon/4.png",t:"在线免流量"},
					{src:"http://localhost:8080/src/img/icon/5.png",t:"设置"},
					{src:"http://localhost:8080/src/img/icon/6.png",t:"扫一扫"},
					{src:"http://localhost:8080/src/img/icon/7.png",t:"主题更换"},
					{src:"http://localhost:8080/src/img/icon/8.png",t:"夜间模式"}
					];
					
	export default{
		name:'tow',
		
		data:function(){
			return{
				arr:arr
				
			}
		}
		}

</script>

<style>
	#my{
		width: 100%;
		height: 100%;
		background: #eeeff0;
	}
	.my-h1{
		font-size: 22px;
		font-weight: normal;
		color: #FFFFFF;
		width: 100%;
		height: 50px;
		background: #d43c33;
		font-family:"微软雅黑";
		text-align: center;
		line-height: 60px;
	}
	.tx{
		width: 70px;
		height: 70px;
		background: #888888;
		border-radius: 35px;
		color: #FFFFFF;
		font-size: 14px;
		text-align: center;
		line-height: 70px;
		float: left;
		
	}
	.name{
		float: left;
		padding: 3px 0 0px 20px;
		
	}
	.name .p1{
		font-size: 22px;
		margin-bottom: 5px;
	}
	.name .p2{
		border: 1px solid #999999;
		border-radius: 10px;
		padding: 0 10px;
		font-size: 12px;
	}
	.head{
		width: 100%;
		/*height: 200px;*/
		padding: 15px;
		border-bottom: 1px solid #e5e5e5;
		background: #FFFFFF;
	}
	.head .qd{
		display: inline-block;
		font-size: 12px;
		padding: 5px 10px;
		margin-top: 20px;
		color: #d33a31;
		border:1px solid #d33a31;
		border-radius: 5px;
		float: right;
	}
	.zl{
		width: 100%;
		/*height: 30px;*/
		background: #fff;
		padding: 15px 0;
	}
	.zl li{
		float: left;
		width: 25%;
		text-align: center;
		/*padding-top: 3px;*/
		border-right: 1px solid #e5e5e5;
		background: #fff;
		/*height: 40px;*/
	}
	.zl li:nth-child(4){
		border:none;
	}
	.zl li .up{
		font-size: 14px;
		color: #999;
		/*height: 14px;*/
		/*margin-bottom: 5px;*/
	}
	.message{
		
		margin-top: 10px;
	}
	.message li{
		width: 100%;
		height: 45px;
		line-height: 45px;
		display: flex;
		background: #FFFFFF;
		/*border-bottom: ;*/
	}
	.message li:nth-child(1){
		margin-bottom: 10px;
		
	}
	.message li:nth-child(1) p{
		border: none;
	}
	.message li:nth-child(4){
		margin-bottom: 10px;
		
	}
	.message li:nth-child(4) p{
		border: none;
	}
	.message li span{
		display: block;
		min-width: 45px;
		height: 45px;
		/*background: red;*/
		float: left;
		padding: 10px;
		
	}
	.message li span img{
		width: 25px;
	}
	/*.message li span:nth-child(1){
		background: url(../img/icon/1.png) no-repeat center center;
		background-size: 50%;
	}*/
	
	.message li p{
		float: left;
		/*font-weight: bold;*/
		color: #333;
		width: 100%;
		border-bottom: 1px solid #e5e5e5;
	}
</style>