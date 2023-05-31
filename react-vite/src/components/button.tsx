type Props = {
    text: string
    clickFn: (txt: string) => void
}

export const Button = ({ text, clickFn }: Props) => {
    const handleClick = () => {
        clickFn('FRASE')
    }

    return (
        <button onClick={handleClick}>{ text }</button>
    )
}

