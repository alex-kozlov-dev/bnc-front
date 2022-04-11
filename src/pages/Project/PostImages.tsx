import { PostFull } from 'src/api/types'
import { ComponentPropsWithoutRef, useMemo } from 'react'
import ImageGallery from 'react-image-gallery'

import 'react-image-gallery/styles/css/image-gallery.css'
import styled from 'styled-components'
import { theme } from 'src/theme'

type GalleryProps = ComponentPropsWithoutRef<typeof ImageGallery>

const Gallery = styled(({ className, ...props }: GalleryProps & { className?: string }) => <ImageGallery {...props} additionalClass={className} />)`
  .image-gallery-icon {
    filter: drop-shadow(0 0 5px #999);
    opacity: 0;
    .image-gallery-svg {
      transform: none;
      transform: scale(0.7);
    }

    &:hover {
      color: ${theme.colors.blue};
    }
  }

  .image-gallery-slide-wrapper:hover .image-gallery-icon {
    opacity: 1;
  }

  .image-gallery-thumbnail {
    border: none;
    cursor: pointer;
    &.active,
    &:hover,
    &:focus {
      border: none;
      ${theme.shadow[3]}
    }

    + .image-gallery-thumbnail {
      margin-left: ${theme.spacing.s};
    }
  }
  
  .image-gallery-thumbnails {
    padding: ${theme.spacing.l} 0;
  }
`

type Props = {
  post: PostFull;
}

export const PostImages = ({ post }: Props) => {
  const images = useMemo(() => [{ original: post.main_image, thumbnail: post.main_image_thumb }, ...post.images.map(({ src, thumb }) => ({ original: src, thumbnail: thumb }))], [post.images, post.main_image, post.main_image_thumb])

  return (
    <Gallery items={images} showPlayButton={false} />
  )
}
