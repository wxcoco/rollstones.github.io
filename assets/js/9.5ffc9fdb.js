(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{365:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),a("ul",[a("li",[t._v("基本数据类型\n"),a("ul",[a("li",[t._v("整数类型：byte，short，int，long")]),t._v(" "),a("li",[t._v("浮点数类型：float，double")]),t._v(" "),a("li",[t._v("字符类型：char")]),t._v(" "),a("li",[t._v("布尔类型：boolean")])])])]),t._v(" "),a("p",[t._v("字节（byte）= 8个bit = 00000000"),a("code",[t._v("~")]),t._v("11111111 中的一个，0~255，00"),a("code",[t._v("~")]),t._v("ff")]),t._v(" "),a("p",[t._v("1K = 1024 byte")]),t._v(" "),a("div",{staticClass:"language-ascii extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("       ┌───┐\n  byte │   │\n       └───┘\n       ┌───┬───┐\n short │   │   │\n       └───┴───┘\n       ┌───┬───┬───┬───┐\n   int │   │   │   │   │\n       └───┴───┴───┴───┘\n       ┌───┬───┬───┬───┬───┬───┬───┬───┐\n  long │   │   │   │   │   │   │   │   │\n       └───┴───┴───┴───┴───┴───┴───┴───┘\n       ┌───┬───┬───┬───┐\n float │   │   │   │   │\n       └───┴───┴───┴───┘\n       ┌───┬───┬───┬───┬───┬───┬───┬───┐\ndouble │   │   │   │   │   │   │   │   │\n       └───┴───┴───┴───┴───┴───┴───┴───┘\n       ┌───┬───┐\n  char │   │   │\n       └───┴───┘\n")])])]),a("p",[t._v("整型能表示的最大范围如下:")]),t._v(" "),a("ul",[a("li",[t._v("byte：-128 ~ 127")]),t._v(" "),a("li",[t._v("short: -32768 ~ 32767")]),t._v(" "),a("li",[t._v("int: -2147483648 ~ 2147483647")]),t._v(" "),a("li",[t._v("long: -9223372036854775808 ~ 9223372036854775807")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2147483647")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2147483648")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2_000_000_000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加下划线更容易识别")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xff0000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 十六进制表示的16711680")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0b1000000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 二进制表示的512")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000000000000000000L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// long型的结尾需要加L")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" f1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.14f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" f2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.14e38f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 科学计数法表示的3.14x10^38")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.79e308")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" d2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.79e308")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" d3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.9e-324")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 科学计数法表示的4.9x10^-324")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意char类型使用单引号'，且仅有一个字符，要和双引号\"的字符串类型区分开。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'中'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("定义变量的时候，如果加上"),a("code",[t._v("final")]),t._v("修饰符，这个变量就变成了常量，常量在定义时进行初始化后就不可再次赋值，再次赋值会导致编译错误。根据习惯，常量名通常全部大写。")]),t._v(" "),a("p",[t._v("如果想省略变量类型，可以使用"),a("code",[t._v("var")]),t._v("关键字，多行语句用{ }括起来 作用域。定义变量时，要遵循作用域最小化原则，尽量将变量定义在尽可能小的作用域，并且，不要重复使用变量名。")])])}),[],!1,null,null,null);s.default=e.exports}}]);