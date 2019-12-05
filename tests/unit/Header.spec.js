import { mount } from '@vue/test-utils'
import Header from "../../src/components/Header.vue";

describe('Header', () => {

    it('Checks that Header displays the correct date.', () => {
        const wrapper = mount(Header);

        let monthNames = [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC"
        ];

        let now = new Date();
        let year = now.getFullYear();
        let month = monthNames[now.getMonth()];
        let weekday = now.getDay();
        let date = now.getDate();

        expect(wrapper.html()).toContain(year);
        expect(wrapper.html()).toContain(month);
        expect(wrapper.html()).toContain(weekday);
        expect(wrapper.html()).toContain(date)
    })
});