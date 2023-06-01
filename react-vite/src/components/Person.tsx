type Props = {
    data: {
        name: string
        age: string
    }
}

export const Person = ({ data }: Props) => {
    return (
        <li>
            {data.name} - {data.age} anos
        </li>
    )

}