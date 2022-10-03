//鼠标点击雪花特效
(函数fairyDustCursor() {
  
    var possibleColors = ["#D61C59", "#E7D84B", "#1B8798"]
    var 宽度 = window.innerWidth;
    变量高度 = window.innerHeight;
    var cursor = {x: 宽度/2, y: 宽度/2};
    var 粒子 = [];
    
    函数初始化（）{
      绑定事件（）；
      环形（）;
    }
    
    // 绑定需要的事件
    函数绑定事件（）{
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchstart', onTouchMove);
      
      window.addEventListener('resize', onWindowResize);
    }
    
    函数 onWindowResize(e) {
      宽度 = window.innerWidth;
      高度 = window.innerHeight;
    }
    
    函数 onTouchMove(e) {
      如果（e.touches.length > 0）{
        for( var i = 0; i < e.touches.length; i++ ) {
          addParticle(e.touches[i].clientX, e.touches[i].clientY, possibleColors[Math.floor(Math.random()*possibleColors.length)]);
        }
      }
    }
    
    函数 onMouseMove(e) {    
      cursor.x = e.clientX;
      cursor.y = e.clientY;
      
      addParticle(cursor.x, cursor.y, possibleColors[Math.floor(Math.random()*possibleColors.length)]);
    }
    
    函数 addParticle(x, y, color) {
      var 粒子 = 新粒子（）；
      粒子.init（x，y，颜色）；
      粒子.push(粒子);
    }
    
    函数更新粒子（）{
      
      // 更新
      for( var i = 0; i <particle.length; i++ ) {
        粒子[i].update();
      }
      
      // 移除死粒子
      for( var i =particle.length -1; i >= 0; i-- ) {
        如果（粒子[i].lifeSpan < 0）{
          粒子[i].die();
          粒子.splice(i, 1);
        }
      }
      
    }
    
    函数循环（）{
      requestAnimationFrame(循环);
      更新粒子（）；
    }
    
    /**
     * 粒子
     */
    
    函数粒子（）{
  
      this.character = "*";
      这个.lifeSpan = 120; //小姐
      this.initialStyles ={
        “位置”：“固定”，
        "top": "0", //必须加
        “显示”：“块”，
        “指针事件”：“无”，
        “z-index”：“10000000”，
        "fontSize": "20px",
        “将改变”：“转变”
      };
  
      // 初始化并设置属性
      this.init = 函数（x，y，颜色）{
  
        这个速度= {
          x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
          是：1
        };
        
        this.position = {x: x - 10, y: y - 20};
        this.initialStyles.color = 颜色；
        控制台.log（颜色）；
  
        this.element = document.createElement('span');
        this.element.innerHTML = this.character;
        applyProperties(this.element, this.initialStyles);
        this.update();
        
        document.body.appendChild(this.element);
      };
      
      this.update = 函数（）{
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.lifeSpan--;
        
        this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + (this.lifeSpan / 120) + ")" ;
      }
      
      this.die = 函数（） {
        this.element.parentNode.removeChild(this.element);
      }
      
    }
    
    /**
     * 实用程序
     */
    
    // 将 css `properties` 应用于元素。
    功能应用属性（目标，属性）{
      for（属性中的var键）{
        目标样式[键]=属性[键]；
      }
    }
    
    在里面（）;
  })();