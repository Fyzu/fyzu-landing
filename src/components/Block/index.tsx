import React from 'react'
import Image from 'next/image'
import { Root, Background, BackgroundImage, ColorBlue, ColorGrey, ColorMain } from './styled'

export interface IBlockProps {
  color?: 'blue' | 'grey' | 'main'
  className?: string
  children?: React.ReactNode
}

function Block({ color = 'main', className, children }: IBlockProps, ref: any) {
  return (
    <Root ref={ref} className={className}>
      <Background>
        <BackgroundImage isMain={color === 'main'}>
          <Image src="/images/background-texture.png" layout="fill" />
        </BackgroundImage>
        {color === 'grey' && <ColorGrey />}
        {color === 'blue' && <ColorBlue />}
        {color === 'main' && (
          <>
            <ColorGrey />
            <ColorMain />
          </>
        )}
      </Background>
      {children}
    </Root>
  )
}

export default React.forwardRef(Block)
