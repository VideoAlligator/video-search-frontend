import React, { FC } from 'react'
import Typography from '@material-ui/core/Typography'

import { LabelText, TextLink } from './styled'

export enum TypographyStyles {
  primaryHeadline = 'PRIMARY_HEADLINE',
  sectionHeadline = 'SECTION_HEADLINE',
  bodyCopy = 'BODY_COPY',
  bodyCopyLarge = 'BODY_COPY_LARGE',
  labelCopy = 'LABEL_COPY',
  title = 'TITLE',
  textLink = 'TEXT_LINK',
}

interface TextProps {
  type?: string
  className?: string
  href?: string
}

export const Text: FC<TextProps> = ({ type, href, className, children }) => {
  switch (type) {
    case TypographyStyles.primaryHeadline:
      return (
        <Typography className={className} variant="subtitle1">
          {children}
        </Typography>
      )
    case TypographyStyles.sectionHeadline:
      return (
        <Typography className={className} variant="subtitle2">
          {children}
        </Typography>
      )
    case TypographyStyles.title:
      return (
        <Typography className={className} variant="h1">
          {children}
        </Typography>
      )
    case TypographyStyles.textLink:
      return (
        <TextLink className={className} href={href}>
          {children}
        </TextLink>
      )
    case TypographyStyles.labelCopy:
      return <LabelText className={className}>{children}</LabelText>
    case TypographyStyles.bodyCopyLarge:
      return (
        <Typography className={className} variant="body2">
          {children}
        </Typography>
      )
    default:
      return (
        <Typography className={className} variant="body1">
          {children}
        </Typography>
      )
  }
}
