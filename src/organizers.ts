interface Organizer {
    name:string;
    password:string | number
    eventId: number
}

const organizers: Organizer[] = []

organizers.push({
    name: "LevelBox",
    password: `admin`,
    eventId: 1,
},
{
    name: "Ultra",
    password: "1234",
    eventId: 2
}
)


export const getOrganizer = (name: string, password: string | number) => {
    return organizers.find(oragnizer => {
        return oragnizer.name === name && oragnizer.password === password;
    })
}