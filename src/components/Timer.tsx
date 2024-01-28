import Container from './UI/Container'
import { type Timer as TimerProps } from '../store/timers-context'
import { useEffect, useState } from 'react'


export default function Timer({ name, duration }: TimerProps) {
    const [remainingTime, setRemainingTime] = useState(duration * 1000)

    useEffect(() => { 
        setInterval(function () {
            setRemainingTime(prevTime => prevTime - 50)
         }, 50)
    }, [])

    return (
        <Container as="article">
            <h2>{name}</h2>
            <p><progress max={ duration * 1000} value={remainingTime } /></p>
        </Container>
    )
}