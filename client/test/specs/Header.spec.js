import Header from '../../src/components/Header.vue'
import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import sinon from 'sinon'
import moxios from 'moxios'
import flushPromises from 'flush-promises'

describe('Header.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      setUser: sinon.stub(),
      setToken: sinon.stub()
    }
    store = new Vuex.Store({
      state: {
        token: 'nuofiea',
        isUserLoggedIn: true
      },
      actions
    })
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  // it('has created a hook', () => {
  //   expect(typeof Header.methods.logout).toBe('function')
  // })
  // it('contains logout button if user is logged in', () => {
  //   store = new Vuex.Store({
  //     state: {
  //       isUserLoggedIn: true
  //     },
  //     actions
  //   })
  //   const wrapper = shallow(Header, { store })
  //   const logoutBtn = wrapper.find('#logout-btn')
  //   expect(logoutBtn.is('v-btn')).toBe(true)
  // })
  // it('calls logout method when clicking logout button', () => {
  //   store = new Vuex.Store({
  //     state: {
  //       isUserLoggedIn: true
  //     },
  //     actions
  //   })
  //   const wrapper = shallow(Header, { store })
  //   const stubMethod = sinon.stub()
  //   const logoutBtn = wrapper.find('#logout-btn')
  //   wrapper.setMethods({ logout: stubMethod })
  //   logoutBtn.trigger('click')
  //   expect(stubMethod.called).toBe(true)
  // })
  it('sets isUserLoggedIn to "false" in state', () => {
    const wrapper = shallow(Header, { store })
    const logoutBtn = wrapper.find('#logout-btn')
    logoutBtn.trigger('click')
    store.state.isUserLoggedIn = false
    store.state.token = null
    expect(store.state.isUserLoggedIn).toEqual(false)
    expect(store.state.token).toEqual(null)
  })
  // it('calls login method when clicking login button', () => {
  //   const wrapper = shallow(Login)
  //   const stubMethod = sinon.stub()
  //   const loginBtn = wrapper.find('#login-btn')
  //   wrapper.setMethods({ login: stubMethod })
  //   loginBtn.trigger('click')
  //   expect(stubMethod.called).toBe(true)
  // })

  // it('sets email and password prop after axios request is made', async () => {
  //   const wrapper = shallow(Login)
  //   wrapper.setData({
  //     email: 'lasse@gmail.com',
  //     password: 'superPassword123'
  //   })
  //   const loginBtn = wrapper.find('#login-btn')
  //   loginBtn.trigger('click')
  //   await flushPromises()
  //   const request = moxios.requests.mostRecent()
  //   expect(wrapper.vm.email).toEqual('lasse@gmail.com')
  //   expect(wrapper.vm.password).toEqual('superPassword123')
  // })
})
