# simple-vue-tooltip
This is a simple tooltip directive for vue!
* Npm installing: \
`npm install @volizik/simple-vue-tooltip`

* Installing into Vue:
```
import Vue from 'vue'
import tooltip from '@volizik/simple-vue-tooltip'

Vue.directive(tooltip)
```
* Add styles:
```
<style lang="scss">
@import '~@volizik/simple-vue-tooltip/styles/tooltip';
...
</style>
```
* Usage
```
<button v-tooltip.right.bottom="I am your tooltip">Hover me!</button>
```
* Options: left | right | bottom | top
* Shown only on hover
 



