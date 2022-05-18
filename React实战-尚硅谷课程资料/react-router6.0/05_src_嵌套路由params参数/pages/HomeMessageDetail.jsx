import React from 'react'
import { useParams } from 'react-router-dom';

export default function HomeMessageDetail(props) {
  const { id, title, content } = useParams()
  return (
    <ul>
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>
    </ul>
  )
}
