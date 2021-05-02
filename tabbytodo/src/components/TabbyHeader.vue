<template>
  <header class="tabby-header">
    <div class="logo">
      <p><span>Tabby</span>Todo</p>
    </div>
    <p>You know what todo. Lock in. Tab in.</p>
    <div class="tagline">
      <p class="current-day">
        {{ currentDay ? currentDay : "Loading date..." }}
      </p>
      <p class="current-time">
        {{ currentTime ? currentTime : "Loading time..." }}
      </p>
    </div>
  </header>
</template>

<script>
import moment from "moment";
moment().format();

export default {
  data() {
    return {
      currentDay: null,
      currentTime: null,
    };
  },
  methods: {
    getCurrentTime() {
      const day = moment().format("dddd, MMMM Do YYYY");
      const time = moment().format("h:mm:ss a");
      this.currentDay = day;
      this.currentTime = time;
    },
  },
  computed: {},
  mounted() {
    setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.tabby-header {
  background: #fff;
  // background: linear-gradient(to right bottom, #0093e9, #80d0c7);
  padding: 24px 12px;
  padding: 16px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid hsl(202, 100%, 30%);

  .logo {
    p {
      font-size: 24px;
      font-size: 26px;
      font-weight: 600;
      letter-spacing: 2px;
      color: hsl(173, 46%, 20%);

      // &:last-of-type {
      //   font-size: 16px;
      //   font-weight: 400;
      //   letter-spacing: 0;
      // }

      span {
        // color: hsl(60, 100%, 45%);
      }
    }
  }

  .tagline {
    p {
      // color: hsl(202, 100%, 30%);
    }
    .current-time {
      font-weight: 600;
      text-align: right;
      color: #555;
      font-size: 20px;
      letter-spacing: 1px;
    }
    .current-day {
      margin-bottom: 6px;
    }
  }
}
</style>
