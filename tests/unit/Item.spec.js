import { mount } from '@vue/test-utils'
import List from "../../src/components/List";
import Item from "../../src/models/Item";

describe('Item', () => {

    it('When an item in the list is marked as done, item is updated correctly', () => {
        const wrapper = mount(List, {
            propsData: {
                list: [new Item("item")]
            }
        })
        expect(wrapper.vm.$props.toString()).toMatch({"list": [{"done": false, "title": "item"}]}.toString())
        //wrapper.find('.list-item:nth-of-type(1) span').trigger('click');
        wrapper.find('span').trigger('click');
        expect(wrapper.vm.$props.toString()).toMatch({"list": [{"done": true, "title": "item"}]}.toString())
    })
})