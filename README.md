## 前端单元测试学习

### 一.basices

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

​		// 然  后取babelrc配置

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

#### lesson4

​	匹配器学习

####  lesson5

​	jest 命令行工具使用+异步代码测试方法

```	 
npm i axios@0.19.0 -S 
```

#### lesson6

​	jset钩子函数

#### lesson7

​	jest中的mock

#### lesson8

​	jest-snapshot快照

#### lesson9

​	深入mock+js定时器模拟

#### lesson10

​	ES6中的类的测试+dom节点操作测试

### 二.jset-vue





