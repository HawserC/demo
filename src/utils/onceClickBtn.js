let isClick = false, timer;
export default onceClickBtn = (fn, time = 1000) => {
    if(!isClick) {
        isClick = true;
        clearTimeout(timer);
        timer = setTimeout(() => {
            isClick = false;
        }, time)
      return  fn();
    }
}

