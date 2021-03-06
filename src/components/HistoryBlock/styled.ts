import styled from 'styled-components'
import Image from 'next/image'
import Shuriken from '@/components/Shuriken'
import Block from '@/components/Block'
import { rem } from '@/utils'

export const Root = styled(Block).attrs({ color: 'grey' })`
  position: relative;
  display: flex;
  padding-bottom: ${rem(102)};
  padding-top: ${rem(155)};
  padding-left: ${rem(183)};
  padding-right: ${rem(183)};
`

export const Photo = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 70%;
  width: 100%;
`

export const PhotoImage = styled(Image).attrs({
  src: '/images/fyzu-photo.png',
  layout: 'fill',
})`
  object-fit: contain;
  object-position: right;
`

export const HistoryWrapper = styled.ul`
  position: relative;
  margin: 0;
  padding: 0 0 1rem;

  &::after {
    content: '';
    position: absolute;
    width: 0.22rem;
    top: 0.4rem;
    left: 14.3rem;
    bottom: 0;
    background-color: ${(props) => props.theme.color.blue};
  }
`

export const HistoryItem = styled.li<{ position: 'left' | 'right' }>`
  position: relative;
  list-style: none;
  margin-right: ${(props) => (props.position === 'left' ? 16.2 : 0)}rem;
  margin-left: ${(props) => (props.position === 'right' ? 15.2 : 0)}rem;
  width: ${(props) => (props.position === 'left' ? 13.6 : 14.5)}rem;
  text-align: ${(props) => (props.position === 'left' ? 'right' : 'left')};
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    height: 0.22rem;
    width: 0.5rem;
    background-color: ${(props) => props.theme.color.blue};
    left: ${(props) => (props.position === 'left' ? '100%' : 'auto')};
    right: ${(props) => (props.position === 'right' ? '100%' : 'auto')};
    margin-left: ${(props) => (props.position === 'left' ? '0.25rem' : 'auto')};
    margin-right: ${(props) => (props.position === 'right' ? '0.25rem' : 'auto')};
    top: 0.4rem;
  }
`

export const Title = styled.h4`
  font-size: 1rem;
  color: ${(props) => props.theme.color.blue};
  margin: 0;
`

export const Description = styled.p`
  font-size: 0.72rem;
  letter-spacing: 0;
  margin: 0;
  margin-top: 0.44rem;

  b {
    color: ${(props) => props.theme.color.blue};
  }
`

export const Shuriken1 = styled(Shuriken).attrs({
  size: rem(35),
  rotate: -30,
})`
  position: absolute;
  bottom: ${rem(212)};
  left: ${rem(134)};
`

export const Shuriken2 = styled(Shuriken).attrs({
  size: rem(21),
  rotate: 0,
})`
  position: absolute;
  top: ${rem(179)};
  right: ${rem(622)};
`
