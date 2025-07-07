import HourlyForcastWidget from "./HourlyForcastWidget";
import DailyForcastWidget from "./DailyForcastWidget"

type ForcastProps = {
  title: string;
  type: string;
  data: any[];
}

const Forcast = ({title, type, data}: ForcastProps) => {
  return (
    <div className="Forcast">
      <div className="forcast_container">
        <h3>{title}</h3>
        <div className="widget_conrainer">
          {Array.isArray(data) && data.map((singleData: any, index: number) => (
            <div className="widget" key={index}>
              {type === 'hourly' ? (
                <HourlyForcastWidget data={singleData} />
              ) : (
                <DailyForcastWidget data={singleData} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Forcast