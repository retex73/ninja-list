import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({ children }) => {
    return (

        <>

            <main>
                <section className="glass">


                    <Navbar />
                    <div className="copy">


                        {children}
                    </div>
                    <Footer />
                </section>
            </main>
            <div className="circle1"></div>
            <div className="circle2"></div>
        </>

    );
}

export default Layout;