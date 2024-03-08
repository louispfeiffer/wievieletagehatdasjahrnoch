import * as React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

const BlogPage = () => {
    return (
        <body>
            <Navbar></Navbar>

            <div className="flex justify-center items-center">
                <div className="text-black h-60 flex justify-center items-center">
                    <div className="w-1/2 mt-5">
                        <p className="text-xl">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et
                            justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </body >
    )
}

export default BlogPage

export const Head = () => <title>Blog Page</title>
