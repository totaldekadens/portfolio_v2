import React, {
  forwardRef,
  Ref,
  ForwardRefExoticComponent,
  RefAttributes,
  HTMLAttributes,
  CSSProperties,
} from 'react'
import clsx from 'clsx'

interface OuterContainerProps {
  className?: string
  children?: React.ReactNode
}

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, ...props }: OuterContainerProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto lg:px-8">{children}</div>
    </div>
  )
})

interface InnerContainerProps {
  className?: string
  children?: React.ReactNode
}

const InnerContainer = forwardRef(function InnerContainer(
  { className, children, ...props }: InnerContainerProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8', className)}
      {...props}
    >
      <div className="mx-auto">{children}</div>
    </div>
  )
})

interface ContainerProps {
  className?: string
  style?: HTMLAttributes<HTMLDivElement>
  children?: React.ReactNode
}

interface ContainerComponent
  extends ForwardRefExoticComponent<
    ContainerProps & RefAttributes<HTMLDivElement>
  > {
  Outer: typeof OuterContainer
  Inner: typeof InnerContainer
}

const Container = forwardRef(function Container(
  { children, ...props }: ContainerProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
}) as ContainerComponent

Container.Outer = OuterContainer
Container.Inner = InnerContainer

export { Container }
