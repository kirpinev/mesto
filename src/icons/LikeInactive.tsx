import React, { ReactElement } from 'react'

type LikeInactiveIconProps = {
  className?: string
}

export const LikeInactiveIcon = ({
  className
}: LikeInactiveIconProps): ReactElement => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 87.7">
    <path d="M91.5 45.1c10.1-10.1 10.1-26.5 0-36.5C81.4-1.5 65-1.5 54.9 8.6l-4.9 5-4.9-4.9C35-1.5 18.6-1.5 8.6 8.6 3.7 13.5 1.1 20 1.1 26.9s2.7 13.4 7.5 18.3L50 86.6l41.5-41.5zm-84-18.2c0-5.2 2-10 5.7-13.6 3.8-3.8 8.7-5.7 13.6-5.7s9.8 1.9 13.6 5.7l9.6 9.5 9.6-9.6c7.5-7.5 19.8-7.5 27.2 0 3.6 3.6 5.7 8.4 5.7 13.6s-2 10-5.7 13.6L50 77.3 13.2 40.5C9.6 36.8 7.5 32 7.5 26.9z" />
  </svg>
)
