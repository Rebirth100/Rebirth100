var posts=["Rivalries/undefined/2026/06/16/blog/","Rivalries/undefined/2026/06/16/2026年6月16日14-03-31/","uncategorized/undefined/2026/06/15/2026/2026.6/测试/","uncategorized/undefined/2026/06/15/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };