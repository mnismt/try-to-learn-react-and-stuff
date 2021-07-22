import { motion } from 'framer-motion'

const GalleryCard = ({ img }: any) => {
  return (
    <>
      <motion.div
        className="flex flex-col items-start justify-end w-full h-64 rounded-lg shadow-lg"
        style={{
          backgroundImage: `url("${img}")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        whileHover={{
          y: -50,
          transition: { type: 'spring' },
        }}
      >
        <div className="relative z-50 flex flex-col justify-between w-full p-2 space-y-2">
          <p className="ml-1 text-lg font-bold text-white">Firewatch</p>
          <div className="flex space-x-2">
            <div className="flex flex-1">
              <span className="text-white text-md material-icons">place</span>
              <p className="text-sm text-white text-light">Firewatch</p>
            </div>
            <div className="flex flex-1">
              <span className="text-white text-md material-icons">star</span>
              <span className="text-white text-md material-icons">star</span>
              <span className="text-white text-md material-icons">star</span>
              <span className="text-white text-md material-icons">star</span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default GalleryCard
