<template>
  <div id="app">
    <el-carousel height="100%" class="login_carousel" direction="vertical" :autoplay="true">
      <el-carousel-item v-for="item in bgURL" :key="item">
        <img class="login_bg" :src=item alt="用户头像"/>
      </el-carousel-item>
    </el-carousel>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="login_content">
      <p><span class="left-quote"></span><span>iPersona</span></p>
      <p><span></span><span class="right-quote"></span></p>
    </div>
    <p class="power_by">© Immortal Identity All Rights Reserved</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      // bgURL: [require('./assets/img/bg1.jpg'), require('./assets/img/bg2.jpg'), require('./assets/img/bg3.jpg')]
      bgURL: [require('./assets/img/bg2.jpg')],
      isLogin: false,
      userInfo: {
        identity: null
      },
      userInfoApi: 'http://localhost/login'// 通过用户ID登录接口
    }
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      this.userInfo = {
        identity: 'Liming'
      }
      // ts.$http.get(url, {
      //   'params': this.userInfo
      // }).then((response) => {
      //   if (response.data.code === 200) {
      //     this.$store.commit('updateUserInfo', this.userInfo)
      //   }
      // })
      this.$store.commit('updateUserInfo', this.userInfo)
    }
  }
}

</script>

<style>
  #app {
    height: 100%;
  }

  /*页面全局*/
  * {
    margin: 0;
    padding: 0;
  }

  body,
  html {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    height: 100%;
  }

  /*登录背景幻灯片*/
  .login_carousel {
    height: 100%;
  }

  .login_carousel .login_bg {
    height: 100%;
    animation: unfocus 500ms forwards;
  }

  .login_carousel .login_bg:hover {
    animation: focus 500ms forwards;
  }

  @keyframes unfocus {
    0% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes focus {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }

  /*登录文字*/
  .login_content {
    z-index: 99;
    position: absolute;
    top: 80px;
    font-size: 45px;
    color: #fff;
  }

  .login_content p {
    position: relative;
    padding: 10px 100px;
  }

  .login_content .left-quote {
    background: url(./assets/img/leftquote.png) top no-repeat;
    display: inline-block;
    position: absolute;
    left: 40px;
    top: 8px;
    height: 32px;
    width: 46px;
    overflow: hidden;
  }

  .login_content .right-quote {
    background: url(./assets/img/rightquote.png) no-repeat top;
    position: absolute;
    right: 40px;
    top: 20px;
    height: 32px;
    width: 46px;
    overflow: hidden;
  }

  /*版权信息*/
  .power_by {
    position: absolute;
    bottom: 60px;
    right: 60px;
    color: #d3d3d3;
    font-size: 16px;
    line-height: 1.6;
    z-index: 98;
  }
</style>
