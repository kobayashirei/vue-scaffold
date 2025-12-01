/**
 * 单例模式工具函数
 * 
 * 该模块提供了一个通用的单例包装器，确保一个类只有一个实例。
 * 适用于全局状态管理、服务连接、配置管理等场景。
 */

/**
 * 单例包装器函数
 * 
 * @description
 * 接收一个类构造函数，返回该类的单例代理。
 * 无论调用多少次 new，都只返回同一个实例。
 * 
 * @example
 * class Service {
 *   name = 'Service';
 * }
 * const SingleService = singleton(Service);
 * const s1 = new SingleService();
 * const s2 = new SingleService();
 * console.log(s1 === s2); // true
 * 
 * @param className 需要实现单例的类
 * @returns 具有单例特性的代理类
 */
export function singleton<T extends new (...args: any[]) => any>(className: T): T {
  let instance: InstanceType<T>;

  return new Proxy(className, {
    construct(target, args) {
      if (!instance) {
        instance = new target(...args);
      }
      return instance;
    }
  });
}

/**
 * 懒加载单例获取器
 * 
 * @description
 * 传入一个创建实例的工厂函数，返回一个获取实例的函数。
 * 只有在第一次调用 get() 时才会创建实例。
 * 
 * @example
 * const getLogger = createSingleton(() => new Logger());
 * const logger1 = getLogger();
 * const logger2 = getLogger();
 * console.log(logger1 === logger2); // true
 * 
 * @param factory 创建实例的工厂函数
 * @returns 获取单例的函数
 */
export function createSingleton<T>(factory: () => T): () => T {
  let instance: T | null = null;
  return () => {
    if (!instance) {
      instance = factory();
    }
    return instance;
  };
}
