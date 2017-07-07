<template>
  <div id="tuijian">
	<h3>推荐歌单</h3>
	<ul class="tj">
		<li v-for="item in someData._list">
			<img :src="item.picUrl"/>
			<p>{{item.name}}</p>
		</li>
		<div class="clearfix"></div>
	</ul>
	<h3>最新音乐</h3>
	<ul class="list">
		<li v-for='a in someData2.result'>
		<a href="http://localhost:8080/src/component/audio.html"><p class="p1">{{a.name}} <span> {{a.song.alias[0]}}</span></p>
		<p class="p2"><i></i>{{a.song.artists[0].name}}-{{a.name}}</p>
		<span class="bofang"></span></a>
		
		</li>
	</ul>
  </div>
</template>

<script>
	export default{
		name:'a',
		data:function($http){
			return{
				someData:{},
				someData2:{}
			}
			
		},
		mounted:function(){
	     this.$http.get('http://localhost:8080/src/data/j2.json').then(response => {
		            // get body dada
		            this.someData = response.body;
		            console.log(this.someData)
		        }, response => {
		            // error callback
		        }),
			this.$http.get('http://localhost:8080/src/data/j1.json').then(response => {
		            // get body dada
		            this.someData2 = response.body;
		            console.log(this.someData2.result)
		        }, response => {
		            // error callback
		        })
	        
	    }
	}
</script>

<style>
	#tuijian .tj{
		padding-bottom: 24px;
	}
	#tuijian .tj li{
		width: 32.8%;
		float: left;
		margin-right: 0.8%;
		padding-bottom: 16px;
		
	}
	#tuijian .tj li:nth-child(3n){
		margin: 0;
	}
	#tuijian .tj li img{
		display: block;
		width: 100%;
	}
	#tuijian  h3{
		font-size: 17px;
		height: 54px;
		line-height: 54px;
		font-weight: normal;
		position: relative;
		padding-left: 9px;
	}
	
	#tuijian  h3:after{
		content: " ";
	    position: absolute;
	    left: 0;
	    top: 53%;
	    margin-top: -9px;
	    width: 2px;
	    height: 16px;
	    background-color: #d33a31;
	}
	#tuijian .tj li p{
		width: 98%;
		height: 36px;
		font-size: 12px;
		padding: 6px 2px 0 6px;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;
	}
	#tuijian .list{
		margin-bottom: 31px;
	}
	#tuijian .list li{
		width: 100%;
		height: 55px;
		padding: 6px 0 6px 10px;
		border-bottom: 1px solid #F0F0F1;
		position: relative;
	}
	
	#tuijian .list li .p1{
		color: #333;
		padding-bottom: 5px;
		/*min-width: 350px;*/
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	#tuijian .list li .p1 span{
		color: #888;
	}
	
	#tuijian .list li .p2{
		color: #888;
		font-size: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	#tuijian .list li .p2 i{
		display: inline-block;
		background: url(../img/index_icon_2x.png) no-repeat 0 0;
		background-size: 166px 97px;
		width: 12px;
		height: 8px;
		margin-right: 4px;
	}
	#tuijian .list li .bofang{
		display: inline-block;
		background: url('../img/index_icon_2x.png') no-repeat -24px 0;
		background-size: 166px 97px;
		width: 22px;
		height: 22px;
		position: absolute;
		top: 16.5px;
		right: 10px;
	}
</style>