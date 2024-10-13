function showRestTime() {
    const now = new Date();
    const goal = new Date(2024, 11, 17);
  
    const restMillisecond = goal.getTime() - now.getTime();
    const day = Math.floor(restMillisecond / 1000 / 60 / 60 / 24);
    const hour = Math.floor(restMillisecond / 1000 / 60 / 60) % 24;
    const minute = Math.floor(restMillisecond / 1000 / 60) % 60;
    const second = Math.floor(restMillisecond / 1000) % 60;
  
    document.getElementById('day').textContent = day;
    document.getElementById('hour').textContent = hour;
    document.getElementById('minute').textContent = String(minute).padStart(2, '0');
    document.getElementById('second').textContent = String(second).padStart(2, '0');
  }
  
  setInterval(showRestTime, 1000);