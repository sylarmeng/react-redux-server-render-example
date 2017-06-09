## react redux server render example
> package version
> "react": "15.5.4",
> 
> "react-bootstrap": "^0.31.0",
> > > > > 
> "react-dom": "15.5.4",
> > > > 
> "react-redux": "^5.0.5",
> > > 
> "react-router": "^4.1.1",
> > 
> "react-router-dom": "^4.1.1",
> 
> "redux": "^3.0.0"

### run program

npm install

set NODE_ENV=production && npm run start:prod


### problems
这个项目最初是在react-router的基础上建立的。使用react-router配合server render，项目运行正常。

但是后面加入了redux之后，点击页面链接，url会发生变化，但页面内容不变，没有发生跳转。

直接在地址栏输入url，刷新，每个页面都是能出来的。

**？？？现在还不清楚为什么会有这样的现象。寻求帮助中**
