import { useDispatch } from "react-redux"
import { nextPage, prevPage } from "../redux/pageSlice"

const NavigationButtons = ({
  setDirection,
}: {
  setDirection: (dir: "left" | "right") => void
}) => {
  const dispatch = useDispatch()

  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={() => {
          setDirection("left")
          dispatch(prevPage())
        }}
        className="px-4 py-2 bg-gray-300 rounded"
      >
        ← Previous
      </button>
      <button
        onClick={() => {
          setDirection("right")
          dispatch(nextPage())
        }}
        className="px-4 py-2 bg-gray-300 rounded"
      >
        Next →
      </button>
    </div>
  )
}

export default NavigationButtons
