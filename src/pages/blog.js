import * as React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

const BlogPage = () => {
    return (
        <body>
            <Navbar></Navbar>
            <Footer></Footer>
        </body>
    )
}

export default BlogPage

export const Head = () => <title>Blog</title>