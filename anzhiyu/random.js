var posts=["2026/06/15/categories/index/","2026/06/15/hello-world/","2026/06/15/2026/2026.6/测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };