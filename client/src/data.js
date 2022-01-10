let areas = [
    {
        name: 'Bathroom',
        className: 'bathroom',
        img: '',
        key: 1
    },
    {
        name: 'Bedroom',
        className: 'bedroom',
        img: '',
        key: 2
    },
    {
        name: 'Dining Room',
        className: 'dining',
        img: '',
        key: 3
    },
    {
        name: 'Kitchen',
        className: 'kitchen',
        img: '',
        key: 4
    },
    {
        name: 'Living Room',
        className: 'living',
        img: '',
        key: 5
    },
    {
        name: 'Add New',
        className: 'add',
        img: '',
        key: 6
    },
]

let tasks = [
    {
        id: 1,
        area: 'Bathroom',
        title: 'Clean Sink',
        description: 'use cleaner and wipe down inside of sink',
        complete: Boolean
    },
    {
        id: 2,
        area: 'Bathroom',
        title: 'Scrub Toilet',
        description: 'use toilet brush and cleaner to scrub inside of toilet',
        complete: Boolean
    },
    {
        id: 3,
        area: 'Bathroom',
        title: 'Wipe Counters',
        description: 'use cleaner and wipe down all surfaces',
        complete: Boolean
    },
]

export function getAreas() {
    return areas
}

export function getTasks() {
    return tasks
}