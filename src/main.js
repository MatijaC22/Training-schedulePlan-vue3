import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //import router for vue not load pages
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' //component for vue 3 where will be displayed fornawsome component
import {library} from '@fortawesome/fontawesome-svg-core'  //utility funcition which can gave us fontawsome icons
import { fas } from '@fortawesome/free-solid-svg-icons' //font icon library (when you choose fas you take all components, you can have just one if you want, go ctrl + space inside brackets and you will get a list)

 
library.add(fas) //from imported library taking/adding icons 

createApp(App).component('fa',FontAwesomeIcon).use(router).mount('#app') // component fa- defined that fa will be word which you will use for display components, fa will be like div or a, or img...; mount is for mouting our app and use is that we will use router
