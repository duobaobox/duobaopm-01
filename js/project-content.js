/**
 * 项目详情内容配置
 * @file project-content.js
 */

// 项目详情内容对象
const projectContent = {
  // 电商平台项目
  project1: {
    title: "电商平台项目",
    content: `
        <div class="project-detail">
            <!-- 项目概述 -->
            <section class="project-section">
                <h3>📋 项目概述</h3>
                <p>一个面向年轻用户的时尚电商平台，致力于提供流畅的购物体验和个性化的商品推荐。作为核心产品经理，负责整个项目的规划与功能设计。</p>
            </section>

            <!-- 项目背景 -->
            <section class="project-section">
                <h3>🎯 项目背景</h3>
                <ul>
                    <li>市场调研发现年轻用户对时尚商品的个性化需求强烈</li>
                    <li>现有平台用户体验不佳，转化率较低</li>
                    <li>缺乏有效的商品推荐系统</li>
                </ul>
            </section>

            <!-- 我的职责 -->
            <section class="project-section">
                <h3>👨‍💼 我的职责</h3>
                <ul>
                    <li>负责产品需求分析和功能规划</li>
                    <li>设计用户交互流程和界面原型</li>
                    <li>协调开发团队和设计团队</li>
                    <li>跟踪数据分析和用户反馈</li>
                </ul>
            </section>

            <!-- 核心功能 -->
            <section class="project-section">
                <h3>⭐ 核心功能</h3>
                <div class="feature-grid">
                    <div class="feature-item">
                        <h4>智能推荐</h4>
                        <p>基于用户行为和偏好的个性化商品推荐系统</p>
                    </div>
                    <div class="feature-item">
                        <h4>社交购物</h4>
                        <p>用户可以分享购物清单和评价，形成社交互动</p>
                    </div>
                    <div class="feature-item">
                        <h4>AR试穿</h4>
                        <p>虚拟试衣功能，提升用户购物体验</p>
                    </div>
                    <div class="feature-item">
                        <h4>闪电物流</h4>
                        <p>智能仓储系统，实现极速配送</p>
                    </div>
                </div>
            </section>

            <!-- 项目成果 -->
            <section class="project-section">
                <h3>📈 项目成果</h3>
                <div class="results-grid">
                    <div class="result-item">
                        <span class="result-number">200%</span>
                        <p>用户转化率提升</p>
                    </div>
                    <div class="result-item">
                        <span class="result-number">150万+</span>
                        <p>月活跃用户</p>
                    </div>
                    <div class="result-item">
                        <span class="result-number">4.8</span>
                        <p>用户满意度（满分5分）</p>
                    </div>
                </div>
            </section>

            <!-- 项目反思 -->
            <section class="project-section">
                <h3>💡 项目反思</h3>
                <ul>
                    <li>用户需求是产品成功的关键，需要持续关注用户反馈</li>
                    <li>技术创新要服务于实际业务场景</li>
                    <li>团队协作和沟通的重要性</li>
                </ul>
            </section>
        </div>

        <style>
            .project-detail {
                color: #333;
                line-height: 1.6;
            }

            .project-section {
                margin-bottom: 2rem;
                padding: 1rem;
                background: #fff;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }

            .project-section h3 {
                color: #2c3e50;
                margin-bottom: 1rem;
                border-bottom: 2px solid #eee;
                padding-bottom: 0.5rem;
            }

            .feature-grid, .results-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
            }

            .feature-item, .result-item {
                padding: 1rem;
                background: #f8f9fa;
                border-radius: 6px;
                text-align: center;
            }

            .result-number {
                font-size: 1.8rem;
                font-weight: bold;
                color: #3498db;
                display: block;
                margin-bottom: 0.5rem;
            }

            ul {
                padding-left: 1.5rem;
            }

            li {
                margin-bottom: 0.5rem;
            }

            @media (max-width: 768px) {
                .feature-grid, .results-grid {
                    grid-template-columns: 1fr;
                }
            }
        </style>
    `,
  },
  // 社交媒体应用项目
  project2: {
    title: "社交媒体应用项目详情",
    content: `
        <div class="project-detail">
            <!-- 项目概述 -->
            <section class="project-section">
                <h3>📋 项目概述</h3>
                <p>一个面向年轻用户的时尚电商平台，致力于提供流畅的购物体验和个性化的商品推荐。作为核心产品经理，负责整个项目的规划与功能设计。</p>
            </section>

            <!-- 项目背景 -->
            <section class="project-section">
                <h3>🎯 项目背景</h3>
                <ul>
                    <li>市场调研发现年轻用户对时尚商品的个性化需求强烈</li>
                    <li>现有平台用户体验不佳，转化率较低</li>
                    <li>缺乏有效的商品推荐系统</li>
                </ul>
            </section>

            <!-- 我的职责 -->
            <section class="project-section">
                <h3>👨‍💼 我的职责</h3>
                <ul>
                    <li>负责产品需求分析和功能规划</li>
                    <li>设计用户交互流程和界面原型</li>
                    <li>协调开发团队和设计团队</li>
                    <li>跟踪数据分析和用户反馈</li>
                </ul>
            </section>

            <!-- 核心功能 -->
            <section class="project-section">
                <h3>⭐ 核心功能</h3>
                <div class="feature-grid">
                    <div class="feature-item">
                        <h4>智能推荐</h4>
                        <p>基于用户行为和偏好的个性化商品推荐系统</p>
                    </div>
                    <div class="feature-item">
                        <h4>社交购物</h4>
                        <p>用户可以分享购物清单和评价，形成社交互动</p>
                    </div>
                    <div class="feature-item">
                        <h4>AR试穿</h4>
                        <p>虚拟试衣功能，提升用户购物体验</p>
                    </div>
                    <div class="feature-item">
                        <h4>闪电物流</h4>
                        <p>智能仓储系统，实现极速配送</p>
                    </div>
                </div>
            </section>

            <!-- 项目成果 -->
            <section class="project-section">
                <h3>📈 项目成果</h3>
                <div class="results-grid">
                    <div class="result-item">
                        <span class="result-number">200%</span>
                        <p>用户转化率提升</p>
                    </div>
                    <div class="result-item">
                        <span class="result-number">150万+</span>
                        <p>月活跃用户</p>
                    </div>
                    <div class="result-item">
                        <span class="result-number">4.8</span>
                        <p>用户满意度（满分5分）</p>
                    </div>
                </div>
            </section>

            <!-- 项目反思 -->
            <section class="project-section">
                <h3>💡 项目反思</h3>
                <ul>
                    <li>用户需求是产品成功的关键，需要持续关注用户反馈</li>
                    <li>技术创新要服务于实际业务场景</li>
                    <li>团队协作和沟通的重要性</li>
                </ul>
            </section>
        </div>

        <style>
            /* 整体风格采用苹果设计语言 */
            .project-detail {
                color: #1d1d1f; /* 深灰色，更接近苹果风格 */
                line-height: 1.8; /* 增加行高提升可读性 */
                font-family: -apple-system, BlinkMacSystemFont, sans-serif; /* 使用系统字体 */
            }

            .project-section {
                margin-bottom: 2.5rem;
                padding: 1.5rem;
                background: #ffffff;
                border-radius: 12px; /* 更大的圆角 */
                box-shadow: 0 2px 4px rgba(0,0,0,0.08); /* 更柔和的阴影 */
                transition: all 0.3s ease; /* 添加过渡效果 */
            }

            /* 添加悬停效果 */
            .project-section:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(0,0,0,0.12);
            }

            .project-section h3 {
                color: #000000; /* 纯黑色标题 */
                margin-bottom: 1.2rem;
                border-bottom: 1px solid #d2d2d7; /* 更细的分割线 */
                padding-bottom: 0.8rem;
                font-size: 1.4rem;
                font-weight: 600; /* 中等字重 */
            }

            .feature-grid, .results-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                gap: 1.5rem; /* 更大的间距 */
                margin-top: 1.5rem;
            }

            .feature-item, .result-item {
                padding: 1.5rem;
                background: #f5f5f7; /* 更浅的背景色 */
                border-radius: 12px;
                text-align: center;
                transition: all 0.3s ease;
            }

            /* 卡片悬停效果 */
            .feature-item:hover, .result-item:hover {
                background: #ffffff;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                transform: translateY(-2px);
            }

            .result-number {
                font-size: 2rem;
                font-weight: 700; /* 更粗的字重 */
                color: #007aff; /* 苹果蓝 */
                display: block;
                margin-bottom: 0.8rem;
            }

            ul {
                padding-left: 1.2rem;
                list-style-type: circle; /* 更现代的点样式 */
            }

            li {
                margin-bottom: 0.8rem;
                color: #6e6e73; /* 次文本颜色 */
            }

            /* 响应式设计 */
            @media (max-width: 768px) {
                .feature-grid, .results-grid {
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }
                
                .project-section {
                    padding: 1rem;
                    margin-bottom: 1.5rem;
                }
                
                .result-number {
                    font-size: 1.8rem;
                }
            }
        </style>
    `,
  },
  // 数据可视化平台项目
  project3: {
    title: "地理信息行业私有云管理平台项目详情",
    content: `
            <h2>地理信息行业私有云管理平台项目详情</h2>
            <p>作为产品经理，我主导了面向地理信息行业的私有云管理平台项目，该项目旨在为地理信息企业提供安全、高效的云资源管理解决方案。</p>
            <h3>项目背景与价值</h3>
            <ul>
                <li>解决地理信息数据存储与计算资源分散问题</li>
                <li>实现多源异构地理信息数据的统一管理</li>
                <li>提升地理信息处理效率，降低运维成本</li>
            </ul>
            <h3>我的核心贡献</h3>
            <ul>
                <li>主导需求分析，完成20+家地理信息企业的深度调研</li>
                <li>设计产品架构，制定3年产品路线图</li>
                <li>协调研发团队，确保项目按期交付</li>
                <li>建立用户反馈机制，实现产品持续优化</li>
            </ul>
            <h3>平台核心功能</h3>
            <ul>
                <li>多租户资源隔离与权限管理</li>
                <li>地理信息数据存储与计算资源智能调度</li>
                <li>实时监控与预警系统</li>
                <li>自动化运维与弹性伸缩</li>
                <li>数据安全与灾备方案</li>
            </ul>
            <h3>项目成果</h3>
            <ul>
                <li>成功部署于5家大型地理信息企业</li>
                <li>资源利用率提升40%，运维成本降低35%</li>
                <li>获得2022年度地理信息行业创新产品奖</li>
                <li>申请3项相关技术专利</li>
            </ul>
            <p>通过这个项目，我不仅积累了丰富的产品管理经验，更深刻理解了地理信息行业的特殊需求。我相信这些经验能够帮助我在贵公司快速上手，为团队创造价值。</p>
        `,
  },
  // AI智能助手项目 - 新增项目
  project4: {
    title: "AI智能助手项目详情",
    content: `
            <h2>AI智能助手项目详情</h2>
            <div style="text-align:center;">
                <img src="img/微信图片_20190825125145.jpg" alt="AI助手截图" style="width:100%; height:auto; margin:20px auto; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
            </div>
            <p>这是一个基于人工智能的智能助手系统，能够为用户提供24/7的智能服务支持。</p>
            <p>项目采用最新的自然语言处理技术，结合机器学习算法，实现了智能对话、情感分析、知识图谱等功能。系统可以理解复杂的用户意图，提供个性化的服务响应，并且支持多语言交互。</p>
            <h3>技术栈</h3>
            <ul>
                <li>AI框架：TensorFlow, PyTorch</li>
                <li>前端：React Native</li>
                <li>后端：Python, FastAPI</li>
                <li>数据库：PostgreSQL</li>
                <li>云服务：Google Cloud Platform</li>
            </ul>
            <h3>主要功能</h3>
            <ul>
                <li>智能对话系统</li>
                <li>语音识别与合成</li>
                <li>多语言支持</li>
                <li>知识库管理</li>
                <li>用户行为分析</li>
                <li>实时学习优化</li>
            </ul>
        `,
  },
  project5: {
    title: "私有云管理平台",
    content: `
        <div class="project-detail">
            <!-- 项目背景与价值 -->
            <section class="project-section">
                <h3>🎯 项目背景与价值</h3>
                <div class="value-grid">
                    <div class="value-item">
                        <h4>市场背景</h4>
                        <ul>
                            <li>2022年全球私有云市场规模达$500亿，年增长率15%</li>
                            <li>国内企业数字化转型加速，私有云需求激增</li>
                            <li>传统IT架构难以满足业务快速迭代需求</li>
                        </ul>
                    </div>
                    <div class="value-item">
                        <h4>用户痛点</h4>
                        <ul>
                            <li>资源利用率低（平均仅35%）</li>
                            <li>运维成本高（占IT预算40%）</li>
                            <li>缺乏统一管理平台</li>
                        </ul>
                    </div>
                    <div class="value-item">
                        <h4>商业价值</h4>
                        <ul>
                            <li>帮助企业降低40%IT成本</li>
                            <li>提升资源利用率至75%+</li>
                            <li>缩短新业务上线周期50%</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- 产品规划与路线图 -->
            <section class="project-section">
                <h3>🗺️ 产品规划与路线图</h3>
                <div class="roadmap">
                    <div class="phase">
                        <h4>阶段一：基础平台搭建（0-6个月）</h4>
                        <ul>
                            <li>完成核心功能开发</li>
                            <li>实现基础资源管理</li>
                            <li>部署首个客户试点</li>
                        </ul>
                    </div>
                    <div class="phase">
                        <h4>阶段二：功能完善（6-12个月）</h4>
                        <ul>
                            <li>增加自动化运维功能</li>
                            <li>优化多租户管理</li>
                            <li>完成3个标杆客户部署</li>
                        </ul>
                    </div>
                    <div class="phase">
                        <h4>阶段三：生态扩展（12-18个月）</h4>
                        <ul>
                            <li>开放API接口</li>
                            <li>构建应用市场</li>
                            <li>实现10+客户部署</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- 核心功能与竞争力 -->
            <section class="project-section">
                <h3>⭐ 核心功能与竞争力</h3>
                <div class="feature-grid">
                    <div class="feature-item">
                        <h4>智能资源调度</h4>
                        <p>基于AI算法实现资源最优分配，提升利用率40%</p>
                    </div>
                    <div class="feature-item">
                        <h4>自动化运维</h4>
                        <p>内置200+自动化运维场景，降低运维成本50%</p>
                    </div>
                    <div class="feature-item">
                        <h4>安全合规</h4>
                        <p>通过等保三级认证，满足金融、政务等行业要求</p>
                    </div>
                    <div class="feature-item">
                        <h4>开放生态</h4>
                        <p>提供标准API接口，支持第三方应用集成</p>
                    </div>
                </div>
            </section>

            <!-- 市场分析与定位 -->
            <section class="project-section">
                <h3>📊 市场分析与定位</h3>
                <div class="market-analysis">
                    <div class="analysis-item">
                        <h4>目标市场</h4>
                        <ul>
                            <li>金融行业：占比35%</li>
                            <li>政府机构：占比25%</li>
                            <li>大型企业：占比40%</li>
                        </ul>
                    </div>
                    <div class="analysis-item">
                        <h4>竞争优势</h4>
                        <ul>
                            <li>更低的TCO（总拥有成本）</li>
                            <li>更快的部署速度</li>
                            <li>更好的本地化支持</li>
                        </ul>
                    </div>
                    <div class="analysis-item">
                        <h4>市场策略</h4>
                        <ul>
                            <li>聚焦重点行业</li>
                            <li>建立标杆案例</li>
                            <li>发展生态合作伙伴</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- 项目成果与数据 -->
            <section class="project-section">
                <h3>📈 项目成果与数据</h3>
                <div class="results-grid">
                    <div class="result-item">
                        <span class="result-number">5+</span>
                        <p>成功部署客户</p>
                    </div>
                    <div class="result-item">
                        <span class="result-number">99.9%</span>
                        <p>系统可用性</p>
                    </div>
                    <div class="result-item">
                        <span class="result-number">40%</span>
                        <p>资源利用率提升</p>
                    </div>
                    <div class="result-item">
                        <span class="result-number">50%</span>
                        <p>运维成本降低</p>
                    </div>
                </div>
            </section>

            <!-- 团队与协作 -->
            <section class="project-section">
                <h3>👥 团队与协作</h3>
                <div class="team-structure">
                    <div class="team-item">
                        <h4>团队构成</h4>
                        <ul>
                            <li>产品团队：3人</li>
                            <li>研发团队：15人</li>
                            <li>测试团队：5人</li>
                            <li>运维团队：3人</li>
                        </ul>
                    </div>
                    <div class="team-item">
                        <h4>协作方式</h4>
                        <ul>
                            <li>采用敏捷开发模式</li>
                            <li>双周迭代</li>
                            <li>每日站会</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- 风险管理 -->
            <section class="project-section">
                <h3>⚠️ 风险管理</h3>
                <div class="risk-management">
                    <div class="risk-item">
                        <h4>技术风险</h4>
                        <ul>
                            <li>建立技术储备</li>
                            <li>定期技术评审</li>
                        </ul>
                    </div>
                    <div class="risk-item">
                        <h4>市场风险</h4>
                        <ul>
                            <li>持续市场调研</li>
                            <li>灵活调整策略</li>
                        </ul>
                    </div>
                    <div class="risk-item">
                        <h4>运营风险</h4>
                        <ul>
                            <li>建立应急预案</li>
                            <li>定期演练</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>

        <style>
            .project-detail {
                color: #333;
                line-height: 1.6;
            }

            .project-section {
                margin-bottom: 2rem;
                padding: 1rem;
                background: #fff;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }

            .project-section h3 {
                color: #2c3e50;
                margin-bottom: 1rem;
                border-bottom: 2px solid #eee;
                padding-bottom: 0.5rem;
            }

            .feature-grid, .results-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
            }

            .feature-item, .result-item {
                padding: 1rem;
                background: #f8f9fa;
                border-radius: 6px;
                text-align: center;
            }

            .result-number {
                font-size: 1.8rem;
                font-weight: bold;
                color: #3498db;
                display: block;
                margin-bottom: 0.5rem;
            }

            ul {
                padding-left: 1.5rem;
            }

            li {
                margin-bottom: 0.5rem;
            }

            @media (max-width: 768px) {
                .feature-grid, .results-grid {
                    grid-template-columns: 1fr;
                }
            }
        </style>
    `
  },
};

// 导出项目内容对象供全局使用
window.projectContent = projectContent;
