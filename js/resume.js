/**
 * 处理简历下载并触发特效
 * 点击下载按钮时调用此函数
 * 修复了部分浏览器下载文件名错误的问题
 */
function downloadResume() {
  // 创建临时下载链接
  const resumeUrl = "./assets/006.pdf"; // PDF文件路径
  
  // 使用fetch获取文件并创建Blob对象
  fetch(resumeUrl)
    .then(response => response.blob())
    .then(blob => {
      // 创建Blob URL
      const blobUrl = window.URL.createObjectURL(blob);
      
      // 创建下载链接
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "006.pdf"; // 强制设置下载文件名
      link.style.display = "none"; // 隐藏链接元素
      
      // 添加到页面并触发下载
      document.body.appendChild(link);
      link.click();
      
      // 清理资源
      window.URL.revokeObjectURL(blobUrl);
      document.body.removeChild(link);
    })
    .catch(error => {
      console.error("下载失败:", error);
      alert("简历下载失败，请稍后重试");
    });

  // 定义不重复的鲜艳颜色数组
  const colors = [
    '#FF6B6B', // 红色
    '#4ECDC4', // 青色
    '#FFE66D', // 黄色
    '#6C5CE7', // 紫色
    '#A8E6CF'  // 薄荷绿
  ];
  
  // 创建5个 Offer 特效
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      createOfferText(i, colors[i]);
    }, i * 100);
  }
}

/**
 * 创建一个 Offer 的烟花文本效果
 * @param {number} index - 用于计算发散角度
 * @param {string} color - 文本颜色
 */
function createOfferText(index, color) {
  const text = document.createElement('div');
  text.className = 'offer-text';
  text.textContent = 'Offer +1'; // 修改文本内容
  
  // 获取下载按钮的位置
  const button = document.querySelector('.resume-button');
  const buttonRect = button.getBoundingClientRect();
  const buttonCenterX = buttonRect.left + buttonRect.width / 2;
  const buttonCenterY = buttonRect.top + buttonRect.height / 2;
  
  // 设置文本颜色和发光效果
  text.style.color = color;
  text.style.textShadow = `0 0 10px ${color}80`;
  
  // 计算初始位置（在按钮周围随机分布）
  const startRadius = 30; // 初始分布半径
  const startAngle = (index / 5) * Math.PI * 2 + Math.random() * 0.3;
  const startX = buttonCenterX + Math.cos(startAngle) * startRadius;
  const startY = buttonCenterY + Math.sin(startAngle) * startRadius;
  
  // 计算终点位置（更大范围散开）
  const endRadius = 200 + Math.random() * 50;
  const endX = Math.cos(startAngle) * endRadius;
  const endY = Math.sin(startAngle) * endRadius;
  
  // 设置初始位置
  text.style.left = `${startX}px`;
  text.style.top = `${startY}px`;
  
  // 设置动画终点位置
  text.style.setProperty('--end-x', `${endX}px`);
  text.style.setProperty('--end-y', `${endY}px`);
  
  document.body.appendChild(text);
  
  setTimeout(() => {
    text.remove();
  }, 1200);
}
