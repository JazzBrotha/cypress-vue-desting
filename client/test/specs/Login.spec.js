import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Login from '../../src/components/Login.vue'
import sinon from 'sinon'
import moxios from 'moxios'
import flushPromises from 'flush-promises'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Login.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      setUser: sinon.stub()
    }
    store = new Vuex.Store({
      state: {},
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

  it('has empty string error prop', () => {
    const wrapper = shallow(Login)
    expect(wrapper.vm.email).toEqual('')
  })

  it('has empty string email prop', () => {
    const wrapper = shallow(Login)
    expect(wrapper.vm.email).toEqual('')
  })

  it('has empty string password prop', () => {
    const wrapper = shallow(Login)
    expect(wrapper.vm.email).toEqual('')
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
    expect(wrapper.vm.email).toEqual('lasse@gmail.com')
    expect(wrapper.vm.password).toEqual('superPassword123')
  })
})
