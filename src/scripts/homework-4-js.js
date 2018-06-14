;(function() {
  function largest(...arg) {
    return arg.reduce((a,b) => a > b ? a : b);
  }

  function smallest(...arg) {
    return arg.reduce((a,b) => a < b ? a : b);
  }

  function transform(arr) {
    let newArr = [];
    const func = function(index) {
      return this[index];
    }
    arr.forEach( (el,index) => {
      newArr.push(func.bind(arr, index));
    });
    return newArr;
  }

  function sum(...arg) {
    return arg.length === 1 ? arg[0] : arg.pop() + sum(...arg);
  }

  function countDown(num) {
    setTimeout(function count() {
      console.log(num);
      if(num>0) setTimeout(count, 1000);
      num--;
    }, 1000);
  }

  window.Function.prototype.myBind = function (context, arg) {
    if(!this.call) throw new TypeError(`${this.name} is not callable`);
    const that = this;
    const args = [].slice.call(arguments,1);
    return function() {
      return that.apply(context, args.concat(Array.from(arguments)));
    }

    /*if(!this.call) throw new TypeError(`${this} is not callable`);
    const args = [].slice.call(arguments,1);
    context.self = this;

    return function() {      
      return context.self(...args.concat(Array.from(arguments)));
    }*/
  }

  window.largest = largest;
  window.smallest = smallest;
  window.transform = transform;
  window.sum = sum;
  window.countDown = countDown;
}());
