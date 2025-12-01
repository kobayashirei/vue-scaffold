/**
 * 函数工具库
 * 
 * 包含常用的函数操作，如防抖、节流等。
 */

/**
 * 防抖函数 (Debounce)
 * 
 * @description
 * 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
 * 适用于搜索框输入、窗口大小调整等频繁触发的事件。
 * 
 * @param fn 需要防抖执行的函数
 * @param delay 延迟时间（毫秒）
 * @returns 防抖处理后的函数
 */
export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  
  return function(this: any, ...args: Parameters<T>) {
    if (timer) clearTimeout(timer);
    
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

/**
 * 节流函数 (Throttle)
 * 
 * @description
 * 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
 * 适用于滚动事件、鼠标移动等高频触发事件。
 * 
 * @param fn 需要节流执行的函数
 * @param limit 时间限制（毫秒）
 * @returns 节流处理后的函数
 */
export function throttle<T extends (...args: any[]) => any>(fn: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;
  
  return function(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * 睡眠函数 (Sleep)
 * 
 * @description
 * 异步延迟执行，用于模拟网络延迟或等待。
 * 
 * @param ms 毫秒数
 * @returns Promise
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
