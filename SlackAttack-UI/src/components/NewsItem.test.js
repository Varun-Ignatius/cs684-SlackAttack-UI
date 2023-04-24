import React from 'react'
import { render, screen } from '@testing-library/react'
import NewsItem from './NewsItem'

describe('NewsItem', () => {
  const testProps = {
    title: 'Test Title',
    description: 'Test Description',
    url: 'https://testurl.com',
    urlToImage: 'https://testimageurl.com/image.jpg'
  }

  it('renders correctly', () => {
    render(<NewsItem {...testProps} />)

    expect(screen.getByRole('heading', { name: 'Test Title' })).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Test Title' })).toHaveAttribute('href', 'https://testurl.com')
    expect(screen.getByAltText('https://testimageurl.com/image.jpg')).toHaveAttribute('src', 'https://testimageurl.com/image.jpg')
  })
})
