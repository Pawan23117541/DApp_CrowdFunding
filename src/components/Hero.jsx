import { setGlobalState, useGlobalState } from '../store'
const Hero = () => {
  const [stats] = useGlobalState('stats')

  return (
    <div className="text-center bg-white text-gray-800 py-24 px-6">
      <h1
        className="text-3xl md:text-4xl xl:text-5xl font-bold
      tracking-tight mb-12"
      >
        <span className="capitalize">Empower Dreams, One Contribution at a Time – Join Our Journey of Collective Innovation on this </span>
        <br />
        <span className="uppercase text-orange-600">CrowdFunding Platform</span>
      </h1>
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-orange-600
        text-white font-medium text-xs leading-tight uppercase
        rounded-full shadow-md hover:bg-orange-700"
          onClick={() => setGlobalState('createModal', 'scale-100')}
        >
          Add Campaign
        </button>

      </div>

      <div className="flex justify-center items-center mt-10">
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-orange-900
            leading-5"
          >
            {stats?.totalProjects || 0}
          </span>
          <span>Campaigns</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-orange-900
            leading-5"
          >
            {stats?.totalBacking || 0}
          </span>
          <span>Fundings</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-orange-900
            leading-5"
          >
            {stats?.totalDonations || 0} ETH
          </span>
          <span>Donated</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
