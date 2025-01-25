/**
 * 打字效果的配置和实现
 * @file typing.js
 */

// 要显示的角色文本数组
// 定义要循环显示的角色文本数组
const roles = ["产品经理", "面向AI的前端开发"]; // 添加了前端开发这个角色,使角色更完整

// 当前显示的角色索引
let roleIndex = 0;

// 当前字符索引
let charIndex = 0;

// 获取打字效果的目标元素
const typingElement = document.querySelector(".typing");

/**
 * 打字效果函数
 * 逐个字符显示当前角色文本
 */
function type() {
  // 如果还有字符未显示完
  if (charIndex < roles[roleIndex].length) {
    // 添加下一个字符
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    // 每100ms显示一个字符
    setTimeout(type, 100);
  } else {
    // 当前文本显示完成后,等待1秒开始删除
    setTimeout(erase, 1000);
  }
}

/**
 * 删除效果函数
 * 逐个删除当前显示的文本
 */
function erase() {
  // 如果还有字符未删除完
  if (charIndex > 0) {
    // 删除最后一个字符
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    // 每50ms删除一个字符
    setTimeout(erase, 50);
  } else {
    // 切换到下一个角色文本
    roleIndex = (roleIndex + 1) % roles.length;
    // 等待200ms后开始显示新文本
    setTimeout(type, 200);
  }
}

// 页面加载1秒后开始第一次打字效果
setTimeout(type, 1000);
