var posts=["uncategorized/undefined/2026/06/16/hexo/","uncategorized/undefined/2026/06/15/hello-world/","Rivalries/undefined/2026/06/16/2026年6月16日14-03-31/","Rivalries/undefined/2026/06/16/blog/","uncategorized/undefined/2026/06/15/2026/2026.6/测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };