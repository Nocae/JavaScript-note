# &lt;script&gt;元素

将 javascript 插入 HTML 的主要方法是使用&lt;script&gt;元素

&lt;script&gt;元素中有八个属性：

- async：可选。表示立即开始下载脚本，只对外部脚本有效
- charset：可选。使用 src 属性指定的代码字符集
- crossorigin：可选。配置相关请求的 CORS（跨源资源共享）设置
- defer：可选。表示脚本可以延迟到文档完全被解析和显示后再执行，只对外部脚本有效
- interity：可选。允许对比接收到的资源和指定的加密签名以验证子资源完整性
- language： 废弃。表示代码块中的脚本语言
- src：可选。表示包含要执行的代码的外部文件
- type：可选。 代替 language，表示代码块中脚本语言的内容类型（同称 MIME 类型），如果这个值是 nodule 则代码会被当成 ES6 模块，而且只有这时候代码中才能出现 import 和 export 关键字

## 标签位置

把所有的 JavaScript 文件都放在&lt;head&gt;中，意味着要把所有的 JavaScript 都下载、解析和解释完成后，才开始渲染页面  
对于需要很多 JavaScript 的页面，这会导致页面渲染的明显延迟，在此期间浏览器窗口完全空白  
现代 Web 应用程序通常将所有 JavaScript 引用放在&lt;body&gt;元素中的页面内容后面

## 推迟执行脚本

HTML4.01 为&lt;script&gt;定义了一个叫 defer 的属性  
设置 defer 属性，相当于告诉浏览器立即下载，但延迟执行

## 异步执行脚本

HTML5 为&lt;script&gt;定义了 async 属性，从处理方式看，async 属性与 defer 属性类似  
它们两者都只适用于外部脚本，都会告诉浏览器立即开始下载  
与 defer 不同的是标记为 async 的脚本并不保证能按照它们出现的次序执行

详见课本 15 页，嘤嘤嘤~~~

## 动态加载脚本

因为 javascript 可以使用 DOM API，所以通过向 DOM 中动态添加 script 元素同样可以加载指定的脚本  
只要创建一个 script 元素并将其添加到 DOM 中即可

详见课本 15 页，嘤嘤嘤~~~

# 文档模式

最初的文档模式有两种：混杂模式（quirks mode），标准模式（standards mode）  
后来出现了第三种文档模式：准标准模式（almost standards mode），主要区别在于如何对待图片元素周围的空白

# &lt;noscript&gt;元素

对于禁用 script 的浏览器来说，这个元素依然有它的用处

> &lt;noscript&gt;元素可以包含任何可以出现在&lt;body&gt;中的 HTML 元素，&lt;script&gt;除外
> 在下列两种情况下，浏览器将会显示包含在&lt;script&gt;中的内容：

- 浏览器不支持脚本；
- 浏览器对脚本的支持被关闭；

> 简单来说就是浏览器不可使用脚本后将显示&lt;noscript&gt;元素内内容
