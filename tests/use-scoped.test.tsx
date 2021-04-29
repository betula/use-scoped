import React, { useState } from 'react'
import { mount } from 'enzyme'
import { useScoped, Scope } from '../src'

test('should work', () => {
  const useStore = () => useState(0)

  const A = () => {
    const [ a ] = useScoped(useStore)
    return <i>{a}</i>
  }
  const B = () => {
    const [ , set ] = useScoped(useStore)
    return <button onClick={() => set(x => x + 1)} />
  }

  const el = mount(<Scope><A /><B /></Scope>)
  expect(el.find('i').text()).toBe('0')
  // el.find('button').simulate('click')
  // expect(el.find('i').text()).toBe('1')
  // el.find('button').simulate('click')
  // expect(el.find('i').text()).toBe('2')
});
