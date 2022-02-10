import "./main.scss"

export function Main(props){
    const {
        children
    } = props;
    return(
        <main>
            <div className="container">
                {children}
            </div>
        </main>
    )
}