## 前端单元测试学习

#### lesson1

​	模拟测试代码

#### lesson2

​	加入测试框架jest 

```
npm i jest@24.8.0 -D
```

#### lesson3

​	配置jest

```
npx jest --init																		
```

​	scripts 加入配置

```	
"scripts": {
    "test": "jest",
    "coverage": "jest --coverage"
 },
```

​	jest默认采用commjs规范运行,使用es6导入导出模式,安装babel转换

```
npm i @babel/core@7.4.5 @babel/preset-env@7.4.5
```

​	添加文件.babelrc

​	运行规则:

​		// npm run test 只在commjs运行

​		// jest(babel-jest) //内部集成插件,检测是否安装babel-core 插件

​		// 然后取babelrc配置

```
{
    "presets": [
        ["@babel/preset-env", {
            "targets": {
                "node": "current"
            }
        }]
    ]
}
```









