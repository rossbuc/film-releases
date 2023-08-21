import Release from './Release'

function ReleaseList ({releases}) {
    const releaseItems = releases.map((release) => <Release release={release} key={release.id}/>)

    return (
        <ul>
            {releaseItems}
        </ul>
    )
}

export default ReleaseList