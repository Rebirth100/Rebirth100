var posts=["uncategorized/undefined/2026/06/16/blog/","uncategorized/undefined/2026/06/15/2026/2026.6/测试/","uncategorized/undefined/2026/06/15/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };