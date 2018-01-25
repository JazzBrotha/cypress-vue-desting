import { shallow } from '@vue/test-utils'
import Login from '../../src/components/Login.vue'
import sinon from 'sinon'

describe('Login.vue', () => {
  let wrapper = shallow(Login)
  const emailInputField = wrapper.find('#email-input')
  const passwordInputField = wrapper.find('#password-input')
  const loginBtn = wrapper.find('#login-btn')
  it('contains email v-text-field', () => {
    expect(emailInputField.is('v-text-field')).toBe(true)
  })
  it('contains password v-text-field', () => {
    expect(passwordInputField.is('v-text-field')).toBe(true)
  })
  it('email data matches email v-text-field value', () => {
    wrapper.setData({ email: '' })
    expect(emailInputField.text()).toEqual(wrapper.vm.email)
  })
  it('password data matches password v-text-field value', () => {
    wrapper.setData({ password: '' })
    expect(passwordInputField.text()).toEqual(wrapper.vm.password)
  })
  it('calls login method when clicking login button', () => {
    const stubMethod = sinon.stub()
    wrapper.setMethods({ login: stubMethod })
    loginBtn.trigger('click')
    expect(stubMethod.called).toBe(true)
  })
})
