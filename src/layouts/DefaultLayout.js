import Navi from "../components/navi/Navi"
import Footer from "../components/footer/Footer";

const DefaultLayout = ({children}) => {
    return(
        <>
            <Navi></Navi>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </>
    )
}
export default DefaultLayout;