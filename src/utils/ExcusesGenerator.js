const excuses = [
  "the image was stolen by a UFO",
  "the image is currently being shown in a museum",
]

export default function () {
  const random = Math.floor(Math.random() * excuses.length)
  return excuses[random]
}
