import { mount } from "@vue/test-utils";
import TodoInput from "../components/TodoInput.vue";

describe("TodoInput.vue", () => {
  it('emits "add-todo" event with input value when Enter is pressed', async () => {
    const wrapper = mount(TodoInput);
    const input = wrapper.find("input");

    await input.setValue("New To-Do");
    await input.trigger("keyup.enter");

    expect(wrapper.emitted()["add-todo"]).toBeTruthy();
    expect(wrapper.emitted()["add-todo"][0]).toEqual(["New To-Do"]);
  });

  it("clears the input after adding a todo", async () => {
    const wrapper = mount(TodoInput);
    const input = wrapper.find("input");

    await input.setValue("New To-Do");
    await input.trigger("keyup.enter");

    expect(input.element.value).toBe("");
  });
});
