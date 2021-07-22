import DestinationCard from './components/DestinationCard'
import GalleryCard from './components/Gallery/GalleryCard'
import Sidebar from './components/Sidebar'
import { AnimatePresence, motion } from 'framer-motion'

import { galleryMocks } from './lib/gallery'
import { useState } from 'react'

export default function App() {
  const [gallerys, setGallerys] = useState(galleryMocks())
  const [onReload, setOnReload] = useState(false)

  const reload = () => {
    setGallerys([])
    setTimeout(() => setGallerys(galleryMocks()), 1000)
  }
  return (
    <div className="grid grid-cols-6 gap-2 p-4">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-5 px-4 py-5 bg-gray-100 rounded-2xl">
        <div className="flex items-start">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-700">Hello, My!</h1>
            <p className="font-light text-gray-700">Welcome back!!</p>
          </div>
          <div className="flex items-end justify-end flex-1 space-x-5">
            <input
              type="text"
              placeholder="Search"
              className="px-6 py-2 transition border-none rounded-full shadow-lg outline-none hover:shadow-xl"
            />
            <button
              className="flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full shadow-lg"
              onClick={(_) => reload()}
            >
              <span className="text-black transition duration-500 transform text-md material-icons-outlined hover:rotate-180">
                refresh
              </span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-12 lg:grid-cols-4">
          <AnimatePresence>
            {gallerys.map((gallery, index) => (
              <motion.div
                className="col-span-1"
                key={index}
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                exit={{ x: 2000 }}
                transition={{ type: 'spring', stiffness: 50 }}
              >
                <GalleryCard img={gallery.image} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-5">
          <div className="col-span-2">
            <DestinationCard />
          </div>
          <div className="col-span-1">
            <div className="flex flex-col h-full bg-gray-900 shadow-md rounded-3xl">
              <div className="flex items-center justify-center flex-1">
                <img className="w-48 h-48" src="/images/character.svg" alt="character" />
              </div>
              <div className="flex flex-col items-center justify-center flex-1 text-center text-white">
                <h1 className="text-2xl font-bold ">Let's Explore</h1>
                <p className="mb-8 font-light">Get special offers & news</p>
                <button className="w-3/4 py-4 text-xl font-bold bg-green-500 rounded-2xl">Join now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
