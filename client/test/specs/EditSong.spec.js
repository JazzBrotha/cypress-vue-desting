import EditSong from '../../src/components/EditSong.vue'
import ViewSong from '../../src/components/ViewSong/Index.vue'
import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

describe('EditSong.vue', () => {
  let actions, store, router, routes

  beforeEach(() => {
    routes = [
      {
        path: '/songs/:songId', name: 'song', component: ViewSong
      }
    ]
    router = new VueRouter({ routes })
    store = new Vuex.Store({
      state: {},
      actions
    })
  })
  it('has created a hook for component', () => {
    shallow(EditSong, {
      propsData: {
        song: {}
      },
      store,
      localVue,
      router
    })
    expect(typeof EditSong.mounted).toBe('function')
  })
})
