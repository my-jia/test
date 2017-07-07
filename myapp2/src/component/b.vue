<template>
  <div id="hot">
	
	<div class="hot-song">
		<img src="../img/hot_music_bg_2x.jpg"/>
		<div class="hot-info">
			<p class="p1">云音乐</p>
			<h1>热歌榜</h1>
			<p class="p2">跟新日期:6月7日</p>
		</div>
		
	</div>
		<ul class="song-list">
			
			<li v-for='(item,index) in someData.playlist.tracks'>
				
				<span class="num">{{index+1}}</span>
				<a href="http://localhost:8080/src/component/audio.html">
				<div class="right">
					<p class="p1">{{item.name }} <span>{{ item.alia[0]}}</span></p>
					<p class="p2"><i></i>{{item.ar[0].name}}-{{item.al.name}}</p>
					<span class="bofang"></span>
				</div>
				</a>
			</li>
			
		</ul>
  </div>
</template>

<script>
	export default{
		name:'b',
		data:function(){
			return{
				someData:{}
			}
		},
		mounted:function(){
			 
			this.$http.get('http://localhost:8080/src/data/j3.json').then(response =>{
				emulateJSON:true,
				this.someData=response.body;
				
			},response=>{
				
			})
		}
	}
</script>

<style>
	
	#hot .hot-song{
		position: relative;
	}
	
	#hot .hot-song .hot-info{
		position: absolute;
		top:15px;
		left: 15px;
		color: #fff;
	}
	#hot .hot-song .hot-info .p1{
		font-size: 14px;
		font-style: italic;
	}
	#hot .hot-song .hot-info h1{
		font-size: 45px;
		font-weight: normal;
		padding: 6px 0;
		/*font-style: italic;*/
	}
	#hot .hot-song .hot-info .p2{
		font-size: 12px;
	}
	
	#hot .hot-song img{
		width: 100%;
		display: block;
		
			
	}
	.song-list{
		margin-bottom: 30px;
	}
	.song-list li{
		width: 100%;
		height: 55px;
		display: -webkit-flex; /* Safari */
  	display: flex;
  	padding-left: 10px;
  	position: relative;
  	
	}
	.song-list li .num{
		display: flex;
		width: 28px;
		min-width: 28px;
		height: 55px;
		/*float: left;*/
		line-height: 55px;
		font-size: 17px;
    color: #999;
	}
	.song-list li:nth-child(1) .num,.song-list li:nth-child(2) .num,.song-list li:nth-child(3) .num{
		color: #df3436;
	}
	.song-list li a{
		display: inline-block;
		width: 100%;
	}
	.song-list li .right{
		display: inline-block;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding: 6px 0;
		border-bottom: 1px solid #F0F0F1;
	}
	.song-list li .right .p1{
		font-size: 17px;
		color: #333333;
		padding-bottom: 5px;
	}
	.song-list li .right .p1 span{
		color: #888888;
	}
	.song-list li .right .p2{
		    font-size: 12px;
    color: #888;
	}
	
	.song-list li .right .p2 i{
		display: inline-block;
		background: url(../img/index_icon_2x.png) no-repeat 0 0;
		background-size: 166px 97px;
		width: 12px;
		height: 8px;
		margin-right: 4px;
	}
	.song-list li .bofang{
		display: inline-block;
		background: url('../img/index_icon_2x.png') no-repeat -24px 0;
		background-size: 166px 97px;
		width: 22px;
		height: 22px;
		position: absolute;
		top: 16.5px;
		right: 10px;
	}
	
	color: #df3436;
</style>