// 로컬 스토리지에 저장하는 함수
const localStorage = {
  save: function (key: string, value: string) {
    return window.localStorage.setItem(key, value);
  },
  get: function (key: string) {
    return window.localStorage.getItem(key);
  },
  remove: function (key: string) {
    return window.localStorage.removeItem(key);
  },
};

export { localStorage };
