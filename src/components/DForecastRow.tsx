import DailyForcastWidget from "./DailyForcastWidget"


const DForecastRow = ({ data }: { data: any[] }) => {
  return (
    <div className="flex flex-row overflow-x-auto p-4 gap-4">
      {data.map((item, index) => (
        <DailyForcastWidget key={index} data={item} />
      ))}
    </div>
  )
}

export default DForecastRow