import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import SongsSearchPanel from '../../src/components/Songs/SongsSearchPanel.vue'
import Songs from '../../src/components/Songs/Index.vue'
import moxios from 'moxios'
import sinon from 'sinon'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

describe('SongsSearchPanel.vue', () => {
  let store, state, routes, router
  state = {
    isUserLoggedIn: true,
    user: 'user@user.com',
    token: 'amionog24Gm4iwogwgRgrrsvs'
  }
  beforeEach(() => {
    routes = [
      {
        path: '/songs', name: 'songs', component: Songs
      }
    ]
    router = new VueRouter({ routes })
    store = new Vuex.Store({
      state
    })
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  // it('sets songs to be empty string at mount', () => {
  //   const wrapper = shallow(SongsSearchPanel)
  //   expect(wrapper.vm.search).toBe('')
  // })
  // it('fetches songs based on search value', () => {
  //   const wrapper = shallow(SongsSearchPanel, { store, localVue })
  //   wrapper.setProps({
  //     search: 'float',
  //     songs: ['Float On', 'Float On!']
  //   })
  //   expect(wrapper.vm.songs).toHaveLength(2)
  // })
  // it('calls watch function', next => {
  //   const wrapper = shallow(SongsSearchPanel)
  //   const spy = sinon.spy(console, 'log')
  //   wrapper.vm.search = 'new search'
  //   wrapper.vm.$nextTick(() => {
  //     expect(spy.called).toBe(true)
  //     next()
  //   })
  // })
  // it('calls watch function', () => {
  //   const wrapper = shallow(SongsSearchPanel)
  //   const inputMethodStub = sinon.stub()
  //   const input = wrapper.find('#songs-search-input')
  //   input.element.value = 'new song'
  //   wrapper.setMethods({ search: inputMethodStub })
  //   input.trigger('input')
  //   expect(inputMethodStub.called).toBe(true)
  // })
  it('sets search prop based on search input value', () => {
    const wrapper = shallow(SongsSearchPanel)
    // const inputMethodStub = sinon.stub()
    const input = wrapper.find('#songs-search-input')
    input.element.value = 'new song'
    input.trigger('input')
    wrapper.update()
    expect(wrapper.vm.search).toEqual('new song')
  })
})
