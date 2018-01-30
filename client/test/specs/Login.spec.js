import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Login from '../../src/components/Login.vue'
import sinon from 'sinon'
import moxios from 'moxios'
import flushPromises from 'flush-promises'
import VueRouter from 'vue-router'
import Songs from '../../src/components/Songs/Index.vue'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

describe('Login.vue', () => {
  let actions
  let store
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
        token: '',
        user: '',
        isUserLoggedIn: false
      },
      actions
    })
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  it('contains login v-btn', () => {
    const wrapper = shallow(Login)
    const loginBtn = wrapper.find('#login-btn')
    expect(loginBtn.is('v-btn')).toBe(true)
  })
  it('contains email v-text-field', () => {
    const wrapper = shallow(Login)
    const emailInputField = wrapper.find('#email-input')
    expect(emailInputField.is('v-text-field')).toBe(true)
  })
  it('contains password v-text-field', () => {
    const wrapper = shallow(Login)
    const passwordInputField = wrapper.find('#password-input')
    expect(passwordInputField.is('v-text-field')).toBe(true)
  })
  it('sets correct value for email after input', () => {
    const wrapper = shallow(Login)
    const emailInputField = wrapper.find('#email-input')
    emailInputField.value = 'lasse@gmail.com'
    expect(emailInputField.value).toEqual('lasse@gmail.com')
  })
  it('sets correct value for password after input', () => {
    const wrapper = shallow(Login)
    const passwordInputField = wrapper.find('#password-input')
    passwordInputField.value = 'superPassword123'
    expect(passwordInputField.value).toEqual('superPassword123')
  })
  it('email data matches email v-text-field value', () => {
    const wrapper = shallow(Login)
    const emailInputField = wrapper.find('#email-input')
    wrapper.setData({ email: '' })
    expect(emailInputField.text()).toEqual(wrapper.vm.email)
  })
  it('password data matches password v-text-field value', () => {
    const wrapper = shallow(Login)
    const passwordInputField = wrapper.find('#password-input')
    wrapper.setData({ password: '' })
    expect(passwordInputField.text()).toEqual(wrapper.vm.password)
  })
  it('calls login method when clicking login button', () => {
    const wrapper = shallow(Login)
    const stubMethod = sinon.stub()
    const loginBtn = wrapper.find('#login-btn')
    wrapper.setMethods({ login: stubMethod })
    loginBtn.trigger('click')
    expect(stubMethod.called).toBe(true)
  })
  it('contains a form title of Login', () => {
    const wrapper = shallow(Login)
    const formTitle = wrapper.find('#title-form')
    expect(formTitle.text()).toEqual('Login')
  })
  it('has empty string email prop', () => {
    const wrapper = shallow(Login)
    expect(wrapper.vm.email).toEqual('')
  })
  it('has empty string password prop', () => {
    const wrapper = shallow(Login)
    expect(wrapper.vm.password).toEqual('')
  })
  it('sets email and password prop after axios request is made', async () => {
    const wrapper = shallow(Login)
    wrapper.setData({
      email: 'lasse@gmail.com',
      password: 'superPassword123'
    })
    const loginBtn = wrapper.find('#login-btn')
    loginBtn.trigger('click')
    await flushPromises()
    const request = moxios.requests.mostRecent()
    expect(wrapper.vm.email).toEqual('lasse@gmail.com')
    expect(wrapper.vm.password).toEqual('superPassword123')
  })
  it('should be on path "/songs" after login call is made', () => {
    const wrapper = shallow(Login, { store, localVue, router })
    const logoutMethodStub = sinon.stub()
    const loginBtn = wrapper.find('#login-btn')
    wrapper.setMethods({ login: logoutMethodStub })
    loginBtn.trigger('click')
    expect(router.history.current.path).toEqual('/songs')
  })
  it('should return error if no password is given', () => {
    moxios.uninstall()
    const wrapper = shallow(Login, { store, localVue, router })
    const loginBtn = wrapper.find('#login-btn')
    loginBtn.trigger('click')
    wrapper.vm.error = 'No password provided'
    expect(wrapper.vm.error).toEqual('No password provided')
  })
})
