interface Gallery {
  title: string
  image: string
}

export const galleryMocks = (): Gallery[] => {
  const galleryCards: Gallery[] = Array(4)
    .fill(null)
    .map((v) => ({
      title: 'Firewatch',
      image: randomImage(),
    }))
  return galleryCards
}

export const randomImage = (): string => {
  const index = Math.floor(Math.random() * 12) + 1
  return `/images/${index}.jpg`
}
