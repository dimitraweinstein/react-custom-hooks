import React from 'react';
import { render, screen } from '@testing-library/react';
import HeyArnoldList from '../containers/HeyArnoldList';
import { MemoryRouter } from 'react-router-dom';

describe('Hey Arnold List Container', () => {
  it('renders a list of characters on the page', async () => {
    render(
      <MemoryRouter>
        <HeyArnoldList />
      </MemoryRouter>);
        
    screen.getByAltText('loading spinner');
    
    // eslint-disable-next-line max-len
    const ul = await screen.findByRole('list', { name: 'characters' }, { timeout: 2000 });
    expect(ul).not.toBeEmptyDOMElement();
    expect(ul).toMatchSnapshot();
    

  });
});

