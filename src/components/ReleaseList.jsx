

function ReleaseList ({releases}) {
    const releaseItems = releases.map((release) => {
        return (
            <li key={release.id}>
                <a href={release.url} className="list-item">{release.name}</a>
            </li>
        )
    })

    return (
        <ul>
            {releaseItems}
        </ul>
    )
}

export default ReleaseList