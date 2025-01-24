// 添加错误处理
const initializeSwiper = () => {
    try {
        const swiper = new Swiper('.swiper', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 3000,
            },
        });

        const profileSwiper = new Swiper('.profile-swiper', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.profile-swiper .swiper-pagination',
                clickable: true,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }
        });

        // 鼠标悬停时暂停自动播放
        const profileSwiperEl = document.querySelector('.profile-swiper');
        if (profileSwiperEl) {
            profileSwiperEl.addEventListener('mouseenter', () => {
                profileSwiper.autoplay.stop();
            });
            
            profileSwiperEl.addEventListener('mouseleave', () => {
                profileSwiper.autoplay.start();
            });
        }
    } catch (error) {
        console.error('Swiper initialization error:', error);
    }
};

// 确保DOM加载完成后再初始化
document.addEventListener('DOMContentLoaded', initializeSwiper);

// AI对话控制函数
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.toggle('active');
}

// 修改发送消息函数
function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (message) {
        const chatMessages = document.getElementById('chatMessages');
        
        // 添加用户消息
        const userDiv = document.createElement('div');
        userDiv.className = 'chat-message user';
        userDiv.textContent = message;
        chatMessages.appendChild(userDiv);
        
        // 模拟AI回复
        setTimeout(() => {
            const aiDiv = document.createElement('div');
            aiDiv.className = 'chat-message ai';
            aiDiv.textContent = '这是一个模拟的AI回复消息';
            chatMessages.appendChild(aiDiv);
            
            // 自动滚动到底部
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
        
        input.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// 添加回车发送功能
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 