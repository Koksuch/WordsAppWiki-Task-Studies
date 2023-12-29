import { useEffect, useRef } from "react"

const Loading = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")

    let animationFrameId

    const drawCircle = (x, y, radius) => {
      context.beginPath()
      context.arc(x, y, radius, 0, 2 * Math.PI)
      context.fillStyle = "#71717a"
      context.fill()
    }

    const animate = (timestamp, centerX, centerY, radius) => {
      context.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < 10; i++) {
        const angle =
          (timestamp / 3000) * (2 * Math.PI) + (i * (2 * Math.PI)) / 10
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        drawCircle(x, y, 10)
      }

      animationFrameId = requestAnimationFrame((nextTimestamp) =>
        animate(nextTimestamp, centerX, centerY, radius),
      )
    }

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 60

    animate(0, centerX, centerY, radius)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])
  return (
    <div className="flex w-full justify-center">
      <canvas ref={canvasRef} />
    </div>
  )
}

export default Loading
