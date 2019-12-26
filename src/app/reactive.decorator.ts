import { ɵmarkDirty, Type } from '@angular/core';

export function Δ(target, key: string, descriptor?: PropertyDescriptor) {
  const _key = Symbol();

  Object.defineProperty(target, key, {
    get() {
      return this[_key];
    },
    set(newValue) {
      this[_key] = newValue;
      walkThoughProps(this, newValue);
    },
  });
}

function walkThoughProps(component, obj) {
  if (!isObject(obj)) {
    return;
  }

  Object.keys(obj).forEach(key => {
    makePropReactive(component, obj, key);
  });
}

function makePropReactive(component: Type<any>, obj: {}, key: string) {
  let value = obj[key];

  walkThoughProps(component, value);

  Object.defineProperty(obj, key, {
    get() {
      return value;
    },
    set(newValue) {
      value = newValue;
      ɵmarkDirty(component);
    },
  });
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}
