import React, { ReactElement } from 'react'

type CloseIconProps = {
  className?: string
}

export const CloseIcon = ({ className }: CloseIconProps): ReactElement => (
  <svg
    className={className}
    width="28"
    height="27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke="#fff"
      strokeWidth="3"
      d="M1.939 25.939l24-24M2.061 1.939l24 24"
    />
  </svg>
)
