import { useQuery } from "react-query";
import { fetchCoinPrice } from "../api";
import ApexCharts from 'react-apexcharts'

interface ChartProps {
    coinId: string;
}
interface IcoinPrice {
    time_close: number;
    time_open: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}

const Chart = ({ coinId }: ChartProps) => {
    const { isLoading, data } = useQuery<IcoinPrice[]>('coinPrice', () => fetchCoinPrice(coinId))

    return (
        <div>
            <h1>Candle Stick</h1>
            {isLoading ? ("Loading...") : (

                <ApexCharts
                    type="candlestick"
                    
                    series={[
                        {
                            data: data?.map((price) => [
                                new Date(price.time_open).getTime(), 
                                price.open, 
                                price.high, 
                                price.low, 
                                price.close,
                                ]  ) as any
                        }
                    ]}

                    options={
                        {
                            chart: {
                                toolbar: { show: false }
                            },
                            xaxis: {
                                labels: {
                                    show: false
                                },
                                tooltip: {
                                    enabled: false
                                },
                                axisBorder: {
                                    show: false
                                },
                                axisTicks: {
                                    show: false
                                }
                            },
                            yaxis: {
                                show: false,
                                labels: {
                                    show: false
                                },
                                tooltip: {
                                    enabled: false
                                }
                            }
                        }
                    }
                />
            )
            }
        </div>
    )
}


export default Chart