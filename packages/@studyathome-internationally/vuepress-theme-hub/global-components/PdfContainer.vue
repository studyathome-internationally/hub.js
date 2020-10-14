<template>
  <div class="pdf-container">
    <script
      :src="`${cdn.src}/pdf.min.js`"
      crossorigin="anonymous"
      integrity="sha512-Z8CqofpIcnJN80feS2uccz+pXWgZzeKxDsDNMD/dJ6997/LSRY+W4NmEt9acwR+Gt9OHN0kkI1CTianCwoqcjQ=="
    ></script>
    <div class="title">{{ title }}</div>
    <div class="content">
      <div class="description">
        <slot></slot>
        <p>
          <a :href="this.link">
            Download
            <font-awesome-icon :icon="['far', 'file-pdf']"></font-awesome-icon>
          </a>
        </p>
      </div>
      <div class="preview">
        <canvas id="the-canvas" style="border: 1px solid black; direction: ltr;"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PdfContainer",
  props: {
    title: {
      type: String,
      default: "Default Title",
    },
    href: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      cdn: {
        src: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347",
      },
    };
  },
  computed: {
    link() {
      // return "https://cloud.technikum-wien.at/s/DSYBf42LWZmgXPC/download";
      return this.$withBase(this.href);
    },
  },
  created() {
    console.log("Dummy -1");
    if (window.pdfjsLib) {
      console.log("Dummy 0");
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = `${this.cdn.src}/pdf.worker.min.js`; //"https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.min.js";
      window.pdfjsLib.getDocument(this.link).promise.then((pdf) => {
        console.log("Dummy 1");
        pdf.getPage(1).then((page) => {
          console.log("Dummy 2");
          const vp = page.getViewport({ scale: 0.25 });
          const canvas = document.getElementById("the-canvas");
          const context = canvas.getContext("2d");
          // canvas.height = vp.height;
          // canvas.width = vp.width;
          canvas.height = 210;
          canvas.width = 148;
          const renderContext = { canvasContext: context, viewport: vp };
          page.render(renderContext);
        });
      });
    }
  },
};
</script>

<style lang="stylus" scoped>
.pdf-container
  display flex
  flex-flow column nowrap
  border 1px solid $accentColor
  border-radius 0.5rem
  padding 1rem
  background lighten($accentColor,0%)
  box-shadow: 1px 1px 3px 1px darken($borderColor, 20%);
  .title
    color white
    font-weight bold
    font-size 1.8rem
  .content
    background white
    display flex
    flex-flow row nowrap
    .description
      padding 1rem 1.2rem
      font-size 1.4rem
    //   flex 1 1 70%
    // .preview
    //   flex 1 1 30%
</style>
