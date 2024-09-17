var posts=["2024/09/17/代码学习/","2024/09/04/initial/","2024/09/04/轮腿开源/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };