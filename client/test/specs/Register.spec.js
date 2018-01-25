
import { shallow } from '@vue/test-utils'
import Register from '../../src/components/Register.vue'

describe('Register', () => {
  const email = ''
  const wrapper = shallow(Register, {
    propsData: { email }
  })
  const emailProp = wrapper.email
  const emailInputField = wrapper.find('v-text-field')[0]
  it('renders props.msg when passed', () => {
    it("email input field should match component's email data", () => {
      expect(emailInputField.text()).to.equal(emailProp)
    })
  })
})
