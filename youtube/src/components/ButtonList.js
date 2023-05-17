import React from 'react'
import Button from './Button'

const listOfButtons = ["All", "Live", "News", "Songs", "Movies", "Comedy", "Adventures", "Gaming", "Tech", "AI", "JavaScript", "React"];

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Live"/>
      <Button name="News"/>
      <Button name="Songs"/>
      <Button name="Movies"/>
      <Button name="Comedy"/>
      <Button name="Adventures"/>
      <Button name="Gaming"/>
      <Button name="AI"/>
      <Button name="Tech"/>
      <Button name="JavaScript"/>
      <Button name="React"/>
      <Button name="Node.js"/>
    </div>
  )
}

export default ButtonList
