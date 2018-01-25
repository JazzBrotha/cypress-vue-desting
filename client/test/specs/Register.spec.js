
import { shallow } from '@vue/test-utils'
import Register from '../../src/components/Register.vue'

describe('Register.vue', () => {
  let wrapper = shallow(Register)
  const emailInputField = wrapper.find('#email-input')
  const passwordInputField = wrapper.find('#password-input')
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
})
