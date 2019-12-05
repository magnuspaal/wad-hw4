import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";

describe('List', () => {

    it('Checks that empty List component displays "Add your first Todo task"', () => {
        const wrapper = mount(List);
        expect(wrapper.html()).toContain('Add your first Todo task')
    })
});