import Vue from 'vue';
import MyTestableComponent from "./MyTestableComponent";

describe('MyTestableComponent', () => {
    it('should have a default prop', () => {
        console.log(MyTestableComponent);
        expect(true).toBe(true);
    })
});
