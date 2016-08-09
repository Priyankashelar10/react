import expect from 'expect';
import React from 'react';
import {render} from 'enzyme';
import {DashboardView} from '../dashboard.view';

function setup() {
  const props = {
  };

  return render(<DashboardView {...props}/>);
}

describe('Dashboard Component Tests', () => {
  it('renders Dashboard component', () => {
    const wrapper = setup();
    expect(wrapper.find('h1').first().text()).toEqual('Dashboarddashboard & statistics');
  });
});