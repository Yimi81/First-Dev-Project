//Node中向外暴露成员的形式
//module.exports = {}

//在ES6中，也通过规范的形式，规定了ES6中如何导入和到处模块
//ES6导入模块，使用import 模块名称 from '模块标识符' import '表示路径'

//在ES6中，使用export default 和 export向外暴露成员
 var info = {
    name: 'zs',
    age: 20
}
export default info
//注意：export default向外暴露的成员，可以使用任意的变量来接收
//注意:在一个模块中，export default只允许向外暴露1次

export var title = '小星星'
export var content = '真美丽'
//注意:使用export向外暴露的成员，只能使用{}的形式来接收，这种形式叫做按需导出,这里不可以使用任意的变量来接收，只能通过{title as 你想要的名字}

//在Node中 使用var 名称 = require('模块标识符')
//module.exports 和 exports来暴露成员

