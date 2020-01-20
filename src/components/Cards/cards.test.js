import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Cards from './index'

test('count the number of cards on click', () => {
    const { getByTestId, getByText, screen } = render(<Cards />)

    // query* functions will return the element or null if it cannot be found
    // get* functions will return the element or throw an error if it cannot be found
    //   expect(queryByText(testMessage)).toBeNull()

    // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
    fireEvent.click(getByTestId("custom-id-2"));

    fireEvent.click(getByTestId("add-button"));
    fireEvent.click(getByTestId("add-button"));

    // .toBeInTheDocument() is an assertion that comes from jest-dom
    // otherwise you could use .toBeDefined()
    expect(getByTestId("custom-id").children.length).toBe(5);
})