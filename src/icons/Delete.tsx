import React, { ReactElement } from 'react'

type DeleteIconProps = {
  className?: string
}

export const DeleteIcon = ({ className }: DeleteIconProps): ReactElement => {
  return (
    <svg
      className={className}
      width="18"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.458 18.142c.06.67.61 1.158 1.28 1.158H14.26c.67 0 1.22-.508 1.28-1.158L16.72 5.79H1.28l1.179 12.352zM16.72 1.93h-5.14v-.65C11.58.569 11.011 0 10.3 0H7.72C7.01 0 6.44.569 6.44 1.28v.65H1.28C.569 1.93 0 2.499 0 3.21c0 .711.569 1.28 1.28 1.28h15.44c.711 0 1.28-.569 1.28-1.28 0-.711-.569-1.28-1.28-1.28z"
        fill="#fff"
      />
    </svg>
  )
}
