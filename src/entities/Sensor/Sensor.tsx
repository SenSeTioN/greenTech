import { Text, useRandomTemp } from '@/shared'

export const Sensor = () => {
  const temp = useRandomTemp()

  return (
    <div>
      <Text tag='span' weight='regular'>
        {`${temp}°C`}
      </Text>
    </div>
  )
}
