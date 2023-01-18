interface habitsProps {
    completed: number
}

export function Habit(props: habitsProps) {
    return (
        <div className="bg-slate-600">{props.completed}</div>
    )
}