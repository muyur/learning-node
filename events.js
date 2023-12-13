// 引入 node.js 内置 events 模块， 事件驱动机制
const events = require('events')
// 新建一个 EventEmitter 实例
const emitter = new events.EventEmitter()
/**
 * emitter.on 监听事件
 * emitter.emit 触发事件
 * emitter.once 只触发一次
 * 
 * emitter.removeListener 移除监听事件 参数一 事件 参数二 需要移除的事件回调函数
 * emitter.removeAllListener 移除所有监听事件
 */

emitter.on('getSomething', getSomething)
function getSomething(e) {
    console.log('触发', e)
}
emitter.once('doSomething', () => {
    console.log('do something')
})
const obj = {name: 'sss'}
emitter.removeAllListeners()
emitter.emit('getSomething', obj)
// emitter.removeListener('getSomething', getSomething)
emitter.emit('getSomething')
emitter.emit('doSomething')
emitter.emit('doSomething')
emitter.emit('doSomething')