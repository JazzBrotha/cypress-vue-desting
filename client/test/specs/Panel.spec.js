import { shallow } from '@vue/test-utils'
import Panel from '../../src/components/globals/Panel.vue'

describe('Panel.vue', () => {
  it('contains title in props', () => {
    const wrapper = shallow(Panel)
    expect(wrapper.props()).toHaveProperty('title')
  })
})
