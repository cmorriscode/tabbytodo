<template>
  <div class="tabby-notes">
    <div class="tabby-notes-header">
      <h5><i class="fas fa-sticky-note"></i> Take Notes</h5>
    </div>
    <textarea
      placeholder="Write anything. Think through things. Preview ideas. It's important to remember that you won't remember. You ain't that good."
      v-model="notes"
      @input="saveNotes"
    ></textarea>
    <!-- <div class="created-by">
      <img src="https://charlesmorris.com/img/cm_logo.ed1daa6a.png" alt="" />
      <p>Built By: Charlie Morris</p>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: "",
    };
  },
  methods: {
    saveNotes() {
      localStorage.setItem("tabbyNotes", JSON.stringify(this.notes));
    },
  },
  mounted() {
    const getNotes = JSON.parse(localStorage.getItem("tabbyNotes"));

    if (getNotes) {
      this.notes = getNotes;
    } else {
      this.notes = "";
    }
  },
};
</script>

<style lang="scss" scoped>
.tabby-notes {
  .created-by {
    margin-top: 32px;
    p {
      text-align: center;
      margin-top: 12px;
    }

    img {
      display: block;
      width: 44px;
      margin: 0 auto;
    }
  }
  position: sticky;
  top: 48px;
  margin-top: 24px;
  margin-left: 48px;
  height: 650px;
  width: 520px;
  max-width: 100%;
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

@media (max-width: 1125px) {
  .tabby-notes {
    display: none;
  }
}
</style>
