<template>
  <div class="pdf-container">
    <div class="title">{{ title }}</div>
    <div class="content">
      <div class="description">
        <slot></slot>
        <p class="download">
          <a :href="$withBase(href)">
            Download
            <font-awesome-icon :icon="['far', 'file-pdf']"></font-awesome-icon>
          </a>
        </p>
      </div>
      <a class="preview no-zoom" :href="$withBase(link)">
        <img :src="$withBase(thumb)" alt="PDF Document Preview" />
      </a>
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
    thumb: {
      type: String,
      required: true,
    },
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
    padding-bottom 0.5rem
    font-weight 500
    font-size 1.8rem
  .content
    background white
    display flex
    flex-flow row nowrap
    .description
      position relative
      padding 0rem 1.2rem 3rem 1rem
      font-size 1.4rem
      .download
        position absolute
        bottom 0
        margin-block 0
        margin-block-end 0.5rem
    .preview
      margin auto
      max-width 30%

@media (max-width: $MQMobile)
  .pdf-container .content .preview
    max-width 40%

@media (max-width: $MQMobileNarrow)
  .pdf-container .content
    flex-flow column nowrap
    .preview
      max-width unset
</style>
