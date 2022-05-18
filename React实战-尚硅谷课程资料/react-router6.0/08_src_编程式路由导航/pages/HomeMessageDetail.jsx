import React from 'react'
import { useLocation } from 'react-router-dom';

export default function HomeMessageDetail(props) {
  const { state: {id, title, content} } = useLocation()
  return (
    <ul>
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>
    </ul>
  )
}
