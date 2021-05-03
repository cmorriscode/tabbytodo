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
      font-weight: 700;
      letter-spacing: 2px;

      background: -webkit-linear-gradient(
        hsl(202, 100%, 31%),
        hsl(173, 46%, 51%)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .tagline {
    p {
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
