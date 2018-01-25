
import { shallow } from '@vue/test-utils'
import Register from '../../src/components/Register.vue'
import sinon from 'sinon'

describe('Register.vue', () => {
  let wrapper = shallow(Register)
  const emailInputField = wrapper.find('#email-input')
  const passwordInputField = wrapper.find('#password-input')
  const registerBtn = wrapper.find('#register-btn')
  it('contains email v-text-field', () => {
    expect(emailInputField.is('v-text-field')).toBe(true)
  })
  it('contains password v-text-field', () => {
    expect(passwordInputField.is('v-text-field')).toBe(true)
  })
  it('contains register v-btn', () => {
    expect(registerBtn.is('v-btn')).toBe(true)
  })
  it('has empty string email prop', () => {
    expect(wrapper.vm.email).toEqual('')
  })
  it('has empty string password prop', () => {
    expect(wrapper.vm.email).toEqual('')
  })
  it('has empty string error prop', () => {
    expect(wrapper.vm.email).toEqual('')
  })
  it('sets correct value in email v-text-field', () => {
    emailInputField.value = 'user@user.com'
    expect(emailInputField.value).toEqual('user@user.com')
  })
  it('sets correct value in password v-text-field', () => {
    passwordInputField.value = 'magicPassword123'
    expect(passwordInputField.value).toEqual('magicPassword123')
  })
  it('sets correct email data', () => {
    wrapper.setProps({ email: 'user@user.com' })
    expect(wrapper.vm.email).toEqual('user@user.com')
  })
  it('sets correct password data', () => {
    wrapper.setProps({ password: 'magicPassword123' })
    expect(wrapper.vm.password).toEqual('magicPassword123')
  })
  it('sets correct error data', () => {
    wrapper.setProps({ error: 'No email provided' })
    expect(wrapper.vm.error).toEqual('No email provided')
  })
  it('calls register method when clicking register button', () => {
    const clickMethodStub = sinon.stub()
    wrapper.setMethods({ register: clickMethodStub })
    registerBtn.trigger('click')
    expect(clickMethodStub.called).toBe(true)
  })
})
