
import { shallow } from '@vue/test-utils'
import Register from '../../src/components/Register.vue'

describe('Register', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new Register'
    const wrapper = shallow(Register, {
      context: { props: { msg } }
    })
    expect(wrapper.text()).toBe(msg)
  })

  it('renders default Register if not passed a prop', () => {
    const defaultRegister = 'default Register'
    const wrapper = shallow(Register, {context: {}})
    expect(wrapper.text()).toBe(defaultRegister)
  })
})
