import { mount } from '@vue/test-utils'
import TodoItem from '../components/TodoItem.vue'

describe('TodoItem.vue', () => {
  it('emits "toggle-complete" event when the todo text is clicked', async () => {
    const todo = { text: 'Test To-Do', completed: false }
    const wrapper = mount(TodoItem, {
      props: { todo, index: 0 }
    })

    await wrapper.find('span').trigger('click')

    expect(wrapper.emitted()['toggle-complete']).toBeTruthy()
    expect(wrapper.emitted()['toggle-complete'][0]).toEqual([todo])
  })

  it('emits "remove-todo" event when the remove button is clicked', async () => {
    const wrapper = mount(TodoItem, {
      props: { todo: { text: 'Test To-Do', completed: false }, index: 0 }
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted()['remove-todo']).toBeTruthy()
    expect(wrapper.emitted()['remove-todo'][0]).toEqual([0])
  })
})