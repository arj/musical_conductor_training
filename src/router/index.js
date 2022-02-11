import Vue from 'vue'
import Router from 'vue-router'
import Selection from '@/components/Selection'
import Exercise from '@/components/Exercise'
import Review from '@/components/Review'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Selection',
      component: Selection
    },
    {
      path: '/exercise',
      name: 'Exercise',
      component: Exercise
    },
    {
      path: '/review',
      name: 'Review',
      component: Review
    }
  ]
})
