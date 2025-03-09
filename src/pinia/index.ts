export const useGlobalStore = defineStore('global', {
  state: () => ({
    scrollPercent: 0,
    screenWidth: window.innerWidth,
  }),
});

export const useNavStore = defineStore('nav', {
  state: () => ({
    active: '',
  }),
});

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
