import { mount } from '@vue/test-utils'
import Footer from "../../src/components/Footer.vue";

describe('Footer', () => {
    it('When "+" button is clicked in Footer component "open" property in Footer component changes to true', () => {
        const wrapper = mount(Footer);
        expect(wrapper.vm.open).toBe(false);
        wrapper.find('span').trigger('click');
        expect(wrapper.vm.open).toBe(true);
    })
})
