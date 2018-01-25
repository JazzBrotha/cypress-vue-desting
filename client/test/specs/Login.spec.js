import { shallow } from '@vue/test-utils'
import Login from '../../src/components/Login.vue'
import sinon from 'sinon'

describe('Login.vue', () => {
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
})
