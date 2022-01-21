function Detail(props) {
    console.log(props)
    return (
        <div style={{ backgroundColor: "skyblue", margin: 10 }}>
            <h1>I am {props.name} working at Nimaap Infotech</h1>
        </div>
    )
}

export default Detail