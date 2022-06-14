function Header({ title, created, currentViews }) {
    return(
        <div>
            <h1>
                {title}
            </h1>
            <div>
                {currentViews} views | Uploaded {created}
            </div>
            
        </div>  
    )
}
export default Header