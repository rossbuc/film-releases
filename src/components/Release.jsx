
function Release ({release}) {
    return (
        <li>
            <a href={release.url} className="list-item">{release.name}</a>
        </li>
    )
}

export default Release