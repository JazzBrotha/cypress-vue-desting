
import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Register from '../../src/components/Register.vue'
import sinon from 'sinon'
import moxios from 'moxios'
import axios from 'axios'
import flushPromises from 'flush-promises'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Register.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      setUser: sinon.stub(),
      setToken: sinon.stub()
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
  it('contains email v-text-field', () => {
    const wrapper = shallow(Register)
    const emailInputField = wrapper.find('#email-input')
    expect(emailInputField.is('v-text-field')).toBe(true)
  })
  it('contains password v-text-field', () => {
    const wrapper = shallow(Register)
    const passwordInputField = wrapper.find('#password-input')
    expect(passwordInputField.is('v-text-field')).toBe(true)
  })
  it('contains register v-btn', () => {
    const wrapper = shallow(Register)
    const registerBtn = wrapper.find('#register-btn')
    expect(registerBtn.is('v-btn')).toBe(true)
  })
  it('has empty string email prop', () => {
    const wrapper = shallow(Register)
    expect(wrapper.vm.email).toEqual('')
  })
  it('has empty string password prop', () => {
    const wrapper = shallow(Register)
    expect(wrapper.vm.email).toEqual('')
  })
  it('has empty string error prop', () => {
    const wrapper = shallow(Register)
    expect(wrapper.vm.email).toEqual('')
  })
  it('sets correct value in email v-text-field', () => {
    const wrapper = shallow(Register)
    const emailInputField = wrapper.find('#email-input')
    emailInputField.value = 'user@user.com'
    expect(emailInputField.value).toEqual('user@user.com')
  })
  it('sets correct value in password v-text-field', () => {
    const wrapper = shallow(Register)
    const passwordInputField = wrapper.find('#password-input')
    passwordInputField.value = 'magicPassword123'
    expect(passwordInputField.value).toEqual('magicPassword123')
  })
  it('sets correct email data', () => {
    const wrapper = shallow(Register)
    wrapper.setData({ email: 'user@user.com' })
    expect(wrapper.vm.email).toEqual('user@user.com')
  })
  it('sets correct password data', () => {
    const wrapper = shallow(Register)
    wrapper.setData({ password: 'magicPassword123' })
    expect(wrapper.vm.password).toEqual('magicPassword123')
  })
  it('sets correct error data', () => {
    const wrapper = shallow(Register)
    wrapper.setData({ error: 'No email provided' })
    expect(wrapper.vm.error).toEqual('No email provided')
  })
  it('calls register method when clicking register button', () => {
    const wrapper = shallow(Register)
    const clickMethodStub = sinon.stub()
    const registerBtn = wrapper.find('#register-btn')
    wrapper.setMethods({ register: clickMethodStub })
    registerBtn.trigger('click')
    expect(clickMethodStub.called).toBe(true)
  })
  it('sets email and password prop after axios request is made', async () => {
    const wrapper = shallow(Register)
    wrapper.setData({
      email: 'user@user.com',
      password: 'magicPassword123'
    })
    const registerBtn = wrapper.find('#register-btn')
    registerBtn.trigger('click')
    await flushPromises()
    expect(wrapper.vm.email).toEqual('user@user.com')
    expect(wrapper.vm.password).toEqual('magicPassword123')
  })
  it('calls store action "setUser" when email and password are set', async () => {
    const wrapper = shallow(Register, { store, localVue })
    wrapper.setData({
      email: 'user@user.com',
      password: 'magicPassword123'
    })
    actions.setUser()
    expect(actions.setUser.called).toBe(true)
  })
  it('calls store action "setToken" when email and password are set', async () => {
    const wrapper = shallow(Register, { store, localVue })
    wrapper.setData({
      email: 'user@user.com',
      password: 'magicPassword123'
    })
    actions.setToken()
    expect(actions.setToken.called).toBe(true)
  })
  it('should return error if no email is given', () => {
    moxios.uninstall()
    const wrapper = shallow(Register, { store, localVue })
    const registerBtn = wrapper.find('#register-btn')
    registerBtn.trigger('click')
    wrapper.vm.error = 'No email provided'
    expect(wrapper.vm.error).toEqual('No email provided')
  })
})
