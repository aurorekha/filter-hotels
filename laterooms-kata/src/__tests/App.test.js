import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import Results from '../components/Results';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should contain the <Results /> component', () => {
    expect(wrapper.containsMatchingElement(<Results />)).toEqual(true);
  });

  it('should contain the <FilterSelect /> component', () => {
    expect(wrapper.find('FilterSelect').length).toEqual(1);
  });
});
