import React from 'react'

const UserDropdown = () => {
  return (
    <div className="flex space-x-2">
      <div className="flex-1 flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full">
          <p className="text-2xl font-bold text-white">W</p>
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <h1 className="font-bold text-md">Jemery Zucker</h1>
        <p className="text-sm font-light">Traveler</p>
      </div>
      <div className="flex items-center justify-center">
        <span className="material-icons">expand_more</span>
      </div>
    </div>
  )
}

const Calendar = () => {
  const dates = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
  let days = Array(30)
    .fill(0)
    .map((v, index) => index + 1)
  days = days.concat([1, 2, 3, 4, 5])
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">June 2021</h1>
        <div className="flex gap-1">
          <div className="flex items-center justify-center w-10 h-10 bg-transparent border-2 border-gray-200 rounded-full">
            <span className="material-icons">chevron_left</span>
          </div>
          <div className="flex items-center justify-center w-10 h-10 bg-transparent border-2 border-gray-200 rounded-full">
            <span className="material-icons">chevron_right</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 grid-rows-6 mt-2">
        {dates.map((date, index) => (
          <div className="col-span-1 p-1.5 text-center font-bold" key={index}>
            {date}
          </div>
        ))}
        {days.map((day, index) => (
          <div className="col-span-1 p-1.5 text-center" key={index}>
            {day}
          </div>
        ))}
      </div>
    </>
  )
}

const MySchedule = () => {
  const schedules = [
    { title: 'Crooked Forest', start: '16 June', end: '20 June' },
    { title: 'Gioc Waterfall', start: '16 June', end: '20 June' },
    { title: 'Tartaruga Camp', start: '16 June', end: '20 June' },
  ]
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">My Schedule</h1>
        <span className="material-icons">more_horiz</span>
      </div>
      <div className="flex flex-col mt-8">
        {schedules.map((schedule, index) => (
          <div key={index} className="flex px-2 py-4 mb-6 space-x-2 border-2 border-gray-500 rounded-2xl">
            <img className="w-16 h-16 rounded-2xl" src="http://placekitten.com/g/200/300" />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">{schedule.title}</h1>
              <p className="font-light">
                {schedule.start} - {schedule.end}
              </p>
              <div className="flex space-x-1">
                <div className="flex space-x-0.5">
                  <div className="flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                    <p className="text-sm text-white">M</p>
                  </div>

                  <div className="flex items-center justify-center w-6 h-6 bg-red-500 rounded-full">
                    <p className="text-sm text-white">M</p>
                  </div>

                  <div className="flex items-center justify-center w-6 h-6 bg-purple-500 rounded-full">
                    <p className="text-sm text-white">M</p>
                  </div>
                </div>
                <div className="flex">
                  <p className="font-bold"> +2</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

const RightSideBar = () => {
  return (
    <>
      <UserDropdown />
      <div className="mt-16">
        <Calendar />
      </div>
      <div className="mt-6">
        <MySchedule />
      </div>
    </>
  )
}

export default RightSideBar
