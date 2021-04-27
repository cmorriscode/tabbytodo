<template>
  <header class="tabby-header">
    <div class="logo">
      <p><span>Tabby</span>Todo</p>
    </div>
    <div class="tagline">
      <p>You know what todo. Lock in. Tab in.</p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.tabby-header {
  background: #fff;
  // background: linear-gradient(to right bottom, #0093e9, #80d0c7);
  padding: 24px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid hsl(202, 100%, 30%);

  .logo {
    p {
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 2px;

      span {
        // color: hsl(60, 100%, 45%);
      }
    }
  }

  .tagline {
    p {
      // color: hsl(202, 100%, 30%);
    }
  }
}
</style>
