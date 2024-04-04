import { ImSpinner2 } from "react-icons/im";

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      Loading <span className="pl-1"><ImSpinner2 className='spinner' /></span>
    </div>
  )
}