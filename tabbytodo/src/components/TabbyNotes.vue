<template>
  <div class="tabby-notes">
    <div class="tabby-notes-header">
      <h5><i class="fas fa-sticky-note"></i> Take Notes</h5>
    </div>
    <textarea
      placeholder="Write anything. Think through things. Preview ideas. It's important to remember that you won't remember. You ain't that good."
    ></textarea>
  </div>
</template>

<style lang="scss" scoped>
.tabby-notes {
  position: sticky;
  top: 0;
  margin-top: 24px;
  margin-left: 48px;
  height: 650px;
  width: 640px;
  border: 6px solid hsl(173, 46%, 50%);
  border-radius: 25px;
  background: hsl(173, 46%, 66%);
  border: 2px solid hsl(202, 100%, 30%);
  padding: 0 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  background: linear-gradient(to right bottom, #80d0c7, #0093e9);
  &-header {
    padding: 16px 20px 12px;
    h5 {
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      color: #fff;
    }
  }
}
textarea {
  padding: 16px 16px;
  resize: none;
  height: 90%;
  width: 100%;

  font-size: 16px;
  line-height: 1.6;
  outline: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  border: 2px solid hsl(202, 100%, 30%);
  transition: all 0.35s;

  &:focus {
    border: 2px solid hsl(202, 100%, 56%);
    box-shadow: 0 6px 12px #80d0c7;
  }
}
</style>
