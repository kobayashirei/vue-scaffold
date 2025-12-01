/**
 * 对象工具库
 * 
 * 包含常用的对象操作，如深拷贝、类型判断等。
 */

/**
 * 深拷贝 (Deep Clone)
 * 
 * @description
 * 创建一个新对象，完全复制源对象的所有属性，包括嵌套对象。
 * 使用 JSON 序列化实现简单深拷贝（注意：不支持 Function, RegExp, Date, undefined 等特殊类型）。
 * 如果需要支持复杂类型，建议使用 lodash.cloneDeep。
 * 
 * @param obj 源对象
 * @returns 克隆后的新对象
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // 处理 Date
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as any;
  }
  
  // 处理 Array
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item)) as any;
  }
  
  // 处理 Object
  const clonedObj = {} as T;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  
  return clonedObj;
}

/**
 * 检查是否为对象
 * 
 * @param item 待检查项
 * @returns boolean
 */
export function isObject(item: any): boolean {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * 合并对象 (Deep Merge)
 * 
 * @description
 * 深度合并两个对象。
 * 
 * @param target 目标对象
 * @param source 源对象
 * @returns 合并后的对象
 */
export function mergeDeep(target: any, source: any): any {
  const output = Object.assign({}, target);
  
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = mergeDeep(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  
  return output;
}
