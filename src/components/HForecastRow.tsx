import HourlyForcastWidget from './HourlyForcastWidget';


const HForecastRow = ({ data }: { data: any[] }) => {
  return (
    <div className="flex flex-row overflow-x-auto p-4 gap-4">
      {data.map((item, index) => (
        <HourlyForcastWidget key={index} data={item} />
      ))}
    </div>
  )
}

export default HForecastRow