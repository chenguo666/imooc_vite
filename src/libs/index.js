import svgIcon from './svg-icon/index.vue'
export default {
  install(app) {
    app.component('my-svg-icon', svgIcon)
  }
}
