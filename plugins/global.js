import Vue from 'vue'
import Block from '@/components/Block.vue'
import Icon from '@/components/Icon.vue'
import LeaveEmail from '@/components/LeaveEmail.vue'
import Split from '@/components/Split.vue'
import ModularText from '@/components/ModularText.vue'
import ModularTextImage from '@/components/ModularTextImage.vue'
import ModularFeatureList from '@/components/ModularFeatureList.vue'

Vue.component('block', Block)
Vue.component('icon', Icon)
Vue.component('leave-email', LeaveEmail)
Vue.component('split', Split)
Vue.component('ModularText', ModularText)
Vue.component('ModularTextImage', ModularTextImage)
Vue.component('ModularFeatureList', ModularFeatureList)

Vue.filter('markdown', markdown => 'markdown' + markdownToHTML(markdown || ''))

Vue.config.devtools = false
Vue.config.productionTip = false
