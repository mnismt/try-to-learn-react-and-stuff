import { randomImage } from '../lib/gallery'

const Destination = () => {
  return (
    <div className="flex mt-2 mb-4 space-x-2 justify-between">
      <div className="flex items-start justify-between py-2">
        <div className="flex-shrink">
          <img className="object-cover w-24 h-24 rounded-2xl" src={randomImage()} alt="Firewatch Photo" />
        </div>
        <div className="flex flex-col px-4 py-4 space-y-1">
          <h1 className="text-xl font-bold">Redwood Forest</h1>
          <div className="flex space-x-2">
            <div className="flex flex-1 space-x-1">
              <span className="text-md material-icons-outlined">place</span>
              <p className="text-sm text-light">Firewatch</p>
            </div>
            <div className="flex flex-1 space-x-1">
              <span className="text-md material-icons-outlined">star</span>
              <p className="text-sm text-light">Firewatch</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <h1 className="text-2xl font-bold">
          $150<span className="text-xl font-light">/day</span>
        </h1>
      </div>
    </div>
  )
}

const DestinationCard = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-2xl">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Best Destination</h1>
          <p className="mb-4 font-light">100 Destination found</p>
        </div>
        <div>
          <button className="flex justify-between px-8 py-2 bg-transparent border-2 border-gray-800 rounded-2xl">
            <span className="text-gray-800 material-icons-outlined">tune</span>
            <p className="text-gray-800">Filter</p>
          </button>
        </div>
      </div>
      <Destination />
      <Destination />
      <Destination />
    </div>
  )
}

export default DestinationCard
