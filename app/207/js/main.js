
function timer(){var e=(new Date).getTime()+43e3,t=setInterval(function(){var n=(new Date).getTime(),r=e-n,o=Math.floor(r%36e5/6e4),a=Math.floor(r%6e4/1e3);document.getElementById('timer').innerHTML=(o>9?o:'0'+o)+':'+(a>9?a:'0'+a),r<=1e3&&clearInterval(t);},1e3);return t;}
document.addEventListener('DOMContentLoaded',function(){timer();});
//# sourceMappingURL=main.js.map
