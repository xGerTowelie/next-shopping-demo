type CardProps = {
    children: React.ReactNode
}

export default function Card(props: CardProps) {
    return (
        <div className="flex justify-center items-center w-60 h-32 bg-white rounded-lg p-4 shadow">
            {props.children}
        </div>
    )
}
