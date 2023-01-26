import { createApp } from 'vue'
import {initializeApp} from 'firebase/app'
import {getAnalytics} from 'firebase/analytics'
import './style.css'
import App from './App.vue'

const firebaseConfig = {
  apiKey: 'AIzaSyA3LuZ-FllYGxn_-OPn_hSeEILRcrubayQ',
  authDomain: 'asana-clone-c80fd.firebaseapp.com',
  projectId: 'asana-clone-c80fd',
  storageBucket: 'asana-clone-c80fd.appspot.com',
  messagingSenderId: '497348060162',
  appId: '1:497348060162:web:5fa774d6076a1148b7731b',
  measurementId: 'G-8GZ6J6VBBJ'
}
const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)

createApp(App).mount('#app')
