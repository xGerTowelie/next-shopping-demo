import { warn } from "console"

type TeamMember = {
    name: string
    description: string
    image: string
    role: string
}
export default function Team() {
    const team: TeamMember[] = [
        {
            name: "Name 1",
            description: "Description 1",
            image: "https://via.placeholder.com/150",
            role: "Role 1"
        },
        {
            name: "Name 2",
            description: "Description 2",
            image: "https://via.placeholder.com/150",
            role: "Role 2"
        },
        {
            name: "Name 3",
            description: "Description 3",
            image: "https://via.placeholder.com/150",
            role: "Role 3"
        }
    ]
    return (
        <>
            <h1 className="text-3xl font-bold py-4">Team</h1>
            <div className="flex flex-row gap-4">
                <ul>
                    {team.map((member) => (
                        <a
                            className="flex flex-col gap-2 p-4 border-gray-300 rounded shadow"
                            href={`/team/${member.name}`}
                        >
                            <h2 className="text-xl font-bold">{member.name}</h2>
                            <img src={member.image} alt={member.name} />
                            <p>{member.description}</p>
                            <p>{member.role}</p>
                        </a>
                    ))}
                </ul>
            </div>
        </>
    )
}
