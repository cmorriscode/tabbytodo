<template>
  <div class="tabby-task">
    <div class="tabby-task-header">
      <p>Pet Smokey</p>
      <div class="actions">
        <div class="actions-check">
          <i class="fas fa-check-square icon"></i>
        </div>
        <div class="actions-edit"><i class="fas fa-edit icon"></i></div>
        <div class="actions-delete"><i class="fas fa-trash-alt icon"></i></div>
      </div>
    </div>
    <div class="tabby-task-description">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ipsum
        eligendi, cumque molestias saepe, inventore provident dolorem modi
        incidunt dolore vitae quibusdam quis unde corporis consequatur, sapiente
        explicabo porro sed.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tabby-task {
  width: 100%;
  padding: 16px 20px;
  // background: linear-gradient(to right bottom, #80d0c7, #0093e9);
  // background: hsl(173, 46%, 60%);
  color: #333;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  margin-top: 24px;

  &.urgent {
    border-left: 6px solid hsl(30, 100%, 46%);
  }
  &.important {
    border-left: 6px solid hsl(215, 100%, 46%);
  }

  &.low {
    border-left: 6px solid hsl(185, 100%, 46%);
  }
  &-header {
    display: flex;
    justify-content: space-between;
    p {
      font-weight: 700;
      font-size: 20px;
      color: hsl(215, 100%, 46%);
      color: #333;
      color: hsl(30, 41%, 44%);
      color: #333;
    }

    .actions {
      display: flex;

      div {
        margin-right: 24px;

        .icon {
          font-size: 20px;
        }
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }
  &-description {
    padding: 12px 8px;
    p {
      line-height: 1.4;
    }
  }
}
</style>
