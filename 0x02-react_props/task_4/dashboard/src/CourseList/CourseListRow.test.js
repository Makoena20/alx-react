import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('renders one cell with colspan = 2 when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" textSecondCell={null} />);
    const thElement = wrapper.find('th');
    expect(thElement).toHaveLength(1);
    expect(thElement.prop('colSpan')).toBe('2');
    expect(thElement.text()).toBe('Header');
  });

  it('renders two cells when isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" textSecondCell="Subheader" />);
    const thElements = wrapper.find('th');
    expect(thElements).toHaveLength(2);
    expect(thElements.at(0).text()).toBe('Header');
    expect(thElements.at(1).text()).toBe('Subheader');
  });

  it('renders two td elements when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Content" textSecondCell="Details" />);
    const tdElements = wrapper.find('td');
    expect(tdElements).toHaveLength(2);
    expect(tdElements.at(0).text()).toBe('Content');
    expect(tdElements.at(1).text()).toBe('Details');
  });
});

