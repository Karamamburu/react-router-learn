import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../Header"
import Paragraph from "../Paragraph"

interface DataProps {
    id: number,
    title: string,
    body: string,
    userId: number
  }

export default function FetchPage () {
    const [data, setData] = useState<DataProps | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<DataProps>('https://jsonplaceholder.typicode.com/posts/2')
                setData(response.data)
                setIsLoading(false)
            } catch (error) {
                console.log('Ошибка при запросе данных', error);
            } finally {
                console.log('done!')
            }
        }
        fetchData()
    }, [])

    if (isLoading) {
        return (
            <Paragraph text={'Loading data'} />
        )
    }
    
    return (
        <div>
            {data ? (
                <div>
                    <Header text={data.title} />
                    <Paragraph text={data.body} />
                </div>
            ) : (
                <Paragraph text={'Loading data'} />
            )

            }
            
        </div>
    )
}