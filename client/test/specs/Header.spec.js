import Header from '../../src/components/Header.vue'
import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import moxios from 'moxios'
import sinon from 'sinon'
import VueRouter from 'vue-router'
import Songs from '../../src/components/Songs/Index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

describe('Header.vue', () => {
  let store
  let actions
  let routes
  let router

  beforeEach(() => {
    routes = [
      {
        path: '/songs', name: 'songs', component: Songs
      }
    ]
    router = new VueRouter({ routes })
    actions = {
      setToken: sinon.stub(),
      setUser: sinon.stub()
    }
    store = new Vuex.Store({
      state: {
        token: 'amionog24Gm4iwogwgRgrrsvs',
        user: 'testing@gmail.com',
        isUserLoggedIn: true
      },
      actions
    })
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  it('calls logout method when clicking logout button', () => {
    const wrapper = shallow(Header, { store, localVue, router })
    const logoutMethodStub = sinon.stub()
    const logoutBtn = wrapper.find('#logout-btn')
    wrapper.setMethods({ logout: logoutMethodStub })
    logoutBtn.trigger('click')
    expect(logoutMethodStub.called).toBe(true)
  })
  it('sets isUserLoggedIn to false in state when logout triggers', () => {
    const wrapper = shallow(Header, { store, localVue, router })
    const logoutBtn = wrapper.find('#logout-btn')
    logoutBtn.trigger('click')
    store.state.isUserLoggedIn = false
    expect(store.state.isUserLoggedIn).toEqual(false)
  })
  it('sets token to null in state when logout triggers', () => {
    const wrapper = shallow(Header, { store, localVue, router })
    const logoutBtn = wrapper.find('#logout-btn')
    logoutBtn.trigger('click')
    store.state.token = null
    expect(store.state.token).toEqual(null)
  })
  it('sets user to null in state when logout triggers', () => {
    const wrapper = shallow(Header, { store, localVue, router })
    const logoutBtn = wrapper.find('#logout-btn')
    logoutBtn.trigger('click')
    store.state.user = null
    expect(store.state.user).toEqual(null)
  })
  it('should be on path "/songs" after logout call is made', () => {
    const wrapper = shallow(Header, { store, localVue, router })
    const logoutMethodStub = sinon.stub()
    const logoutBtn = wrapper.find('#logout-btn')
    wrapper.setMethods({ logout: logoutMethodStub })
    logoutBtn.trigger('click')
    expect(router.history.current.path).toEqual('/songs')
  })
})
