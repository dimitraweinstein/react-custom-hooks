import React from 'react';
import { render, screen } from '@testing-library/react';
import HeyArnoldList from '../containers/HeyArnoldList';
import { MemoryRouter } from 'react-router-dom';

describe('Hey Arnold List Container', () => {
  it('renders a list of characters on the page', async () => {
    const component = render(
      <MemoryRouter>
        <HeyArnoldList />
      </MemoryRouter>
    );

    screen.getByAltText('loading spinner');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(component).toMatchSnapshot();

  });
});

